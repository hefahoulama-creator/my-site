import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { Project } from '../types';
import { 
  Briefcase, 
  Search, 
  Sparkles, 
  ExternalLink, 
  Github, 
  Star, 
  Layers, 
  ArrowRight,
  Code2,
  CheckCircle2
} from 'lucide-react';

interface ProjectsTabProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsTab: React.FC<ProjectsTabProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'stars' | 'name'>('featured');

  const categories = [
    { id: 'all', label: '全部作品' },
    { id: 'ai', label: 'AI & 大模型' },
    { id: 'opensource', label: '开源项目 & 库' },
    { id: 'web', label: 'Web 应用 & 平台' },
    { id: 'mobile', label: '移动端 & 小程序' },
    { id: 'tools', label: '工程 & 效率工具' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchCat = selectedCategory === 'all' || proj.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = 
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.summary.toLowerCase().includes(q) ||
        proj.tags.some(t => t.toLowerCase().includes(q));

      return matchCat && matchQuery;
    }).sort((a, b) => {
      if (sortBy === 'stars') return (b.stars || 0) - (a.stars || 0);
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      // featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div id="projects-tab-content" className="space-y-10 sm:space-y-12 animate-in fade-in duration-300">
      
      {/* 1. Header & Intro */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>作品集 & 开源实践</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          精选项目与工程作品
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          涵盖大模型多模态工作台、高保真设计系统、智能代码审查 Agent 与开发者工具，注重极致交互与系统韧性。
        </p>
      </div>

      {/* 2. Controls (Categories & Search) */}
      <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`proj-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="projects-search-input"
              type="text"
              placeholder="按项目名称、功能或技术栈筛选..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-1.5 justify-end">
            <span className="text-xs text-slate-400">排序:</span>
            <select
              id="projects-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              <option value="featured">精选推荐优先</option>
              <option value="stars">GitHub Stars 最多</option>
              <option value="name">按名称排序</option>
            </select>
          </div>

        </div>
      </div>

      {/* 3. Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center space-y-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <Briefcase className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm text-slate-500">没有找到匹配的作品，请尝试调整筛选条件</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
          >
            清除筛选条件
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600/70 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Banner Image with Overlay */}
              <div 
                className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
                onClick={() => onSelectProject(proj)}
              >
                <img
                  src={proj.coverImage}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 dark:bg-slate-900/95 text-indigo-600 dark:text-indigo-400 backdrop-blur-md shadow-xs uppercase">
                    {proj.category}
                  </span>
                  {proj.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      <span>精选推荐</span>
                    </span>
                  )}
                </div>

                {proj.stars && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/85 text-amber-400 text-xs font-mono font-bold backdrop-blur-md shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{proj.stars}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                
                <div className="space-y-2.5">
                  <h3 
                    onClick={() => onSelectProject(proj)}
                    className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer leading-snug"
                  >
                    {proj.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    {proj.titleEn}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                {/* Metrics Stats if available */}
                {proj.stats && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                    {proj.stats.map((st, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <div className="text-[10px] text-slate-400">{st.label}</div>
                        <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">{st.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>查看案例复盘与架构</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        title="GitHub 仓库"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors"
                      >
                        <span>在线体验</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
