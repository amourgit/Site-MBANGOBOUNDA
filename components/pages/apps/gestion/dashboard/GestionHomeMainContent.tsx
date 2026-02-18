"use client";

import React, { useState } from "react";
import { 
  ChevronDown,
  MoreHorizontal,
  Plus,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import TableauVenteHebdoDemo, { TableauVenteHebdo } from './ui/TableauVenteHebdo';
import EmployeesTableDemo, { EmployeesTable } from "./ui/TableauEmployes";
import { ProductStockCarousel } from "./ui/ProductStockCarousel";

// Metric Card Component
const MetricCard = ({ title, value, change, trend, icon: Icon, iconBg }: any) => (
  <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-4 text-white">
    <div className="flex items-start justify-between mb-3">
      <div>
        <p className="text-xs text-blue-300 mb-1">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
    <div className="flex items-center gap-1">
      {trend === "up" ? (
        <TrendingUp className="w-3 h-3 text-green-400" />
      ) : (
        <TrendingDown className="w-3 h-3 text-red-400" />
      )}
      <span className={`text-xs font-medium ${trend === "up" ? "text-green-400" : "text-red-400"}`}>
        {change}
      </span>
    </div>
  </div>
);

// Welcome Card Component
const WelcomeCard = ({ name, greeting, message, linkText }) => (
  <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-xl p-6 text-white relative overflow-hidden">
    <div className="relative z-10">
      <p className="text-xs text-blue-300 mb-2">{greeting}</p>
      <h2 className="text-2xl font-bold mb-3">{name}</h2>
      <p className="text-sm text-blue-200 mb-4 max-w-[200px]">{message}</p>
      <button className="text-xs font-medium text-blue-300 hover:text-white flex items-center gap-1 transition-colors">
        {linkText} →
      </button>
    </div>
    {/* Brain Illustration */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-40">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-50"></div>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="80" ry="90" fill="url(#brainGradient)" opacity="0.6"/>
          <path d="M 60 80 Q 50 60, 70 50 T 90 55 Q 100 50, 110 55 T 130 50 Q 140 60, 130 80" 
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
          <path d="M 60 120 Q 50 140, 70 150 T 90 145 Q 100 150, 110 145 T 130 150 Q 140 140, 130 120" 
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
          <circle cx="75" cy="90" r="3" fill="rgba(255,255,255,0.6)"/>
          <circle cx="95" cy="85" r="3" fill="rgba(255,255,255,0.6)"/>
          <circle cx="105" cy="85" r="3" fill="rgba(255,255,255,0.6)"/>
          <circle cx="125" cy="90" r="3" fill="rgba(255,255,255,0.6)"/>
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

// Circular Progress Card Component
const CircularProgressCard = ({ title, subtitle, percentage, label, color }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
      <div className="mb-4">
        <p className="text-xs text-gray-400 mb-1">{title}</p>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="45"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="45"
              stroke={color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-baseline justify-between mt-4">
        <span className="text-xs text-gray-400">{label}</span>
        <div className="text-right">
          <span className="text-3xl font-bold">{percentage}%</span>
          <span className="text-xs text-gray-400 ml-2">100%</span>
        </div>
      </div>
    </div>
  );
};

// Referral Tracking Card Component
const ReferralTrackingCard = ({ title, invited, bonus, score, maxScore }) => {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 55;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
      <div className="flex items-start justify-between mb-6">
        <p className="text-sm font-medium text-gray-300">{title}</p>
        <button className="text-xs text-gray-400 hover:text-white transition-colors">
          View
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Left side - Stats */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">Invited</p>
            <p className="text-2xl font-bold">{invited} people</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Bonus</p>
            <p className="text-2xl font-bold">{bonus}</p>
          </div>
        </div>
        
        {/* Right side - Circular progress */}
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="64"
                cy="64"
                r="55"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="10"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="64"
                cy="64"
                r="55"
                stroke="#10b981"
                strokeWidth="10"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs text-gray-400 mb-1">Safety</p>
              <p className="text-3xl font-bold text-emerald-400">{score}</p>
              <p className="text-xs text-gray-500">Total Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GestionHomeMainContent() {
  const [orderFilter, setOrderFilter] = useState("Monthly");
  const [revenueFilter, setRevenueFilter] = useState("Monthly");
  const [customerFilter, setCustomerFilter] = useState("Monthly");

  const menuItems = [
    {
      id: 1,
      name: "Chicken curry Burger",
      price: "N 24.55",
      image: "🍔",
      available: true
    },
    {
      id: 2,
      name: "Vegetable special Sandwich",
      price: "N 24.55",
      image: "🥪",
      available: true
    },
    {
      id: 3,
      name: "Chicken curry Burger",
      price: "N 24.55",
      image: "🍔",
      available: true
    }
  ];

  const transactions = [
    {
      id: 1,
      name: "Crystal Pet Defore",
      date: "27 March 2020,12:30 PM",
      amount: "N 24.00"
    },
    {
      id: 2,
      name: "Crystal Pet Defore",
      date: "27 March 2020,12:30 PM",
      amount: "N 24.00"
    },
    {
      id: 3,
      name: "Crystal Pet Defore",
      date: "27 March 2020,12:30 PM",
      amount: "N 24.00"
    },
    {
      id: 4,
      name: "Crystal Pet Defore",
      date: "27 March 2020,12:30 PM",
      amount: "N 24.00"
    }
  ];

  const weekSalesData = [
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
  ];

  const employeesData = [
    {
      id: 1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "Manager",
      department: "Organization",
      schedule: "09:00 - 18:00",
      workDays: "Lun - Ven",
      absenceHours: 8,
      absenceDays: 1,
      status: "Online",
      hiredDate: "14/06/21",
    },
    // ... autres employés
  ];

  const productsStockData = [
    {
      id: 1,
      name: "Pizza Margherita",
      code: "PIZZA",
      icon: "🍕",
      stock: "N 203.65",
      change: 5.03,
      origin: "Local",
      bgColor: "#86efac",
      chartData: [40, 35, 45, 38, 50, 45, 55, 48, 60],
    },
    {
      id: 2,
      name: "Poulet Braisé",
      code: "POUL",
      icon: "🍗",
      stock: "N 151.74",
      change: -4.34,
      origin: "Local",
      bgColor: "#c084fc",
      chartData: [50, 55, 45, 48, 40, 45, 38, 42, 35],
    },
    {
      id: 3,
      name: "Burger Classic",
      code: "BURG",
      icon: "🍔",
      stock: "N 177.90",
      change: 7.63,
      origin: "Étranger",
      bgColor: "#fcd34d",
      chartData: [30, 35, 40, 38, 45, 50, 55, 52, 60],
    },
    {
      id: 4,
      name: "Salade César",
      code: "SLAD",
      icon: "🥗",
      stock: "N 145.93",
      change: 23.61,
      origin: "Local",
      bgColor: "#86efac",
      chartData: [25, 30, 35, 40, 45, 50, 55, 60, 65],
    },
    {
      id: 5,
      name: "Sushi Box",
      code: "SUSH",
      icon: "🍱",
      stock: "N 75.40",
      change: -2.15,
      origin: "Étranger",
      bgColor: "#f9a8d4",
      chartData: [45, 40, 38, 35, 32, 30, 28, 25, 23],
    },
  ];


  return (
    <div className="h-full bg-gray-50 flex flex-col overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Plus className="w-4 h-4" />
            Add Menu
          </button>
        </div>
      </div>

      {/* New Top Section with Cards */}
      <div className="flex flex-col px-6 py-6 w-full max-w-full">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {/* Metric Cards */}
          <MetricCard 
            title="Trading Volume"
            value="$53,000"
            change="+3.5%"
            trend="up"
            icon={TrendingUp}
            iconBg="bg-blue-500"
          />
          <MetricCard 
            title="Trading Liquidity"
            value="2,300"
            change="+11%"
            trend="up"
            icon={TrendingUp}
            iconBg="bg-blue-500"
          />
          <MetricCard 
            title="Happy Clients"
            value="+3,052"
            change="+1%"
            trend="down"
            icon={TrendingDown}
            iconBg="bg-blue-500"
          />
          <MetricCard 
            title="Total Sales"
            value="$173,000"
            change="+5%"
            trend="up"
            icon={TrendingUp}
            iconBg="bg-blue-500"
          />
        </div>

        {/* <div className="pb-6">
          <ProductStockCarousel
            title="Mes Stocks"
            products={productsStockData}
          />
        </div> */}

        <div className="grid grid-cols-3 gap-4">
          {/* Welcome Card */}
          <WelcomeCard 
            name="Mark Johnson"
            greeting="Welcome, Sales"
            message="Glad to see you again! Ask me anything."
            linkText="Tap to record"
          />
          
          {/* Satisfaction Rate Card */}
          <CircularProgressCard 
            title="Satisfaction Rate"
            subtitle="From all projects"
            percentage={95}
            label="0%"
            color="#3b82f6"
          />
          
          {/* Referral Tracking Card */}
          <ReferralTrackingCard 
            title="Referral Tracking"
            invited={145}
            bonus="1,465"
            score={9.3}
            maxScore={10}
          />
        </div>
      </div>

      {/* Order Summary and Revenue */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Order Summary */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Order Summary</h3>
                <p className="text-[10px] text-gray-400">hjokplmgntop|gtgkoikokyhikoy|ghokphnoy</p>
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                {orderFilter}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Latest Orders Badge */}
            <div className="bg-green-50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">25</span>
                  <span className="text-xs font-medium text-gray-700">Latest Orders</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
                  manage orders →
                </button>
              </div>
            </div>

            {/* Order Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-1">25</p>
                <p className="text-[10px] text-gray-500">On Delivery</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-1">60</p>
                <p className="text-[10px] text-gray-500">Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 mb-1">7</p>
                <p className="text-[10px] text-gray-500">Cancelled</p>
              </div>
            </div>

            {/* Donut Chart */}
            <div className="flex items-center gap-4">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  {/* Cancelled - Black */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#1f2937"
                    strokeWidth="20"
                    strokeDasharray="37.7 251.2"
                    strokeDashoffset="0"
                  />
                  {/* Delivered - Green */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="20"
                    strokeDasharray="103 251.2"
                    strokeDashoffset="-37.7"
                  />
                  {/* On Delivery - Red */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="20"
                    strokeDasharray="60.3 251.2"
                    strokeDashoffset="-140.7"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">On Delivery</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700">(24%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Delivered</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700">(41%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-800 rounded-full"></div>
                    <span className="text-xs text-gray-600">Cancelled</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700">(15%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Revenue</h3>
                <p className="text-[10px] text-gray-400">hjokplmgntop|gtgkoikokyhikoy|ghokphnoy</p>
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                {revenueFilter}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Area Chart */}
            <div className="h-64">
              <svg viewBox="0 0 300 150" className="w-full h-full">
                <defs>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                <line x1="0" y1="30" x2="300" y2="30" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="90" x2="300" y2="90" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="0" y1="120" x2="300" y2="120" stroke="#f3f4f6" strokeWidth="1" />
                
                {/* Area path */}
                <path
                  d="M 0 80 Q 25 60, 50 70 T 100 50 Q 125 70, 150 65 T 200 45 Q 225 65, 250 55 T 300 30 L 300 150 L 0 150 Z"
                  fill="url(#areaGradient)"
                />
                
                {/* Line path */}
                <path
                  d="M 0 80 Q 25 60, 50 70 T 100 50 Q 125 70, 150 65 T 200 45 Q 225 65, 250 55 T 300 30"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                
                {/* Y-axis labels */}
                <text x="5" y="25" fontSize="8" fill="#9ca3af">N 120</text>
                <text x="5" y="55" fontSize="8" fill="#9ca3af">N 100</text>
                <text x="5" y="85" fontSize="8" fill="#9ca3af">N 60</text>
                <text x="5" y="115" fontSize="8" fill="#9ca3af">N 30</text>
                <text x="5" y="145" fontSize="8" fill="#9ca3af">0</text>
                
                {/* X-axis labels */}
                <text x="25" y="145" fontSize="8" fill="#9ca3af">Jan</text>
                <text x="75" y="145" fontSize="8" fill="#9ca3af">Feb</text>
                <text x="125" y="145" fontSize="8" fill="#9ca3af">Mar</text>
                <text x="175" y="145" fontSize="8" fill="#9ca3af">Apr</text>
                <text x="225" y="145" fontSize="8" fill="#9ca3af">may</text>
                <text x="275" y="145" fontSize="8" fill="#9ca3af">Jun</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Menu and Latest Transactions */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Latest Menu */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Latest Menu</h3>
              <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
                View All →
              </button>
            </div>

            {/* Table Header */}
            <div className="bg-gray-50 rounded-t-lg px-3 py-2 grid grid-cols-12 gap-4 border-b border-gray-200">
              <div className="col-span-1 flex items-center">
                <input type="checkbox" className="w-3.5 h-3.5 text-blue-500 rounded border-gray-300" />
              </div>
              <div className="col-span-5">
                <p className="text-xs font-medium text-gray-600">Menu</p>
              </div>
              <div className="col-span-3">
                <p className="text-xs font-medium text-gray-600">Price</p>
              </div>
              <div className="col-span-3">
                <p className="text-xs font-medium text-gray-600">Availability Status</p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="divide-y divide-gray-100">
              {menuItems.map((item) => (
                <div key={item.id} className="px-3 py-3 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors">
                  <div className="col-span-1 flex items-center">
                    <input type="checkbox" className="w-3.5 h-3.5 text-blue-500 rounded border-gray-300" />
                  </div>
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                      {item.image}
                    </div>
                    <span className="text-xs text-gray-900">{item.name}</span>
                  </div>
                  <div className="col-span-3">
                    <span className="text-xs font-medium text-gray-900">{item.price}</span>
                  </div>
                  <div className="col-span-3 flex items-center justify-between">
                    <button className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                      item.available ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        item.available ? 'translate-x-5' : 'translate-x-0.5'
                      }`} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Transactions */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Latest Transactions</h3>
              <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
                View All →
              </button>
            </div>

            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                  <div>
                    <p className="text-xs font-medium text-blue-500 mb-1">{transaction.name}</p>
                    <p className="text-[10px] text-gray-500">{transaction.date}</p>
                  </div>
                  <p className="text-xs font-semibold text-gray-900">{transaction.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Map */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Customer Map</h3>
              <p className="text-[10px] text-gray-400">hjokplmgntop|gtgkoikokyhikoy|ghokphnoy</p>
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              {customerFilter}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bar Chart */}
          <div className="h-64">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Grid lines */}
              <line x1="40" y1="40" x2="400" y2="40" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="40" y1="80" x2="400" y2="80" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="40" y1="120" x2="400" y2="120" stroke="#f3f4f6" strokeWidth="1" />
              <line x1="40" y1="160" x2="400" y2="160" stroke="#f3f4f6" strokeWidth="1" />
              
              {/* Y-axis labels */}
              <text x="5" y="45" fontSize="10" fill="#9ca3af">60</text>
              <text x="5" y="85" fontSize="10" fill="#9ca3af">40</text>
              <text x="5" y="125" fontSize="10" fill="#9ca3af">20</text>
              <text x="5" y="165" fontSize="10" fill="#9ca3af">0</text>
              {/* Bars */}
              <rect x="50" y="90" width="25" height="70" fill="#3b82f6" rx="2" />
              <rect x="95" y="50" width="25" height="110" fill="#3b82f6" rx="2" />
              <rect x="140" y="40" width="25" height="120" fill="#3b82f6" rx="2" />
              <rect x="185" y="100" width="25" height="60" fill="#3b82f6" rx="2" />
              <rect x="230" y="80" width="25" height="80" fill="#3b82f6" rx="2" />
              <rect x="275" y="50" width="25" height="110" fill="#3b82f6" rx="2" />
              <rect x="320" y="45" width="25" height="115" fill="#3b82f6" rx="2" />
              <rect x="365" y="85" width="25" height="75" fill="#3b82f6" rx="2" />
              
              {/* X-axis labels */}
              <text x="55" y="180" fontSize="10" fill="#9ca3af">Jan</text>
              <text x="100" y="180" fontSize="10" fill="#9ca3af">Feb</text>
              <text x="145" y="180" fontSize="10" fill="#9ca3af">Mar</text>
              <text x="190" y="180" fontSize="10" fill="#9ca3af">Apr</text>
              <text x="235" y="180" fontSize="10" fill="#9ca3af">May</text>
              <text x="280" y="180" fontSize="10" fill="#9ca3af">Jun</text>
              <text x="325" y="180" fontSize="10" fill="#9ca3af">Jul</text>
              <text x="370" y="180" fontSize="10" fill="#9ca3af">Aug</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Ajoutez cette section après le Customer Map */}
      <div className="px-6 pb-6">
        {/* <TableauVenteHebdo
          title="Ventes de la semaine"
          subtitle="30 ventes cette semaine"
          sales={weekSalesData}
        /> */}
        <TableauVenteHebdoDemo />
      </div>

      <div className="px-6 pb-6">
        {/* <EmployeesTable
          title="Tableau des Employés"
          employees={employeesData}
        /> */}
        <EmployeesTableDemo />
      </div>
    </div>
  );
}