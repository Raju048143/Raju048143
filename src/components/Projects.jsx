import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    num: "01",
    title: "HRMS – Internal Employee Management System",
    description:
      "Fixed major issues in attendance tracking, employee profiles, and leave management. Implemented automated cron jobs and improved system reliability.",
    tech: ["MERN Stack", "Redis", "Cron Jobs", "System Design"],
    highlights: ["Attendance Tracking", "Leave Management", "Performance Optimization"],
    demoLink: "#",
    codeLink: "#",
    accent: "#6366f1",
  },
  {
    id: 2,
    num: "02",
    title: "Newstapri – Financial News Platform",
    description:
      "Completed pending finance modules and built super-admin functionality. Optimized backend APIs resulting in significantly faster response times.",
    tech: ["MERN Stack", "API Optimization", "Admin Dashboard"],
    highlights: ["Finance Modules", "Super Admin", "Real-time Updates"],
    demoLink: "#",
    codeLink: "#",
    accent: "#14b8a6",
  },
  {
    id: 3,
    num: "03",
    title: "LitConnect – Writer–Publisher Platform",
    description:
      "Fixed critical backend logic in offer management system and resolved push notification issues across all flows.",
    tech: ["MERN Stack", "Push Notifications", "Real-time Messaging"],
    highlights: ["Offer Management", "Push Notifications", "User Engagement"],
    demoLink: "#",
    codeLink: "#",
    accent: "#a855f7",
  },
  {
    id: 4,
    num: "04",
    title: "Achideal – Marketplace Platform",
    description:
      "Developed core backend modules including authentication, product CRUD, vendor management, notifications, and admin audit logs.",
    tech: ["MERN Stack", "Authentication", "Admin Panel"],
    highlights: ["Product Management", "Vendor Portal", "Audit Logs"],
    demoLink: "#",
    codeLink: "#",
    accent: "#f59e0b",
  },
];

const techColorMap = {
  "MERN Stack": "tag-indigo",
  Redis: "bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30",
  "Cron Jobs": "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
  "System Design": "tag-purple",
  "API Optimization": "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
  "Admin Dashboard": "tag-teal",
  "Push Notifications": "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30",
  "Real-time Messaging": "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
  Authentication: "bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/30",
  "Admin Panel": "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/30",
};

function TechTag({ tech }) {
  const style = techColorMap[tech];
  if (!style) return <span className="tag-indigo">{tech}</span>;
  if (style.startsWith("tag-")) return <span className={style}>{tech}</span>;
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${style}`}>
      {tech}
    </span>
  );
}

export default function Projects() {
  return (
    <div className="section-padding relative bg-indigo-50/50 dark:bg-indigo-500/5">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-subtitle mb-3">What I've Built</p>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text-static">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Selection of impactful projects demonstrating full-stack expertise and problem-solving abilities.
          </p>
          <div className="h-px w-24 mx-auto mt-6" style={{ background: "linear-gradient(90deg, transparent, #6366f1, #14b8a6, transparent)" }} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-400 cursor-default glass border border-slate-200 dark:border-white/10"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.accent;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 24px 60px -12px ${project.accent}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
              />

              {/* Number watermark */}
              <div
                className="absolute top-4 right-6 text-6xl font-black opacity-5 select-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: project.accent }}
              >
                {project.num}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <TechTag key={t} tech={t} />
                ))}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-zinc-500 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs font-medium px-2 py-1 rounded-lg flex items-center gap-1"
                    style={{ background: `${project.accent}10`, color: project.accent }}
                  >
                    <span>✓</span> {h}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                className="flex gap-4 pt-5 border-t border-slate-200 dark:border-white/10"
              >
                <a
                  href={project.demoLink}
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
                  style={{ color: project.accent }}
                >
                  <ExternalLink size={15} />
                  Live Demo
                  <ArrowRight size={13} />
                </a>
                <a
                  href={project.codeLink}
                  className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors duration-200"
                >
                  <Github size={15} />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-zinc-600 mb-5 text-sm">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Github size={17} />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
