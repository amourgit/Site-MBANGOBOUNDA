import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Image, Music, Video, FileText, Settings, Chrome, Mail, Calendar, Calculator, Camera, Code } from 'lucide-react';

const applications = [
  {
    id: 1,
    name: "Documents",
    icon: Folder,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    description: "Accédez à tous vos documents",
    lastOpened: "Il y a 2 heures",
    size: "1.2 GB"
  },
  {
    id: 2,
    name: "Photos",
    icon: Image,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    description: "Gérez vos photos et vidéos",
    lastOpened: "Hier",
    size: "8.5 GB"
  },
  {
    id: 3,
    name: "Musique",
    icon: Music,
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
    description: "Votre bibliothèque musicale",
    lastOpened: "Il y a 5 minutes",
    size: "3.4 GB"
  },
  {
    id: 4,
    name: "Vidéos",
    icon: Video,
    color: "bg-gradient-to-br from-red-400 to-red-600",
    description: "Collection de vidéos",
    lastOpened: "Il y a 3 jours",
    size: "15.2 GB"
  },
  {
    id: 5,
    name: "Notes",
    icon: FileText,
    color: "bg-gradient-to-br from-green-400 to-green-600",
    description: "Prenez des notes rapidement",
    lastOpened: "Aujourd'hui",
    size: "42 MB"
  },
  {
    id: 6,
    name: "Paramètres",
    icon: Settings,
    color: "bg-gradient-to-br from-gray-500 to-gray-700",
    description: "Configurez votre système",
    lastOpened: "Il y a 1 semaine",
    size: "125 MB"
  },
  {
    id: 7,
    name: "Navigateur",
    icon: Chrome,
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    description: "Naviguez sur le web",
    lastOpened: "Il y a 1 minute",
    size: "856 MB"
  },
  {
    id: 8,
    name: "Mail",
    icon: Mail,
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    description: "Gérez vos emails",
    lastOpened: "Il y a 30 minutes",
    size: "2.1 GB"
  },
  {
    id: 9,
    name: "Calendrier",
    icon: Calendar,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    description: "Planifiez vos événements",
    lastOpened: "Ce matin",
    size: "18 MB"
  },
  {
    id: 10,
    name: "Calculatrice",
    icon: Calculator,
    color: "bg-gradient-to-br from-teal-400 to-teal-600",
    description: "Effectuez des calculs",
    lastOpened: "Il y a 2 jours",
    size: "5 MB"
  },
  {
    id: 11,
    name: "Caméra",
    icon: Camera,
    color: "bg-gradient-to-br from-indigo-400 to-purple-600",
    description: "Prenez des photos",
    lastOpened: "Il y a 4 jours",
    size: "112 MB"
  }
];

const AppCard = ({ app, index, size = "small" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-2",
    large: "col-span-2 row-span-2",
    wide: "col-span-2 row-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={`relative ${sizeClasses[size]}`}
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-full rounded-2xl overflow-hidden group shadow-lg"
      >
        <div className={`w-full h-full ${app.color} flex items-center justify-center`}>
          <app.icon className="w-1/3 h-1/3 text-white opacity-90" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3">
          <span className="text-sm font-medium text-white">
            {app.name}
          </span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: -20,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="absolute z-50 -top-24 right-0 pointer-events-none"
            style={{ whiteSpace: "nowrap" }}
          >
            <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl min-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center shadow-lg`}>
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">{app.name}</h3>
                  <p className="text-white/60 text-xs">{app.size}</p>
                </div>
              </div>
              
              <div className="space-y-2 border-t border-white/10 pt-3">
                <p className="text-white/80 text-sm">{app.description}</p>
                <p className="text-white/50 text-xs">
                  Dernière ouverture: {app.lastOpened}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const applicationLayout = [
  { app: applications[0], size: "small" },
  { app: applications[1], size: "small" },
  { app: applications[2], size: "small" },
  { app: applications[3], size: "medium" },
  { app: applications[4], size: "small" },
  { app: applications[5], size: "large" },
  { app: applications[6], size: "medium" },
  { app: applications[7], size: "wide" },
  { app: applications[8], size: "small" },
  { app: applications[9], size: "small" },
  { app: applications[10], size: "medium" },
];

export default function AppsHomeMainContent() {
  return (
    <div className="bg-transparent p-8 px-[1%]">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8 drop-shadow-lg"
        >
          Bureau
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[150px] gap-4">
          {applicationLayout.map((item, index) => (
            <AppCard key={item.app.id} app={item.app} index={index} size={item.size} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <h2 className="text-white text-lg font-semibold mb-2">
            Applications récentes
          </h2>
          <p className="text-white/70 text-sm">
            Cliquez sur une application pour l'ouvrir. Survolez pour voir plus de détails.
          </p>
        </motion.div>
      </div>
    </div>
  );
}