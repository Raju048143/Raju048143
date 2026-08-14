import { Code2, Database, Wrench, Zap, Server, Layout } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Languages & Frontend",
    icon: Layout,
    accent: "#818cf8",
    bgClass: "bg-indigo-50 dark:bg-indigo-500/10",
    borderClass: "border-indigo-200 dark:border-indigo-500/30",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 75 },
    ],
    tagClass: "tag-indigo",
    progressColor: "#6366f1",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    accent: "#34d399",
    bgClass: "bg-teal-50 dark:bg-teal-500/10",
    borderClass: "border-teal-200 dark:border-teal-500/30",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs", level: 92 },
      { name: "Java", level: 65 },
      { name: "SQL", level: 75 },
    ],
    tagClass: "tag-teal",
    progressColor: "#14b8a6",
  },
  {
    title: "Database & Cloud",
    icon: Database,
    accent: "#38bdf8",
    bgClass: "bg-sky-50 dark:bg-sky-500/10",
    borderClass: "border-sky-200 dark:border-sky-500/30",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 72 },
      { name: "AWS EC2", level: 75 },
    ],
    tagClass: "tag-indigo",
    progressColor: "#0ea5e9",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    accent: "#c084fc",
    bgClass: "bg-purple-50 dark:bg-purple-500/10",
    borderClass: "border-purple-200 dark:border-purple-500/30",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "PM2", level: 80 },
      { name: "Hostinger VPS", level: 75 },
    ],
    tagClass: "tag-purple",
    progressColor: "#a855f7",
  },
];

const conceptCards = [
  {
    icon: Zap,
    title: "Architecture & Design",
    desc: "RBAC, cron scheduling, audit logging, and scalable system architecture for production workloads.",
    color: "#818cf8",
  },
  {
    icon: Code2,
    title: "API Optimization",
    desc: "RESTful API design, query optimization, caching strategies, and performance tuning at scale.",
    color: "#34d399",
  },
  {
    icon: Wrench,
    title: "DevOps & Delivery",
    desc: "CI/CD pipelines, AWS EC2 deployments, process management with PM2, and zero-downtime releases.",
    color: "#c084fc",
  },
];

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <div className="section-padding relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto relative reveal">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-subtitle mb-3">What I Know</p>
          <h2 className="section-title mb-4">
            Technical <span className="gradient-text-static">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A comprehensive toolkit of modern technologies built through real-world project experience and production deployments.
          </p>
          <div className="h-px w-24 mx-auto mt-6" style={{ background: "linear-gradient(90deg, transparent, #6366f1, #14b8a6, transparent)" }} />
        </div>

        {/* Category Cards with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`relative p-7 rounded-2xl glass-hover overflow-hidden group border backdrop-blur-xl ${cat.bgClass} ${cat.borderClass}`}
              >
                {/* Top glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
                />

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.bgClass} ${cat.borderClass}`}
                  >
                    <Icon size={22} style={{ color: cat.accent }} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Progress Bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-slate-700 dark:text-zinc-300">{skill.name}</span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="skill-progress-bar">
                        <div
                          className="skill-progress-fill"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${cat.progressColor}, ${cat.accent})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                  style={{ background: cat.accent, filter: "blur(30px)", transform: "translate(30%, 30%)" }}
                />
              </div>
            );
          })}
        </div>

        {/* Concept Cards */}
        <div
          className="p-8 rounded-2xl grid md:grid-cols-3 gap-6 glass border border-slate-200 dark:border-white/10"
        >
          {conceptCards.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex gap-4 items-start group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <h4 className="text-slate-800 dark:text-white font-semibold mb-1">{title}</h4>
                <p className="text-slate-500 dark:text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
