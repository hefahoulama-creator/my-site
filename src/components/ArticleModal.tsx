import React, { useState } from 'react';
import { Article, Comment } from '../types';
import { 
  X, 
  Calendar, 
  Clock, 
  Eye, 
  ThumbsUp, 
  Share2, 
  Check, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Bookmark, 
  ArrowLeft 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const [likes, setLikes] = useState(article.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  // Local comments state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      author: '张峰 (Frontend Lead)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      content: '文章分析得非常透彻！关于状态下沉和微交互的建议很受用，我们在重构后台时深有体会。',
      createdAt: '昨天 14:20',
      likes: 8,
    },
    {
      id: 'c2',
      author: 'Evelyn Wang',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      content: '请教一下作者，在复杂 DAG Agent 架构中，对于重试失败率较高节点有什么优雅的降级补偿策略吗？',
      createdAt: '3 天前',
      likes: 4,
    },
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleLike = (e: React.MouseEvent) => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#14b8a6'],
      });
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const authorName = newAuthor.trim() || '热心读者';
    const commentItem: Comment = {
      id: 'c-' + Date.now(),
      author: authorName,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      content: newComment.trim(),
      createdAt: '刚刚',
      likes: 0,
    };

    setComments([commentItem, ...comments]);
    setNewComment('');
    setNewAuthor('');

    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8 },
    });
  };

  return (
    <div 
      id="article-detail-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="article-detail-modal-content"
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-auto overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <button
            id="article-modal-back-btn"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回文章列表</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Bookmark button */}
            <button
              id="article-bookmark-btn"
              onClick={() => setSaved(!saved)}
              aria-label="收藏文章"
              className={`p-2 rounded-lg border transition-colors ${
                saved 
                  ? 'bg-amber-50 text-amber-600 border-amber-300 dark:bg-amber-950/50 dark:border-amber-700' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>

            {/* Share button */}
            <button
              id="article-share-btn"
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? '已复制链接' : '分享'}</span>
            </button>

            {/* Close button */}
            <button
              id="article-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          
          {/* Article Meta & Tags */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                {article.category.toUpperCase()}
              </span>
              {article.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{article.publishDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-slate-400" />
                <span>{article.views.toLocaleString()} 次阅读</span>
              </div>
            </div>
          </div>

          {/* Article Summary Callout */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border-l-4 border-indigo-600 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
            <strong>核心概要：</strong>{article.summary}
          </div>

          {/* Main Article Content Formatted */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed text-sm sm:text-base space-y-6">
            {article.content.split('\n\n').map((block, idx) => {
              // Heading 2
              if (block.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4 pb-1 border-b border-slate-200 dark:border-slate-800">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              // Heading 3
              if (block.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white pt-2">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              // Code Block
              if (block.startsWith('```')) {
                const lines = block.split('\n');
                const lang = lines[0].replace('```', '') || 'code';
                const codeContent = lines.slice(1, -1).join('\n');
                return (
                  <div key={idx} className="rounded-xl overflow-hidden my-4 border border-slate-800 shadow-md">
                    <div className="bg-slate-900 px-4 py-2 text-xs font-mono text-slate-400 flex items-center justify-between border-b border-slate-800">
                      <span>{lang}</span>
                      <span className="text-[10px] text-slate-500">ReadOnly</span>
                    </div>
                    <pre className="p-4 bg-slate-950 text-slate-100 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed">
                      <code>{codeContent}</code>
                    </pre>
                  </div>
                );
              }
              // Blockquote
              if (block.startsWith('> ')) {
                return (
                  <blockquote key={idx} className="p-4 my-2 border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200 rounded-r-lg text-sm">
                    {block.replace('> ', '')}
                  </blockquote>
                );
              }
              // Unordered List
              if (block.startsWith('- ') || block.startsWith('1. ')) {
                const items = block.split('\n');
                return (
                  <ul key={idx} className="list-disc list-inside space-y-1.5 my-2 text-slate-700 dark:text-slate-300">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} className="leading-relaxed">
                        {item.replace(/^(-\s|\d+\.\s)/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Normal Paragraph
              return (
                <p key={idx} className="leading-relaxed text-slate-700 dark:text-slate-300">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Interactive Clap & Reaction Section */}
          <div className="pt-8 pb-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                id="article-like-button"
                onClick={handleLike}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 shadow-sm ${
                  hasLiked
                    ? 'bg-indigo-600 text-white shadow-indigo-500/30 scale-105'
                    : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 border border-indigo-200 dark:border-indigo-800'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'fill-white' : 'group-hover:scale-110'} transition-transform`} />
                <span>{hasLiked ? '已点赞支持' : '为文章点赞'}</span>
                <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs font-mono">
                  {likes}
                </span>
              </button>

              <button
                id="article-share-bottom-btn"
                onClick={handleShare}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? '已复制链接' : '分享文章'}</span>
              </button>
            </div>

            <div className="text-xs text-slate-400 text-center sm:text-right">
              感谢阅读！欢迎在下方留下你的见解与问题。
            </div>
          </div>

          {/* Comments & Discussion Section */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  读者讨论 ({comments.length})
                </h3>
              </div>
              <span className="text-xs text-slate-500">友好交流 · 欢迎提问</span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  id="comment-author-input"
                  type="text"
                  placeholder="你的昵称 (可选，默认'热心读者')"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <textarea
                id="comment-content-textarea"
                rows={3}
                required
                placeholder="撰写你的想法、心得或技术疑问..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
              <div className="flex justify-end">
                <button
                  id="comment-submit-btn"
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-transform active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>发布评论</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div 
                  key={comment.id} 
                  className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={comment.avatar} 
                        alt={comment.author} 
                        className="w-7 h-7 rounded-full object-cover border border-slate-300 dark:border-slate-700" 
                        referrerPolicy="no-referrer"
                      />
                      <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                        {comment.author}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-normal">
                      {comment.createdAt}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-9 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
