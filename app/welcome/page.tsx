"use client"

import { useState, useEffect, useRef } from "react"
import HomeLayout from "@/components/home-page"
import Link from "next/link"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
      video.play().catch((error) => {
        console.error("Erreur lors de la lecture de la vidéo:", error)
      })
    }

    const handleEnded = () => {
      // La vidéo est terminée
      setFadeOut(true)
      setTimeout(() => {
        setIsLoading(false)
        setFadeIn(true)
      }, 1000) // Wait for fade transition to complete
    }

    const handleError = () => {
      console.error("Erreur lors du chargement de la vidéo")
      // En cas d'erreur, passer à la page d'accueil après 7 secondes
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setIsLoading(false)
          setFadeIn(true)
        }, 1000)
      }, 7000)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {isLoading && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          <div className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden">
            <video
              ref={videoRef}
              className="absolute min-w-full min-h-full w-auto h-auto object-cover"
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-label="Vidéo de chargement G20 IOI"
            >
              <source src="/motion_logo1.mp4" type="video/mp4" />
              <source src="/motion_logo1.webm" type="video/webm" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          <HomeLayout />
        </div>
      )}
    </div>
  )
}