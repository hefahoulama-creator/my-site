import { Project, Article, CareerItem, SkillCategory, GuestbookMessage } from '../types';

export const PERSONAL_INFO = {
  name: '滕宇飞',
  nameEn: 'Teng Yufei',
  avatarUrl: '/my-photo.png',
  title: '跨境电商 & 外贸',
  subtitle: 'Cross-border E-commerce & Foreign Trade',
  location: '中国 · 上海 / 杭州',
  bio: '1年跨境电商经验，熟悉亚马逊及独立站运营。擅长数据分析与广告投放，曾独立操盘实现店铺月销$5万+。具备B2B外贸跟单能力，能以数据驱动增长，助力品牌出海。',
  email: 'alex.limingrui@example.com',
  github: 'https://github.com/example-alexli',
  twitter: 'https://x.com/example_alexli',
  wechat: 'AlexLi_Dev',
  stats: [
    { label: '项目实战与交付', value: '30+' },
    { label: '技术文章与思考', value: '45+' },
    { label: 'GitHub 开源 Star', value: '2.8k+' },
    { label: '累计读者浏览', value: '120k+' },
  ],
  interests: ['全栈系统架构', '大模型/智能体开发', '开源贡献', 'UI/UX 交互设计', '数字游民生活', '黑胶唱片 & 骑行'],
  principles: [
    {
      title: '清晰胜于复杂',
      desc: '代码是写给人看、顺便由机器执行的。优雅的架构必然具备易读与可演进性。',
    },
    {
      title: '以用户体验为锚点',
      desc: '每一个像素的留白、每一个交互的毫秒级响应，都是对最终使用者的敬畏。',
    },
    {
      title: '拥抱 AI，重塑工作流',
      desc: '不仅是消费 AI，更要用工程化思维将 LLM 转化为解决真实世界问题的杠杆。',
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'MindFlow - AI 驱动的多模态知识图谱工作台',
    titleEn: 'MindFlow: AI-Powered Knowledge Canvas',
    category: 'ai',
    summary: '面向研究者与知识工作者的无限画布。融合 Gemini 大模型多模态能力，支持文档自动摘要、关联关系自动抽取与交互式思维推演。',
    description: 'MindFlow 是一款现代化的可视化知识管理工具。通过将大语言模型（LLM）的理解能力与无限缩放画布相结合，用户可以拖入 PDF、网页、音视频及笔记，系统会自动进行多维实体抽取并生成高密度概念图谱。',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Gemini API', 'TailwindCSS', 'Zustand', 'Canvas Engine'],
    featured: true,
    demoUrl: 'https://mindflow.example.com',
    githubUrl: 'https://github.com/example-alexli/mindflow',
    stars: 1240,
    stats: [
      { label: '活跃用户', value: '15,000+' },
      { label: '解析文档数', value: '120,000+' },
      { label: '平均响应', value: '< 600ms' },
    ],
    caseStudy: {
      background: '传统的树状笔记工具在处理多源异构信息时常显僵化，知识之间的网状关联难以直观浮现。',
      challenges: [
        '万级节点在大画布上的 60fps 平滑缩放与高性能渲染。',
        '长文档结构化解析中上下文窗口与成本的平衡。',
        '多模态实体抽取结果与用户手动编辑的实时双向同步。',
      ],
      solutions: [
        '使用基于 WebGL 与 Virtual Canvas 的视口剔除算法，仅渲染视口内元素。',
        '设计双层 RAG 架构（Chunk 向量召回 + 层次化图谱聚类），降低 70% Token 消耗。',
        '采用 CRDT（冲突解决复制数据类型）实现多人在线画布协作与本地优先离线存储。',
      ],
      highlights: [
        '首周上线 Product Hunt 获得 Trending #2',
        'GitHub 上线两月收获 1,200+ Stars 与 40+ 社区贡献 PR',
        '被多家科技自媒体与知识管理博主推荐',
      ],
      techDetails: '前端使用 React 19 + TypeScript + Vite + Tailwind CSS；图谱渲染基于自主优化的 Canvas 引擎；后端采用 Node.js/FastAPI + Gemini Pro 2.5 API，向量引擎采用 pgvector。',
    },
  },
  {
    id: 'proj-2',
    title: 'PulseUI - 面向高保真交互的现代 React 组件系统',
    titleEn: 'PulseUI: High-Fidelity Design System',
    category: 'opensource',
    summary: '轻量级、无障碍优先且极度注重微交互细节的 React 19 UI 组件库，内置流畅物理弹簧动效与深色模式自适应。',
    description: '一套为了解决“美观与易用不可兼得”而诞生的组件库。开箱即用地提供了 40+ 常用与高级组件，具备完备的键盘无障碍支持（WAI-ARIA）与自研的弹性物理动画过渡系统。',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    tags: ['React 19', 'TypeScript', 'Motion', 'TailwindCSS', 'Storybook', 'npm'],
    featured: true,
    demoUrl: 'https://pulseui.example.com',
    githubUrl: 'https://github.com/example-alexli/pulse-ui',
    stars: 860,
    stats: [
      { label: '周下载量', value: '8,500+' },
      { label: '内置组件', value: '42 个' },
      { label: '包体积', value: '< 12kb (Gzip)' },
    ],
    caseStudy: {
      background: '许多现存组件库要么过于沉重，要么微交互生硬，缺乏呼吸感与现代软件应有的品质感。',
      challenges: [
        '严格控制 Bundle 体积的同时提供丰富的动效预设。',
        '保证高定制自由度与 Tailwind 类名的零冲突合并。',
      ],
      solutions: [
        '采用 Headless 逻辑与视觉样式分离架构，支持按需 Tree-shaking 引入。',
        '借助 CSS 变量与现代 Motion 弹性动力学封装标准化动画原子。',
      ],
      highlights: [
        'NPM 累计安装量突破 100,000 次',
        '获得多位知名前端工程师与开源布道者推荐引用',
      ],
      techDetails: '基于 TypeScript 与 React 19 构建，测试覆盖率 94%，配置完整的 GitHub Actions CI/CD 与语义化版本自动化发布。',
    },
  },
  {
    id: 'proj-3',
    title: 'CodeScribe - 智能代码评审与自动化文档生成 Agent',
    titleEn: 'CodeScribe: Automated Code Review Agent',
    category: 'ai',
    summary: 'GitHub App 智能体，自动对 Pull Request 进行深度架构审查、潜在漏洞挖掘、性能热点提示，并自动同步更新 API 文档。',
    description: 'CodeScribe 在开发者提交代码时自动触发，基于 AST 语法树解析与 Gemini 代码理解模型，不仅指出问题，还会提供立即可应用（one-click apply）的重构 Diff 补丁。',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    tags: ['Node.js', 'GitHub API', 'Gemini Flash', 'TypeScript', 'Docker', 'Redis'],
    featured: true,
    demoUrl: 'https://codescribe.example.com',
    githubUrl: 'https://github.com/example-alexli/codescribe',
    stars: 520,
    stats: [
      { label: '审查 PR 累计', value: '45,000+' },
      { label: '采纳建议率', value: '78.4%' },
      { label: '节省工时/周', value: '6.5 小时' },
    ],
    caseStudy: {
      background: '团队代码评审往往受限于人手不足，格式与常规逻辑检查消耗大量资深工程师宝贵精力。',
      challenges: [
        '大仓库跨文件依赖分析带来的超长上下文处理。',
        '避免无意义的“AI 幻觉”噪音评论，确保审查建议高价值。',
      ],
      solutions: [
        '结合 Tree-sitter AST 静态分析与 Prompt CoT（思维链）校验机制。',
        '设立多轮自我批判过滤器（Self-Critique Layer），仅输出置信度 > 0.85 的建议。',
      ],
      highlights: [
        '已接入 30+ 团队的生产流水线使用',
        '有效拦截多次重大生产环境 SQL 注入与内存泄漏隐患',
      ],
      techDetails: '运行在 Serverless 容器架构上，集成 Webhook 高并发任务队列，具备秒级响应与多语言（TS, Python, Go, Rust）支持。',
    },
  },
  {
    id: 'proj-4',
    title: 'DevHorizon - 极简全栈开发者效率中台',
    titleEn: 'DevHorizon: Fullstack Dev Hub',
    category: 'web',
    summary: '集成了 API 调试器、JSON 转换、JWT 验签、Cron 模拟、正则可视化等 20+ 工具的离线优先开发者利器。',
    description: '一款专为工程师打造的一体化日常工具箱。所有数据纯本地计算，零隐私上传风险，支持快捷键全局呼出与自定义插件扩展。',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80',
    tags: ['Vue 3', 'TypeScript', 'Web Workers', 'PWA', 'TailwindCSS'],
    featured: false,
    demoUrl: 'https://devhorizon.example.com',
    githubUrl: 'https://github.com/example-alexli/devhorizon',
    stars: 340,
  },
  {
    id: 'proj-5',
    title: 'ZenTask - 专注式极简番茄钟与日程管理',
    titleEn: 'ZenTask: Minimalist Focus Planner',
    category: 'mobile',
    summary: '结合白噪音生成、时间块规划与极简心流追踪的跨端日程应用。纯粹、宁静、无广告。',
    description: '通过音频合成算法实时生成雨声、篝火、咖啡厅等自适应自然声波，配合时间块管理帮助创作者进入深度工作状态。',
    coverImage: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&auto=format&fit=crop&q=80',
    tags: ['React Native', 'Expo', 'Web Audio API', 'TypeScript', 'SQLite'],
    featured: false,
    demoUrl: 'https://zentask.example.com',
    githubUrl: 'https://github.com/example-alexli/zentask',
    stars: 210,
  },
  {
    id: 'proj-6',
    title: 'FastDeploy CLI - 一键容器化部署自动化工具',
    titleEn: 'FastDeploy: Zero-Config Cloud Deploy',
    category: 'tools',
    summary: '零配置自动检测项目技术栈，秒级生成生产级 Dockerfile 并一键部署至各类云平台。',
    description: '命令行工具，能够智能识别 Node、Python、Go、Rust 项目的入口与依赖树，自动生成多阶段构建最优镜像并推送到目标环境。',
    coverImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=80',
    tags: ['Go', 'Docker API', 'CLI', 'Cloud Native', 'GitHub Actions'],
    featured: false,
    demoUrl: 'https://fastdeploy.example.com',
    githubUrl: 'https://github.com/example-alexli/fastdeploy-cli',
    stars: 480,
  },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: '深入浅出：从零构建高性能多智能体（Multi-Agent）协同工作流',
    slug: 'building-multi-agent-workflows',
    summary: '探讨如何从单一提示词工程走向由规划者、执行者与反思者组成的 Multi-Agent 架构，并在真实生产环境中实现稳定性与成本控制。',
    category: 'ai',
    publishDate: '2026-06-15',
    readTime: '12 分钟',
    views: 4820,
    likes: 312,
    tags: ['AI Agent', 'Gemini', '系统架构', 'LLM 实战'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
    content: `## 为什么单一 Prompt 无法满足复杂任务？

在大模型实际落地过程中，我们常常发现：随着任务复杂度的提升，无论你的 System Prompt 写得多么详尽，LLM 都会出现以下典型问题：
1. **注意力漂移**：长指令中的后半部分约束被逐渐稀释或忽略。
2. **错误级联**：前一步骤的细微偏差会在后续推理中被成倍放大。
3. **缺乏反思机制**：模型生成完结果后直接返回，无法自我发现逻辑漏洞或格式缺陷。

为了解决这个问题，**多智能体（Multi-Agent）协同架构**成为了构建高可靠 AI 应用的核心范式。

---

## 核心架构设计：三权分立模式

在实际工程中，我们推荐将智能体划分为三大职责：

\`\`\`
  [ 用户任务输入 ]
         │
         ▼
  ┌──────────────┐
  │ 规划者 (Planner)  │ ──> 拆解目标，生成 DAG 依赖图
  └──────┬───────┘
         │
         ▼
  ┌──────────────┐
  │ 执行者 (Worker)   │ ──> 调用具体工具 (Tools) 与 API 执行子任务
  └──────┬───────┘
         │
         ▼
  ┌──────────────┐
  │ 反思者 (Critic)   │ ──> 校验质量，若不合格则携带反馈打回重试
  └──────────────┘
\`\`\`

### 1. 规划者（Planner Agent）
负责顶层目标拆解。它不直接执行耗时的计算或调用外部服务，而是将一个模糊需求（如“生成一份针对该开源项目的安全与性能分析报告”）拆解为具备先后依赖的步骤链条。

### 2. 执行者（Executor / Tool Workers）
每个 Worker 专注于单项技能，例如：
- \`GitWorker\`：获取特定 Commit 的 Diff 信息；
- \`ASTWorker\`：提取函数调用关系；
- \`DocWorker\`：生成规范的 Markdown 段落。

### 3. 反思者（Critic / Validator Agent）
根据严格的 Schema 与业务规则对执行结果进行判定。如果不符合预期，生成**结构化的修正指令（Repair Hints）**反哺给执行者重新生成。

---

## 生产落地的避坑指南

### 关键点一：严格限制最大循环次数（Max Loops）
智能体互相讨论很容易陷入死循环。务必在调度框架中设置全局硬限制（如 \`max_turns = 5\`），并在超时时优雅降级并输出部分有效成果。

### 关键点二：结构化输出是确定性的基石
利用 Gemini 等现代大模型原生支持的 \`responseSchema\`（JSON Schema）强约束输出格式，杜绝正则匹配 Markdown 代码块的脆弱逻辑。

\`\`\`typescript
const stepSchema = {
  type: "object",
  properties: {
    stepId: { type: "string" },
    action: { type: "string", enum: ["fetch_diff", "run_test", "generate_report"] },
    params: { type: "object" },
    confidence: { type: "number" }
  },
  required: ["stepId", "action", "confidence"]
};
\`\`\`

## 结语

多智能体系统并非银弹，但它是从“玩具 Demo”迈向“企业级可用软件”的关键跃迁。把不确定的生成控制在确定性的工程状态机之内，这就是现代全栈工程师的核心价值。`,
  },
  {
    id: 'art-2',
    title: '现代化 React 架构实践：打造丝滑响应式单页应用的核心心法',
    slug: 'modern-react-architecture-practices',
    summary: '总结从 React 18 到 19 的演进历程，深入剖析并发模式、Server Actions、状态归纳以及如何避免常见性能反模式。',
    category: 'frontend',
    publishDate: '2026-05-20',
    readTime: '9 分钟',
    views: 3410,
    likes: 245,
    tags: ['React 19', '前端工程化', '性能优化', 'TypeScript'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    content: `## 为什么你的 React 应用在数据量大时会卡顿？

在很多团队的代码审查中，我们发现导致 React 页面卡顿的往往不是 DOM 数量本身，而是**非必要渲染（Unnecessary Re-renders）与不合理的状态粒度分布**。

### 黄金法则一：状态尽可能下沉（Push State Down）

很多人习惯将所有状态一股脑放在页面顶层组件，导致一个局部的输入框打字触发整个复杂页面树的 Reconciliation。

\`\`\`tsx
// ❌ 反模式：输入框打字导致大列表整体重绘
function Dashboard() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <HeavyAnalyticsChart />
      <HugeDataGrid />
    </div>
  );
}

//  正解：将高频输入状态封装至独立叶子组件
function SearchInput({ onSearch }: { onSearch: (q: string) => void }) {
  const [text, setText] = useState('');
  return <input value={text} onChange={e => setText(e.target.value)} />;
}
\`\`\`

---

## 优雅处理派生状态（Derived State）

尽量避免将可以通过已有数据计算出来的属性存入 \`useState\` 并在 \`useEffect\` 中同步——这不仅容易产生二次重渲染，还会引发不可预知的时序 Bug。

> **原则**：能在渲染阶段直接计算的，绝不使用 Effect 同步。配合 \`useMemo\` 进行必要的开销缓存即可。

---

## 动效与微交互的克制之道

优秀的 UI 不是动画的堆砌，而是对物理规律的模拟。推荐：
- 交互响应采用 \`cubic-bezier(0.16, 1, 0.3, 1)\` 或基于 Spring 的阻尼物理曲线；
- 避免对 \`width\`、\`height\`、\`top\` 等触发 Layout Reflow 的属性做动画，一律使用 \`transform\` 和 \`opacity\` 由 GPU 进行合成加速。`,
  },
  {
    id: 'art-3',
    title: '全栈开发者的全景技能树：从底层协议到产品设计',
    slug: 'fullstack-developer-panorama',
    summary: '全栈不仅仅是“前端写界面，后端写 CRUD”。本文梳理一个现代化全栈开发者应当具备的技术深度、广度与思维模型。',
    category: 'fullstack',
    publishDate: '2026-04-10',
    readTime: '10 分钟',
    views: 5200,
    likes: 418,
    tags: ['职业成长', '全栈思维', '架构设计', '独立开发'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    content: `## 什么是真正的“全栈思维”？

过去我们常把全栈理解为“会做前端 + 会写后端”。但在今天，随着云原生、Serverless 以及 AI 工具链的普及，“全栈”的定义已经发生了根本性转移：

> **全栈是一种以交付最终用户价值为导向的端到端（End-to-End）解决问题能力。**

---

## 现代化全栈能力三维模型

### 1. 深度层：扎实的核心基础
- **网络协议**：HTTP/2、HTTP/3、WebSocket、SSE 机制与连接复用；
- **存储与索引**：B-Tree 索引原理、缓存击穿与雪崩防护、事务隔离级别；
- **并发与异步**：事件循环模型、协程、锁机制与幂等设计。

### 2. 广度层：高效的产品化链条
- **UI/UX 敏锐度**：知道什么样的留白与层级能让用户一目了然，不依赖设计师也能做出具备质感的界面；
- **DevOps 与自动化**：Docker 镜像瘦身、GitHub Actions CI/CD 流水线搭建与安全策略；
- **AI 杠杆**：熟练将 LLM 作为协作者，快速搭建 PoC 并验证市场需求。

### 3. 商业与产品层：价值闭环
- **指标意识**：跳出代码本身，关注 DAU、留存率、转化漏斗与系统稳定性 SLA；
- **成本敏感度**：理解每千次请求的 Cloud 账单构成，在性能与预算间取得平衡。`,
  },
  {
    id: 'art-4',
    title: '如何设计一个高可用的向量搜索与 RAG 知识库系统',
    slug: 'designing-scalable-rag-system',
    summary: '详细拆解文档分块策略、混合检索（Hybrid Search）、重排序（Re-ranking）与上下文压缩的实战调优细节。',
    category: 'architecture',
    publishDate: '2026-03-02',
    readTime: '14 分钟',
    views: 2980,
    likes: 189,
    tags: ['RAG', '向量数据库', 'pgvector', '搜索架构'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    content: `## RAG 系统的核心挑战是什么？

很多人搭建 RAG 系统仅仅是：\`Document -> Chunk -> OpenAI Embedding -> pgvector -> LLM\`。在处理规整的简单文本时效果不错，但在真实业务场景中，这种基础 RAG 的召回准确率往往只有 60% 左右。

### 核心失效场景：
1. **语义鸿沟**：用户的提问包含专业简称或口语化表达，与标准文档的向量距离偏远。
2. **跨段落信息孤岛**：关键信息被 Chunk 切割切断，上下文丢失。
3. **低质量噪音污染**：相似度检索召回了大量无关修饰词，挤占 LLM 上下文窗口。

---

## 升级策略：混合检索 + 重排序（Hybrid + Rerank）

\`\`\`
[ 用户 Query ]
     ├───> 稠密检索 (Dense Vector / Embedding) ───┐
     │                                            ├───> [ RRF 倒数排名融合 ] ───> [ 交叉编码器 Reranker ] ───> [ Top-K 精准上下文 ]
     └───> 稀疏检索 (Sparse BM25 / 全文关键词)  ───┘
\`\`\`

通过引入 BM25 解决精准关键词匹配（如产品型号、错误码），结合向量模型理解深层语义，再使用成熟的 Rerank 模型（如 Cohere 或 BGE-Reranker）对初筛结果进行打分，召回准确率通常能一举提升至 88%+。`,
  },
  {
    id: 'art-5',
    title: '独立开发者的第一年：关于产品、代码与自律的反思',
    slug: 'reflections-on-solopreneurship',
    summary: '分享作为独立开发者构建数字化产品的真实心路历程：如何克服拖延、如何找到首批种子用户以及如何在不确定中保持节奏。',
    category: 'thoughts',
    publishDate: '2026-01-18',
    readTime: '7 分钟',
    views: 6150,
    likes: 560,
    tags: ['独立开发', '心态建设', '个人成长', '随笔'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    content: `## 从“接需求的人”到“创造产品的人”

在离开大厂固定螺丝钉角色、开始全权对自己的产品与时间负责后，最先迎来的不是浪漫的自由，而是巨大的**不确定性**。

### 最重要的三个认知迭代：

1. **Done is better than perfect（先完成，再完美）**
   工程师最大的陷阱是对代码架构的过度自嗨。用户并不在乎你的 Redux 是否写得极致优雅，用户只在乎“这个按钮按下去能不能解决我的痛点”。

2. **在第一天就要思考分发（Distribution First）**
   建立公开构建（Build in Public）的习惯，从第一个 Commit 开始在社交平台记录思考与踩坑，你的早期用户往往就来自于这些真诚的分享。

3. **管理精力而非管理时间**
   每天保障 4 小时的高质量“深度工作（Deep Work）”，远胜于在电脑前耗满 10 个小时的疲态与伪勤奋。`,
  },
];

export const CAREER_DATA: CareerItem[] = [
  {
    period: '2023.08 - 至今',
    role: '高级全栈开发工程师 & AI 架构负责人',
    company: '智潮前沿创新实验室 (AI Innovations Lab)',
    companyEn: 'AI Innovations Lab',
    location: '上海',
    description: '负责新一代智能协作平台与多模态 Agent 系统的核心架构演进，主导端到端大模型赋能的知识工作流研发。',
    achievements: [
      '从零设计并主导研发多模态知识图谱工作台，服务超过 10 万+ 全球注册开发者。',
      '重构 Agent 调度引擎与向量缓存体系，使复杂查询延迟降低 45%，Token 成本优化 38%。',
      '建立前端组件自动化测试与监控告警体系，核心页面无故障运行率达 99.98%。',
    ],
    skills: ['React 19', 'TypeScript', 'Gemini API', 'Node.js', 'Python', 'pgvector', 'Docker'],
  },
  {
    period: '2021.06 - 2023.07',
    role: '前端架构师 / 核心研发',
    company: '星云云科独角兽科技 (Nebula Tech)',
    companyEn: 'Nebula Tech Inc.',
    location: '杭州',
    description: '负责企业级 SaaS 云管理平台与设计系统的架构升级，推动团队工程化与效能基建。',
    achievements: [
      '主导自研 PulseUI 设计系统在全公司 12 个业务线落地，提升前端迭代开发效率约 35%。',
      '落地微前端架构，实现千万行代码模块解耦与独立流水线秒级发布。',
      '指导 8 名初中级工程师技术进阶，主讲多次内部技术沙龙与架构演进分享。',
    ],
    skills: ['React', 'Next.js', 'WebPack/Vite', 'Micro-Frontends', 'TailwindCSS', 'Jest'],
  },
  {
    period: '2019.07 - 2021.05',
    role: '全栈开发工程师',
    company: '光合交互数码工作室 (Photosynthesis Studio)',
    companyEn: 'Photosynthesis Studio',
    location: '上海',
    description: '负责多家一线知名品牌的高保真创意交互官网、微信小程序及后端 API 研发。',
    achievements: [
      '独立交付 15+ 商业级高难度交互项目，斩获国内多项数字创意与设计大奖。',
      '基于 WebGL 与 Three.js 实现 3D 沉浸式产品展厅，页面加载首屏时间压缩至 1.2 秒内。',
    ],
    skills: ['JavaScript', 'Vue.js', 'Node.js', 'WebGL', 'Three.js', 'PostgreSQL'],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: '前端与跨端 (Frontend & Interactive)',
    icon: 'Layout',
    skills: [
      { name: 'React / Next.js', level: 95, description: '深入理解 Fiber 架构、并发渲染与 SSR/SSG' },
      { name: 'TypeScript', level: 92, description: '类型编程、泛型工具库、严谨类型安全' },
      { name: 'TailwindCSS / CSS3', level: 95, description: '高保真还原、响应式布局、流畅动效设计' },
      { name: 'Vue 3 / Vite', level: 88, description: 'Composition API、高性能单页构建' },
      { name: 'WebGL / Three.js', level: 76, description: '3D 场景、着色器基础、数据可视化' },
    ],
  },
  {
    title: '后端与云原生 (Backend & Cloud)',
    icon: 'Server',
    skills: [
      { name: 'Node.js / Express / Nest', level: 90, description: '高并发异步 I/O、RESTful & GraphQL API 设计' },
      { name: 'Python / FastAPI', level: 85, description: 'AI 服务端封装、异步任务管道' },
      { name: 'PostgreSQL / MySQL', level: 88, description: '关系建模、索引调优、pgvector 向量检索' },
      { name: 'Redis / 消息队列', level: 82, description: '缓存架构、分布式锁、高吞吐限流' },
      { name: 'Docker / CI/CD', level: 85, description: '容器编排、自动化部署流水线配置' },
    ],
  },
  {
    title: '人工智能与大模型 (AI & LLM Engineering)',
    icon: 'Sparkles',
    skills: [
      { name: 'Gemini API / LLM 接入', level: 92, description: '多模态理解、结构化 Schema 输出与函数调用' },
      { name: 'Prompt Engineering & CoT', level: 94, description: '少样本微调提示、思维链构建与防幻觉设计' },
      { name: 'RAG 检索增强系统', level: 88, description: '混合检索、重排序算法与分块策略' },
      { name: 'Multi-Agent 智能体架构', level: 86, description: '自主规划、工具调用回路与自省校验' },
    ],
  },
  {
    title: '工程素养与设计 (Design & Workflow)',
    icon: 'PenTool',
    skills: [
      { name: 'UI / UX 界面与交互设计', level: 88, description: 'Figma 原型、设计系统与微交互把控' },
      { name: 'Git & 开源协同规范', level: 95, description: '清晰的 Commit 规范、分支策略与 Code Review' },
      { name: '敏捷研发与产品思维', level: 90, description: 'MVP 快速验证、用户故事拆解与闭环交付' },
    ],
  },
];

export const INITIAL_GUESTBOOK: GuestbookMessage[] = [
  {
    id: 'msg-1',
    name: '陈宇航 (Senior Architect)',
    email: 'yuhang@tech.io',
    avatarColor: 'from-blue-500 to-indigo-600',
    message: '网站做得非常精致！尤其是作品集里的案例拆解，技术架构清晰，期待有机会在开源或者大模型落地方向进行交流。',
    createdAt: '2 天前',
    badge: '行业同行',
  },
  {
    id: 'msg-2',
    name: 'Sarah Zhang',
    email: 'sarah.z@designlab.com',
    avatarColor: 'from-purple-500 to-pink-600',
    message: 'UI 的细节把控太棒了！排版和字阶非常舒服，既有极客的严谨又有设计的美感。',
    createdAt: '4 天前',
    badge: '产品设计师',
  },
  {
    id: 'msg-3',
    name: '林柯 (全栈开发者)',
    avatarColor: 'from-emerald-500 to-teal-600',
    message: '读了关于 Multi-Agent 的那篇文章，收益匪浅，正好解答了我最近在写代码审查 Agent 时的困惑！赞！',
    createdAt: '1 周前',
    badge: '读者',
  },
];

export const GEAR_AND_FAVORITES = {
  hardware: [
    { name: 'MacBook Pro 16" M3 Max', desc: '主力生产力工具，64G 内存保证多容器与本地大模型流畅运行' },
    { name: 'Dell UltraSharp 27" 4K', desc: '双屏扩展，精准色准与代码分屏' },
    { name: 'HHKB Professional Hybrid Type-S', desc: '静电容键盘，长时间敲代码的指尖享受' },
    { name: 'Sony WH-1000XM5', desc: '主动降噪耳机，进入心流状态的必备结界' },
  ],
  software: [
    { name: 'VS Code + Cursor', desc: '主力编辑器，配合定制主题与精选插件' },
    { name: 'Warp / iTerm2', desc: '现代化的 Rust 架构终端工具' },
    { name: 'Figma', desc: '界面线框图与原型设计' },
    { name: 'Raycast', desc: '全键盘 Mac 启动器与效率神经中枢' },
  ],
  books: [
    { title: '《设计模式沉思录》', author: 'John Vlissides', tag: '软件架构' },
    { title: '《代码整洁之道》', author: 'Robert C. Martin', tag: '工程素养' },
    { title: '《生命 3.0》', author: 'Max Tegmark', tag: '人工智能思考' },
    { title: '《纳瓦尔宝典》', author: 'Eric Jorgenson', tag: '人生与商业' },
  ],
};
