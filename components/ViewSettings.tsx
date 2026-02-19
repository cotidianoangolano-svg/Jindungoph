
import React from 'react';
import { Icons } from '../constants';

interface ViewSettingsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ViewSettings: React.FC<ViewSettingsProps> = ({ isDarkMode, toggleDarkMode }) => {
  const sections = [
    { title: 'Conta', icon: Icons.User, items: ['Segurança', 'Privacidade', 'Informações Pessoais'] },
    { title: 'Notificações', icon: Icons.Bell, items: ['Push', 'Email', 'Sms'] },
    { title: 'Preferências', icon: Icons.Settings, items: ['Idioma', 'Acessibilidade', 'Consumo de Dados'] },
  ];

  return (
    <div className="flex flex-col h-full">
      <header className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-40 p-4 border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-xl font-bold">Configurações</h2>
      </header>

      <div className="p-4 space-y-8 overflow-y-auto">
        {/* Appearance Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
             <Icons.Search className="w-5 h-5 text-rose-600" />
             <h3 className="text-lg font-bold">Aparência</h3>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-rose-600">
                  <Icons.Home className="w-5 h-5" />
               </div>
               <div>
                  <p className="font-bold">Tema Escuro</p>
                  <p className="text-xs text-slate-500">Mudar entre modo claro e escuro</p>
               </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${isDarkMode ? 'bg-rose-600' : 'bg-slate-300'}`}
            >
              <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${isDarkMode ? 'left-7' : 'left-1'}`}></div>
            </button>
          </div>
        </section>

        {/* Categorized Sections */}
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.title}>
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-bold">{section.title}</h3>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
                {section.items.map(item => (
                  <button key={item} className="w-full text-left p-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex justify-between items-center group">
                    <span className="font-medium">{item}</span>
                    <Icons.Home className="w-4 h-4 text-slate-400 -rotate-90 group-hover:text-rose-600" />
                  </button>
                ))}
              </div>
            </section>
          );
        })}

        <button className="w-full py-4 text-rose-600 font-bold border border-rose-200 dark:border-rose-900/30 rounded-2xl hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors">
          Sair da Conta
        </button>
      </div>
      
      <div className="h-20"></div>
    </div>
  );
};

export default ViewSettings;
