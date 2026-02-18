"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  Plus, 
  Trash2, 
  Edit, 
  Check, 
  GripVertical, 
  User, 
  Calendar, 
  Package, 
  DollarSign, 
  XCircle, 
  Clock, 
  CheckCircle,
  Filter,
  ChevronDown,
  X
} from "lucide-react";

const SaleItem = ({ sale, isActive, onClick, onDelete, onEdit, onStatusChange, dragHandleProps }) => {
  const totalAmount = sale.dataProduits.reduce((sum, p) => {
    const price = parseFloat(p.price.replace(',', '.').replace('€', '').trim());
    return sum + (price * p.quantity);
  }, 0);

  const totalItems = sale.dataProduits.reduce((sum, p) => sum + p.quantity, 0);

  const getStatusColor = () => {
    if (!sale.isValide) return "bg-red-100 text-red-700";
    if (!sale.isPaye) return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  const getStatusIcon = () => {
    if (!sale.isValide) return <XCircle className="w-3 h-3" />;
    if (!sale.isPaye) return <Clock className="w-3 h-3" />;
    return <CheckCircle className="w-3 h-3" />;
  };

  const getStatusText = () => {
    if (!sale.isValide) return "Annulée";
    if (!sale.isPaye) return "En attente";
    return "Payée";
  };

  return (
    <div
      onClick={onClick}
      className={`group relative bg-transparent backdrop-blur-sm rounded-lg transition-all duration-300 cursor-pointer mb-2${
        isActive 
          ? "border-blue-500 shadow-lg scale-[1.02]" 
          : "border-gray-200 hover:border-blue-300 hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-2 p-3">
        <div 
          {...dragHandleProps}
          className="cursor-grab active:cursor-grabbing text-white-400 hover:text-white-600 pt-1"
        >
          <GripVertical className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white-900 mb-1">
                Commande #{sale.numeroCommande}
              </h4>
              <p className="text-xs text-white-600 line-clamp-2">{sale.description}</p>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${getStatusColor()}`}>
              {getStatusIcon()}
              <span>{getStatusText()}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-white-400" />
              <span className="text-[10px] text-white-600">{sale.client}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-white-400" />
              <span className="text-[10px] text-white-600">{sale.dateCreation}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Package className="w-3 h-3 text-white-400" />
              <span className="text-[10px] text-white-600">{totalItems} article{totalItems > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-3 h-3 text-white-400" />
              <span className="text-[1rem] font-semibold text-blue-600">{totalAmount.toFixed(2)} €</span>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <span className="text-[9px] text-white-500">Paiement:</span>
            <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${
              sale.modePaiement === 'Espèces' ? 'bg-green-100 text-green-700' :
              sale.modePaiement === 'Carte' ? 'bg-blue-100 text-blue-700' :
              'bg-purple-100 text-purple-700'
            }`}>
              {sale.modePaiement}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(sale);
              }}
              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors text-[10px] font-medium"
            >
              <Edit className="w-3 h-3" />
              Modifier
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(sale);
              }}
              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors text-[10px] font-medium"
            >
              <Check className="w-3 h-3" />
              Valider
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(sale.id);
              }}
              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors text-[10px] font-medium"
            >
              <Trash2 className="w-3 h-3" />
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterDropdown = ({ label, options, value, onChange, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-[5px] py-[1px] rounded-md text-[10px] font-medium transition-all ${
          value 
            ? 'bg-blue-500 text-white shadow-sm' 
            : 'bg-transparent text-white-700 hover:text-gray-400'
        }`}
      >
        <Icon className="w-3 h-3 flex-shrink-0" />
        <span className="truncate max-w-[50px]">{value || label}</span>
        <ChevronDown className={`w-2.5 h-2.5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        {value && (
          <div 
            className="w-3 h-3 flex-shrink-0 flex items-center justify-center hover:bg-white/20 rounded-full -ml-0.5" 
            onClick={(e) => {
              e.stopPropagation();
              onChange(null);
            }}
          >
            <X className="w-2 h-2" />
          </div>
        )}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-1 w-44 bg-gray-500 backdrop-blur-xl rounded-sm shadow-xl border border-gray-200 z-20 h-fit overflow-y-auto">
            <div className="">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-1 text-[10px] transition-colors ${
                    value === option.value
                      ? 'bg-blue-50 text-gray-500 font-medium'
                      : 'text-white-700 hover:bg-white-500'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function CaisseLeftSidebar({ 
  sales, 
  setSales, 
  selectedSaleId, 
  setSelectedSaleId,
  allProducts 
}) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [clientFilter, setClientFilter] = useState(null);
  const [timeFilter, setTimeFilter] = useState(null);

  // Options de filtres
  const statusOptions = [
    { value: 'paid', label: 'Payée' },
    { value: 'pending', label: 'En attente' },
    { value: 'cancelled', label: 'Annulée' }
  ];

  const uniqueClients = useMemo(() => {
    const clients = [...new Set(sales.map(s => s.client))];
    return clients.map(client => ({ value: client, label: client }));
  }, [sales]);

  const timeOptions = [
    { value: '1h', label: 'Dernière heure' },
    { value: '3h', label: '3 dernières heures' },
    { value: '24h', label: 'Aujourd\'hui' },
    { value: '7d', label: 'Cette semaine' },
    { value: 'all', label: 'Tout afficher' }
  ];

  // Fonction de filtrage avec animation
  const filteredSales = useMemo(() => {
    let filtered = sales;

    // Filtre par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(sale => 
        sale.numeroCommande.toLowerCase().includes(query) ||
        sale.client.toLowerCase().includes(query) ||
        sale.description.toLowerCase().includes(query)
      );
    }

    // Filtre par statut
    if (statusFilter) {
      filtered = filtered.filter(sale => {
        if (statusFilter === 'paid') return sale.isPaye && sale.isValide;
        if (statusFilter === 'pending') return !sale.isPaye && sale.isValide;
        if (statusFilter === 'cancelled') return !sale.isValide;
        return true;
      });
    }

    // Filtre par client
    if (clientFilter) {
      filtered = filtered.filter(sale => sale.client === clientFilter);
    }

    // Filtre par temps
    if (timeFilter && timeFilter !== 'all') {
      const now = new Date();
      filtered = filtered.filter(sale => {
        const saleDate = new Date(sale.dateCreation.split(' ')[0].split('/').reverse().join('-'));
        const diffMs = now - saleDate;
        const diffHours = diffMs / (1000 * 60 * 60);
        const diffDays = diffMs / (1000 * 60 * 60 * 24);

        if (timeFilter === '1h') return diffHours <= 1;
        if (timeFilter === '3h') return diffHours <= 3;
        if (timeFilter === '24h') return diffDays <= 1;
        if (timeFilter === '7d') return diffDays <= 7;
        return true;
      });
    }

    return filtered;
  }, [sales, searchQuery, statusFilter, clientFilter, timeFilter]);

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    const newSales = [...sales];
    const draggedSale = newSales[draggedItem];
    newSales.splice(draggedItem, 1);
    newSales.splice(index, 0, draggedSale);
    
    setSales(newSales);
    setDraggedItem(index);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDeleteSale = (id) => {
    setSales(sales.filter(s => s.id !== id));
    if (selectedSaleId === id) {
      setSelectedSaleId(null);
    }
  };

  const handleCreateSale = () => {
    const newSale = {
      id: Date.now(),
      numeroCommande: `2024-${String(sales.length + 1).padStart(3, '0')}`,
      description: "Nouvelle Commande",
      client: "Nouveau client",
      dateCreation: new Date().toLocaleString('fr-FR'),
      dateLivraison: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR'),
      isValide: true,
      isPaye: false,
      modePaiement: "Espèces",
      montantTotal: 0,
      remise: 0,
      taxe: 20,
      adresseLivraison: "",
      telephone: "",
      email: "",
      notes: "",
      dataProduits: []
    };
    setSales([newSale, ...sales]);
    setSelectedSaleId(newSale.id);
  };

  const hasActiveFilters = statusFilter || clientFilter || timeFilter || searchQuery.trim();

  return (
    <div className="flex flex-col h-full backdrop-blur-xl">
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold text-white-900">Commandes</h2>
          <button
            onClick={handleCreateSale}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-1.5 rounded-lg hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Barre de recherche compacte */}
        <div className="relative mb-2">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-7 pr-2 py-1 border border-gray-300 rounded-md text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-600"
          />
        </div>

        {/* Filtres */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <Filter className="w-3 h-3 text-white-500" />
            <span className="text-[10px] font-medium text-white-700">Filtres</span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            <FilterDropdown
              label="Statut"
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
              icon={CheckCircle}
            />
            
            <FilterDropdown
              label="Client"
              options={uniqueClients}
              value={clientFilter}
              onChange={setClientFilter}
              icon={User}
            />
            
            <FilterDropdown
              label="Période"
              options={timeOptions}
              value={timeFilter}
              onChange={setTimeFilter}
              icon={Clock}
            />
          </div>

          {/* Indicateur de résultats */}
          {hasActiveFilters && (
            <div className="flex items-center justify-between pt-1.5 border-t border-gray-100">
              <span className="text-[10px] text-white-600">
                {filteredSales.length} résultat{filteredSales.length > 1 ? 's' : ''}
              </span>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter(null);
                  setClientFilter(null);
                  setTimeFilter(null);
                }}
                className="text-[10px] text-blue-600 hover:text-blue-700 font-medium"
              >
                Réinitialiser
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-hidden overflow-y-auto p-2.5 scrollbar-hide h-full">
        {filteredSales.length === 0 ? (
          <div className="text-center py-8 animate-fadeIn">
            <Package className="w-10 h-10 text-white-300 mx-auto mb-2" />
            <p className="text-xs text-white-500">Aucune Commande trouvée</p>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter(null);
                  setClientFilter(null);
                  setTimeFilter(null);
                }}
                className="mt-2 text-[10px] text-blue-600 hover:text-blue-700"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        ) : (
          filteredSales.map((sale, index) => (
            <div
              key={sale.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`animate-fadeIn ${draggedItem === index ? "opacity-50" : ""}`}
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both'
              }}
            >
              <SaleItem
                sale={sale}
                isActive={selectedSaleId === sale.id}
                onClick={() => setSelectedSaleId(sale.id)}
                onDelete={handleDeleteSale}
                onEdit={(sale) => console.log('Edit', sale)}
                onStatusChange={(sale) => {
                  setSales(sales.map(s => 
                    s.id === sale.id 
                      ? { ...s, isPaye: !s.isPaye }
                      : s
                  ));
                }}
                dragHandleProps={{
                  onMouseDown: (e) => e.stopPropagation()
                }}
              />
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}