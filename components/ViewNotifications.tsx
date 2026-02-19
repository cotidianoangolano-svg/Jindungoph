
import React, { useState } from 'react';
import { Icons, MOCK_USERS } from '../constants';

const ViewNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState([
    { id: 'n1', type: 'LIKE', user: MOCK_USERS[0], text: 'curtiu seu post', time: '2m', read: false },
    { id: 'n2', type: 'FOLLOW', user: MOCK_USERS[1], text: 'começou a seguir você', time: '1h', read: false },
    { id: 'n3', type: 'COMMENT', user: MOCK_USERS[2], text: 'comentou: "Ficou top demais!"', time: '3h', read: true },
    { id: 'n4', type: 'REPOST', user: MOCK_USERS[3], text: 'repostou sua foto', time: '5h', read: true },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'LIKE': return <Icons.Heart className="w-5 h-5 text-rose-600 fill-rose-600" />;
      case 'FOLLOW': return <Icons.User className="w-5 h-5 text-blue-600 fill-blue-600" />;
      case 'REPOST': return <Icons.Repeat className="w-5 h-5 text-green-600" />;
      default: return <Icons.MessageSquare className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-40 p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <h2 className="text-xl font-bold">Notificações</h2>
        <button onClick={markAllRead} className="text-rose-600 text-sm font-semibold hover:underline">Marcar todas como lidas</button>
      </header>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {notifications.map((n) => (
          <div key={n.id} className={`p-4 flex gap-4 transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 ${!n.read ? 'bg-rose-50/30 dark:bg-rose-900/10' : ''}`}>
            <div className="pt-1">{getIcon(n.type)}</div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <img src={n.user.avatar} className="w-8 h-8 rounded-full object-cover" alt={n.user.name} />
                <span className="font-bold">{n.user.name}</span>
                <span className="text-slate-500 text-xs">{n.time}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300">{n.text}</p>
            </div>
            {!n.read && <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewNotifications;
