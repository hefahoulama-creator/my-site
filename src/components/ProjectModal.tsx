import React from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Star, 
  ArrowLeft 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-detail-modal-content"
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-auto overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Navigation */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <button
            id="project-modal-back-btn"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回作品集</span>
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                id="project-modal-github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub 仓库</span>
                {project.stars && (
                  <span className="flex items-center text-[10px] text-amber-500 font-semibold ml-1">
                    <Star className="w-3 h-3 fill-amber-500 mr-0.5" />
                    {project.stars}
                  </span>
                )}
              </a>
            )}

            {project.demoUrl && (
              <a
                id="project-modal-demo-link"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>在线体验</span>
              </a>
            )}

            <button
              id="project-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          
          {/* Header & Meta */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 uppercase">
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  精选作品
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
              {project.titleEn}
            </p>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 max-h-80 shadow-md">
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics Stats if available */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center space-y-1"
                >
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              使用技术栈
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Section */}
          {project.caseStudy && (
            <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>项目案例深度复盘 (Case Study)</span>
              </h2>

              {/* Background */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">1. 项目背景与诉求</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.caseStudy.background}
                </p>
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>2. 面临的核心工程挑战</span>
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.caseStudy.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>3. 架构解决方案与权衡</span>
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.caseStudy.solutions.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights & Impact */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>4. 成果交付与反馈</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.highlights.map((h, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200">
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Architecture Note */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono leading-relaxed space-y-1">
                <div className="text-indigo-400 font-bold"># 技术实现概要</div>
                <div>{project.caseStudy.techDetails}</div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              关闭
            </button>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>访问 GitHub</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-transform active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>立即体验 Demo</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
