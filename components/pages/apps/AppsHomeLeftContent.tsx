"use client";

import React from "react";
import { HomeIcon, SettingsIcon } from "lucide-react";
import MagicDock from "@/components/ui/mockdock";

export default function AppsHomeLeftContent() {
  
  // ---------------------------------------------------------------------------
  // RENDER COMPONENTS - Ces composants seront passés en props au Layout
  // ---------------------------------------------------------------------------

  // SIDEBAR COMPONENT (LEFT PANEL)
  const dockItems = [
    {
      id: 1,
      icon: <HomeIcon size={24} />,
      label: "Home",
      description: "Go to homepage",
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      id: 2,
      icon: <SettingsIcon size={24} />,
      label: "Settings",
      description: "Customize options",
      onClick: () => console.log("Settings clicked"),
    },
  ];

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      <MagicDock
        items={dockItems}
        distance={150}
        panelHeight={300}
        baseItemSize={50}
        magnification={70}
        variant="default"
        orientation="vertical"
      />
    </div>
  );
}