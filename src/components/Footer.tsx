import React from 'react';
import { TabType } from '../types';
import { PERSONAL_INFO } from '../data/mockData';
import { Github, Twitter, Mail, Heart, ArrowUp, Sparkles, MessageSquare } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Info & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {PERSONAL_INFO.name} ({PERSONAL_INFO.nameEn})
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                开放技术交流
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              热爱开源、追求工程品质与优雅界面的全栈开发者。致力于将前沿大语言模型与现代 Web 交互技术融会贯通，构建具备真实商业与用户价值的产品。
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub 主页"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-twitter-link"
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter 主页"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-300 transition-colors shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <button
                id="footer-contact-trigger-btn"
                onClick={onOpenContact}
                aria-label="发送邮件联系"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </button>
              <button
                id="footer-guestbook-trigger-btn"
                onClick={onOpenContact}
                aria-label="在线留言板"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-300 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              快速导航
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <button 
                  id="footer-nav-home" 
                  onClick={() => { onSelectTab('home'); scrollToTop(); }}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  首页 (Overview)
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-about" 
                  onClick={() => { onSelectTab('about'); scrollToTop(); }}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  关于我 (About Me)
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-articles" 
                  onClick={() => { onSelectTab('articles'); scrollToTop(); }}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  我的文章 (Articles & Blog)
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-projects" 
                  onClick={() => { onSelectTab('projects'); scrollToTop(); }}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  我的作品 (Portfolio Projects)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech & Inspiration */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              技术栈与美学
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              本站基于 React 19、TypeScript 与 Tailwind CSS 构建，采用模块化设计与无障碍规范。
            </p>
            <div className="pt-2">
              <button
                id="footer-back-to-top"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>返回顶部</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. 保留所有权利.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>& TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
