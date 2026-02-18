"use client";

import React from "react";
import BasePage from "@/components/layouts/base-page";
import GestionHomeLeftContent from "./GestionHomeLeftContent";
import GestionHomeMainContent from "./GestionHomeMainContent";
import GestionHomeRightContent from "./GestionHomeRightContent";

export default function GestionHomePageContent() {
  return (
    <BasePage
      sidebar={<GestionHomeLeftContent />}
      main={<GestionHomeMainContent />}
      rightPanel={<GestionHomeRightContent />}
      sidebarWidth={250}
      sidebarMinWidth={250}
      sidebarMaxWidth={250}
      rightPanelWidth={250}
      rightPanelMinWidth={250}
      rightPanelMaxWidth={250}
      mainMinWidth={300}
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