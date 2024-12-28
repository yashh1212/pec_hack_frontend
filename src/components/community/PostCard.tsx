import React from 'react';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

interface PostCardProps {
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  avatar,
  content,
  likes,
  comments,
}) => (
  <div className="bg-black rounded-xl shadow-sm p-6">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-gray-500">2 hours ago</div>
      </div>
    </div>
    <p className="text-gray-800 mb-4">{content}</p>
    <div className="flex items-center gap-6 text-gray-500">
      <ActionButton icon={Heart} label={likes.toString()} />
      <ActionButton icon={MessageSquare} label={comments.toString()} />
      <ActionButton icon={Share2} label="Share" />
    </div>
  </div>
);

const ActionButton: React.FC<{
  icon: React.ElementType;
  label: string;
}> = ({ icon: Icon, label }) => (
  <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
    <Icon className="w-5 h-5" />
    {label}
  </button>
);

export default PostCard;