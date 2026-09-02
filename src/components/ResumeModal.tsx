import React from 'react';
import { PERSONAL_INFO, CAREER_DATA, SKILLS_DATA } from '../data/mockData';
import { X, Printer, Download, Mail, Github, MapPin, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.5 },
    });
    window.print();
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-content"
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-auto overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              {PERSONAL_INFO.name} - 个人简历预览 (Interactive Resume)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>打印 / 另存为 PDF</span>
            </button>
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-12 space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
          
          {/* Header section */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name} <span className="text-lg font-normal text-slate-500 font-mono">({PERSONAL_INFO.nameEn})</span>
              </h1>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 text-left sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>github.com/example-alexli</span>
              </div>
            </div>
          </div>

          {/* Education & Core Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                教育背景
              </h3>
              <div className="text-xs space-y-1">
                <div className="font-semibold text-slate-900 dark:text-white">计算机科学与技术 (学士)</div>
                <div className="text-slate-500">重点大学 · 软件工程卓越班</div>
                <div className="text-slate-400">2015.09 - 2019.06</div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
                核心专业技能
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                <div>• React 19 / Next.js / TypeScript 深入</div>
                <div>• Gemini API / LLM / Agent 架构</div>
                <div>• Node.js / Python / 高性能微服务</div>
                <div>• PostgreSQL / pgvector / 缓存优化</div>
                <div>• TailwindCSS / 高保真交互系统</div>
                <div>• Docker 容器化 / CI/CD 自动化流水线</div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1">
              工作经历与核心贡献
            </h3>
            
            <div className="space-y-6">
              {CAREER_DATA.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">
                        {item.role}
                      </span>
                      <span className="text-slate-500 text-xs ml-2">@ {item.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{item.period}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pl-4 list-disc">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white">个人特质与附加荣誉</div>
            <div>• 多个开源项目累计 2,800+ GitHub Stars，具备良好的英文技术写作与社区协同能力。</div>
            <div>• 具备全生命周期（From 0 to 1）的产品孵化经验，沟通顺畅，执行力极强。</div>
          </div>

        </div>
      </div>
    </div>
  );
};
