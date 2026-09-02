import React from 'react';
import { TabType, Project, Article } from '../types';
import { PERSONAL_INFO, PROJECTS_DATA, ARTICLES_DATA } from '../data/mockData';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Layers, 
  Zap, 
  BookOpen, 
  Briefcase, 
  Github, 
  ExternalLink, 
  Calendar, 
  Clock, 
  Star, 
  CheckCircle,
  FileText,
  Mail
} from 'lucide-react';

interface HomeTabProps {
  onSelectTab: (tab: TabType) => void;
  onSelectProject: (project: Project) => void;
  onSelectArticle: (article: Article) => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onSelectTab,
  onSelectProject,
  onSelectArticle,
  onOpenContact,
  onOpenResume,
}) => {
  const featuredProjects = PROJECTS_DATA.filter(p => p.featured).slice(0, 3);
  const recentArticles = ARTICLES_DATA.slice(0, 3);

  const pillars = [
    {
      icon: Cpu,
      title: 'AI 大模型与智能体工程',
      titleEn: 'AI & Multi-Agent Systems',
      desc: '深入探索 Gemini 多模态模型、RAG 向量检索与自主 Agent 规划工作流，打造确定性、高鲁棒性的生产级智能应用。',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Layers,
      title: '现代全栈与微服务架构',
      titleEn: 'Fullstack Architecture',
      desc: '基于 React 19、TypeScript、Node.js 与 Python 构建端到端高并发系统，注重类型安全与可维护性。',
      color: 'from-blue-500 to-teal-500',
    },
    {
      icon: Zap,
      title: '极致前端交互与动效',
      titleEn: 'UI/UX & Design Engineering',
      desc: '融合现代设计系统、TailwindCSS 与物理动力学动效，严守 WCAG 无障碍规范，打磨丝滑触感。',
      color: 'from-amber-500 to-rose-500',
    },
    {
      icon: Code2,
      title: '开源贡献与工程效能',
      titleEn: 'Open Source & Tooling',
      desc: '打造深受开发者喜爱的组件库、CLI 工具与自动化审查 Agent，累计获得数千 Star 认可。',
      color: 'from-emerald-500 to-cyan-500',
    },
  ];

  const techBadges = [
    'React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 
    'Gemini API', 'Node.js', 'Python FastAPI', 'PostgreSQL', 
    'pgvector', 'Docker', 'Vite', 'Git'
  ];

  return (
    <div id="home-tab-content" className="space-y-16 sm:space-y-24 animate-in fade-in duration-300">
      
      {/* 1. Hero Section */}
      <section id="home-hero-section" className="pt-4 sm:pt-8 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Hero Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                你好，我是{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300">
                {PERSONAL_INFO.title} · <span className="text-slate-400 font-mono text-sm">{PERSONAL_INFO.nameEn}</span>
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-explore-projects-btn"
                onClick={() => onSelectTab('projects')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Briefcase className="w-4 h-4" />
                <span>浏览作品集</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-read-articles-btn"
                onClick={() => onSelectTab('articles')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold border border-slate-200 dark:border-slate-700 shadow-xs transition-colors"
              >
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>阅读技术文章</span>
              </button>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>在线简历</span>
              </button>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
              <span className="text-xs text-slate-400 mr-1">常用技术:</span>
              {techBadges.map((tb) => (
                <span
                  key={tb}
                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-xs font-mono"
                >
                  {tb}
                </span>
              ))}
            </div>

          </div>

          {/* Hero Right Avatar Card */}
          <div className="relative shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              
              {/* Decorative aura blur */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 opacity-30 blur-xl dark:opacity-40 animate-pulse" />
              
              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl bg-gradient-to-b from-indigo-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-sm flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{PERSONAL_INFO.title}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div 
              key={i}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-center space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Core Pillars / What I Focus On */}
      <section id="home-pillars-section" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              CORE CAPABILITIES
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              专注的技术领域与工程实践
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            将前沿人工智能大模型转化为稳定可靠的工程化产品，打通从底层架构到交互细节的完整链路。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200 shadow-xs hover:shadow-md space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {item.titleEn}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Projects Showcase */}
      <section id="home-featured-projects-section" className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              PORTFOLIO SHOWCASE
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              精选代表作品
            </h3>
          </div>
          <button
            id="home-view-all-projects-btn"
            onClick={() => onSelectTab('projects')}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            <span>查看全部 ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600/70 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Cover Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 dark:bg-slate-900/90 text-indigo-600 dark:text-indigo-400 backdrop-blur-md shadow-xs uppercase">
                    {project.category}
                  </span>
                </div>
                {project.stars && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/80 text-amber-400 text-xs font-mono backdrop-blur-md">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-slate-400 self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 pt-1">
                    <span>查看架构拆解与案例 →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Latest Articles Feed */}
      <section id="home-latest-articles-section" className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              WRITING & THOUGHTS
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              最新技术文章与思考
            </h3>
          </div>
          <button
            id="home-view-all-articles-btn"
            onClick={() => onSelectTab('articles')}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            <span>查看全部文章 ({ARTICLES_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {recentArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold uppercase text-[10px]">
                    {article.category}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500 text-xs">{article.publishDate}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500 text-xs">{article.readTime}</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 sm:self-center">
                <span>阅读全文</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call To Action Footer Banner */}
      <section id="home-cta-section" className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white overflow-hidden shadow-xl space-y-6">
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative space-y-3 max-w-xl">
          <span className="px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-mono backdrop-blur-md">
            Let's Collaborate
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            有新的项目想法，或者想聊聊技术？
          </h3>
          <p className="text-sm text-indigo-200 leading-relaxed">
            无论是大模型应用探索、企业级 Web 前端重构，还是开源技术探讨，欢迎随时与我联系。
          </p>
        </div>

        <div className="relative flex flex-wrap items-center gap-4 pt-2">
          <button
            id="home-bottom-contact-cta"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4 text-indigo-600" />
            <span>立即与我联系</span>
          </button>
          
          <button
            id="home-bottom-resume-cta"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 backdrop-blur-md transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>查看完整简历</span>
          </button>
        </div>
      </section>

    </div>
  );
};
