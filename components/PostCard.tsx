
import React from 'react';
import { Post } from '../types';
import { Icons, MOCK_USERS, CURRENT_USER } from '../constants';

interface PostCardProps {
  post: Post;
  onLike: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  const user = post.userId === 'me' ? CURRENT_USER : MOCK_USERS.find(u => u.id === post.userId);

  if (!user) return null;

  return (
    <div className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors cursor-pointer group">
      <img src={user.avatar} className="w-12 h-12 rounded-full object-cover flex-shrink-0" alt={user.name} />
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1">
            <span className="font-bold hover:underline">{user.name}</span>
            <span className="text-slate-500 text-sm">{user.username} · {post.timestamp}</span>
          </div>
          <button className="text-slate-400 hover:text-rose-600 p-1 rounded-full hover:bg-rose-50 transition-colors">
            <Icons.MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-slate-800 dark:text-slate-200 mb-3 whitespace-pre-wrap leading-relaxed">{post.content}</p>
        
        {post.image && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-4 bg-slate-100 dark:bg-slate-900">
            <img src={post.image} className="w-full object-cover max-h-[500px]" alt="Post content" />
          </div>
        )}

        <div className="flex justify-between text-slate-500 max-w-md">
          <button className="flex items-center gap-2 group/action hover:text-rose-600 transition-colors">
            <div className="p-2 rounded-full group-hover/action:bg-rose-50 dark:group-hover/action:bg-rose-900/30">
              <Icons.MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-sm">{post.comments}</span>
          </button>
          
          <button className="flex items-center gap-2 group/action hover:text-green-600 transition-colors">
            <div className="p-2 rounded-full group-hover/action:bg-green-50 dark:group-hover/action:bg-green-900/30">
              <Icons.Repeat className={`w-5 h-5 ${post.isReposted ? 'text-green-600' : ''}`} />
            </div>
            <span className="text-sm">{post.reposts}</span>
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); onLike(post.id); }}
            className={`flex items-center gap-2 group/action transition-colors ${post.isLiked ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
          >
            <div className="p-2 rounded-full group-hover/action:bg-rose-50 dark:group-hover/action:bg-rose-900/30">
              <Icons.Heart className={`w-5 h-5 ${post.isLiked ? 'fill-rose-600 stroke-rose-600' : ''}`} />
            </div>
            <span className="text-sm">{post.likes}</span>
          </button>

          <button className="flex items-center gap-2 group/action hover:text-blue-600 transition-colors">
            <div className="p-2 rounded-full group-hover/action:bg-blue-50 dark:group-hover/action:bg-blue-900/30">
              <Icons.Share className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
