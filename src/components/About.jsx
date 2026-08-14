import { Download, ArrowRight, MapPin, Mail, Phone, Sparkles } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const stats = [
  { value: "6+", label: "Live Projects", color: "#818cf8" },
  { value: "6K+", label: "Users Served", color: "#34d399" },
  { value: "250+", label: "APIs Built", color: "#c084fc" },
  { value: "15+", label: "Tech Skills", color: "#38bdf8" },
];

const frontendTech = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"];
const backendTech = ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"];
const toolsTech = ["Git", "AWS EC2", "CI/CD", "PM2", "Hostinger VPS"];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <div className="section-padding relative bg-indigo-50/50 dark:bg-indigo-500/5">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div ref={sectionRef} className="max-w-6xl mx-auto relative reveal">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="section-subtitle mb-3">Who I Am</p>
          <h2 className="section-title mb-4">
            About <span className="gradient-text-static">Me</span>
          </h2>
          <div className="h-px w-24 mx-auto" style={{ background: "linear-gradient(90deg, transparent, #6366f1, #14b8a6, transparent)" }} />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Profile + contact */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Spin ring */}
                <div
                  className="absolute -inset-3 rounded-3xl"
                  style={{
                    background: "conic-gradient(from 0deg, #6366f1, #14b8a6, #6366f1)",
                    animation: "rotate-slow 6s linear infinite",
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-slate-50 dark:bg-[#060611]" />
                </div>
                {/* Glow */}
                <div className="absolute -inset-6 rounded-full opacity-30 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)", filter: "blur(20px)" }} />
                <img
                  src={`${import.meta.env.BASE_URL}photo.png`}
                  alt="Raju Yadav"
                  className="relative w-56 h-56 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label, color }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl text-center glass glass-hover"
                >
                  <div className="text-2xl font-black mb-1" style={{ color }}>{value}</div>
                  <div className="text-xs text-slate-500 dark:text-zinc-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Contact snippet */}
            <div className="p-5 rounded-2xl glass border border-indigo-200 dark:border-indigo-500/20">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} style={{ color: "#818cf8" }} />
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">Quick Info</h4>
              </div>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "Greater Noida, India", color: "#818cf8" },
                  { icon: Phone, text: "+91-8858463612", color: "#34d399" },
                  { icon: Mail, text: "rajuyadav91391@gmail.com", color: "#c084fc" },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-start gap-3 text-sm">
                    <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color }} />
                    <span className="text-slate-600 dark:text-zinc-300 break-all">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Story + stack */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-5">
              <h3
                className="text-3xl font-bold text-slate-900 dark:text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Full Stack Software Developer
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                I'm a Full-Stack Developer (MERN) with 1+ year of experience building and shipping{" "}
                <span style={{ color: "#818cf8" }}>production-grade APIs and interfaces</span> serving{" "}
                <strong>6,000+ users</strong> across multiple live platforms. Proficient in crafting responsive
                frontends with React.js, Next.js, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                On the backend, I engineer scalable systems with Node.js, Express.js, MongoDB, PostgreSQL, and Redis.
                Strong focus on{" "}
                <span style={{ color: "#34d399" }}>RESTful API design, role-based access control, performance optimization</span>,
                and CI/CD-driven deployments on AWS EC2.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-2xl glass border border-slate-200 dark:border-white/10">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                Tech Stack
              </h4>

              <div className="space-y-4">
                {[
                  { label: "Frontend", techs: frontendTech, className: "tag-indigo" },
                  { label: "Backend", techs: backendTech, className: "tag-teal" },
                  { label: "DevOps & Tools", techs: toolsTech, className: "tag-purple" },
                ].map(({ label, techs, className }) => (
                  <div key={label}>
                    <p className="text-xs text-slate-500 dark:text-zinc-500 mb-2 font-medium uppercase tracking-wider">{label}</p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((t) => (
                        <span key={t} className={className}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="flex items-center gap-4">
              <a
                href={`${import.meta.env.BASE_URL}Raju_Yadav_Resume.pdf`}
                className="btn-primary"
              >
                <Download size={16} />
                <span>Download Resume</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-slate-500 dark:text-zinc-500">PDF · Updated 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
