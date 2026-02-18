"use client";

import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Card Component
const ProductStockCard = ({ product }) => {
  const isPositive = product.change >= 0;
  
  const generateChartPath = () => {
    const points = product.chartData || [30, 25, 35, 28, 40, 32, 45, 38, 50];
    const width = 100;
    const height = 40;
    const step = width / (points.length - 1);
    
    let path = `M 0 ${height - (points[0] / 100) * height}`;
    
    for (let i = 1; i < points.length; i++) {
      const x = i * step;
      const y = height - (points[i] / 100) * height;
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  return (
    <div
      className="rounded-2xl p-4 w-[220px] flex-shrink-0"
      style={{ backgroundColor: product.bgColor }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="text-2xl">{product.icon}</div>
          <div>
            <h4 className="text-sm font-bold text-white">{product.name}</h4>
            <p className="text-xs text-white/70">{product.code}</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
            product.origin === "Local"
              ? "bg-green-500/20 text-green-300 border border-green-500/30"
              : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
          }`}
        >
          {product.origin === "Local" ? "🇬🇦 Local" : "🌍 Étranger"}
        </span>
      </div>

      <div className="mb-3">
        <p className="text-xs text-white/60 mb-1">Stock actuel</p>
        <p className="text-2xl font-bold text-white">{product.stock}</p>
      </div>

      <div className="mb-3">
        <svg
          viewBox="0 0 100 40"
          className="w-full h-10"
          preserveAspectRatio="none"
        >
          <path
            d={generateChartPath()}
            fill="none"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex items-center gap-2">
        {isPositive ? (
          <span className="text-green-400 text-xs">▲</span>
        ) : (
          <span className="text-red-400 text-xs">▼</span>
        )}
        <span
          className={`text-sm font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {product.change}%
        </span>
        <span className="text-xs text-white/60">cette semaine</span>
      </div>
    </div>
  );
};

// Carousel Component
const ProductStockCarousel = ({ title, products }) => {

  return (
    <div className="bg-transparent w-full max-w-[800px] min-w-0 overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>

      {/* Carousel Container */}
      <div className="w-full min-w-0">
        <div
          className="flex gap-4 overflow-x-auto pb-2"
        >
          {products.map((product) => (
            <ProductStockCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Demo with sample data
export default function ProductStockCarouselDemo() {
  const productsData = [
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
    {
      id: 6,
      name: "Tacos Poulet",
      code: "TACO",
      icon: "🌮",
      stock: "N 189.23",
      change: 12.45,
      origin: "Local",
      bgColor: "#fb923c",
      chartData: [35, 38, 42, 45, 50, 53, 58, 62, 65],
    },
    {
      id: 7,
      name: "Pâtes Carbonara",
      code: "PAST",
      icon: "🍝",
      stock: "N 132.80",
      change: 8.20,
      origin: "Local",
      bgColor: "#60a5fa",
      chartData: [30, 33, 38, 42, 48, 52, 58, 55, 62],
    },
    {
      id: 8,
      name: "Ramen Spicy",
      code: "RAMN",
      icon: "🍜",
      stock: "N 98.50",
      change: -1.80,
      origin: "Étranger",
      bgColor: "#ef4444",
      chartData: [50, 48, 45, 42, 40, 38, 35, 33, 30],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <ProductStockCarousel
        title="Mes Stocks"
        products={productsData}
      />
    </div>
  );
}

export { ProductStockCarousel, ProductStockCard };