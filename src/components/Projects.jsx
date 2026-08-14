import { ExternalLink, Github, ArrowRight, Users } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    num: "01",
    title: "Achideal — E-Commerce Platform",
    role: "Full Stack",
    users: null,
    description:
      "Architected 250+ RESTful APIs spanning authentication, product catalog, order processing, vendor operations, and notifications. Built a comprehensive Admin Portal from the ground up with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    highlights: ["250+ APIs", "Admin Portal", "RBAC & Audit Logging", "Coupon & Referral Systems", "Inventory Management"],
    demoLink: "https://achideal.com",
    codeLink: null,
    accent: "#6366f1",
  },
  {
    id: 2,
    num: "02",
    title: "LMS — Learning Management System",
    role: "Full Stack",
    users: "300+",
    description:
      "Designed, built, and shipped a full-stack LMS with course management, enrolment, and progress-tracking capabilities. Developed secure RESTful APIs and responsive dashboards for students and administrators.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    highlights: ["Course Management", "Enrolment System", "Progress Tracking", "Role-based Access"],
    demoLink: "https://halatechqtr.com",
    codeLink: null,
    accent: "#14b8a6",
  },
  {
    id: 3,
    num: "03",
    title: "LitConnect — Writer-Publisher Platform",
    role: "Backend",
    users: "1,000+",
    description:
      "Refactored core business logic in the offer management system, eliminating data inconsistencies and resolving critical bugs across 25+ APIs. Implemented Firebase Cloud Messaging from scratch across web and mobile platforms.",
    tech: ["Node.js", "Express.js", "MongoDB", "Firebase", "Cron Jobs"],
    highlights: ["25+ API Fixes", "Firebase Cloud Messaging", "Cron Job Automation", "QA Test APIs"],
    demoLink: "https://litconnect.net",
    codeLink: null,
    accent: "#a855f7",
  },
  {
    id: 4,
    num: "04",
    title: "EscPlan — Inventory Middleware",
    role: "Full Stack",
    users: "5,000+",
    description:
      "Designed and built a real-time inventory synchronization engine between Shopify and internal platforms, serving 5,000+ users across 3 warehouse locations with 50+ SKUs.",
    tech: ["Node.js", "Express.js", "Shopify API", "MongoDB", "REST APIs"],
    highlights: ["Real-time Sync", "Shopify Integration", "3 Warehouses", "EDD Calculations"],
    demoLink: "https://myescplan.com",
    codeLink: null,
    accent: "#f59e0b",
  },
];

const techColorMap = {
  "Next.js": "tag-indigo",
  "Node.js": "tag-teal",
  "Express.js": "tag-teal",
  MongoDB: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
  TypeScript: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
  "Tailwind CSS": "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30",
  Firebase: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
  "Cron Jobs": "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
  "Shopify API": "bg-green-50 text-green-600 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/30",
  "REST APIs": "tag-purple",
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
  const sectionRef = useScrollReveal();

  return (
    <div className="section-padding relative bg-indigo-50/50 dark:bg-indigo-500/5">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div ref={sectionRef} className="max-w-6xl mx-auto relative reveal">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-subtitle mb-3">What I've Built</p>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text-static">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Production platforms serving thousands of users — from e-commerce to real-time inventory systems.
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

              {/* Role badge + Users badge */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold border"
                  style={{
                    color: project.accent,
                    borderColor: `${project.accent}40`,
                    background: `${project.accent}10`,
                  }}
                >
                  {project.role}
                </span>
                {project.users && (
                  <span className="user-badge text-indigo-600 dark:text-indigo-300">
                    <Users size={12} />
                    {project.users} Users
                  </span>
                )}
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
                {project.demoLink && project.demoLink !== "#" && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
                    style={{ color: project.accent }}
                  >
                    <ExternalLink size={15} />
                    Live Site
                    <ArrowRight size={13} />
                  </a>
                )}
                {project.codeLink && project.codeLink !== "#" && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors duration-200"
                  >
                    <Github size={15} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-zinc-600 mb-5 text-sm">Want to see more of my work?</p>
          <a
            href="https://github.com/Raju048143"
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
