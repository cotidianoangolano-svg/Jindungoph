
import React, { useState } from 'react';
import { Icons, MOCK_CONVERSATIONS, CURRENT_USER } from '../constants';

const ViewMessages: React.FC = () => {
  const [activeConv, setActiveConv] = useState(MOCK_CONVERSATIONS[0]);
  const [messages, setMessages] = useState([
    { id: 'm1', sender: 'them', text: 'Oi! Tudo bem?', time: '10:30' },
    { id: 'm2', sender: 'me', text: 'Tudo ótimo, e com você?', time: '10:31' },
    { id: 'm3', sender: 'them', text: 'Estou bem também. Viu o post novo do Jindungo?', time: '10:32' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    setMessages([...messages, { id: Math.random().toString(), sender: 'me', text: inputText, time: timeStr }]);
    setInputText('');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* List of Conversations */}
      <div className="w-full md:w-80 border-r border-slate-100 dark:border-slate-800 flex flex-col">
        <header className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-950">
          <h2 className="text-xl font-bold">Mensagens</h2>
          <button className="p-2 hover:bg-rose-50 dark:hover:bg-slate-900 rounded-full transition-colors"><Icons.Plus className="w-5 h-5 text-rose-600" /></button>
        </header>
        <div className="overflow-y-auto flex-grow bg-white dark:bg-slate-950">
          {MOCK_CONVERSATIONS.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setActiveConv(conv)}
              className={`p-4 flex gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors border-l-4 ${
                activeConv.id === conv.id ? 'bg-rose-50/50 dark:bg-rose-900/20 border-rose-600' : 'border-transparent'
              }`}
            >
              <img src={conv.participant.avatar} className="w-12 h-12 rounded-full object-cover" alt={conv.participant.name} />
              <div className="flex-grow overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="font-bold truncate">{conv.participant.name}</span>
                  <span className="text-xs text-slate-500">{conv.timestamp}</span>
                </div>
                <p className="text-sm text-slate-500 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unreadCount > 0 && (
                <div className="bg-rose-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {conv.unreadCount}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="hidden md:flex flex-grow flex-col bg-slate-50 dark:bg-slate-900/30">
        <header className="p-4 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <img src={activeConv.participant.avatar} className="w-10 h-10 rounded-full object-cover" alt={activeConv.participant.name} />
            <div>
              <p className="font-bold leading-tight">{activeConv.participant.name}</p>
              <p className="text-xs text-green-500 font-medium">Online</p>
            </div>
          </div>
          <div className="flex gap-4 text-slate-400">
             <button className="hover:text-rose-600"><Icons.Settings className="w-5 h-5" /></button>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          <div className="text-center py-4">
            <p className="text-xs text-slate-400 bg-white dark:bg-slate-900 inline-block px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800 uppercase tracking-widest font-bold">Hoje</p>
          </div>
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                m.sender === 'me' ? 'bg-rose-600 text-white rounded-br-none' : 'bg-white dark:bg-slate-800 dark:text-white rounded-bl-none'
              }`}>
                <p className="text-sm">{m.text}</p>
                <p className={`text-[10px] mt-1 text-right ${m.sender === 'me' ? 'text-rose-100' : 'text-slate-400'}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-full flex items-center p-1 pr-3">
            <button className="p-2 text-rose-600"><Icons.Plus className="w-5 h-5" /></button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-grow bg-transparent border-none focus:ring-0 outline-none p-2 text-sm"
            />
            <button onClick={sendMessage} className={`p-2 rounded-full transition-colors ${inputText.trim() ? 'bg-rose-600 text-white' : 'text-slate-400 cursor-not-allowed'}`}>
              <Icons.Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMessages;
