"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";

// Composant pour afficher les employés en cascade
const EmployeeAvatars = ({ employees }) => (
  <div className="flex -space-x-2">
    {employees.map((employee, index) => (
      <div
        key={index}
        className="w-8 h-8 rounded-full border-2 border-gray-800 overflow-hidden"
        style={{ zIndex: employees.length - index }}
      >
        <img
          src={employee.avatar}
          alt={employee.name}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

// Composant principal
const TableauVenteHebdo = ({ title, subtitle, sales }) => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl p-6 text-white">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-blue-200">{subtitle}</p>
          </div>
        </div>
        <button className="text-blue-200 hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 mb-4 pb-3 border-b border-blue-800/50">
        <div className="col-span-3">
          <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
            Date & Heure
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
            Employés
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
            Budget
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
            Objectif atteint
          </p>
        </div>
      </div>

      {/* Sales Items */}
      <div className="space-y-4">
        {sales.map((sale) => (
          <div
            key={sale.id}
            className="grid grid-cols-12 gap-4 items-center py-3 hover:bg-blue-900/30 rounded-lg transition-colors px-2"
          >
            {/* Date & Heure avec Icon */}
            <div className="col-span-3 flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}
                style={{ backgroundColor: sale.iconBg }}
              >
                <span className="text-lg">{sale.icon}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">{sale.date}</p>
                <p className="text-xs text-blue-300">{sale.time}</p>
              </div>
            </div>

            {/* Employés */}
            <div className="col-span-3">
              <EmployeeAvatars employees={sale.employees} />
            </div>

            {/* Budget */}
            <div className="col-span-3">
              <p className="text-sm font-semibold text-white">{sale.budget}</p>
            </div>

            {/* Objectif atteint */}
            <div className="col-span-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {sale.completion}
                  </span>
                </div>
                <div className="w-full bg-blue-950/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: sale.completion,
                      backgroundColor: sale.progressColor || "#3b82f6",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exemple d'utilisation avec données de démo
export default function TableauVenteHebdoDemo() {
  const salesData = [
    {
      id: 1,
      date: "Lundi 7 Oct",
      time: "09:00 - 18:00",
      icon: "🍕",
      iconBg: "#dc2626",
      employees: [
        { name: "User 1", avatar: "https://i.pravatar.cc/150?img=1" },
        { name: "User 2", avatar: "https://i.pravatar.cc/150?img=2" },
        { name: "User 3", avatar: "https://i.pravatar.cc/150?img=3" },
        { name: "User 4", avatar: "https://i.pravatar.cc/150?img=4" },
      ],
      budget: "N 14,000",
      completion: "60%",
      progressColor: "#3b82f6",
    },
    {
      id: 2,
      date: "Mardi 8 Oct",
      time: "09:00 - 18:00",
      icon: "🔺",
      iconBg: "#3b82f6",
      employees: [
        { name: "User 5", avatar: "https://i.pravatar.cc/150?img=5" },
        { name: "User 6", avatar: "https://i.pravatar.cc/150?img=6" },
      ],
      budget: "N 3,000",
      completion: "10%",
      progressColor: "#3b82f6",
    },
    {
      id: 3,
      date: "Mercredi 9 Oct",
      time: "09:00 - 18:00",
      icon: "⬛",
      iconBg: "#6366f1",
      employees: [
        { name: "User 7", avatar: "https://i.pravatar.cc/150?img=7" },
        { name: "User 8", avatar: "https://i.pravatar.cc/150?img=8" },
      ],
      budget: "Non défini",
      completion: "100%",
      progressColor: "#22c55e",
    },
    {
      id: 4,
      date: "Jeudi 10 Oct",
      time: "09:00 - 18:00",
      icon: "🎵",
      iconBg: "#22c55e",
      employees: [
        { name: "User 9", avatar: "https://i.pravatar.cc/150?img=9" },
        { name: "User 10", avatar: "https://i.pravatar.cc/150?img=10" },
        { name: "User 11", avatar: "https://i.pravatar.cc/150?img=11" },
        { name: "User 12", avatar: "https://i.pravatar.cc/150?img=12" },
      ],
      budget: "N 32,000",
      completion: "100%",
      progressColor: "#22c55e",
    },
    {
      id: 5,
      date: "Vendredi 11 Oct",
      time: "09:00 - 18:00",
      icon: "💎",
      iconBg: "#8b5cf6",
      employees: [
        { name: "User 13", avatar: "https://i.pravatar.cc/150?img=13" },
        { name: "User 14", avatar: "https://i.pravatar.cc/150?img=14" },
        { name: "User 15", avatar: "https://i.pravatar.cc/150?img=15" },
        { name: "User 16", avatar: "https://i.pravatar.cc/150?img=16" },
      ],
      budget: "N 400",
      completion: "25%",
      progressColor: "#f59e0b",
    },
    {
      id: 6,
      date: "Samedi 12 Oct",
      time: "09:00 - 18:00",
      icon: "🎨",
      iconBg: "#ef4444",
      employees: [
        { name: "User 17", avatar: "https://i.pravatar.cc/150?img=17" },
        { name: "User 18", avatar: "https://i.pravatar.cc/150?img=18" },
      ],
      budget: "N 7,600",
      completion: "40%",
      progressColor: "#f59e0b",
    },
  ];

  return (
    <div className="min-h-full">
      <TableauVenteHebdo
        title="Ventes de la semaine"
        subtitle="30 ventes cette semaine"
        sales={salesData}
      />
    </div>
  );
}

export { TableauVenteHebdo };