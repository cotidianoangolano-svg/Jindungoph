
import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import ViewHome from './components/ViewHome';
import ViewSearch from './components/ViewSearch';
import ViewNotifications from './components/ViewNotifications';
import ViewMessages from './components/ViewMessages';
import ViewProfile from './components/ViewProfile';
import ViewSettings from './components/ViewSettings';
import RightPanel from './components/RightPanel';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewType>('HOME');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('bg-slate-950', 'text-white');
      document.body.classList.remove('bg-white', 'text-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.classList.add('bg-white', 'text-slate-900');
      document.body.classList.remove('bg-slate-950', 'text-white');
    }
  }, [isDarkMode]);

  const renderContent = () => {
    switch (activeTab) {
      case 'HOME': return <ViewHome />;
      case 'SEARCH': return <ViewSearch />;
      case 'NOTIFICATIONS': return <ViewNotifications />;
      case 'MESSAGES': return <ViewMessages />;
      case 'PROFILE': return <ViewProfile />;
      case 'SETTINGS': return <ViewSettings isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />;
      default: return <ViewHome />;
    }
  };

  return (
    <div className={`min-h-screen flex max-w-[1440px] mx-auto transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      {/* Sidebar Navigation */}
      <div className="w-20 md:w-64 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 sticky top-0 h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col md:flex-row min-w-0">
        <div className="flex-grow border-r border-slate-200 dark:border-slate-800 max-w-2xl w-full mx-auto md:mx-0">
          {renderContent()}
        </div>

        {/* Right Panel - Hidden on small screens or Messaging */}
        {activeTab !== 'MESSAGES' && activeTab !== 'SETTINGS' && (
          <div className="hidden lg:block w-80 p-4 sticky top-0 h-screen overflow-y-auto">
            <RightPanel />
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation (Optional but good for responsiveness) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center z-50">
        <button onClick={() => setActiveTab('HOME')} className={`p-2 rounded-full ${activeTab === 'HOME' ? 'text-rose-600' : 'text-slate-500'}`}><Icons.Home className="w-6 h-6" /></button>
        <button onClick={() => setActiveTab('SEARCH')} className={`p-2 rounded-full ${activeTab === 'SEARCH' ? 'text-rose-600' : 'text-slate-500'}`}><Icons.Search className="w-6 h-6" /></button>
        <button onClick={() => setActiveTab('NOTIFICATIONS')} className={`p-2 rounded-full ${activeTab === 'NOTIFICATIONS' ? 'text-rose-600' : 'text-slate-500'}`}><Icons.Bell className="w-6 h-6" /></button>
        <button onClick={() => setActiveTab('MESSAGES')} className={`p-2 rounded-full ${activeTab === 'MESSAGES' ? 'text-rose-600' : 'text-slate-500'}`}><Icons.Mail className="w-6 h-6" /></button>
      </div>
    </div>
  );
};

import { Icons } from './constants';
export default App;
