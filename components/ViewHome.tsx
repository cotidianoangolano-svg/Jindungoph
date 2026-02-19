
import React, { useState } from 'react';
import { Icons, MOCK_POSTS, MOCK_USERS } from '../constants';
import PostCard from './PostCard';
import Stories from './Stories';

const ViewHome: React.FC = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [newPostText, setNewPostText] = useState('');

  const handleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.isLiked ? p.likes - 1 : p.likes + 1, isLiked: !p.isLiked } : p));
  };

  const createPost = () => {
    if (!newPostText.trim()) return;
    const newPost = {
      id: Math.random().toString(),
      userId: 'me',
      content: newPostText,
      likes: 0,
      comments: 0,
      reposts: 0,
      timestamp: 'Agora',
      isLiked: false
    };
    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-40 p-4 border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-xl font-bold">Início</h2>
      </header>

      {/* Stories */}
      <Stories users={MOCK_USERS} />

      {/* New Post Creator */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex gap-4">
        <img src="https://picsum.photos/seed/me/100/100" className="w-12 h-12 rounded-full flex-shrink-0" alt="me" />
        <div className="flex-grow">
          <textarea
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            placeholder="O que está acontecendo de picante hoje?"
            className="w-full bg-transparent border-none focus:ring-0 text-lg resize-none placeholder:text-slate-400 min-h-[100px]"
          />
          <div className="flex justify-between items-center pt-2 border-t border-slate-50 dark:border-slate-900 mt-2">
            <div className="flex gap-2 text-rose-600">
              <button className="p-2 hover:bg-rose-50 dark:hover:bg-slate-900 rounded-full transition-colors"><Icons.Share className="w-5 h-5 rotate-180" /></button>
              <button className="p-2 hover:bg-rose-50 dark:hover:bg-slate-900 rounded-full transition-colors"><Icons.MoreHorizontal className="w-5 h-5" /></button>
            </div>
            <button
              onClick={createPost}
              disabled={!newPostText.trim()}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                newPostText.trim() ? 'bg-rose-600 text-white hover:bg-rose-700' : 'bg-rose-300 text-rose-50 cursor-not-allowed'
              }`}
            >
              Postar
            </button>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onLike={handleLike} />
        ))}
      </div>
      
      {/* Spacer for mobile */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default ViewHome;
