import React, { useState, useEffect } from 'react';
import { TabType, Project, Article } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeTab } from './components/HomeTab';
import { AboutTab } from './components/AboutTab';
import { ArticlesTab } from './components/ArticlesTab';
import { ProjectsTab } from './components/ProjectsTab';
import { ArticleModal } from './components/ArticleModal';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<TabType>('home');

  // Dark Mode Theme State
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Modal States
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Floating Back to Top visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync Dark Theme Class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll listener for floating button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      
      {/* Top Sticky Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {currentTab === 'home' && (
          <HomeTab
            onSelectTab={handleSelectTab}
            onSelectProject={(proj) => setActiveProject(proj)}
            onSelectArticle={(art) => setActiveArticle(art)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutTab
            onOpenContact={() => setIsContactOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentTab === 'articles' && (
          <ArticlesTab
            onSelectArticle={(art) => setActiveArticle(art)}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsTab
            onSelectProject={(proj) => setActiveProject(proj)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Floating Action Button (Guestbook / Quick Contact) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-center gap-2">
        {showBackToTop && (
          <button
            id="floating-back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="回到顶部"
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 animate-in fade-in"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          id="floating-guestbook-btn"
          onClick={() => setIsContactOpen(true)}
          aria-label="快速留言"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">在线留言 / 交流</span>
        </button>
      </div>

      {/* Global Modals */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTab={handleSelectTab}
        onSelectArticle={(art) => setActiveArticle(art)}
        onSelectProject={(proj) => setActiveProject(proj)}
      />

    </div>
  );
}
