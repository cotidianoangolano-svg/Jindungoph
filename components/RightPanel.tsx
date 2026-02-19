
import React from 'react';
import { Icons, MOCK_USERS } from '../constants';

const RightPanel: React.FC = () => {
  const trends = [
    { tag: '#JindungoApp', posts: '125K' },
    { tag: '#CulináriaPicante', posts: '85K' },
    { tag: '#AngolaSocial', posts: '42K' },
    { tag: '#WebDevelopment', posts: '12K' },
    { tag: '#BrasilDigital', posts: '33K' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4">
        <h3 className="text-xl font-bold mb-4">O que está em alta</h3>
        <div className="space-y-4">
          {trends.map((trend) => (
            <div key={trend.tag} className="flex justify-between items-center group cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors">
              <div>
                <p className="text-xs text-slate-500">Em alta no Jindungo</p>
                <p className="font-bold text-rose-600">{trend.tag}</p>
                <p className="text-xs text-slate-500">{trend.posts} posts</p>
              </div>
              <Icons.MoreHorizontal className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        <button className="text-rose-600 text-sm mt-4 hover:underline">Mostrar mais</button>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4">
        <h3 className="text-xl font-bold mb-4">Quem seguir</h3>
        <div className="space-y-4">
          {MOCK_USERS.slice(0, 3).map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt={user.name} />
                <div className="w-24">
                  <p className="font-bold text-sm truncate">{user.name}</p>
                  <p className="text-xs text-slate-500 truncate">{user.username}</p>
                </div>
              </div>
              <button className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-bold px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                Seguir
              </button>
            </div>
          ))}
        </div>
        <button className="text-rose-600 text-sm mt-4 hover:underline">Mostrar mais</button>
      </div>

      <div className="px-4 text-xs text-slate-500 flex flex-wrap gap-x-4 gap-y-2">
        <a href="#" className="hover:underline">Termos de Serviço</a>
        <a href="#" className="hover:underline">Privacidade</a>
        <a href="#" className="hover:underline">Cookies</a>
        <a href="#" className="hover:underline">Publicidade</a>
        <span>© 2024 Jindungo Inc.</span>
      </div>
    </div>
  );
};

export default RightPanel;
