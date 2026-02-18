"use client"

import React from 'react';
import LayoutBig from '@/components/layouts/BaseContent';

// Main App Component
const HomeMainContent: React.FC = () => {
  return (
    <LayoutBig>
      <div className="flex w-full h-full bg-transparent overflow-hidden border-t-[1px] border-l-[1px] border-gray-500 p-2 rounded-t-lg rounded-l-lg">
        {/* Main Content Area */}
        <div className="fixed top-28 left-0 right-0 bottom-0 overflow-auto">
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Interface Bitrix24</h1>
              <p className="text-gray-600">Zone de contenu principal</p>
              <p className="text-sm text-gray-500 mt-2">Les barres latérales peuvent être ouvertes/fermées avec les boutons de contrôle</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutBig>
  );
};

export default HomeMainContent;