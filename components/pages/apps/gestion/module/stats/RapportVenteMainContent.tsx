"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Filter, Plus, Search, FileText, FileSpreadsheet, FileBarChart2, FilePieChart, BarChart3, LineChart, PieChart as PieChartIcon, Loader2 } from 'lucide-react';
import { useState, useCallback } from 'react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { PDFGenerator } from '@/lib/generator-pdf/pdf-generator';
import { toast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ReportUtils } from '@/lib/generator-pdf/rapports-utils';
import { ReportConfig, ReportTable } from '@/lib/generator-pdf/rapports-type';
import { useEffect } from "react";
import type { TimeSlot } from '@/lib/models/timeslot.model'
import { TimeSlotService } from '@/lib/services/timeslot.service'
import { authService } from "@/lib/services";
import type { User as UserType } from '@/lib/models/user.model'

// Types
type ReportType = 'ventes' | 'depenses' | 'clients' | 'produits' | 'performance' | 'comptable';

interface ReportTemplate {
  id: string;
  title: string;
  description: string;
  type: ReportType;
  icon: React.ReactNode;
  lastGenerated?: string;
  frequency?: string;
  isFavorite?: boolean;
}

interface SaleItem {
  id: number;
  product: {
    id: number;
    name: string;
    category: {
      id: number;
      name: string;
      description: string;
      is_active: boolean;
      product_count: number;
    };
    unit: {
      id: number;
      name: string;
      abbreviation: string;
      is_active: boolean;
      usage_count: number;
    };
    selling_price: string;
    current_stock: string;
    purchase_price: string;
    alert_threshold: string;
    is_active: boolean;
    is_low_stock: boolean;
  };
  quantity: string;
  discount: string;
  tax_rate: string;
  total_price: string;
  created_by: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  updated_by: any;
  created_at: string;
  updated_at: string;
}

interface SaleData {
  id: number;
  reference: string;
  customerId: number | null;
  customerName: string;
  customerPhone: string;
  saleDate: string;
  totalAmount: number;
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  tableNumber: string;
  status: any;
  paymentStatus: any;
  paymentMethod: any;
  isTakeAway: boolean;
  itemsCount: number;
  createdBy: number;
  updatedBy: number;
  notes: string;
  created_at: string;
  updated_at: string;
}

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

