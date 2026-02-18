"use client";

import React, { useState } from "react";
import BasePage from "@/components/layouts/base-page";
import HomeMainContent from "./HomeMainContent";
import LayoutBig from "@/components/layouts/BaseContent"

export default function AppsHomePageContent() {
  const [isCompactTopBar, setIsCompactTopBar] = useState(false);

  const handleClick = ()=> {
    if(isCompactTopBar) setIsCompactTopBar(false), setIsCompactTopBar(true)
  }

  return (
    <LayoutBig
      isCompactTopBar={true}
      isLeftBarContent={true}
      isRightBarContent={true}
      children =  {
        <BasePage
          sidebar={null}
          main={<HomeMainContent />}
          rightPanel={null}
          sidebarWidth={0}
          sidebarMinWidth={0}
          sidebarMaxWidth={0}
          rightPanelWidth={0}
          rightPanelMinWidth={0}
          rightPanelMaxWidth={0}
          mainMinWidth={600}
          background={
            <>
              <div
                className="absolute inset-0 bg-cover bg-center -z-20"
                style={{
                  backgroundImage: "url('images/background1.webp')",
                  opacity: 0.7,
                }}
              >
              </div>
              <div className="absolute inset-0 bg-black/30 -z-10"></div>
            </>
          }
        />
      } 
    />
  );
}