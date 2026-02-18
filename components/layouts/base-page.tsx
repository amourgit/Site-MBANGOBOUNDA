"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  ChevronRight,
  ChevronLeft,
  LayoutDashboard,
  Loader2,
  Music2,
  Play,
  Search,
  Smartphone,
  User,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CompactTopBar } from "@/components/topbar";
import AnimeSphereAnimation from "@/components/widgets/anime-sphere-animation";
import Layout from "./BaseContent";

interface LayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  main?: React.ReactNode;
  middle?: React.ReactNode;
  rightPanel?: React.ReactNode;
  background?: React.ReactNode;
  sidebarWidth?: number;
  rightPanelWidth?: number;
  sidebarMinWidth?: number;
  sidebarMaxWidth?: number;
  rightPanelMinWidth?: number;
  rightPanelMaxWidth?: number;
  mainMinWidth?: number;
  onSidebarToggle?: (isOpen: boolean) => void;
  onResize?: (leftSize: number, middleSize: number, rightSize: number) => void;
  className?: string;
}

export default function BasePage({
  header,
  sidebar,
  main,
  middle,
  rightPanel,
  background,
  sidebarWidth = 280,
  rightPanelWidth = 320,
  sidebarMinWidth = 100,
  sidebarMaxWidth = 500,
  rightPanelMinWidth = 200,
  rightPanelMaxWidth = 600,
  mainMinWidth = 300,
  onSidebarToggle,
  onResize,
  className,
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = React.useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [leftWidth, setLeftWidth] = React.useState(sidebarWidth);
  const [rightWidth, setRightWidth] = React.useState(rightPanelWidth);
  const [isDraggingSidebar, setIsDraggingSidebar] = React.useState(false);
  const [isDraggingInternal, setIsDraggingInternal] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );
  const [swipeStartX, setSwipeStartX] = React.useState<number | null>(null);
  const [swipeCurrentX, setSwipeCurrentX] = React.useState<number | null>(null);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const mainContainerRef = React.useRef<HTMLDivElement>(null);

  const customEasing = [0.16, 1, 0.3, 1];

  // Responsive breakpoints
  const isTablet = windowWidth < 700;
  const isMobile = windowWidth < 400;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarToggle = () => {
    if (isMobile) {
      setIsMobileSidebarOpen(!isMobileSidebarOpen);
    } else {
      const newState = !isSidebarOpen;
      setIsSidebarOpen(newState);
      onSidebarToggle?.(newState);
    }
  };

  const handleRightPanelToggle = () => {
    setIsRightPanelOpen(!isRightPanelOpen);
  };

  // Swipe handlers for mobile panels
  const handleSwipeStart = (e: React.TouchEvent, panel: "left" | "right") => {
    setSwipeStartX(e.touches[0].clientX);
    setSwipeCurrentX(e.touches[0].clientX);
  };

  const handleSwipeMove = (e: React.TouchEvent) => {
    if (swipeStartX === null) return;
    setSwipeCurrentX(e.touches[0].clientX);
  };

  const handleSwipeEnd = (panel: "left" | "right") => {
    if (swipeStartX === null || swipeCurrentX === null) return;

    const swipeDistance = swipeCurrentX - swipeStartX;
    const threshold = 100;

    if (panel === "left" && swipeDistance < -threshold) {
      setIsMobileSidebarOpen(false);
    } else if (panel === "right" && swipeDistance > threshold) {
      setIsRightPanelOpen(false);
    }

    setSwipeStartX(null);
    setSwipeCurrentX(null);
  };

  const handleSidebarDragStart = (e: React.MouseEvent) => {
    if (isMobile || isTablet) return;
    e.preventDefault();
    setIsDraggingSidebar(true);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  const handleInternalDragStart = (e: React.MouseEvent) => {
    if (isTablet) return;
    e.preventDefault();
    setIsDraggingInternal(true);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      if (isDraggingSidebar) {
        const newWidth = Math.max(
          sidebarMinWidth,
          Math.min(e.clientX - containerRect.left, sidebarMaxWidth)
        );
        setLeftWidth(newWidth);
      }

      if (isDraggingInternal && mainContainerRef.current) {
        const mainContainerRect =
          mainContainerRef.current.getBoundingClientRect();
        const mainContainerWidth = mainContainerRect.width;
        const relativeX = e.clientX - mainContainerRect.left;

        const newRightWidth = Math.max(
          rightPanelMinWidth,
          Math.min(mainContainerWidth - relativeX, rightPanelMaxWidth)
        );
        const calculatedMainWidth = mainContainerWidth - newRightWidth;

        // Ensure main content respects minimum width
        if (calculatedMainWidth >= mainMinWidth) {
          setRightWidth(newRightWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDraggingSidebar(false);
      setIsDraggingInternal(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      // Notify parent of resize
      if (onResize && mainContainerRef.current) {
        const mainWidth =
          mainContainerRef.current.getBoundingClientRect().width - rightWidth;
        onResize(leftWidth, mainWidth, rightWidth);
      }
    };

    if (isDraggingSidebar || isDraggingInternal) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    isDraggingSidebar,
    isDraggingInternal,
    sidebarMinWidth,
    sidebarMaxWidth,
    rightPanelMinWidth,
    rightPanelMaxWidth,
    mainMinWidth,
    leftWidth,
    rightWidth,
    onResize,
  ]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Image de fond */}
      <div className="fixed inset-0 -z-3">
        {background ? (
          background
        ) : (
          <>
            <div className="absolute fixed inset-0 -z-15">
              <AnimeSphereAnimation />
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center -z-20"
              style={{
                backgroundImage: "url('/background1.png')",
                opacity: 0.7,
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30 -z-10"></div>
          </>
        )}
      </div>
      {/* <CompactTopBar /> */}
  
      {/* Header Fixed */}
      {header && (
        <motion.header
          className="sticky top-0 left-0 right-0 z-5 h-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: customEasing }}
        >
          {header}
        </motion.header>
      )}
  
      {/* Main Container - Parent commun pour les 3 sections */}
      <div
        ref={containerRef}
        className="flex w-full h-full"
      >
        {/* Mobile Sidebar Overlay */}
        {isMobile && (
          <AnimatePresence mode="wait">
            {isMobileSidebarOpen && (
              <React.Fragment key="mobile-sidebar-fragment">
                <motion.div
                  key="mobile-sidebar-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 no-scrollbar"
                  onClick={() => setIsMobileSidebarOpen(false)}
                />
                <motion.aside
                  key="mobile-sidebar-content"
                  initial={{ x: -280 }}
                  animate={{ x: 0 }}
                  exit={{ x: -280 }}
                  transition={{ duration: 0.4, ease: customEasing }}
                  className="fixed left-0 top-12 bottom-0 w-72 bg-black/90 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto no-scrollbar"
                  onTouchStart={(e) => handleSwipeStart(e, "left")}
                  onTouchMove={handleSwipeMove}
                  onTouchEnd={() => handleSwipeEnd("left")}
                >
                  <button
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                  {sidebar}
                </motion.aside>
              </React.Fragment>
            )}
          </AnimatePresence>
        )}
  
        {/* LEFT SIDEBAR - Desktop/Tablet */}
        {!isMobile && (
          <AnimatePresence mode="wait">
            {isSidebarOpen && (
              <motion.aside
                key="desktop-sidebar"
                initial={{ x: -leftWidth, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -leftWidth, opacity: 0 }}
                transition={{ duration: 0.5, ease: customEasing }}
                style={{ width: leftWidth }}
                className="relative flex-shrink-0 h-full overflow-y-auto no-scrollbar"
              >
                {sidebar}
              </motion.aside>
            )}
            {!isTablet && (
              <div
                className={cn(
                  "relative w-1 flex-shrink-0 cursor-col-resize group hover:w-1 transition-all",
                  isDraggingSidebar && "w-1"
                )}
                onMouseDown={handleSidebarDragStart}
              >
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 flex items-center justify-center">
                  <div className="h-12 w-1 rounded-full bg-white/20 group-hover:bg-purple-500/50 transition-colors" />
                </div>
              </div>
            )}
          </AnimatePresence>
        )}
  
        {/* MAIN CONTENT CONTAINER - Au même niveau */}
        <div ref={mainContainerRef} className="flex-1 h-full flex relative">
          {/* Loader */}
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loader-overlay"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center no-scrollbar"
              >
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-16 h-16 text-purple-500 animate-spin" />
                  <p className="text-white text-sm">Loading...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
  
          {/* Main Content */}
          <main
            className="h-full overflow-y-auto flex-1"
            style={{
              minWidth: isTablet ? "auto" : mainMinWidth,
            }}
          >
            {main || (
              <div className="h-full flex items-center justify-center">
                <p className="text-white/50 text-lg">Main Content Area</p>
              </div>
            )}
          </main>
  
          {/* Internal Resizer - Only on desktop */}
          {!isTablet && rightPanel && (
            <div
              className={cn(
                "relative w-1 flex-shrink-0 cursor-col-resize group hover:w-1 transition-all",
                isDraggingInternal && "w-1"
              )}
              onMouseDown={handleInternalDragStart}
            >
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 flex items-center justify-center">
                <div className="h-12 w-1 rounded-full bg-white/20 group-hover:bg-purple-500/50 transition-colors" />
              </div>
            </div>
          )}
  
          {/* RIGHT PANEL - Desktop only - Au même niveau */}
          {!isTablet && rightPanel && (
            <aside
              style={{
                width: rightWidth,
                minWidth: rightPanelMinWidth,
                maxWidth: rightPanelMaxWidth,
              }}
              className="relative flex-shrink-0 h-full overflow-y-auto border-l border-white/10"
            >
              {rightPanel}
            </aside>
          )}
        </div>
  
        {/* Right Panel - Tablet/Mobile Overlay */}
        {isTablet && (
          <AnimatePresence mode="wait">
            {isRightPanelOpen && (
              <React.Fragment key="right-panel-fragment">
                <motion.div
                  key="right-panel-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                  onClick={() => setIsRightPanelOpen(false)}
                />
                <motion.aside
                  key="right-panel-content"
                  initial={{ x: isMobile ? windowWidth : 320 }}
                  animate={{ x: 0 }}
                  exit={{ x: isMobile ? windowWidth : 320 }}
                  transition={{ duration: 0.4, ease: customEasing }}
                  className={cn(
                    "fixed right-0 top-12 bottom-0 bg-black/90 backdrop-blur-xl border-l border-white/10 z-50 overflow-y-auto",
                    isMobile ? "w-full" : "w-80"
                  )}
                  onTouchStart={(e) => handleSwipeStart(e, "right")}
                  onTouchMove={handleSwipeMove}
                  onTouchEnd={() => handleSwipeEnd("right")}
                >
                  <button
                    onClick={() => setIsRightPanelOpen(false)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                  {rightPanel}
                </motion.aside>
              </React.Fragment>
            )}
          </AnimatePresence>
        )}
  
        {/* Toggle Button for Left Sidebar */}
        {(!isSidebarOpen || isMobile) && (
          <motion.button
            key="sidebar-toggle-button"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: customEasing }}
            onClick={handleSidebarToggle}
            className="fixed left-2 top-20 z-40 w-10 h-16 bg-purple-600/20 backdrop-blur-xl rounded-r-xl border border-white/10 flex items-center justify-center hover:w-12 hover:bg-purple-600/30 transition-all duration-300 shadow-lg shadow-purple-500/20 cursor-pointer group"
          >
            {isMobileSidebarOpen ? (
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </motion.button>
        )}
  
        {/* Toggle Button for Right Panel - Tablet/Mobile */}
        {isTablet && (
          <motion.button
            key="right-panel-toggle-button"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: customEasing }}
            onClick={handleRightPanelToggle}
            className="fixed right-2 top-20 z-40 w-10 h-16 bg-purple-600/20 backdrop-blur-xl rounded-l-xl border border-white/10 flex items-center justify-center hover:w-12 hover:bg-purple-600/30 transition-all duration-300 shadow-lg shadow-purple-500/20 cursor-pointer group"
          >
            {isRightPanelOpen ? (
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </motion.button>
        )}
      </div>

      <style jsx global>{`
        .no-scrollbar {
          scrollbar-width: none !important; /* Firefox */
          -ms-overflow-style: none !important; /* IE/Edge */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none !important; /* Chrome, Safari */
        }
      `}</style>
    </div>
  );
}
