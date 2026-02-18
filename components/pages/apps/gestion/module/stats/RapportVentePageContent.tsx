"use client";

import React, { useState } from "react";
import BasePage from "@/components/layouts/base-page";
import RapportsPage from "./RapportVenteMainContent";
// import CaisseLeftSidebar from "./CaisseHomeLeftContent";

export default function CaisseHomePageContent() {
  
  return (
    <BasePage
      sidebar={null}
      main={
        <RapportsPage/>
      }
      rightPanel={null}
      sidebarWidth={0}
      sidebarMinWidth={0}
      sidebarMaxWidth={0}
      rightPanelWidth={0}
      rightPanelMinWidth={0}
      rightPanelMaxWidth={0}
      mainMinWidth={0}
      background={
        <>
          <div
            className="absolute inset-0 bg-cover bg-center -z-20"
            style={{
              backgroundImage: "url('/landscape.png')",
              opacity: 0.7,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/30 -z-10"></div>
        </>
      }
    />
  );
}