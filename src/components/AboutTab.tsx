import React from 'react';
import { PERSONAL_INFO, CAREER_DATA, SKILLS_DATA, GEAR_AND_FAVORITES } from '../data/mockData';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Sparkles, 
  FileText, 
  Code2, 
  Cpu, 
  Layout, 
  Server, 
  PenTool, 
  BookOpen, 
  Laptop, 
  CheckCircle2, 
  ArrowRight,
  Heart
} from 'lucide-react';

interface AboutTabProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <div id="about-tab-content" className="space-y-16 sm:space-y-20 animate-in fade-in duration-300">
      
      {/* 1. Header & Bio Card */}
      <section id="about-intro-section" className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          
          {/* Avatar with status indicator */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-xl bg-slate-100 dark:bg-slate-800">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-white dark:bg-slate-900 shadow-md">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
          </div>

          {/* Intro Information */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="text-sm font-mono text-slate-400">({PERSONAL_INFO.nameEn})</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                  5+ 年经验
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
                {PERSONAL_INFO.title} · {PERSONAL_INFO.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                id="about-open-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>在线预览简历</span>
              </button>
              
              <button
                id="about-contact-btn"
                onClick={onOpenContact}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>发起对话交流</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Career & Experience Timeline */}
      <section id="about-career-section" className="space-y-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              职业履历与项目经历
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            从前端交互到架构设计，一路以来的成长轨迹与关键战役
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
          {CAREER_DATA.map((job, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 shadow-xs transition-all space-y-4">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <div className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {job.company} <span className="text-slate-400 font-normal">· {job.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    {job.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {job.description}
                </p>

                {/* Achievements list */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">主要贡献与里程碑：</div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {job.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {job.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Skills Matrix */}
      <section id="about-skills-section" className="space-y-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              技术图谱与掌握程度
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            涵盖现代全栈、大模型智能体、云原生与交互设计的综合技能树
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.map((cat, idx) => {
            const Icon = cat.icon === 'Layout' ? Layout : cat.icon === 'Server' ? Server : cat.icon === 'Sparkles' ? Sparkles : PenTool;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-4"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700/60 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Engineering Principles & Philosophy */}
      <section id="about-principles-section" className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              工作哲学与工程原则
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            指导我在代码设计与产品决策中的底层准则
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PERSONAL_INFO.principles.map((p, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2"
            >
              <div className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Gear, Tools & Reading List */}
      <section id="about-gear-section" className="space-y-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Laptop className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              开发装备与精神食粮
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            日常高频使用的生产力工具与推荐书单
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Hardware */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              💻 硬件与外设
            </h3>
            <div className="space-y-3">
              {GEAR_AND_FAVORITES.hardware.map((item, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</div>
                  <div className="text-slate-500 text-[11px]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Software */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              🛠️ 核心软件与工具
            </h3>
            <div className="space-y-3">
              {GEAR_AND_FAVORITES.software.map((item, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</div>
                  <div className="text-slate-500 text-[11px]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Books */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              📚 推荐阅读书目
            </h3>
            <div className="space-y-3">
              {GEAR_AND_FAVORITES.books.map((b, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{b.title}</span>
                    <span className="text-[10px] text-indigo-500">{b.tag}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">{b.author}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
