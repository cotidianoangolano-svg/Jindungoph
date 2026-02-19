
import React from 'react';
import { ViewType } from '../types';
import { Icons, CURRENT_USER } from '../constants';

interface SidebarProps {
  activeTab: ViewType;
  setActiveTab: (tab: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'HOME', icon: Icons.Home, label: 'Início' },
    { id: 'SEARCH', icon: Icons.Search, label: 'Busca' },
    { id: 'NOTIFICATIONS', icon: Icons.Bell, label: 'Notificações' },
    { id: 'MESSAGES', icon: Icons.Mail, label: 'Mensagens' },
    { id: 'PROFILE', icon: Icons.User, label: 'Perfil' },
    { id: 'SETTINGS', icon: Icons.Settings, label: 'Configurações' },
  ];

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex items-center gap-2 mb-8 px-2" onClick={() => setActiveTab('HOME')} style={{ cursor: 'pointer' }}>
        <Icons.Chili className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-rose-600 hidden md:block">Jindungo</h1>
      </div>

      <nav className="space-y-2 flex-grow">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as ViewType)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-rose-50 dark:hover:bg-slate-900 group ${
                isActive ? 'text-rose-600 font-bold' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Icon className={`w-7 h-7 transition-transform group-hover:scale-110 ${isActive ? 'stroke-rose-600' : ''}`} />
              <span className="text-lg hidden md:block">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-full md:w-full flex items-center justify-center gap-2 mt-4 shadow-lg shadow-rose-200 dark:shadow-none">
        <Icons.Plus className="w-6 h-6" />
        <span className="hidden md:block">Novo Post</span>
      </button>

      <div className="mt-auto pt-4 flex items-center gap-3 px-2 border-t border-slate-100 dark:border-slate-800">
        <img src={CURRENT_USER.avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        <div className="hidden md:block">
          <p className="font-semibold text-sm truncate w-32">{CURRENT_USER.name}</p>
          <p className="text-xs text-slate-500 truncate w-32">{CURRENT_USER.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
