
import React from 'react';
import { User } from '../types';
import { Icons } from '../constants';

interface StoriesProps {
  users: User[];
}

const Stories: React.FC<StoriesProps> = ({ users }) => {
  return (
    <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar border-b border-slate-100 dark:border-slate-800 scroll-smooth">
      <div className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer group">
        <div className="relative">
          <img src="https://picsum.photos/seed/me/100/100" className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 p-0.5 object-cover" alt="Me" />
          <div className="absolute bottom-0 right-0 bg-rose-600 rounded-full p-1 border-2 border-white dark:border-slate-900">
            <Icons.Plus className="w-3 h-3 text-white" />
          </div>
        </div>
        <span className="text-xs font-medium text-slate-500">Seu story</span>
      </div>

      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-rose-600 animate-gradient-xy">
            <div className="p-[2px] rounded-full bg-white dark:bg-slate-950">
               <img src={user.avatar} className="w-14 h-14 rounded-full object-cover" alt={user.name} />
            </div>
          </div>
          <span className="text-xs font-medium truncate w-16 text-center">{user.name.split(' ')[0]}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
