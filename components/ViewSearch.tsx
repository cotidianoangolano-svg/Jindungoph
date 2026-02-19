
import React, { useState } from 'react';
import { Icons, MOCK_USERS } from '../constants';

const ViewSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'Tudo' | 'Pessoas' | 'Tags'>('Tudo');

  const filteredUsers = MOCK_USERS.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <header className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-40 p-4 border-b border-slate-100 dark:border-slate-800 space-y-4">
        <div className="relative group">
          <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-rose-600 transition-colors" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar no Jindungo..."
            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all"
          />
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {['Tudo', 'Pessoas', 'Tags', 'Vídeos', 'Fotos'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                filter === tab ? 'bg-rose-600 text-white shadow-md shadow-rose-200' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-grow p-4">
        {!searchTerm && (
          <div className="text-center py-20 text-slate-400">
            <Icons.Search className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-xl font-medium">Encontre as conversas mais picantes</p>
            <p className="text-sm">Busque por usuários, hashtags ou tópicos do momento.</p>
          </div>
        )}

        {searchTerm && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Resultados para "{searchTerm}"</h3>
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <div key={user.id} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} className="w-12 h-12 rounded-full object-cover" alt={user.name} />
                    <div>
                      <p className="font-bold">{user.name}</p>
                      <p className="text-sm text-slate-500">{user.username}</p>
                    </div>
                  </div>
                  <button className="bg-rose-600 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-rose-700">Seguir</button>
                </div>
              ))
            ) : (
              <p className="text-center py-10 text-slate-500">Nenhum resultado encontrado.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewSearch;
