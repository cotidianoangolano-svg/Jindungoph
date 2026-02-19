
import React, { useState } from 'react';
import { Icons, CURRENT_USER, MOCK_POSTS } from '../constants';
import PostCard from './PostCard';

const ViewProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const user = CURRENT_USER;

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-40 p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-6">
        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full transition-colors"><Icons.Home className="w-5 h-5 rotate-270" /></button>
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-xs text-slate-500">{user.posts} posts</p>
        </div>
      </header>

      <div className="relative">
        {/* Banner */}
        <div className="h-40 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700"></div>
        {/* Profile Avatar */}
        <div className="px-4 -mt-16 flex justify-between items-end mb-4">
          <img src={user.avatar} className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-950 object-cover" alt="Avatar" />
          <button className="mb-2 border border-slate-300 dark:border-slate-700 font-bold px-6 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
            Editar Perfil
          </button>
        </div>
      </div>

      <div className="px-4 mb-6">
        <h3 className="text-xl font-bold">{user.name}</h3>
        <p className="text-slate-500 mb-4">{user.username}</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed whitespace-pre-line">{user.bio}</p>
        
        <div className="flex gap-6 text-sm">
          <div className="flex gap-1 hover:underline cursor-pointer">
            <span className="font-bold">{user.following}</span>
            <span className="text-slate-500">Seguindo</span>
          </div>
          <div className="flex gap-1 hover:underline cursor-pointer">
            <span className="font-bold">{user.followers}</span>
            <span className="text-slate-500">Seguidores</span>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="flex border-b border-slate-100 dark:border-slate-800 sticky top-[73px] bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-30">
        {['Posts', 'Respostas', 'Destaques', 'Curtidas'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-grow py-4 text-sm font-bold relative transition-colors hover:bg-slate-50 dark:hover:bg-slate-900 ${
              activeTab === tab ? 'text-slate-950 dark:text-white' : 'text-slate-500'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-rose-600 rounded-full mx-auto w-12 animate-in slide-in-from-left"></div>
            )}
          </button>
        ))}
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {activeTab === 'Posts' ? (
          MOCK_POSTS.map(post => (
            <PostCard key={post.id} post={{...post, userId: 'me'}} onLike={() => {}} />
          ))
        ) : (
          <div className="p-20 text-center text-slate-500">
             <p>Ainda não há conteúdo nesta categoria.</p>
          </div>
        )}
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default ViewProfile;
