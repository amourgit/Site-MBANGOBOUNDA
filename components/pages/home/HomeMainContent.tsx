"use client";
import React from "react";
import NewsSection from "@/components/pages/home/sections/topSection";

export default function HomeMainContent(
  { isCompactTopBar, isLeftBarContent, isRightBarContent }:
    {
      isCompactTopBar?: Boolean,
      isLeftBarContent?: Boolean,
      isRightBarContent?: Boolean
    }
) {

  return (
    <div className="bg-transparent p-8 px-[1%]">
      <div className="flex-1 w-full h-auto pb-20 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Section 1: News Section (Established Markets + London News) */}
        <div className="section-container">
          <NewsSection />
        </div>

        {/* Section 2: Announcements (À venir) */}
        <div className="section-container mt-8">
          {/* <AnnouncementsSection /> */}
          <div className="text-white/40 text-center py-12 border border-dashed border-white/20 rounded-lg mx-6">
            Announcements Section - À venir
          </div>
        </div>

        {/* Section 3: Resources Hub (À venir) */}
        <div className="section-container mt-8">
          {/* <ResourcesHubSection /> */}
          <div className="text-white/40 text-center py-12 border border-dashed border-white/20 rounded-lg mx-6">
            Resources Hub Section - À venir
          </div>
        </div>

        {/* Section 4: My Apps (À venir) */}
        <div className="section-container mt-8">
          {/* <MyAppsSection /> */}
          <div className="text-white/40 text-center py-12 border border-dashed border-white/20 rounded-lg mx-6">
            My Apps Section - À venir
          </div>
        </div>

        {/* Section 5: I need to... (À venir) */}
        <div className="section-container mt-8">
          {/* <INeedToSection /> */}
          <div className="text-white/40 text-center py-12 border border-dashed border-white/20 rounded-lg mx-6">
            I need to... Section - À venir
          </div>
        </div>
      </div>
    </div>
  );
}