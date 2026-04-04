import { Code2, Database, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Core Languages & Frameworks",
    icon: Code2,
    accent: "#818cf8",
    bgClass: "bg-indigo-50 dark:bg-indigo-500/10",
    borderClass: "border-indigo-200 dark:border-indigo-500/30",
    skills: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "Java", "C"],
    tagClass: "tag-indigo",
    progressColor: "#6366f1",
  },
  {
    title: "Database & Cloud",
    icon: Database,
    accent: "#34d399",
    bgClass: "bg-teal-50 dark:bg-teal-500/10",
    borderClass: "border-teal-200 dark:border-teal-500/30",
    skills: ["MongoDB", "MySQL", "Redis", "AWS EC2", "Hostinger VPS"],
    tagClass: "tag-teal",
    progressColor: "#14b8a6",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    accent: "#c084fc",
    bgClass: "bg-purple-50 dark:bg-purple-500/10",
    borderClass: "border-purple-200 dark:border-purple-500/30",
    skills: ["Git", "PM2", "CI/CD", "Authentication", "Cron Jobs", "API Optimization", "System Design"],
    tagClass: "tag-purple",
    progressColor: "#a855f7",
  },
];

const infoCards = [
  {
    icon: Zap,
    title: "Expertise",
    desc: "Full-stack development with focus on scalable architecture and performance optimization.",
    color: "#818cf8",
  },
  {
    icon: Code2,
    title: "Learning",
    desc: "Continuously exploring new technologies, system design patterns, and cloud solutions.",
    color: "#34d399",
  },
  {
    icon: Wrench,
    title: "Best Practices",
    desc: "Code quality, testing, documentation, and collaborative development workflows.",
    color: "#c084fc",
  },
];

export default function Skills() {
  return (
    <div className="section-padding relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-subtitle mb-3">What I Know</p>
          <h2 className="section-title mb-4">
            Technical <span className="gradient-text-static">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A comprehensive toolkit of modern technologies built through real-world project experience.
          </p>
          <div className="h-px w-24 mx-auto mt-6" style={{ background: "linear-gradient(90deg, transparent, #6366f1, #14b8a6, transparent)" }} />
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${cat.bgClass} ${cat.borderClass}`}
                >
                  <Icon size={22} style={{ color: cat.accent }} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {cat.title}
                </h3>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={cat.tagClass}>{skill}</span>
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

        {/* Info Cards */}
        <div
          className="p-8 rounded-2xl grid md:grid-cols-3 gap-6 glass border border-slate-200 dark:border-white/10"
        >
          {infoCards.map(({ icon: Icon, title, desc, color }) => (
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
