"use client";

import { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const;
const SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 10,
  mass: 0.8,
};

// Textes du carrousel
const carouselTextes = [
  "Gérez vos projets d'etude en toute simplicité",
  "Organisez vos équipes d'etudiants",
  "Suivez vos performances en temps réel",
  "Automatisez vos processus scolaire",
  "Optimisez votre productivité quotidienne",
  "Collaborez sans limites avec vos etudiants"
];

export const Start = () => {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const isInitialRender = useRef(true);
  const router = useRouter();

  // Carrousel de textes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % carouselTextes.length);
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      isInitialRender.current = false;
    };
  }, [isManifestoOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsManifestoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex overflow-hidden relative flex-col gap-4 justify-center items-center pt-10 w-full h-full short:lg:pt-10 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-4 lg:gap-8">
      <motion.div
        layout="position"
        transition={{ duration: DURATION, ease: EASE_OUT }}
      >
        <h1 
          className="font-serif text-5xl italic short:lg:text-8xl sm:text-8xl lg:text-8xl text-white text-center"
          style={{
            textShadow: '0 3px 6px rgba(0, 0, 0, 0.6), 0 6px 12px rgba(0, 0, 0, 0.4), 0 12px 24px rgba(0, 0, 0, 0.2)'
          }}
        >
          G20
        </h1>
      </motion.div>

      <div className="flex flex-col items-center min-h-0 shrink">
        <AnimatePresenceGuard>
          {!isManifestoOpen && (
            <motion.div
              key="main-content"
              initial={isInitialRender.current ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  y: -150,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
              }}
            >
              <div className="flex flex-col gap-8 w-full max-w-2xl items-center">
                {/* Champ avec carrousel de textes et bouton intégré */}
                <motion.div
                  initial={isInitialRender.current ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                  className="relative w-full max-w-xl"
                >
                  <div className="relative bg-black/70 backdrop-blur-lg border border-white/30 rounded-full px-1 py-1 flex items-center overflow-hidden shadow-lg">
                    {/* Zone de texte défilant */}
                    <div className="flex-1 px-4 py-2 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentTextIndex}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="text-white text-sm sm:text-base font-normal text-center"
                          style={{
                            textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)'
                          }}
                        >
                          {carouselTextes[currentTextIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    
                    {/* Bouton Prêt ! intégré à droite */}
                    <motion.div
                      initial={isInitialRender.current ? false : { opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: DURATION,
                        ease: EASE_OUT,
                        delay: DELAY + 0.1,
                      }}
                      className="flex-shrink-0"
                    >
                      <Link href="/auth/login">
                        <Button
                          size="sm"
                          className="px-4 py-2 text-sm font-medium bg-white text-black hover:bg-gray-100 rounded-full transition-all duration-300 shadow-md"
                        >
                          Prêt !
                        </Button>
                      </Link>
                      
                    </motion.div>
                  </div>
                </motion.div>

                <motion.p
                  initial={isInitialRender.current ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY + 0.2,
                  }}
                  className="text-base short:lg:text-lg sm:text-lg lg:text-xl !leading-[1.1] font-medium text-center text-white text-pretty max-w-lg"
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Découvrez une nouvelle façon de gérer vos projets et optimiser vos processus avec G20.
                </motion.p>
              </div>
            </motion.div>
          )}

          <motion.div
            layout="position"
            transition={SPRING}
            key="button"
            className={isManifestoOpen ? "my-6" : "mt-6"}
          >
            <Button
              className={cn("relative px-8")}
              onClick={() => setIsManifestoOpen(!isManifestoOpen)}
              shine={!isManifestoOpen}
            >
              <motion.span
                animate={{ x: isManifestoOpen ? -16 : 0 }}
                transition={{ duration: DURATION, ease: EASE_OUT }}
                className="inline-block"
              >
                À propos
              </motion.span>

              {isManifestoOpen && (
                <motion.div
                  className={cn(
                    buttonVariants({ variant: "iconButton", size: "icon" }),
                    "absolute -top-px -right-px aspect-square"
                  )}
                  initial={{ opacity: 0, scale: 0.8, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                >
                  <Cross1Icon className="size-5 text-primary-foreground" />
                </motion.div>
              )}
            </Button>
          </motion.div>

          {isManifestoOpen && (
            <motion.div
              key="manifesto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                },
              }}
              className="relative flex min-h-0 flex-shrink overflow-hidden text-sm md:text-base max-h-[calc(70dvh-var(--footer-safe-area))] flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-border/50 bg-primary/20 max-w-3xl text-foreground rounded-3xl ring-1 ring-offset-primary/10 ring-border/10 ring-offset-2 shadow-button"
            >
              <article className="relative overflow-y-auto italic p-6 h-full [&_p]:my-4">
                <p>
                  &quot;Nous nous trouvons à l'avant-garde d'une nouvelle ère, où la créativité
                  rencontre la technologie pour redéfinir ce qui est possible. Notre mission
                  est d'autonomiser les individus et les entreprises avec des
                  solutions révolutionnaires qui inspirent le changement et stimulent
                  le progrès.
                </p>
                <p>
                  Nous croyons en l'innovation constante, repoussant les limites pour
                  créer des produits qui ne sont pas seulement des outils, mais des catalyseurs
                  de transformation. Nous valorisons la simplicité, concevant des expériences 
                  intuitives qui rendent les tâches complexes sans effort et agréables.
                </p>
                <p>
                  Notre engagement envers la durabilité nous pousse à protéger notre
                  planète tout en offrant une valeur exceptionnelle. Nous favorisons
                  la collaboration, construisant une communauté de penseurs, créateurs et
                  acteurs qui partagent une vision pour un avenir meilleur.
                </p>
                <p>
                  Notre promesse est de livrer une technologie de pointe qui soit
                  accessible, fiable et adaptée aux besoins de nos utilisateurs.
                  Rejoignez-nous dans ce voyage alors que nous innovons, inspirons et
                  allumons l'étincelle de créativité dans chaque coin du globe.&quot;
                </p>
              </article>
            </motion.div>
          )}
        </AnimatePresenceGuard>
      </div>
    </div>
  );
};

const AnimatePresenceGuard = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode="popLayout" propagate>{children}</AnimatePresence>;
};