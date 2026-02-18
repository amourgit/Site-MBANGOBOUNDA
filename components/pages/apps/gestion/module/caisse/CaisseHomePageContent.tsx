"use client";

import React, { useState } from "react";
import BasePage from "@/components/layouts/base-page";
import CaisseSalesMainContent from "./CaisseHomeMainContent";
import CaisseLeftSidebar from "./CaisseHomeLeftContent";
import LayoutBig from "@/components/layouts/BaseContent";
import { CompactTopBar } from "@/components/topbar";
import CaisseRightPanel from "./CaisseHomeRightContent";

export default function CaisseHomePageContent() {
  // Tous les produits disponibles
  const allProducts = [
    {
      id: 1,
      name: 'Acer 17" LED',
      ref: "V176Lbmd",
      price: "143,40 €",
      stock: 12,
      cover: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "ASUS G750JW-T4071H",
      ref: "T4071H",
      price: "1542,84 €",
      stock: 5,
      cover: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Razer Taipan",
      ref: "Razer Taipan (gr...)",
      price: "83,72 €",
      stock: 25,
      cover: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Razer DeathStalker",
      ref: "Razer DeathStalk...",
      price: "95,56 €",
      stock: 18,
      cover: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Razer DeathAdder 2013",
      ref: "Razer DeathAdd...",
      price: "82,51 €",
      stock: 30,
      cover: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Razer Anansi",
      ref: "Razer Anansi (az...)",
      price: "118,40 €",
      stock: 15,
      cover: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Logitech G502",
      ref: "Logitech G502",
      price: "79,99 €",
      stock: 20,
      cover: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Corsair K95",
      ref: "Corsair K95 RGB",
      price: "199,99 €",
      stock: 8,
      cover: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      name: 'Dell UltraSharp 27"',
      ref: "U2720Q",
      price: "549,99 €",
      stock: 6,
      cover: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop"
    },
    {
      id: 10,
      name: "SteelSeries Arctis 7",
      ref: "Arctis 7",
      price: "159,99 €",
      stock: 15,
      cover: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop"
    },
    {
      id: 11,
      name: "HyperX Cloud II",
      ref: "Cloud II Gaming",
      price: "99,99 €",
      stock: 25,
      cover: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop"
    },
    {
      id: 12,
      name: "Logitech C920",
      ref: "C920 HD Pro",
      price: "89,99 €",
      stock: 18,
      cover: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop"
    }
  ];

  // États partagés entre Left et Main
  const [sales, setSales] = useState([
    {
      id: 1,
      numeroVente: "2024-001",
      description: "Vente matériel gaming pour client professionnel",
      client: "Jean Dupont",
      dateCreation: "15/01/2024 14:30",
      dateLivraison: "20/01/2024",
      isValide: true,
      isPaye: true,
      modePaiement: "Carte",
      montantTotal: 0,
      remise: 5,
      taxe: 20,
      adresseLivraison: "12 Rue de la Paix, 75001 Paris",
      telephone: "+33 6 12 34 56 78",
      email: "jean.dupont@email.com",
      notes: "Client régulier, livraison express demandée",
      dataProduits: [
        { ...allProducts[0], quantity: 2 },
        { ...allProducts[2], quantity: 1 }
      ]
    },
    {
      id: 2,
      numeroVente: "2024-002",
      description: "Commande équipement bureau complet",
      client: "Marie Martin",
      dateCreation: "16/01/2024 09:15",
      dateLivraison: "22/01/2024",
      isValide: true,
      isPaye: false,
      modePaiement: "Virement",
      montantTotal: 0,
      remise: 10,
      taxe: 20,
      adresseLivraison: "45 Avenue des Champs, 75008 Paris",
      telephone: "+33 6 98 76 54 32",
      email: "marie.martin@email.com",
      notes: "Paiement sous 30 jours",
      dataProduits: [
        { ...allProducts[1], quantity: 1 },
        { ...allProducts[3], quantity: 2 }
      ]
    },
    {
      id: 3,
      numeroVente: "2024-003",
      description: "Accessoires gaming pour tournoi esport",
      client: "Pierre Dubois",
      dateCreation: "17/01/2024 16:45",
      dateLivraison: "19/01/2024",
      isValide: false,
      isPaye: false,
      modePaiement: "Espèces",
      montantTotal: 0,
      remise: 0,
      taxe: 20,
      adresseLivraison: "78 Boulevard Saint-Michel, 75006 Paris",
      telephone: "+33 7 11 22 33 44",
      email: "pierre.dubois@email.com",
      notes: "Vente annulée - stock insuffisant",
      dataProduits: [
        { ...allProducts[4], quantity: 5 },
        { ...allProducts[5], quantity: 3 }
      ]
    }
  ]);

  const [selectedSaleId, setSelectedSaleId] = useState(null);

  // Fonction pour gérer les changements de quantité
  const handleQuantityChange = (productId, newQuantity) => {
    if (!selectedSaleId) return;

    setSales(sales.map(sale => {
      if (sale.id === selectedSaleId) {
        const existingProduct = sale.dataProduits.find(p => p.id === productId);
        const product = allProducts.find(p => p.id === productId);
        
        // Si quantité = 0, retirer le produit
        if (newQuantity === 0) {
          return {
            ...sale,
            dataProduits: sale.dataProduits.filter(p => p.id !== productId)
          };
        }
        
        // Si produit existe déjà, mettre à jour sa quantité
        if (existingProduct) {
          return {
            ...sale,
            dataProduits: sale.dataProduits.map(p =>
              p.id === productId ? { ...p, quantity: newQuantity } : p
            )
          };
        } 
        // Sinon, ajouter le produit
        else {
          return {
            ...sale,
            dataProduits: [...sale.dataProduits, { ...product, quantity: newQuantity }]
          };
        }
      }
      return sale;
    }));
  };

  const selectedSale = sales.find(s => s.id === selectedSaleId);

  return (
    <LayoutBig>
      <BasePage
        className="border-t-[1px] border-l-[1px] border-gray-300 rounded-t-lg rounded-l-lg"
        header={
          null
        }
        sidebar={
          <CaisseLeftSidebar
            sales={sales}
            setSales={setSales}
            selectedSaleId={selectedSaleId}
            setSelectedSaleId={setSelectedSaleId}
            allProducts={allProducts}
          />
        }
        main={
          <CaisseSalesMainContent
            selectedSale={selectedSale}
            allProducts={allProducts}
            onQuantityChange={handleQuantityChange}
          />
        }
        rightPanel={<CaisseRightPanel/>}
        sidebarWidth={300}
        sidebarMinWidth={0}
        sidebarMaxWidth={300}
        rightPanelWidth={300}
        rightPanelMinWidth={0}
        rightPanelMaxWidth={300}
        mainMinWidth={300}
        background={
          <>
            <div
              className="absolute inset-0 bg-cover bg-center -z-20"
              style={{
                backgroundImage: "url('/landscape.png')",
                opacity: 0.7,
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30 -z-10"></div>
          </>
        }
      />
    </LayoutBig>
  );
}