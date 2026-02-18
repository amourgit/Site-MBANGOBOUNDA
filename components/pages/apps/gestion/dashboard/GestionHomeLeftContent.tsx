"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard,
  ShoppingBag,
  Users,
  Receipt,
  LogOut,
  ChevronLeft
} from "lucide-react";

export default function GestionHomeLeftContent() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "menu", icon: ShoppingBag, label: "Menu" },
    { id: "orders", icon: Receipt, label: "Orders" },
    { id: "customers", icon: Users, label: "Customers" },
    { id: "transactions", icon: Receipt, label: "Trasactions" }
  ];

  return (
    <div className="h-screen w-full bg-white flex flex-col border-r border-gray-200">
      {/* Logo and Collapse Button */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-gray-900">STAX FOOD</span>
        </div>
        <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
          <ChevronLeft className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full pl-8 pr-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg 
            className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveMenu(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
              activeMenu === item.id
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        ))}

        {/* Logout */}
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mt-4">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </nav>

      {/* Promotional Card */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg p-4 text-white">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-xs font-semibold mb-1">It's Stax Time</p>
          <p className="text-[10px] leading-relaxed opacity-90 mb-3">
            We will help you with your business and make your life easier
          </p>
          <button className="w-full bg-white text-green-600 text-xs font-semibold py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
            Create an Order
          </button>
        </div>
      </div>

      {/* User Profile */}
      <div className="border-t border-gray-100 p-3">
        <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-semibold">MJ</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Mmekutmfon Jade</p>
            <p className="text-xs text-gray-500 truncate">Stax Food Admin</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}