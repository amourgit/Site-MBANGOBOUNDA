"use client";

import React, { useState } from "react";
import { Calculator, FileText, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { evaluate } from "mathjs";

// Types
interface AppItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  component: React.ComponentType<{ onBack: () => void }>;
}

// Composant Calculatrice
const CalculatorApp: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  const handleNumber = (num: string) => {
    if (display === "0" || display === "Error") {
      setDisplay(num);
      setExpression(num);
    } else {
      setDisplay(display + num);
      setExpression(expression + num);
    }
  };

  const handleOperator = (op: string) => {
    if (display === "Error") {
      setDisplay("0");
      setExpression("");
      return;
    }
    setDisplay(display + " " + op + " ");
    setExpression(expression + op);
  };

  const handleClear = () => {
    setDisplay("0");
    setExpression("");
  };

  const handleEqual = () => {
    try {
      const result = evaluate(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
    } catch (error) {
      setDisplay("Error");
      setExpression("");
    }
  };

  const handlePercent = () => {
    try {
      const result = evaluate(expression) / 100;
      setDisplay(result.toString());
      setExpression(result.toString());
    } catch (error) {
      setDisplay("Error");
      setExpression("");
    }
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else {
      setDisplay("0");
      setExpression("");
    }
  };

  const Button: React.FC<{
    children: React.ReactNode;
    onClick: () => void;
    variant?: "default" | "operator" | "equals";
    className?: string;
  }> = ({ children, onClick, variant = "default", className = "" }) => {
    const baseClass =
      "rounded-2xl font-medium text-sm transition-all active:scale-95 shadow-lg";
    const variantClass = {
      default: "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300",
      operator: "bg-gradient-to-br from-gray-300 to-gray-400 text-gray-900 hover:from-gray-400 hover:to-gray-500",
      equals: "bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
    };

    return (
      <button
        onClick={onClick}
        className={`${baseClass} ${variantClass[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 shadow-xl">
      {/* Header avec bouton retour */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="w-7 h-7 bg-white/60 hover:bg-white/80 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <h2 className="text-sm font-bold text-gray-800">Calculatrice</h2>
        <div className="w-7" />
      </div>

      {/* Display */}
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-4 mb-4 shadow-inner">
        <div className="text-right">
          <div className="text-xs text-gray-500 h-4 mb-1 truncate">
            {expression ? expression.replace(/\*/g, "×").replace(/\//g, "÷") : ""}
          </div>
          <div className="text-2xl font-bold text-gray-900 truncate">
            {display.replace(/\*/g, "×").replace(/\//g, "÷")}
          </div>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="flex-1 grid grid-cols-4 gap-2">
        {/* Row 1 */}
        <Button onClick={handleClear} variant="operator">
          C
        </Button>
        <Button onClick={handleBackspace} variant="operator">
          ⌫
        </Button>
        <Button onClick={handlePercent} variant="operator">
          %
        </Button>
        <Button onClick={() => handleOperator("/")} variant="operator">
          ÷
        </Button>

        {/* Row 2 */}
        <Button onClick={() => handleNumber("7")}>7</Button>
        <Button onClick={() => handleNumber("8")}>8</Button>
        <Button onClick={() => handleNumber("9")}>9</Button>
        <Button onClick={() => handleOperator("*")} variant="operator">
          ×
        </Button>

        {/* Row 3 */}
        <Button onClick={() => handleNumber("4")}>4</Button>
        <Button onClick={() => handleNumber("5")}>5</Button>
        <Button onClick={() => handleNumber("6")}>6</Button>
        <Button onClick={() => handleOperator("-")} variant="operator">
          -
        </Button>

        {/* Row 4 */}
        <Button onClick={() => handleNumber("1")}>1</Button>
        <Button onClick={() => handleNumber("2")}>2</Button>
        <Button onClick={() => handleNumber("3")}>3</Button>
        <Button onClick={() => handleOperator("+")} variant="operator">
          +
        </Button>

        {/* Row 5 */}
        <Button onClick={() => handleNumber("0")} className="col-span-2">
          0
        </Button>
        <Button onClick={() => handleNumber(".")}>.</Button>
        <Button onClick={handleEqual} variant="equals">
          =
        </Button>
      </div>

      {/* Footer credit */}
      <div className="mt-3 text-center">
        <p className="text-[9px] text-gray-500">Calculatrice IOI</p>
      </div>
    </div>
  );
};

// Composant Facturation (placeholder)
const InvoiceApp: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <h2 className="text-sm font-bold text-gray-800">Facturation</h2>
        <div className="w-7" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-xs text-gray-500">Application en développement...</p>
      </div>
    </div>
  );
};

// Composant Item d'application
interface AppIconProps {
  app: AppItem;
  onClick: () => void;
}

const AppIcon: React.FC<AppIconProps> = ({ app, onClick }) => {
  const truncateName = (name: string, maxLength: number = 12) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...";
    }
    return name;
  };

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer group"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
        <div className="text-white">{app.icon}</div>
      </div>
      <span className="text-[10px] text-gray-300 text-center font-medium">
        {truncateName(app.name)}
      </span>
    </div>
  );
};

// Composant principal
export default function CaisseRightPanel() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const apps: AppItem[] = [
    {
      id: "calculator",
      name: "Calculatrice",
      icon: <Calculator className="w-7 h-7" />,
      component: CalculatorApp,
    },
    {
      id: "invoice",
      name: "Facturation",
      icon: <FileText className="w-7 h-7" />,
      component: InvoiceApp,
    },
    // Ajouter d'autres applications ici
  ];

  const selectedAppData = apps.find((app) => app.id === selectedApp);

  return (
    <div className="h-full overflow-hidden relative bg-transparent backdrop-blur-xl">
      {/* Grille des applications */}
      <motion.div
        initial={false}
        animate={{ x: selectedApp ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 overflow-y-auto scrollbar-hide"
      >
        <div className="p-3">
          <h2 className="text-sm font-bold text-white mb-3">Applications</h2>
          <div className="grid grid-cols-3 gap-2">
            {apps.map((app) => (
              <AppIcon
                key={app.id}
                app={app}
                onClick={() => setSelectedApp(app.id)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contenu de l'application sélectionnée */}
      <motion.div
        initial={false}
        animate={{ x: selectedApp ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 p-3"
      >
        {selectedAppData && (
          <selectedAppData.component onBack={() => setSelectedApp(null)} />
        )}
      </motion.div>
    </div>
  );
}