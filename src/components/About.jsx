import { Download, ArrowRight, MapPin, Mail, Phone, Sparkles } from "lucide-react";

const stats = [
  { value: "4+", label: "Projects Completed", color: "#818cf8" },
  { value: "2+", label: "Years Experience", color: "#34d399" },
  { value: "100%", label: "Client Satisfaction", color: "#c084fc" },
  { value: "15+", label: "Tech Skills", color: "#38bdf8" },
];

const frontendTech = ["React", "Next.js", "Tailwind", "JavaScript"];
const backendTech = ["Node.js", "Express", "MongoDB", "Redis"];
const toolsTech = ["Git", "AWS", "Docker", "CI/CD", "PM2"];

export default function About() {
  return (
    <div className="section-padding relative bg-indigo-50/50 dark:bg-indigo-500/5">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
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
                  src="/photo.png"
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
                I'm a passionate Full Stack Software Developer with hands-on experience building{" "}
                <span style={{ color: "#818cf8" }}>production-grade MERN stack applications</span>. I specialize
                in React.js, Next.js, Node.js, MongoDB, Redis, and AWS deployments.
              </p>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                I've worked on complex internal systems, financial platforms, and marketplace applications—fixing
                critical bugs and improving performance under real traffic. My focus is on writing{" "}
                <span style={{ color: "#34d399" }}>clean, scalable code</span> that delivers real results.
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
                  { label: "Tools & DevOps", techs: toolsTech, className: "tag-purple" },
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
                href="/Raju_Yadav_Resume.pdf"
                download="Raju_Yadav_Resume.pdf"
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
