"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const getFileExtension = (url: string): string => {
  return url.split(".").pop()?.toLowerCase() || "";
};

const isVideo = (extension: string): boolean => {
  const videoExtensions = ["mp4", "webm", "ogg", "mov", "avi", "m4v"];
  return videoExtensions.includes(extension);
};

type BackgroundItem = {
  src: string;
  placeholder?: string;
};

type TransitionType = 'fade' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'zoomOut' | 'dissolve';

const transitions: TransitionType[] = ['fade', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut', 'dissolve'];

const getTransitionClasses = (transition: TransitionType, isActive: boolean, isExiting: boolean) => {
  const baseClasses = "absolute bg-background left-0 top-0 w-full h-full object-cover transition-all duration-1000 ease-in-out z-0";
  
  switch (transition) {
    case 'fade':
      return cn(baseClasses, {
        'opacity-100': isActive && !isExiting,
        'opacity-0': !isActive || isExiting,
      });
    
    case 'slideLeft':
      return cn(baseClasses, {
        'translate-x-0 opacity-100': isActive && !isExiting,
        'translate-x-full opacity-0': !isActive && !isExiting,
        '-translate-x-full opacity-0': isExiting,
      });
    
    case 'slideRight':
      return cn(baseClasses, {
        'translate-x-0 opacity-100': isActive && !isExiting,
        '-translate-x-full opacity-0': !isActive && !isExiting,
        'translate-x-full opacity-0': isExiting,
      });
    
    case 'zoomIn':
      return cn(baseClasses, {
        'scale-100 opacity-100': isActive && !isExiting,
        'scale-75 opacity-0': !isActive && !isExiting,
        'scale-125 opacity-0': isExiting,
      });
    
    case 'zoomOut':
      return cn(baseClasses, {
        'scale-100 opacity-100': isActive && !isExiting,
        'scale-125 opacity-0': !isActive && !isExiting,
        'scale-75 opacity-0': isExiting,
      });
    
    case 'dissolve':
      return cn(baseClasses, {
        'opacity-100 blur-0': isActive && !isExiting,
        'opacity-0 blur-sm': !isActive || isExiting,
      });
    
    default:
      return baseClasses;
  }
};

const VideoWithPlaceholder = ({
  src,
  className,
  placeholder,
  isActive,
  onVideoEnded,
}: {
  src: string;
  className?: string;
  placeholder?: string;
  isActive: boolean;
  onVideoEnded?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && !placeholder) {
      console.warn("No placeholder provided for video");
    }
  }, [placeholder]);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
      };

      const handleEnded = () => {
        if (isActive && onVideoEnded) {
          onVideoEnded();
        }
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("ended", handleEnded);
      video.load();
      
      if (video.readyState >= 2) {
        setVideoLoaded(true);
      }
      
      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, [src, isActive, onVideoEnded]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && videoLoaded) {
      if (isActive) {
        video.currentTime = 0; // Recommencer depuis le début
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }, [videoLoaded, isActive]);

  return (
    <>
      {placeholder && (
        <Image
          src={placeholder}
          loading="eager"
          priority
          sizes="100vw"
          alt="Background placeholder"
          className={cn(className, { invisible: videoLoaded })}
          quality={100}
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          fill
        />
      )}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop={false} // Désactiver le loop pour détecter la fin
        controls={false}
        preload="auto"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        className={cn(className, { invisible: !videoLoaded })}
      />
    </>
  );
};

const BackgroundMedia = ({ 
  item, 
  className, 
  isActive,
  onVideoEnded 
}: { 
  item: BackgroundItem; 
  className: string; 
  isActive: boolean;
  onVideoEnded?: () => void;
}) => {
  const extension = getFileExtension(item.src);
  const isVideoFile = isVideo(extension);

  if (isVideoFile) {
    return (
      <VideoWithPlaceholder
        src={item.src}
        className={className}
        placeholder={item.placeholder}
        isActive={isActive}
        onVideoEnded={onVideoEnded}
      />
    );
  }

  // Pour les images, simuler une "fin" après une durée fixe
  useEffect(() => {
    if (isActive && onVideoEnded) {
      const timer = setTimeout(() => {
        onVideoEnded();
      }, 5000); // 5 secondes pour les images
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onVideoEnded]);

  return (
    <Image
      priority
      loading="eager"
      src={item.src}
      alt="Background"
      className={className}
      sizes="100vw"
      style={{ 
        objectFit: 'cover',
        objectPosition: 'center'
      }}
      fill
    />
  );
};

export const Background = ({
  items,
  enableTransitions = true,
  imageDuration = 5000, // Durée pour les images statiques
}: {
  items: BackgroundItem[];
  enableTransitions?: boolean;
  imageDuration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentTransition, setCurrentTransition] = useState<TransitionType>('fade');

  // Si un seul élément, pas besoin de carousel
  const isSingleItem = items.length <= 1;

  const handleMediaEnded = () => {
    if (isSingleItem || !enableTransitions || isTransitioning) return;

    setIsTransitioning(true);
    
    // Choisir une transition aléatoire
    const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
    setCurrentTransition(randomTransition);
    
    // Après la transition, mettre à jour les index
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % items.length);
      setIsTransitioning(false);
    }, 1000); // Durée de la transition
  };

  // Réinitialiser les index si les items changent
  useEffect(() => {
    setCurrentIndex(0);
    setNextIndex(items.length > 1 ? 1 : 0);
    setIsTransitioning(false);
  }, [items]);

  if (items.length === 0) {
    return <div className="absolute inset-0 bg-background z-0" />;
  }

  if (isSingleItem) {
    const baseClasses = "absolute bg-background left-0 top-0 w-full h-full object-cover z-0";
    return (
      <BackgroundMedia
        item={items[0]}
        className={baseClasses}
        isActive={true}
        onVideoEnded={handleMediaEnded}
      />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Overlay d'assombrissement */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      
      {/* Container pour forcer le ratio de couverture */}
      <div className="absolute inset-0 w-full h-full">
        {/* Media actuel */}
        <BackgroundMedia
          item={items[currentIndex]}
          className={getTransitionClasses(currentTransition, true, isTransitioning)}
          isActive={!isTransitioning}
          onVideoEnded={handleMediaEnded}
        />
        
        {/* Media suivant (pour la transition) */}
        <BackgroundMedia
          item={items[nextIndex]}
          className={getTransitionClasses(currentTransition, isTransitioning, false)}
          isActive={isTransitioning}
          onVideoEnded={() => {}} // Pas de callback pour le media suivant
        />
      </div>
      
      {/* Indicateurs de progression (optionnel)
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {items.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-white" 
                  : "bg-white/30"
              )}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};