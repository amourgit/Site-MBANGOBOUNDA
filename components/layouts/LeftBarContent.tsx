import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard,
  FileText,
  Users,
  Mail,
  Calendar,
  CheckSquare,
  FolderOpen,
  Clock,
  ShoppingCart,
  BarChart3,
  Settings,
  Code,
  Globe,
  Video,
  ChevronRight,
  ChevronLeft,
  Search
} from 'lucide-react';

interface LeftbarProps {
  className?: string;
}

const Leftbar: React.FC<LeftbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Tableau de bord', color: 'text-blue-400', active: false, path: '/dashboard' },
    { icon: FileText, label: 'Flux d\'activité', color: 'text-gray-400', active: false, path: '/activity' },
    { icon: Users, label: 'Groupes de travail', color: 'text-green-400', active: false, path: '/groups' },
    { icon: Mail, label: 'Messagerie', color: 'text-red-400', active: false, path: '/messages' },
    { icon: Calendar, label: 'Calendrier', color: 'text-blue-500', active: false, path: '/calendar' },
    { icon: CheckSquare, label: 'Tâches', color: 'text-purple-400', active: false, path: '/tasks' },
    { icon: FolderOpen, label: 'Disque', color: 'text-yellow-500', active: false, path: '/drive' },
    { icon: Clock, label: 'Temps de travail', color: 'text-teal-400', active: false, path: '/time-tracking' },
    { icon: ShoppingCart, label: 'CRM', color: 'text-orange-400', active: false, path: '/crm' },
    { icon: BarChart3, label: 'Rapports', color: 'text-indigo-400', active: false, path: '/reports' },
    { icon: Globe, label: 'Sites', color: 'text-cyan-400', active: true, path: '/sites' },
    { icon: Video, label: 'Webinaires', color: 'text-pink-400', active: false, path: '/webinars' },
    { icon: Code, label: 'Développeur', color: 'text-gray-500', active: false, path: '/developer' },
    { icon: Settings, label: 'Paramètres', color: 'text-gray-600', active: false, path: '/settings' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
    { icon: Search, label: 'Recherche', color: 'text-blue-300', active: false, path: '/search' },
  ];

  return (
    <>

      {/* Leftbar */}
      <div
        className={`fixed top-0 pt-[40px] left-0 bottom-0 bg-transparent shadow-2xl z-50 transition-all duration-300 ease-in-out overflow-hidden ${className}`}
        style={{
          width: isOpen ? '240px' : '40px',
          transition: 'width 0.3s ease-in-out',
          backdropFilter: isOpen ? 'blur(50px)' : 'none',
        }}
      >
        {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-[10px] left-2 bg-transparent text-white p-2 rounded-r-lg z-50 transition-all duration-300 shadow-lg"
      >
        {isOpen ? (
          <ChevronLeft className="w-3 h-3" />
        ) : (
          <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
            <rect y="2" width="20" height="2" />
            <rect y="9" width="20" height="2" />
            <rect y="16" width="20" height="2" />
          </svg>
        )}
      </button>
        <div className="h-full flex flex-col py-2 overflow-y-auto no-scrollbar scrollbar-hide">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.path}
                className={`w-full flex items-center gap-4 px-2 py-2 hover:bg-white/10 transition-all duration-200 ${
                  item.active ? 'bg-white/20 border-l-4 border-cyan-400' : 'border-l-4 border-transparent'
                }`}
              >
                <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                <span
                  className={`text-white text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 w-0'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
              
              {/* Tooltip when closed */}
              {!isOpen && (
                <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1.5 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg z-50">
                  {item.label}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section - Only visible when open */}
        {isOpen && (
          <div className="absolute bottom-4 left-0 right-0 px-4 transition-opacity duration-300">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-white/70 text-xs mb-2">Espace de stockage</p>
              <div className="w-full bg-white/20 rounded-full h-2 mb-1">
                <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-white/60 text-xs">6.5 GB / 10 GB utilisés</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Leftbar;