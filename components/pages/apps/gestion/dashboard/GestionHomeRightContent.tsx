"use client";

import React, { useState } from "react";
import { 
  Plus,
  MoreVertical,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function GestionHomeRightContent() {
  const employees = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Head Chef",
      phone: "+234 801 234 5678",
      email: "sarah.j@staxfood.com",
      location: "Kitchen A",
      avatar: "SJ",
      color: "from-pink-400 to-rose-500",
      status: "active"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Sous Chef",
      phone: "+234 802 345 6789",
      email: "michael.c@staxfood.com",
      location: "Kitchen A",
      avatar: "MC",
      color: "from-blue-400 to-cyan-500",
      status: "active"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Pastry Chef",
      phone: "+234 803 456 7890",
      email: "emily.r@staxfood.com",
      location: "Bakery",
      avatar: "ER",
      color: "from-purple-400 to-pink-500",
      status: "active"
    },
    {
      id: 4,
      name: "David Okonkwo",
      role: "Line Cook",
      phone: "+234 804 567 8901",
      email: "david.o@staxfood.com",
      location: "Kitchen B",
      avatar: "DO",
      color: "from-orange-400 to-red-500",
      status: "break"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Server Manager",
      phone: "+234 805 678 9012",
      email: "lisa.a@staxfood.com",
      location: "Front House",
      avatar: "LA",
      color: "from-emerald-400 to-green-500",
      status: "active"
    },
    {
      id: 6,
      name: "James Williams",
      role: "Waiter",
      phone: "+234 806 789 0123",
      email: "james.w@staxfood.com",
      location: "Front House",
      avatar: "JW",
      color: "from-indigo-400 to-blue-500",
      status: "active"
    },
    {
      id: 7,
      name: "Maria Santos",
      role: "Bartender",
      phone: "+234 807 890 1234",
      email: "maria.s@staxfood.com",
      location: "Bar",
      avatar: "MS",
      color: "from-yellow-400 to-orange-500",
      status: "active"
    },
    {
      id: 8,
      name: "Ahmed Hassan",
      role: "Dishwasher",
      phone: "+234 808 901 2345",
      email: "ahmed.h@staxfood.com",
      location: "Kitchen C",
      avatar: "AH",
      color: "from-teal-400 to-cyan-500",
      status: "off"
    }
  ];

  const EmployeeRow = ({ employee }) => (
    <div className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="p-3 flex items-center gap-3">
        {/* Avatar */}
        <div className={`w-10 h-10 bg-gradient-to-br ${employee.color} rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xs font-semibold">{employee.avatar}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-semibold text-gray-900 truncate">{employee.name}</h4>
            <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <MoreVertical className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mb-2">{employee.role}</p>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <span className="text-[10px] text-gray-600">{employee.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <span className="text-[10px] text-gray-600 truncate">{employee.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <span className="text-[10px] text-gray-600">{employee.location}</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mt-2">
            <span className={`text-[9px] font-medium px-2 py-0.5 rounded ${
              employee.status === "active" 
                ? "bg-green-100 text-green-700" 
                : employee.status === "break"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-600"
            }`}>
              {employee.status === "active" ? "Active" : employee.status === "break" ? "On Break" : "Off Duty"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900">Employees</h3>
          </div>
          <button className="w-6 h-6 bg-blue-500 hover:bg-blue-600 rounded flex items-center justify-center transition-colors">
            <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>
        </div>
        <p className="text-[10px] text-gray-500">{employees.length} team members</p>
      </div>

      {/* Employee List */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}