// API Services
const saleApi = {
  getAll: async (params?: any) => {
    try {
      const response = await fetch('https://ioigabon.pythonanywhere.com/produits/api/sales/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error('Erreur API:', error);
      return { data: null, error: error instanceof Error ? error.message : 'Erreur inconnue' };
    }
  }
};

const saleItemsApi = {
  getBySaleId: async (saleId: number): Promise<SaleItem[]> => {
    try {
      const response = await fetch(`https://ioigabon.pythonanywhere.com/produits/api/sale-items/?sale=${saleId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des items:', error);
      return [];
    }
  }
};


// Mock users - À remplacer par un vrai service API
const mockUsers: User[] = [
  { id: 1, username: 'admin', first_name: 'Admin', last_name: 'System', email: 'admin@example.com' },
  { id: 2, username: 'manager', first_name: 'Manager', last_name: 'User', email: 'manager@example.com' },
  { id: 3, username: 'cashier1', first_name: 'Caissier', last_name: '1', email: 'cashier1@example.com' }
];

// Données de démonstration pour les rapports
const reportTemplates: ReportTemplate[] = [
  {
    id: 'ventes-journalieres',
    title: 'Rapport journalier des ventes',
    description: 'Résumé détaillé des ventes de la journée',
    type: 'ventes',
    icon: <FileText className="h-5 w-5" />,
    lastGenerated: 'Aujourd\'hui, ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    frequency: 'Quotidien',
    isFavorite: true
  },
  {
    id: 'ventes-hebdomadaires',
    title: 'Rapport hebdomadaire des ventes',
    description: 'Analyse des performances de vente de la semaine',
    type: 'ventes',
    icon: <FileBarChart2 className="h-5 w-5" />,
    lastGenerated: 'Lundi, 00:00',
    frequency: 'Hebdomadaire',
    isFavorite: true
  },
  {
    id: 'depenses-mensuelles',
    title: 'Rapport mensuel des dépenses',
    description: 'Analyse détaillée des dépenses du mois',
    type: 'depenses',
    icon: <FileSpreadsheet className="h-5 w-5" />,
    lastGenerated: '1er du mois, 00:00',
    frequency: 'Mensuel'
  },
  {
    id: 'clients-fideles',
    title: 'Clients fidèles',
    description: 'Analyse des clients fréquents et de leur valeur',
    type: 'clients',
    icon: <PieChartIcon className="h-5 w-5" />,
    lastGenerated: 'Hier, 23:59',
    frequency: 'Hebdomadaire'
  },
  {
    id: 'top-produits',
    title: 'Top produits',
    description: 'Produits les plus vendus et leur performance',
    type: 'produits',
    icon: <BarChart3 className="h-5 w-5" />,
    lastGenerated: 'Hier, 23:59',
    frequency: 'Hebdomadaire'
  },
  {
    id: 'performance-commerciale',
    title: 'Performance commerciale',
    description: 'Performance de l\'équipe commerciale',
    type: 'performance',
    icon: <LineChart className="h-5 w-5" />,
    lastGenerated: 'Dimanche, 23:59',
    frequency: 'Hebdomadaire'
  },
  {
    id: 'etat-comptable',
    title: 'État comptable',
    description: 'Bilan et compte de résultat',
    type: 'comptable',
    icon: <FileSpreadsheet className="h-5 w-5" />,
    lastGenerated: '1er du mois, 00:00',
    frequency: 'Mensuel'
  },
];

// Données pour l'historique des rapports générés
const reportHistory = [
  { id: '1', name: 'Rapport des ventes - Août 2025', type: 'ventes', date: '2025-08-01', status: 'Terminé', url: '#' },
  { id: '2', name: 'Analyse des dépenses - Juillet 2025', type: 'depenses', date: '2025-07-25', status: 'Terminé', url: '#' },
  { id: '3', name: 'Rapport clients - Juillet 2025', type: 'clients', date: '2025-07-20', status: 'Terminé', url: '#' },
  { id: '4', name: 'Performance commerciale - Juillet 2025', type: 'performance', date: '2025-07-15', status: 'Terminé', url: '#' },
  { id: '5', name: 'Analyse des produits - Juin 2025', type: 'produits', date: '2025-06-30', status: 'Expiré', url: '#' },
];

export default function RapportsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  // 1. ÉTATS CORRIGÉS (remplacer les useState existants)
  const [startDate, setStartDate] = useState<Date | undefined>(() => {
    const today = new Date();
    const start = new Date(today.getTime()); // Nouvelle instance
    start.setHours(0, 0, 0, 0);
    return start;
  });
  const [endDate, setEndDate] = useState<Date | undefined>(() => {
    const today = new Date();
    const end = new Date(today.getTime()); // Nouvelle instance  
    end.setHours(23, 59, 59, 999);
    return end;
  });
  const [selectedReports, setSelectedReports] = useState<string[]>(['ventes-journalieres']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('full-day');
  const [selectedTimeSlotData, setSelectedTimeSlotData] = useState<TimeSlot>({
    id: 1,
    name: 'journee-entiere',
    start_time: '00:00',
    end_time: '23:59',
    created_at: '',
    updated_at: '',
  });
  const [selectedUserId, setSelectedUserId] = useState<string>('all');
  const [sales, setSales] = useState<SaleData[]>([]);
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<Partial<UserType> | null>(null)
  const [currentTimeSlot, setCurrentTimeSlot] = useState<TimeSlot | null>(null)
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Charger l'utilisateur et ses créneaux horaires
  useEffect(() => {
    const loadUserAndTimeSlots = async () => {
      try {
        setIsLoading(true)
        const user = authService.getCurrentUser()
        if (user) {
          setCurrentUser(user)
          
          // Charger tous les créneaux horaires de l'utilisateur
          const timeSlots = await TimeSlotService.getAllUserTimeSlots(parseInt(user.id, 10))
          if (timeSlots.length > 0) {
            setAvailableTimeSlots(timeSlots)
            // Sélectionner le premier créneau par défaut
            setSelectedTimeSlotData(timeSlots[0])
            setCurrentTimeSlot(timeSlots[0])
            console.log('[DEBUG] Créneaux horaires disponibles:', timeSlots)
          } else {
            // Créneau par défaut si aucun n'est trouvé
            const defaultTimeSlot = {
              id: 0,
              name: 'Toute la journée',
              start_time: '00:00',
              end_time: '23:59',
              created_at: '',
              updated_at: '',
            }
            setAvailableTimeSlots([defaultTimeSlot])
            setSelectedTimeSlotData(defaultTimeSlot)
            setCurrentTimeSlot(defaultTimeSlot)
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement des créneaux horaires:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserAndTimeSlots()
  }, [])

  // 3. useEffect POUR DEBUGGER LES CHANGEMENTS (à ajouter)
  useEffect(() => {
    console.log('[DEBUG] ===== ÉTAT DES DATES ACTUALISÉ =====');
    console.log('[DEBUG] Date de début:', startDate ? {
      iso: startDate.toISOString(),
      local: startDate.toLocaleString('fr-FR'),
      timestamp: startDate.getTime(),
      heures: startDate.getHours() + ':' + startDate.getMinutes().toString().padStart(2, '0')
    } : 'NON DÉFINIE');
    
    console.log('[DEBUG] Date de fin:', endDate ? {
      iso: endDate.toISOString(),
      local: endDate.toLocaleString('fr-FR'),
      timestamp: endDate.getTime(),
      heures: endDate.getHours() + ':' + endDate.getMinutes().toString().padStart(2, '0')
    } : 'NON DÉFINIE');
    
    if (startDate && endDate) {
      const diffMs = endDate.getTime() - startDate.getTime();
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      console.log('[DEBUG] Période sélectionnée:', diffDays, 'jour(s)');
    }
    console.log('[DEBUG] ========================================');
  }, [startDate, endDate]);

  // Fonction pour convertir une heure en minutes depuis minuit
  const timeToMinutes = (timeStr: string): number => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // 2. FONCTIONS UTILITAIRES À AJOUTER
  const createDateWithTime = useCallback((date: Date, hours: number, minutes: number = 0, seconds: number = 0, milliseconds: number = 0): Date => {
    const newDate = new Date(date.getTime()); // Nouvelle instance
    newDate.setHours(hours, minutes, seconds, milliseconds);
    return newDate;
  }, []);

  const handleStartDateSelect = useCallback((date: Date | undefined) => {
    if (date) {
      const newStartDate = createDateWithTime(date, 0, 0, 0, 0);
      console.log('[DEBUG] Nouvelle date de début sélectionnée:', {
        original: date.toISOString(),
        modified: newStartDate.toISOString(),
        local: newStartDate.toLocaleString('fr-FR')
      });
      setStartDate(newStartDate);
      
      // Auto-ajustement de la date de fin si nécessaire
      if (endDate && newStartDate > endDate) {
        const newEndDate = createDateWithTime(newStartDate, 23, 59, 59, 999);
        console.log('[DEBUG] Ajustement automatique date de fin:', newEndDate.toLocaleString('fr-FR'));
        setEndDate(newEndDate);
      }
    }
  }, [endDate, createDateWithTime]);

  const handleEndDateSelect = useCallback((date: Date | undefined) => {
    if (date) {
      const newEndDate = createDateWithTime(date, 23, 59, 59, 999);
      console.log('[DEBUG] Nouvelle date de fin sélectionnée:', {
        original: date.toISOString(),
        modified: newEndDate.toISOString(),
        local: newEndDate.toLocaleString('fr-FR')
      });
      setEndDate(newEndDate);
    }
  }, [createDateWithTime]);

  // Fonction pour vérifier si une vente est dans une plage horaire
  const isSaleInTimeSlot = (saleDate: Date, startTime: string, endTime: string): boolean => {
    const saleMinutes = saleDate.getHours() * 60 + saleDate.getMinutes();
    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);
    
    // Cas standard : plage horaire dans la même journée (ex: 08:00 - 17:00)
    if (startMinutes < endMinutes) {
      return saleMinutes >= startMinutes && saleMinutes <= endMinutes;
    }
    // Cas plage horaire sur deux jours (ex: 18:00 - 06:00)
    else {
      return saleMinutes >= startMinutes || saleMinutes <= endMinutes;
    }
  };

  // // 1. Fonction de filtrage des ventes par date et créneau horaire
  // const filterSalesByDateAndTime = useCallback((sales: SaleData[], startDate: Date | undefined, endDate: Date | undefined, timeSlot: TimeSlot, userId?: number): SaleData[] => {
  //   if (!startDate || !endDate) {
  //     console.log('[DEBUG] Filtrage - Dates non définies');
  //     return [];
  //   }
    
  //   console.log('[DEBUG] Filtrage - Période:', format(startDate, 'dd/MM/yyyy'), 'au', format(endDate, 'dd/MM/yyyy'));
  //   console.log('[DEBUG] Créneau horaire:', timeSlot.start_time, '-', timeSlot.end_time);
  //   console.log('[DEBUG] Nombre de ventes total:', sales.length);
    
  //   // Vérifier si le créneau horaire s'étend sur deux jours (ex: 18:00 - 06:00)
  //   const isOvernight = timeToMinutes(timeSlot.start_time) >= timeToMinutes(timeSlot.end_time);
    
  //   return sales.filter(sale => {
  //     // Vérifier si la date de vente est valide
  //     if (!sale.created_at) {
  //       console.log(`[DEBUG] Vente ${sale.id} exclue - date de création manquante`);
  //       return false;
  //     }
      
  //     // Convertir la date de vente en objet Date
  //     const saleDate = new Date(sale.created_at);
      
  //     // Vérifier si la date est valide
  //     if (isNaN(saleDate.getTime())) {
  //       console.log(`[DEBUG] Vente ${sale.id} exclue - date de création invalide:`, sale.created_at);
  //       return false;
  //     }
      
  //     // Vérifier si la vente est dans l'intervalle de dates
  //     if (saleDate < startDate || saleDate > endDate) {
  //       return false;
  //     }

  //     // Si c'est le créneau "Toute la journée", on ne filtre pas par heure
  //     if (timeSlot.name === 'journee-entiere' || timeSlot.name === 'Toute la journée') {
  //       console.log(`[DEBUG] Vente ${sale.id} incluse - créneau toute la journée`);
  //       return true;
  //     }
      
  //     // Vérifier si la vente est dans le créneau horaire
  //     const isInTimeSlot = isSaleInTimeSlot(saleDate, timeSlot.start_time, timeSlot.end_time);
      
  //     if (!isInTimeSlot) {
  //       console.log(`[DEBUG] Vente ${sale.id} exclue - heure ${format(saleDate, 'HH:mm')} hors créneau [${timeSlot.start_time}-${timeSlot.end_time}]`);
  //       return false;
  //     }
      
  //     console.log(`[DEBUG] Vente ${sale.id} incluse - heure ${format(saleDate, 'HH:mm')} dans le créneau [${timeSlot.start_time}-${timeSlot.end_time}]`);

  //     // // Filtre par utilisateur (si spécifié)
  //     // if (userId && sale.createdBy !== userId) {
  //     //   console.log(`[DEBUG] Vente ${sale.id} exclue - utilisateur ${sale.createdBy} != ${userId}`);
  //     //   return false;
  //     // }
      
  //     console.log(`[DEBUG] Vente ${sale.id} INCLUSE`);
  //     return true;
  //     });
  // }, []);
  // 6. FONCTION DE FILTRAGE AMÉLIORÉE (remplacer la fonction existante)
  const filterSalesByDateAndTime = useCallback((sales: SaleData[], startDate: Date | undefined, endDate: Date | undefined, timeSlot: TimeSlot, userId?: number): SaleData[] => {
    console.log('[DEBUG] ===== DÉBUT FILTRAGE VENTES =====');
    
    if (!startDate || !endDate) {
      console.log('[DEBUG] ❌ Dates non définies - startDate:', startDate, 'endDate:', endDate);
      return [];
    }
    
    // Debug détaillé des dates reçues
    console.log('[DEBUG] Paramètres de filtrage reçus:');
    console.log('[DEBUG] - Date début:', {
      iso: startDate.toISOString(),
      local: startDate.toLocaleString('fr-FR'),
      timestamp: startDate.getTime()
    });
    console.log('[DEBUG] - Date fin:', {
      iso: endDate.toISOString(), 
      local: endDate.toLocaleString('fr-FR'),
      timestamp: endDate.getTime()
    });
    console.log('[DEBUG] - Créneau horaire:', `${timeSlot.name} (${timeSlot.start_time} - ${timeSlot.end_time})`);
    console.log('[DEBUG] - Nombre de ventes à filtrer:', sales.length);
    
    // Vérifier la cohérence des dates
    if (startDate >= endDate) {
      console.log('[DEBUG] ❌ Dates incohérentes - startDate >= endDate');
      return [];
    }
    
    const filteredSales = sales.filter((sale, index) => {
      // Validation de base
      if (!sale.created_at) {
        console.log(`[DEBUG] Vente ${sale.id} (index ${index}) - date de création manquante`);
        return false;
      }
      
      // Conversion de la date
      const saleDate = new Date(sale.created_at);
      if (isNaN(saleDate.getTime())) {
        console.log(`[DEBUG] Vente ${sale.id} (index ${index}) - date invalide: ${sale.created_at}`);
        return false;
      }
      
      // Comparaison des timestamps pour plus de fiabilité
      const saleTimestamp = saleDate.getTime();
      const startTimestamp = startDate.getTime();
      const endTimestamp = endDate.getTime();
      
      // Vérification de la plage de dates
      if (saleTimestamp < startTimestamp || saleTimestamp > endTimestamp) {
        console.log(`[DEBUG] Vente ${sale.id} (index ${index}) - hors période:`, {
          vente: saleDate.toLocaleString('fr-FR'),
          venteTs: saleTimestamp,
          debutTs: startTimestamp,
          finTs: endTimestamp,
          trop_tot: saleTimestamp < startTimestamp,
          trop_tard: saleTimestamp > endTimestamp
        });
        return false;
      }
      
      // Vérification du créneau horaire (sauf "toute la journée")
      if (timeSlot.name !== 'journee-entiere' && timeSlot.name !== 'Toute la journée') {
        const isInTimeSlot = isSaleInTimeSlot(saleDate, timeSlot.start_time, timeSlot.end_time);
        if (!isInTimeSlot) {
          console.log(`[DEBUG] Vente ${sale.id} (index ${index}) - hors créneau:`, {
            heure_vente: format(saleDate, 'HH:mm'),
            creneau: `${timeSlot.start_time}-${timeSlot.end_time}`
          });
          return false;
        }
      }
      
      console.log(`[DEBUG] ✅ Vente ${sale.id} (index ${index}) INCLUSE:`, {
        date: saleDate.toLocaleString('fr-FR'),
        montant: sale.totalAmount
      });
      return true;
    });
    
    console.log('[DEBUG] Résultat filtrage:', {
      ventes_initiales: sales.length,
      ventes_filtrees: filteredSales.length,
      pourcentage: ((filteredSales.length / sales.length) * 100).toFixed(1) + '%'
    });
    console.log('[DEBUG] ===== FIN FILTRAGE VENTES =====');
    
    return filteredSales;
  }, [isSaleInTimeSlot]);

  // 2. Ajouter les nouveaux états pour les messages de statut
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Chargement des données de ventes
  const loadSalesData = useCallback(async (): Promise<SaleData[]> => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('[RapportsPage] Chargement des ventes...');
      
      const response = await saleApi.getAll({
        page: 1,
        limit: 1000 // Charger plus de données pour le filtrage
      });
      
      if (response.error) {
        throw new Error(response.error);
      }

      // Filtrer immédiatement pour ne garder que les ventes sur place
      const salesData = (response.data || []).filter(sale => sale.is_take_away === false)
      console.log('[Dashboard] Ventes sur place récupérées:', salesData.length)
      
      console.log('[RapportsPage] Réponse API reçue:', {
        count: salesData.length,
        firstSale: salesData[0],
        data: salesData
      });
      
      setSales(salesData);
      // return salesData;
      
      // Transformation des données avec validation
      // Correction de la fonction loadSalesData - section de formatage
      const formattedSales = (salesData || []).map((sale: any): SaleData => {
        // Normaliser paymentMethod, status, paymentStatus comme dans le code original
        const paymentMethod = typeof sale.payment_method === 'object' 
          ? {
              id: sale.payment_method?.id || 0,
              name: sale.payment_method?.name || 'Non spécifié',
              created_at: sale.payment_method?.created_at || new Date().toISOString(),
              updated_at: sale.payment_method?.updated_at || new Date().toISOString(),
              is_active: sale.payment_method?.is_active !== undefined ? sale.payment_method.is_active : true,
              description: sale.payment_method?.description,
              code: sale.payment_method?.code,
              usage_count: sale.payment_method?.usage_count
            }
          : {
              id: 0,
              name: sale.payment_method || 'Non spécifié',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_active: true
            };
            
        const status = typeof sale.status === 'object' 
          ? {
              id: sale.status?.id || 0,
              name: sale.status?.name || 'Inconnu',
              created_at: sale.status?.created_at || new Date().toISOString(),
              updated_at: sale.status?.updated_at || new Date().toISOString(),
              code: sale.status?.code,
              is_active: sale.status?.is_active !== undefined ? sale.status.is_active : true,
              description: sale.status?.description,
              created_by: sale.status?.created_by,
              updated_by: sale.status?.updated_by
            }
          : {
              id: 0,
              name: sale.status || 'Inconnu',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_active: true
            };

        const paymentStatus = typeof sale.payment_status === 'object'
          ? {
              id: sale.payment_status?.id || 0,
              name: sale.payment_status?.name || 'Non payé',
              created_at: sale.payment_status?.created_at || new Date().toISOString(),
              updated_at: sale.payment_status?.updated_at || new Date().toISOString(),
              code: sale.payment_status?.code,
              is_active: sale.payment_status?.is_active !== undefined ? sale.payment_status.is_active : true,
              description: sale.payment_status?.description,
              created_by: sale.payment_status?.created_by,
              updated_by: sale.payment_status?.updated_by
            }
          : {
              id: 0,
              name: sale.payment_status || 'Non payé',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              is_active: true
            };
          
        // 🔧 Correction principale : utiliser les bons noms de champs
        return {
          id: sale.id,
          reference: sale.reference || `V-${sale.id}`,
          customerId: sale.customer?.id || null,
          customerName: sale.customer_name || sale.customer?.full_name || `Client #${sale.customer?.id || 'N/A'}`,
          customerPhone: sale.customer_phone || sale.customer?.phone || '',
          saleDate: sale.sale_date || sale.created_at,
          totalAmount: Number(sale.total_amount) || 0,  // ✅ Utiliser total_amount (avec underscore)
          subtotal: Number(sale.subtotal) || 0,         // ✅ Celui-ci est correct
          discountAmount: Number(sale.discount_amount) || 0,  // ✅ Ajouter discount_amount si disponible
          taxAmount: Number(sale.tax_amount) || 0,      // ✅ Ajouter tax_amount si disponible
          tableNumber: sale.table_number || '',
          status: status,
          paymentStatus: paymentStatus,
          paymentMethod: paymentMethod,
          isTakeAway: Boolean(sale.is_take_away),
          itemsCount: sale.items?.length || sale.items_count || 0,
          createdBy: sale.created_by,
          updatedBy: sale.updated_by,
          notes: sale.notes,
          created_at: sale.created_at,
          updated_at: sale.updated_at
        };
      });

      console.log('formattedSales', formattedSales);
      
      return formattedSales;
      
    } catch (err) {
      console.error('[RapportsPage] Erreur lors du chargement des ventes:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      throw err;
    }
  }, []);


  // Chargement des articles d'une vente
  const loadSaleItems = useCallback(async (saleIds: number[]): Promise<Record<number, SaleItem[]>> => {
    const itemsMap: Record<number, SaleItem[]> = {};
    // console.log('donnees des items')
    try {
      // Charger les items pour chaque vente
      const promises = saleIds.map(async (saleId) => {
        const items = await saleItemsApi.getBySaleId(saleId);
        itemsMap[saleId] = items;
        // console.log('Items charge:', items)
        // console.log('ItemsMaps charge:', itemsMap[saleId])
      });
      
      await Promise.all(promises);
      return itemsMap;
      
    } catch (error) {
      console.error('Erreur lors du chargement des sale items:', error);
      return itemsMap;
    }
  }, []);

  // Chargement des données au montage du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadSalesData();
      } catch (err) {
        console.error('Erreur lors du chargement initial des données:', err);
      }
    };
    
    fetchData();
  }, [loadSalesData]);


  // // Mise à jour du créneau horaire sélectionné
  // useEffect(() => {
  //   const slot = currentTimeSlot.find(slot => slot.id === selectedTimeSlot) || {
  //     id: 'full-day',
  //     name: 'Toute la journée',
  //     start_time: '00:00',
  //     end_time: '23:59'
  //   };
  //   setSelectedTimeSlotData(slot);
  // }, [selectedTimeSlot]);


  // Génération du rapport des ventes journalières
  // Génération du rapport des ventes journalières corrigée
  const generateDailySalesReport = useCallback(async () => {
    if (!startDate || !endDate) {
      toast({
        title: 'Dates manquantes',
        description: 'Veuillez sélectionner une période pour générer le rapport.',
        variant: 'destructive',
      });
      return;
    }
    
    if (startDate > endDate) {
      toast({
        title: 'Période invalide',
        description: 'La date de début doit être antérieure à la date de fin.',
        variant: 'destructive',
      });
      return;
    }
    
    console.log('=== DÉBUT DE GÉNÉRATION DU RAPPORT ===');
    setProgress(10);
    
    // Charger les données de ventes
    console.log('[DEBUG] Étape 1: Chargement des données de ventes...');
    const salesData = await loadSalesData();
    console.log('[DEBUG] Données de ventes chargées:', { count: salesData.length, data: salesData });
    setProgress(30);
    
    // Filtrer les ventes par date et créneau horaire
    console.log('[DEBUG] Étape 2: Filtrage des ventes...');
    const filteredSales = filterSalesByDateAndTime(
      salesData,
      startDate,
      endDate,
      selectedTimeSlotData,
      selectedUserId !== 'all' ? parseInt(selectedUserId, 10) : undefined
    );
    console.log('[DEBUG] Ventes filtrées:', { count: filteredSales.length, data: filteredSales });
    setProgress(50);
    
    // Si aucune vente trouvée
    if (filteredSales.length === 0) {
      toast({
        title: 'Aucune donnée',
        description: 'Aucune vente trouvée pour la période sélectionnée.',
        variant: 'default',
      });
      return;
    }
    
    // Charger les items des ventes filtrées
    console.log('[DEBUG] Étape 3: Chargement des items...');
    const saleIds = filteredSales.map(sale => sale.id);
    console.log('[DEBUG] Sale IDs à traiter:', saleIds);
    
    const saleItemsMap = await loadSaleItems(saleIds);
    console.log('[DEBUG] Items chargés:', saleItemsMap);
    setProgress(70);
    
    // Récupérer tous les items dans un tableau plat
    console.log('[DEBUG] Étape 4: Consolidation des items...');
    const allItems: any[] = [];
    
    for (const sale of filteredSales) {
      const items = saleItemsMap[sale.id] || [];
      console.log(`[DEBUG] Items pour vente ${sale.id}:`, items);
      
      items.forEach(item => {
        allItems.push({
          ...item,
          sale: {
            id: sale.id,
            reference: sale.reference,
            date: sale.created_at
          }
        });
      });
    }
    
    console.log('[DEBUG] Tous les items consolidés:', { count: allItems.length, data: allItems });
    setProgress(80);
    
    // Calculer les totaux
    console.log('[DEBUG] Étape 5: Calcul des totaux...');
    const totalVentes = filteredSales.reduce((sum, sale) => {
      const amount = parseFloat(sale.totalAmount.toString());
      console.log(`[DEBUG] Montant vente ${sale.id}:`, amount);
      return sum + amount;
    }, 0);
    
    const totalArticles = allItems.reduce((sum, item) => {
      const quantity = parseFloat(item.quantity);
      console.log(`[DEBUG] Quantité item ${item.id}:`, quantity);
      return sum + quantity;
    }, 0);
    
    console.log('[DEBUG] Totaux calculés:', { totalVentes, totalArticles });
    
    // Calculer les ventes par méthode de paiement
    console.log('[DEBUG] Étape 6: Calcul par méthode de paiement...');
    const ventesParMethode = filteredSales.reduce((acc, sale) => {
      const method = typeof sale.paymentMethod === 'object' 
        ? sale.paymentMethod.name 
        : sale.paymentMethod || 'Inconnu';
      acc[method] = (acc[method] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    console.log('[DEBUG] Ventes par méthode:', ventesParMethode);
    
    // Calculer le top produits
    console.log('[DEBUG] Étape 7: Calcul du top produits...');
    const produitsVendus = allItems.reduce((acc, item) => {
      const productName = item.product?.name || 'Produit inconnu';
      acc[productName] = (acc[productName] || 0) + parseFloat(item.quantity);
      return acc;
    }, {} as Record<string, number>);
    
    console.log('[DEBUG] Produits vendus:', produitsVendus);
    
    const topProduits = Object.entries(produitsVendus)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    
    console.log('[DEBUG] Top 5 produits:', topProduits);
    setProgress(85);
    
    // Configuration de base
    console.log('[DEBUG] Étape 8: Configuration de base...');
    const companyInfo = {
      name: 'Le Phenix',
      address: {
        street: 'Owendo',
        city: 'Libreville, Gabon',
        postalCode: ''
      },
      adminInfo: {},
      logo: 'https://images.unsplash.com/photo-1520975867597-0f998da218e5?auto=format&fit=crop&w=800&q=80'
    };

    const employeeInfo = {
      firstName: 'Utilisateur',
      lastName: 'Système',
      address: {
        street: '',
        city: '',
        postalCode: ''
      }
    };

    const reportHeader = {
      title: `Rapport des ventes - ${format(date, 'dd/MM/yyyy')}`,
      period: selectedTimeSlotData.name
    };
    
    console.log('[DEBUG] Configuration de base:', { companyInfo, employeeInfo, reportHeader });
    setProgress(88);
    
    // Préparer les tables du rapport
    console.log('[DEBUG] Étape 9: Préparation des tables...');
    
    // Table 1: Résumé
    const resumeData = [
      { indicateur: 'Nombre total de ventes', valeur: filteredSales.length.toString(), unite: 'ventes' },
      { indicateur: 'Chiffre d\'affaires total', valeur: totalVentes.toFixed(2), unite: 'FCFA' },
      { indicateur: 'Nombre total d\'articles vendus', valeur: totalArticles.toString(), unite: 'articles' },
      { indicateur: 'Panier moyen', valeur: (totalVentes / (filteredSales.length || 1)).toFixed(2), unite: 'FCFA' }
    ];
    console.log('[DEBUG] Table résumé - données:', resumeData);
    
    // Table 2: Ventes par méthode
    const methodesData = Object.entries(ventesParMethode).map(([methode, nombre]) => ({
      methode,
      nombre: nombre.toString(),
      pourcentage: `${((nombre / filteredSales.length) * 100).toFixed(1)}%`
    }));
    console.log('[DEBUG] Table méthodes - données:', methodesData);
    
    // Table 3: Top produits
    const totalQuantiteProduits = topProduits.reduce((sum, [_, q]) => sum + q, 0);
    const topProduitsData = topProduits.map(([produit, quantite]) => ({
      produit,
      quantite: quantite.toString(),
      pourcentage: `${((quantite / totalQuantiteProduits) * 100).toFixed(1)}%`
    }));
    console.log('[DEBUG] Table top produits - données:', topProduitsData);
    
// // Table 3: Top produits
//     const totalQuantiteProduits = topProduits.reduce((sum, [_, q]) => sum + q, 0);
//     const topProduitsData = topProduits.map(([produit, quantite]) => ({
//       produit,
//       quantite: quantite.toString(),
//       pourcentage: `${((quantite / totalQuantiteProduits) * 100).toFixed(1)}%`
//     }));
//     console.log('[DEBUG] Table top produits - données:', topProduitsData);
    
    
    // Table 4: Détail des ventes
    const detailVentesData = filteredSales.map(sale => {
      console.log('sale', sale.subtotal * (sale.discountAmount + sale.taxAmount));
      const paymentMethodName = typeof sale.paymentMethod === 'object' 
        ? sale.paymentMethod.name 
        : sale.paymentMethod || 'Inconnu';
      
      return {
        reference: sale.reference,
        date: format(new Date(sale.created_at), 'dd/MM/yyyy HH:mm'),
        client: sale.customerName || 'Non spécifié',
        montant: `${parseFloat(sale.totalAmount.toString()).toFixed(2)} FCFA`,
        methode: paymentMethodName
      };
    });
    console.log('[DEBUG] Table détail ventes - données:', detailVentesData);
    
    // Table 5: Détail des produits
    const detailProduitsData = allItems.map(item => ({
      produit: item.product?.name || 'Produit inconnu',
      categorie: item.product?.category?.name || 'Non catégorisé',
      quantite: parseFloat(item.quantity).toFixed(2),
      prix: `${parseFloat(item.product?.selling_price || '0').toFixed(2)} FCFA`,
      total: `${(parseFloat(item.quantity) * parseFloat(item.product?.selling_price || '0')).toFixed(2)} FCFA`
    }));
    console.log('[DEBUG] Table détail produits - données:', detailProduitsData);
    
    const tables: ReportTable[] = [
      // {
      //   id: 'top-produits',
      //   titre: 'Top 5 des produits vendus',
      //   description: 'Les produits les plus vendus pendant la période sélectionnée',
      //   columns: [
      //     { key: 'produit', label: 'Produit', width: 50 },
      //     { key: 'quantite', label: 'Quantité vendue', width: 25, align: 'right' },
      //     { key: 'pourcentage', label: 'Part de marché', width: 25, align: 'right' }
      //   ],
      //   data: topProduitsData
      // },
      // {
      //   id: 'ventes-par-methode',
      //   titre: 'Ventes par méthode de paiement',
      //   description: 'Répartition des ventes selon le mode de paiement',
      //   columns: [
      //     { key: 'methode', label: 'Méthode de paiement', width: 60 },
      //     { key: 'nombre', label: 'Nombre de ventes', width: 20, align: 'right' },
      //     { key: 'pourcentage', label: 'Pourcentage', width: 20, align: 'right' }
      //   ],
      //   data: methodesData
      // },
      {
        id: 'detail-ventes',
        titre: 'Détail des ventes',
        description: 'Liste détaillée de toutes les ventes de la période',
        headerColor: '#2937a3',
        textColor: '#ffffff',
        columns: [
          { key: 'reference', label: 'Référence', width: 20 },
          { key: 'date', label: 'Date', width: 15 },
          { key: 'client', label: 'Client', width: 25 },
          { key: 'montant', label: 'Montant', width: 20, align: 'right' },
          { key: 'methode', label: 'Paiement', width: 20 }
        ],
        data: detailVentesData
      },
      {
        id: 'detail-produits',
        titre: 'Détail des produits vendus',
        description: 'Liste détaillée de tous les produits vendus',
        headerColor: '#2937a3',
        textColor: '#ffffff',
        columns: [
          { key: 'produit', label: 'Produit', width: 40 },
          { key: 'categorie', label: 'Catégorie', width: 20 },
          { key: 'quantite', label: 'Quantité', width: 15, align: 'right' },
          { key: 'prix', label: 'Prix unitaire', width: 15, align: 'right' },
          { key: 'total', label: 'Total', width: 10, align: 'right' }
        ],
        data: detailProduitsData
      },
      
      {
        id: 'resume',
        titre: 'Résumé des ventes',
        description: `Période: ${selectedTimeSlotData.name}`,
        columns: [
          { key: 'indicateur', label: 'Indicateur', width: 60 },
          { key: 'valeur', label: 'Valeur', width: 20, align: 'right' },
          { key: 'unite', label: 'Unité', width: 20, align: 'left' }
        ],
        data: resumeData
      },
    ];
    
    console.log('[DEBUG] Toutes les tables préparées:', tables);
    console.log('[DEBUG] Vérification de chaque table:');
    tables.forEach((table, index) => {
      console.log(`[DEBUG] Table ${index + 1} (${table.id}):`, {
        titre: table.titre,
        colonnes: table.columns?.length || 0,
        lignes: table.data?.length || 0,
        premiereLigne: table.data?.[0] || null
      });
    });
    setProgress(90);
    
    // Configuration finale du rapport
    console.log('[DEBUG] Étape 10: Configuration finale...');
    const reportConfig: ReportConfig = {
      companyInfo,
      employeeInfo,
      reportHeader,
      tables,
      footer: `Rapport généré automatiquement le ${new Date().toLocaleString('fr-FR')} - IOI GABON`,
      pageSize: 'a4',
      orientation: 'landscape'
    };
    
    console.log('[DEBUG] Configuration finale du rapport:', reportConfig);
    console.log('[DEBUG] TABLES DANS LA CONFIG FINALE:', reportConfig.tables);
    setProgress(95);
    
    try {
      // Générer le PDF
      console.log('[DEBUG] Étape 11: Génération du PDF...');
      const pdfGenerator = new PDFGenerator(reportConfig);
      console.log('[DEBUG] Générateur PDF créé, début de génération...');
      
      pdfGenerator.generatePDF();
      
      // Télécharger le PDF
      const formattedDate = new Date().toISOString().split('T')[0];
      const timeSlotSuffix = selectedTimeSlotData ? `-${selectedTimeSlotData.id}` : '';
      const filename = `rapport-ventes-${formattedDate}${timeSlotSuffix}.pdf`;
      
      console.log('[DEBUG] Sauvegarde du PDF sous le nom:', filename);
      pdfGenerator.save(filename);
      
      console.log('[DEBUG] ✅ Génération du rapport terminée avec succès');
      setProgress(100);

      // Recharger la page après un court délai
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
      return reportConfig;
    } catch (error) {
      console.error('[DEBUG] ❌ Erreur lors de la génération du rapport:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
    
    console.log('=== FIN DE GÉNÉRATION DU RAPPORT ===');
  }, [date, selectedTimeSlotData, selectedUserId, filterSalesByDateAndTime, loadSalesData, loadSaleItems]);

  const handleGenerateReport = async () => {
    console.log('[DEBUG] ===== GÉNÉRATION RAPPORT DÉMARRÉE =====');
    console.log('[DEBUG] Dates au moment de la génération:');
    console.log('[DEBUG] - startDate état:', startDate?.toLocaleString('fr-FR'));
    console.log('[DEBUG] - endDate état:', endDate?.toLocaleString('fr-FR'));
    if (selectedReports.length === 0) {
      toast({
        title: 'Aucun rapport sélectionné',
        description: 'Veuillez sélectionner au moins un rapport à générer.',
        variant: 'destructive',
      });
      return;
    }
  
    if (!startDate || !endDate) {
      console.log('[DEBUG] ❌ Validation dates - startDate:', startDate, 'endDate:', endDate);
      toast({
        title: 'Dates manquantes',
        description: 'Veuillez sélectionner une période pour générer le rapport.',
        variant: 'destructive',
      });
      return;
    }
  
    if (startDate >= endDate) {
      console.log('[DEBUG] ❌ Validation cohérence - startDate >= endDate');
      toast({
        title: 'Période invalide',
        description: 'La date de début doit être antérieure à la date de fin.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    
    try {
      // Gestion du rapport des ventes journalières
      if (selectedReports.includes('ventes-journalieres')) {
        console.log('[RapportsPage] Génération du rapport des ventes journalières...');
        await generateDailySalesReport();
        
        toast({
          title: 'Rapport généré avec succès',
          description: 'Le rapport des ventes journalières a été téléchargé.',
        });
        
      }

      // TODO: Ajouter ici la gestion des autres types de rapports
      if (selectedReports.includes('ventes-hebdomadaires')) {
        toast({
          title: 'Fonction en développement',
          description: 'Le rapport hebdomadaire sera disponible prochainement.',
          variant: 'default',
        });
      }
      
    } catch (error) {
      console.error('Erreur lors de la génération du rapport:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
      toast({
        title: 'Erreur',
        description: `Une erreur est survenue lors de la génération du rapport: ${errorMessage}`,
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
      setProgress(0);
    }
  };

  const toggleReportSelection = (reportId: string) => {
    setSelectedReports(prev => 
      prev.includes(reportId) 
        ? prev.filter(id => id !== reportId)
        : [...prev, reportId]
    );
  };
  
  const toggleAllReports = () => {
    if (selectedReports.length === reportTemplates.length) {
      setSelectedReports([]);
    } else {
      setSelectedReports(reportTemplates.map(report => report.id));
    }
  };

  return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Rapports</h1>
            <p className="text-muted-foreground">
              Générez et consultez les rapports de votre entreprise
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Exporter
              </span>
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <Plus className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Nouveau rapport
              </span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="templates" className="space-y-4">
          <TabsList>
            <TabsTrigger value="templates">Modèles</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
            <TabsTrigger value="scheduled">Planifiés</TabsTrigger>
          </TabsList>
          
          <TabsContent value="templates" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex flex-col space-y-4">
                  <div>
                    <CardTitle>Modèles de rapports</CardTitle>
                    <CardDescription>
                      Sélectionnez un ou plusieurs modèles pour générer des rapports
                    </CardDescription>
                  </div>
                  
                  {/* Mega bloc principal - devient column sur petits écrans */}
                  <div className="flex flex-col xl:flex-row xl:items-end gap-4">
                    
                    {/* Grand bloc pour les filtres - devient column sur petits écrans */}
                    <div className="flex flex-col lg:flex-row gap-4 flex-1">
                      
                      {/* Bloc des dates */}
                      <div className="flex flex-col space-y-3">
                        <Label className="text-sm font-medium text-muted-foreground">Période</Label>
                        <div className="flex flex-col space-y-2">
                          {/* Date de début */}
                          <div className="flex flex-col space-y-1">
                            <Label htmlFor="start-date" className="text-sm font-medium">Date de début</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  id="start-date"
                                  variant="outline"
                                  className={cn(
                                    "w-full lg:w-[200px] justify-start text-left font-normal",
                                    !startDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {startDate ? (
                                    <span title={startDate.toISOString()}>
                                      {format(startDate, "PPP", { locale: fr })}
                                    </span>
                                  ) : (
                                    <span>Sélectionner une date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={startDate}
                                  onSelect={handleStartDateSelect}
                                  initialFocus
                                  locale={fr}
                                  disabled={(date) => {
                                    if (!(date instanceof Date)) return true;
                                    const today = new Date();
                                    today.setHours(23, 59, 59, 999);
                                    return date > today || date < new Date('2020-01-01');
                                  }}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          {/* Date de fin */}
                          <div className="flex flex-col space-y-1">
                            <Label htmlFor="end-date" className="text-sm font-medium">Date de fin</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  id="end-date"
                                  variant="outline"
                                  className={cn(
                                    "w-full lg:w-[200px] justify-start text-left font-normal",
                                    !endDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {endDate ? (
                                    <span title={endDate.toISOString()}>
                                      {format(endDate, "PPP", { locale: fr })}
                                    </span>
                                  ) : (
                                    <span>Sélectionner une date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={endDate}
                                  onSelect={handleEndDateSelect}
                                  initialFocus
                                  locale={fr}
                                  disabled={(date) => {
                                    if (!(date instanceof Date)) return true;
                                    const today = new Date();
                                    today.setHours(23, 59, 59, 999);
                                    return date > today || 
                                          date < new Date('2020-01-01') ||
                                          (startDate ? date < startDate : false);
                                  }}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </div>

                      {/* Bloc des horaires et utilisateurs */}
                      <div className="flex flex-col space-y-3">
                        <Label className="text-sm font-medium text-muted-foreground">Filtres</Label>
                        <div className="flex flex-col space-y-2">
                          {/* Sélecteur de tranche horaire */}
                          <div className="flex flex-col space-y-1">
                            <Label className="text-sm font-medium">Créneau horaire</Label>
                            <Select 
                              value={selectedTimeSlotData?.id?.toString() || ''}
                              onValueChange={(value) => {
                                const selected = availableTimeSlots.find(ts => ts.id?.toString() === value);
                                if (selected) {
                                  setSelectedTimeSlotData(selected);
                                }
                              }}
                            >
                              <SelectTrigger className="w-full lg:w-[200px]">
                                <SelectValue placeholder="Sélectionner un créneau" />
                              </SelectTrigger>
                              <SelectContent>
                                { availableTimeSlots.length > 0 ? (
                                  availableTimeSlots.map((timeSlot) => (
                                    <SelectItem 
                                      key={timeSlot.id} 
                                      value={timeSlot.id?.toString() || ''}
                                    >
                                      {timeSlot.name} ({timeSlot.start_time} - {timeSlot.end_time})
                                    </SelectItem>
                                  ))
                                ) : (
                                  <div className="p-2 text-sm text-muted-foreground">Aucun créneau disponible</div>
                                )}
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Sélecteur d'utilisateur */}
                          <div className="flex flex-col space-y-1">
                            <Label className="text-sm font-medium">Utilisateur</Label>
                            <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                              <SelectTrigger className="w-full lg:w-[200px]">
                                <SelectValue placeholder="Utilisateur" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">Tous les utilisateurs</SelectItem>
                                {mockUsers.map((user) => (
                                  <SelectItem key={user.id} value={user.id.toString()}>
                                    {user.first_name} {user.last_name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bouton de génération - aligné avec les filtres */}
                    <div className="flex flex-col justify-end">
                      <Button 
                        className="w-full lg:w-auto px-6 py-2"
                        onClick={handleGenerateReport}
                        disabled={selectedReports.length === 0 || isGenerating}
                        size="default"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Génération...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" />
                            Générer le rapport
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {isGenerating && (
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Génération en cours...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded-md">
                    <Checkbox 
                      id="select-all"
                      checked={selectedReports.length === reportTemplates.length}
                      onCheckedChange={toggleAllReports}
                    />
                    <Label htmlFor="select-all" className="text-sm font-medium leading-none">
                      {selectedReports.length > 0 
                        ? `${selectedReports.length} sélectionné(s)` 
                        : 'Tout sélectionner'}
                    </Label>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {reportTemplates.map((report) => (
                      <Card 
                        key={report.id} 
                        className={`hover:shadow-md transition-shadow cursor-pointer ${
                          selectedReports.includes(report.id) ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => toggleReportSelection(report.id)}
                      >
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                          <div className="flex items-center space-x-2">
                            <div className="p-2 rounded-md bg-primary/10 text-primary">
                              {report.icon}
                            </div>
                            <div>
                              <CardTitle className="text-base">{report.title}</CardTitle>
                              <CardDescription className="text-xs">
                                {report.description}
                              </CardDescription>
                            </div>
                          </div>
                          <Checkbox 
                            checked={selectedReports.includes(report.id)}
                            onCheckedChange={() => toggleReportSelection(report.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="mt-1"
                          />
                        </CardHeader>
                        <CardContent className="pt-2">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Dernière génération: {report.lastGenerated}</span>
                            <span>{report.frequency}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historique des rapports</CardTitle>
                <CardDescription>
                  Consultez les rapports générés précédemment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Rechercher un rapport..."
                    className="pl-8 w-full md:w-[300px]"
                  />
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom du rapport</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date de génération</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportHistory.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {report.type === 'ventes' ? 'Ventes' : 
                             report.type === 'depenses' ? 'Dépenses' :
                             report.type === 'clients' ? 'Clients' :
                             report.type === 'performance' ? 'Performance' : 'Produits'}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(report.date).toLocaleDateString('fr-FR')}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={report.status === 'Terminé' ? 'default' : 'secondary'}
                            className={report.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' : 
                                     report.status === 'Expiré' ? 'bg-red-100 text-red-800' : ''}
                          >
                            {report.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8">
                            <Download className="h-4 w-4 mr-1" /> Télécharger
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    Affichage de <span className="font-medium">1</span> à <span className="font-medium">5</span> sur{' '}
                    <span className="font-medium">24</span> rapports
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Précédent
                    </Button>
                    <Button variant="outline" size="sm">
                      Suivant
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scheduled" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Rapports planifiés</CardTitle>
                    <CardDescription>
                      Gérer les rapports générés automatiquement
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Nouvelle planification
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nom du rapport</TableHead>
                        <TableHead>Fréquence</TableHead>
                        <TableHead>Prochaine exécution</TableHead>
                        <TableHead>Destinataires</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Rapport des ventes quotidien</TableCell>
                        <TableCell>Quotidien</TableCell>
                        <TableCell>Demain, 23:59</TableCell>
                        <TableCell className="py-2">
                          <div className="flex -space-x-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                              JD
                            </div>
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                              MP
                            </div>
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                              +2
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Actif
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8">
                            Éditer
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Rapport des ventes hebdomadaire</TableCell>
                        <TableCell>Hebdomadaire (Lundi)</TableCell>
                        <TableCell>Lundi prochain, 00:00</TableCell>
                        <TableCell>
                          <div className="flex -space-x-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                              JD
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Actif
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8">
                            Éditer
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Rapport mensuel des dépenses</TableCell>
                        <TableCell>Mensuel (1er du mois)</TableCell>
                        <TableCell>1er septembre 2025, 00:00</TableCell>
                        <TableCell>
                          <div className="flex -space-x-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                              MP
                            </div>
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                              CD
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Actif
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8">
                            Éditer
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
}