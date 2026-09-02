import React, { useState } from 'react';
import { PERSONAL_INFO, INITIAL_GUESTBOOK } from '../data/mockData';
import { GuestbookMessage } from '../types';
import { 
  X, 
  Mail, 
  Send, 
  Check, 
  MessageSquare, 
  Copy, 
  Github, 
  Twitter, 
  QrCode, 
  Sparkles, 
  User 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'form' | 'guestbook'>('form');
  
  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWechat, setCopiedWechat] = useState(false);

  // Guestbook state
  const [guestbookList, setGuestbookList] = useState<GuestbookMessage[]>(INITIAL_GUESTBOOK);
  const [gbName, setGbName] = useState('');
  const [gbMessage, setGbMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSent(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      // Also add to guestbook as polite feedback
      const newMsg: GuestbookMessage = {
        id: 'gb-' + Date.now(),
        name: name.trim(),
        email: email.trim(),
        avatarColor: 'from-indigo-500 to-teal-500',
        message: message.trim(),
        createdAt: '刚刚',
        badge: subject || '新留言',
      };
      setGuestbookList([newMsg, ...guestbookList]);
    }, 500);
  };

  const handleAddGuestbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gbName.trim() || !gbMessage.trim()) return;

    const colors = [
      'from-blue-500 to-indigo-600',
      'from-emerald-500 to-teal-600',
      'from-purple-500 to-pink-600',
      'from-amber-500 to-orange-600',
      'from-rose-500 to-red-600',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newMsg: GuestbookMessage = {
      id: 'gb-' + Date.now(),
      name: gbName.trim(),
      avatarColor: randomColor,
      message: gbMessage.trim(),
      createdAt: '刚刚',
      badge: '访客留言',
    };

    setGuestbookList([newMsg, ...guestbookList]);
    setGbName('');
    setGbMessage('');

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  const copyText = (text: string, type: 'email' | 'wechat') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedWechat(true);
      setTimeout(() => setCopiedWechat(false), 2000);
    }
  };

  return (
    <div 
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="contact-modal-content"
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-auto overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                与我取得联系 / 在线留言
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                期待关于技术架构、开源协作与项目咨询的探讨
              </p>
            </div>
          </div>

          <button
            id="contact-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-slate-50/50 dark:bg-slate-950/40">
          <button
            id="contact-tab-form-btn"
            onClick={() => setActiveTab('form')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'form'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>发送私密邮件 / 项目意向</span>
          </button>
          <button
            id="contact-tab-guestbook-btn"
            onClick={() => setActiveTab('guestbook')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'guestbook'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>公开留言板 ({guestbookList.length})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Quick Direct Contacts Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-[11px] text-slate-400">电子邮箱 (Email)</div>
                <div className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate">
                  {PERSONAL_INFO.email}
                </div>
              </div>
              <button
                id="copy-email-btn"
                onClick={() => copyText(PERSONAL_INFO.email, 'email')}
                className="p-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-600 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs"
                title="复制邮箱"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-[11px] text-slate-400">微信号 (WeChat)</div>
                <div className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                  {PERSONAL_INFO.wechat}
                </div>
              </div>
              <button
                id="copy-wechat-btn"
                onClick={() => copyText(PERSONAL_INFO.wechat, 'wechat')}
                className="p-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-600 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs"
                title="复制微信号"
              >
                {copiedWechat ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Form Tab */}
          {activeTab === 'form' && (
            <div>
              {isSent ? (
                <div className="p-8 text-center space-y-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                    留言发送成功！
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                    已收到你的信息。我通常会在 24 小时内回复你的邮件 ({email})，感谢你的关注与信任！
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-4 py-2 text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    发送另一条消息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        你的姓名 / 称呼 <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="例如：张先生 / Alice"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        你的联系邮箱 <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        placeholder="your-email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      咨询主题 / 协作类型
                    </label>
                    <select
                      id="contact-subject-select"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">请选择主题（可选）</option>
                      <option value="技术交流与咨询">技术交流与架构咨询</option>
                      <option value="全栈/AI 项目外包定制">全栈 / AI 项目外包定制</option>
                      <option value="全职/兼职工作机会">全职 / 远程工作机会</option>
                      <option value="开源贡献与合作">开源贡献与技术合作</option>
                      <option value="其他">其他留言</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      具体留言内容 <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message-textarea"
                      rows={4}
                      required
                      placeholder="请详细描述你的需求、问题或项目背景..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-400">
                      🔒 信息仅用于与本人邮件沟通，绝不对外泄露
                    </span>
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-transform active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>立即发送</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Guestbook Tab */}
          {activeTab === 'guestbook' && (
            <div className="space-y-6">
              {/* Add to guestbook */}
              <form onSubmit={handleAddGuestbook} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  <span>留下你的访客印记</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    id="guestbook-name-input"
                    type="text"
                    required
                    placeholder="你的名字 / 社交昵称"
                    value={gbName}
                    onChange={(e) => setGbName(e.target.value)}
                    className="px-3 py-1.5 text-xs bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <textarea
                  id="guestbook-message-input"
                  rows={2}
                  required
                  placeholder="说点鼓励的话、提个建议，或者只是单纯打个招呼 👋"
                  value={gbMessage}
                  onChange={(e) => setGbMessage(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
                <div className="flex justify-end">
                  <button
                    id="guestbook-post-btn"
                    type="submit"
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-sm transition-transform active:scale-95"
                  >
                    <Send className="w-3 h-3" />
                    <span>公开留言</span>
                  </button>
                </div>
              </form>

              {/* Guestbook List */}
              <div className="space-y-3">
                {guestbookList.map((msg) => (
                  <div 
                    key={msg.id}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-1.5 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-tr ${msg.avatarColor} flex items-center justify-center text-[10px] font-bold text-white shadow-xs`}>
                          {msg.name.slice(0, 1).toUpperCase()}
                        </div>
                        <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {msg.name}
                        </span>
                        {msg.badge && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                            {msg.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400">{msg.createdAt}</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 pl-8 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
