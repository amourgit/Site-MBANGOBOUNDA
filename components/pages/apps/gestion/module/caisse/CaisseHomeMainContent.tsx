"use client";

import React, { useState, useEffect } from "react";
import { Search, Plus, Minus, Package, Clock, LogOut, AlertCircle, DollarSign, X } from "lucide-react";
import { useToast } from "@/components/ui/toast";

const ProductCard = ({ product, quantity, onIncrement, onDecrement }) => {
  const { toast } = useToast();

  const handleIncrement = () => {
    if (quantity >= product.stock) {
      toast({
        title: "Stock insuffisant",
        description: `Stock disponible: ${product.stock} unité${product.stock > 1 ? 's' : ''}`,
        variant: "warning",
      });
      return;
    }
    onIncrement();
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer min-w-[180px] max-w-[220px] w-full">
      <div className="relative h-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${product.cover})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-transparent backdrop-blur-xl px-1 py-0 rounded-sm shadow-lg">
          <span className="text-[9px] font-bold text-white">Stock: {product.stock}</span>
        </div>
      </div>

      <div className="p-2">
        <h4 className="text-[11px] font-semibold text-gray-900 mb-0.5 line-clamp-2 h-[32px]">
          {product.name}
        </h4>
        <p className="text-[9px] text-gray-500 mb-1">Réf : {product.ref}</p>
        <p className="text-xs font-bold text-blue-600 mb-2">{product.price}</p>

        <div className="flex items-center justify-between gap-1.5">
          <button
            onClick={onDecrement}
            disabled={quantity === 0}
            className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white p-0.5 rounded hover:from-red-600 hover:to-red-700 active:scale-95 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Minus className="w-3 h-3 mx-auto" strokeWidth={3} />
          </button>
          
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded py-0.5 px-1.5 text-center shadow-inner">
            <span className="text-xs font-bold text-blue-700">{quantity}</span>
          </div>
          
          <button
            onClick={handleIncrement}
            disabled={quantity >= product.stock}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white p-0.5 rounded hover:from-green-600 hover:to-green-700 active:scale-95 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Plus className="w-3 h-3 mx-auto" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectedProductCard = ({ product, quantity, onRemove }) => {
  return (
    <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.cover})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Quantity Badge */}
      <div className="absolute top-1 right-1 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
        <span className="text-[10px] font-bold">{quantity}</span>
      </div>

      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="absolute top-1 left-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
      >
        <X className="w-3 h-3" strokeWidth={3} />
      </button>

      {/* Product Name on Hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[8px] text-white font-medium truncate">{product.name}</p>
      </div>
    </div>
  );
};

const ShiftTimeDisplay = ({ startTime, endTime, cashierName, onEndShift }) => {
  const { toast } = useToast();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isInShift = () => {
    const now = currentTime;
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTotalMinutes = currentHour * 60 + currentMinute;

    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    if (endTotalMinutes < startTotalMinutes) {
      return currentTotalMinutes >= startTotalMinutes || currentTotalMinutes <= endTotalMinutes;
    }
    return currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes;
  };

  const inShift = isInShift();

  const handleEndShiftClick = () => {
    setShowConfirmDialog(true);
  };

  const confirmEndShift = () => {
    setShowConfirmDialog(false);
    onEndShift();
    toast({
      title: "Service terminé",
      description: `Le service de ${cashierName} a été clôturé avec succès`,
      variant: "success",
    });
  };

  const cancelEndShift = () => {
    setShowConfirmDialog(false);
    toast({
      title: "Action annulée",
      description: "Le service continue normalement",
      variant: "default",
    });
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 transition-all ${
          inShift 
            ? 'bg-green-50 border-green-500 text-green-700' 
            : 'bg-red-50 border-red-500 text-red-700'
        }`}>
          <Clock className="w-4 h-4" />
          <div className="flex flex-col">
            <span className="text-[9px] font-medium opacity-80">Créneau de service</span>
            <span className="text-xs font-bold">{startTime} - {endTime}</span>
          </div>
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            inShift ? 'bg-green-500' : 'bg-red-500'
          }`} />
        </div>

        <button
          onClick={handleEndShiftClick}
          className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-xs font-medium">Fin de service</span>
        </button>

        <div className="ml-auto bg-white text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-50 transition-colors">
          {cashierName}
        </div>
      </div>

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 animate-scaleIn">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Confirmer la fin de service
                </h3>
                <p className="text-sm text-gray-600">
                  Êtes-vous sûr de vouloir terminer votre service maintenant ?
                  {!inShift && (
                    <span className="block mt-2 text-orange-600 font-medium">
                      Attention : Votre créneau horaire n'est pas encore terminé.
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={cancelEndShift}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
              >
                Annuler
              </button>
              <button
                onClick={confirmEndShift}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium text-sm shadow-md"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default function CaisseSalesMainContent({ 
  selectedSale, 
  allProducts, 
  onQuantityChange 
}) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const cashierInfo = {
    name: "Alain Meveillon",
    shiftStart: "18:00",
    shiftEnd: "02:00"
  };

  const tags = [
    { name: "clavier", color: "bg-blue-500" },
    { name: "claque-dur", color: "bg-blue-500" },
    { name: "ecran", color: "bg-blue-500" },
    { name: "gamer", color: "bg-blue-500" },
    { name: "pc-fixe", color: "bg-blue-500" },
    { name: "pc-portable", color: "bg-blue-500" },
    { name: "souris", color: "bg-blue-500" }
  ];

  const getProductQuantity = (productId) => {
    if (!selectedSale) return 0;
    const product = selectedSale.dataProduits.find(p => p.id === productId);
    return product ? product.quantity : 0;
  };

  const handleIncrement = (productId, currentQuantity, maxStock) => {
    if (currentQuantity < maxStock) {
      onQuantityChange(productId, currentQuantity + 1);
    }
  };

  const handleDecrement = (productId, currentQuantity) => {
    if (currentQuantity > 0) {
      onQuantityChange(productId, currentQuantity - 1);
    }
  };

  const handleRemoveProduct = (productId) => {
    onQuantityChange(productId, 0);
  };

  const handleEndShift = () => {
    console.log("Service terminé pour", cashierInfo.name);
  };

  // Produits sélectionnés avec quantité > 0
  const selectedProducts = selectedSale 
    ? selectedSale.dataProduits.filter(p => p.quantity > 0)
    : [];

  return (
    <div className="h-full flex flex-col bg-transparent backdrop-blur-sm relative">
      <div className="bg-gradient-to-t from-gray-900 to-gray-800 border-t-2 border-blue-500 px-4 py-1">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-base font-semibold text-white">
            {selectedSale ? `Commande #${selectedSale.numeroCommande} - ${selectedSale.client}` : 'Sélectionnez une Commande'}
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Recherche de produits par nom, référence ou code barre"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded text-xs border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
              disabled={!selectedSale}
            />
          </div>
          <div className="">
            <ShiftTimeDisplay
              startTime={cashierInfo.shiftStart}
              endTime={cashierInfo.shiftEnd}
              cashierName={cashierInfo.name}
              onEndShift={handleEndShift}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-28">
        {!selectedSale ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white-900 mb-2">Aucune Commande sélectionnée</h3>
              <p className="text-sm text-white-600">Sélectionnez ou créez une Commande pour gérer les produits</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center scrollbar-hide ">
            {allProducts.map((product) => {
              const quantity = getProductQuantity(product.id);
              return (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  quantity={quantity}
                  onIncrement={() => handleIncrement(product.id, quantity, product.stock)}
                  onDecrement={() => handleDecrement(product.id, quantity)}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Barre des produits sélectionnés */}
      {selectedSale && selectedProducts.length > 0 && (
        <div className="fixed bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-gray-800 border-t-2 border-blue-500 shadow-2xl z-40">
          <div className="px-2 py-2">
            {/* En-tête avec produits sélectionnés et statistiques */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Produits sélectionnés</h3>
                  <p className="text-[0.625rem] text-gray-400">
                    {selectedProducts.length} produit{selectedProducts.length > 1 ? 's' : ''} • {selectedProducts.reduce((sum, p) => sum + p.quantity, 0)} article{selectedProducts.reduce((sum, p) => sum + p.quantity, 0) > 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Statistiques alignées horizontalement */}
              <div className="flex items-center gap-4">
                {/* Total Articles */}
                <div className="text-center">
                  <p className="text-[0.625rem] text-gray-400 mb-0.5">Total Articles</p>
                  <p className="text-[0.875rem] font-bold text-white">
                    {selectedSale.dataProduits.reduce((sum, p) => sum + p.quantity, 0)}
                  </p>
                  <p className="text-[0.563rem] text-green-400">
                    {selectedSale.dataProduits.length} produit{selectedSale.dataProduits.length > 1 ? 's' : ''}
                  </p>
                </div>

                {/* Montant HT */}
                <div className="text-center">
                  <p className="text-[0.625rem] text-gray-400 mb-0.5">Montant HT</p>
                  <p className="text-[0.875rem] font-bold text-white">
                    {selectedSale.dataProduits.reduce((sum, p) => {
                      const price = parseFloat(p.price.replace(',', '.').replace('€', '').trim());
                      return sum + (price * p.quantity);
                    }, 0).toFixed(0)}€
                  </p>
                  <p className="text-[0.563rem] text-blue-400">
                    +{selectedSale.taxe}% TVA
                  </p>
                </div>

                {/* Remise */}
                <div className="text-center">
                  <p className="text-[0.625rem] text-gray-400 mb-0.5">Remise</p>
                  <div className="flex items-center justify-center gap-1">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={selectedSale.remise}
                      onChange={(e) => {
                        const newRemise = Math.max(0, Math.min(100, parseInt(e.target.value) || 0));
                        console.log('Nouvelle remise:', newRemise);
                      }}
                      className="w-12 bg-gray-700 text-white font-bold text-[0.813rem] px-1.5 py-0.5 rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 text-center"
                    />
                    <span className="text-[0.875rem] font-bold text-white">%</span>
                  </div>
                  <p className="text-[0.563rem] text-purple-400">
                    -{(selectedSale.dataProduits.reduce((sum, p) => {
                      const price = parseFloat(p.price.replace(',', '.').replace('€', '').trim());
                      return sum + (price * p.quantity);
                    }, 0) * selectedSale.remise / 100).toFixed(0)}€
                  </p>
                </div>

                {/* Total TTC */}
                <div className="text-center border-l border-gray-600 pl-4">
                  <p className="text-[0.625rem] text-gray-400 mb-0.5">Total TTC</p>
                  <p className="text-[1.125rem] font-bold text-white">
                    {(() => {
                      const totalHT = selectedSale.dataProduits.reduce((sum, p) => {
                        const price = parseFloat(p.price.replace(',', '.').replace('€', '').trim());
                        return sum + (price * p.quantity);
                      }, 0);
                      const afterDiscount = totalHT * (1 - selectedSale.remise / 100);
                      const totalTTC = afterDiscount * (1 + selectedSale.taxe / 100);
                      return totalTTC.toFixed(2);
                    })()}€
                  </p>
                  <p className="text-[0.563rem] text-pink-400">
                    Livraison: {selectedSale.dateLivraison}
                  </p>
                </div>
              </div>
            </div>

            {/* Liste des produits sélectionnés */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {selectedProducts.map((product) => (
                <SelectedProductCard
                  key={product.id}
                  product={product}
                  quantity={product.quantity}
                  onRemove={() => handleRemoveProduct(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}