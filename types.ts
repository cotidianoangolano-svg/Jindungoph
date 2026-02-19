
export type ViewType = 'HOME' | 'SEARCH' | 'NOTIFICATIONS' | 'MESSAGES' | 'PROFILE' | 'SETTINGS';

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  posts: number;
  isFollowing?: boolean;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
  isLiked?: boolean;
  isReposted?: boolean;
}

export interface Notification {
  id: string;
  type: 'LIKE' | 'COMMENT' | 'FOLLOW' | 'REPOST';
  userId: string;
  read: boolean;
  timestamp: string;
  postId?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  participant: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
}
