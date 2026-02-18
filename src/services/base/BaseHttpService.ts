// services/base/BaseHttpService.ts
import { ApiError } from "../../errors/ApiError";
import { RetryConfig } from "../../types/http.types";
import { z } from 'zod';
import { ValidationError } from "../../errors/ValidatatorError";
import { NetworkError } from "../../errors/NetworkError";
import { ConflictError } from "../../errors/ConflitsError";
import { DeleteError } from "../../errors/DeleteError";

export abstract class BaseHttpService {
  protected readonly baseUrl: string;
  protected readonly defaultHeaders: HeadersInit;
  protected readonly defaultTimeout: number;

  constructor(
    baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || '',
    defaultHeaders: HeadersInit = {},
    defaultTimeout: number = 10000
  ) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...defaultHeaders,
    };
    this.defaultTimeout = defaultTimeout;
  }

  protected async executeWithRetry<T>(
    operation: () => Promise<T>,
    retryConfig?: RetryConfig
  ): Promise<T> {
    if (!retryConfig) {
      return operation();
    }

    let lastError: Error;
    const { attempts, delay, exponentialBackoff = true } = retryConfig;

    for (let attempt = 1; attempt <= attempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        
        // Ne pas retry sur certains types d'erreurs
        if (error instanceof ValidationError || 
            (error instanceof ApiError && error.status < 500)) {
          throw error;
        }
        
        if (attempt === attempts) break;
        
        const waitTime = exponentialBackoff 
          ? delay * Math.pow(2, attempt - 1) 
          : delay;
        
        await this.delay(waitTime);
      }
    }

    throw lastError!;
  }

  protected async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  protected createAbortController(timeout: number): AbortController {
    const controller = new AbortController();
    
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);
    
    // Nettoyer le timeout si la requête se termine normalement
    const originalAbort = controller.abort.bind(controller);
    controller.abort = () => {
      clearTimeout(timeoutId);
      originalAbort();
    };
    
    return controller;
  }

  protected async handleResponse(response: Response, endpoint: string): Promise<unknown> {
    // Vérifier si la réponse est ok
    if (!response.ok) {
      let errorText: string;
      let errorData: unknown = null;

      try {
        const contentType = response.headers.get('Content-Type') || '';
        if (contentType.includes('application/json')) {
          errorData = await response.json();
          errorText = errorData?.message || errorData?.error || response.statusText;
        } else {
          errorText = await response.text();
        }
      } catch {
        errorText = response.statusText || 'Unknown error';
      }

      throw new ApiError(
        `HTTP ${response.status}: ${errorText}`,
        response.status,
        response.statusText,
        endpoint
      );
    }

    // Traiter la réponse selon son type
    const contentType = response.headers.get('Content-Type') || '';
    
    if (response.status === 204) {
      return null; // No Content
    }
    
    if (contentType.includes('application/json')) {
      try {
        return await response.json();
      } catch (error) {
        throw new NetworkError(
          'Invalid JSON response',
          error as Error,
          endpoint
        );
      }
    }
    
    if (contentType.includes('text/')) {
      return response.text();
    }

    // Pour les autres types de contenu, retourner en tant qu'ArrayBuffer
    return response.arrayBuffer();
  }

  protected async validateData<T>(
    schema: z.ZodSchema<T>,
    data: unknown,
    endpoint: string
  ): Promise<T> {
    try {
      return await schema.parseAsync(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new ValidationError(
          'Response validation failed',
          error.issues,
          endpoint
        );
      }
      throw error;
    }
  }

  protected shouldUseFallback(error: unknown): boolean {
    return error instanceof NetworkError || 
           (error instanceof ApiError && error.status >= 500) ||
           (error instanceof DOMException && error.name === 'AbortError');
  }

  protected processError(error: unknown, endpoint: string): Error {
    // Si c'est déjà une erreur typée, la retourner directement
    if (error instanceof ApiError || 
        error instanceof ValidationError || 
        error instanceof NetworkError ||
        error instanceof ConflictError ||
        error instanceof DeleteError) {
      return error;
    }

    // Gérer les erreurs de réseau
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return new NetworkError('Network connection failed', error as Error, endpoint);
    }

    // Gérer les timeouts
    if (error instanceof DOMException && error.name === 'AbortError') {
      return new NetworkError('Request timeout', error as Error, endpoint);
    }

    // Erreur générique
    return new ApiError(
      'Unknown error occurred', 
      500, 
      'UNKNOWN_ERROR', 
      endpoint
    );
  }

  protected async getAuthToken(): Promise<string | null> {
    // Logique d'authentification - à adapter selon votre système
    if (typeof window !== 'undefined') {
      // Côté client
      return localStorage.getItem('authToken') || 
             sessionStorage.getItem('authToken') ||
             this.getCookieValue('authToken');
    } else {
      // Côté serveur (Next.js)
      // Récupérer depuis les cookies de la requête ou autre
      return process.env.API_AUTH_TOKEN || null;
    }
  }

  private getCookieValue(name: string): string | null {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift();
      return cookieValue || null;
    }
    
    return null;
  }

  /**
   * Méthodes utilitaires publiques
   */
  public setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  public clearAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      // Supprimer le cookie
      document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    }
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public getDefaultHeaders(): HeadersInit {
    return { ...this.defaultHeaders };
  }

  public updateDefaultHeaders(headers: HeadersInit): void {
    Object.assign(this.defaultHeaders, headers);
  }
}