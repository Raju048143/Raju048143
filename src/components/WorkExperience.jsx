import { Briefcase, Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Radoms Digital Pvt. Ltd.",
    location: "Greater Noida",
    period: "May 2025 – Present",
    current: true,
    description:
      "Developing production-grade MERN applications, managing AWS EC2 & Hostinger VPS deployments with CI/CD pipelines.",
    highlights: ["MERN Stack", "AWS Deployment", "CI/CD", "Performance Optimization"],
    accent: "#6366f1",
  },
  {
    id: 2,
    title: "Trainee Software Analyst",
    company: "Webkul Software Pvt. Ltd.",
    location: "Noida",
    period: "Feb 2025 – Apr 2025",
    current: false,
    description:
      "Worked on Magento-based modules, fixed and enhanced Google Address Autofill and LMS modules for improved user experience.",
    highlights: ["Magento", "Module Development", "Bug Fixing", "Performance Enhancement"],
    accent: "#14b8a6",
  },
];

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "GL Bajaj College of Technology and Management",
    location: "Greater Noida",
    year: "2023 – 2025",
    score: "73.8%",
    color: "#818cf8",
    bgClass: "bg-indigo-50/50 dark:bg-indigo-500/5",
    borderClass: "border-indigo-200 dark:border-indigo-500/20"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Global Institute of Information Technology",
    location: "Greater Noida",
    year: "2020 – 2023",
    score: "73.5%",
    color: "#34d399",
    bgClass: "bg-teal-50/50 dark:bg-teal-500/5",
    borderClass: "border-teal-200 dark:border-teal-500/20"
  },
];

const certifications = [
  { name: "Java Core Technology", color: "#f59e0b", bgClass: "bg-amber-50 dark:bg-amber-500/5", borderClass: "border-amber-200 dark:border-amber-500/20", hoverClass: "hover:bg-amber-100 dark:hover:bg-amber-500/10 hover:border-amber-300 dark:hover:border-amber-500/40" },
  { name: "Java Advanced Technology", color: "#f59e0b", bgClass: "bg-amber-50 dark:bg-amber-500/5", borderClass: "border-amber-200 dark:border-amber-500/20", hoverClass: "hover:bg-amber-100 dark:hover:bg-amber-500/10 hover:border-amber-300 dark:hover:border-amber-500/40" },
  { name: "Spring Boot", color: "#34d399", bgClass: "bg-teal-50 dark:bg-teal-500/5", borderClass: "border-teal-200 dark:border-teal-500/20", hoverClass: "hover:bg-teal-100 dark:hover:bg-teal-500/10 hover:border-teal-300 dark:hover:border-teal-500/40" },
  { name: "Data Structures using Java", color: "#818cf8", bgClass: "bg-indigo-50 dark:bg-indigo-500/5", borderClass: "border-indigo-200 dark:border-indigo-500/20", hoverClass: "hover:bg-indigo-100 dark:hover:bg-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-500/40" },
  { name: "IR4.0 Foundation", color: "#c084fc", bgClass: "bg-purple-50 dark:bg-purple-500/5", borderClass: "border-purple-200 dark:border-purple-500/20", hoverClass: "hover:bg-purple-100 dark:hover:bg-purple-500/10 hover:border-purple-300 dark:hover:border-purple-500/40" },
];

export default function WorkExperience() {
  return (
    <div className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-subtitle mb-3">My Journey</p>
          <h2 className="section-title mb-4">
            Experience &amp;{" "}
            <span className="gradient-text-static">Education</span>
          </h2>
          <div className="h-px w-24 mx-auto mt-2" style={{ background: "linear-gradient(90deg, transparent, #6366f1, #14b8a6, transparent)" }} />
        </div>

        {/* ── Work Experience ── */}
        <div className="mb-16">
          <h3
            className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-indigo-50 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/30"
            >
              <Briefcase size={18} style={{ color: "#818cf8" }} />
            </div>
            Professional Experience
          </h3>

          <div className="relative space-y-6">
            {/* Timeline line */}
            <div
              className="absolute left-5 top-2 bottom-2 w-px timeline-line hidden md:block opacity-30"
            />

            {experiences.map((exp) => (
              <div key={exp.id} className="md:pl-16 relative group">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-10 h-10 rounded-full hidden md:flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 bg-slate-50 dark:bg-[#060611]"
                  style={{
                    border: `2px solid ${exp.accent}`,
                    boxShadow: `0 0 16px ${exp.accent}30`,
                  }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: exp.accent }} />
                </div>

                {/* Card */}
                <div
                  className="relative p-7 rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 glass border border-slate-200 dark:border-white/10"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = exp.accent;
                    e.currentTarget.style.boxShadow = `0 20px 50px -10px ${exp.accent}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${exp.accent}, transparent)` }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4
                          className="text-xl font-bold text-slate-900 dark:text-white"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {exp.title}
                        </h4>
                        {exp.current && (
                          <span
                            className="px-2.5 py-0.5 text-xs font-semibold rounded-full flex items-center gap-1 bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-medium" style={{ color: exp.accent }}>{exp.company}</p>
                    </div>

                    <div className="text-sm space-y-1 shrink-0">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-zinc-500">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-zinc-500">
                        <MapPin size={13} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="tag-indigo">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div className="mb-16">
          <h3
            className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-teal-50 border border-teal-200 dark:bg-teal-500/10 dark:border-teal-500/30"
            >
              <GraduationCap size={18} style={{ color: "#34d399" }} />
            </div>
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {education.map((edu) => (
              <div
                key={edu.id}
                className={`p-6 rounded-2xl glass-hover relative overflow-hidden border ${edu.bgClass} ${edu.borderClass}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-10"
                  style={{ background: edu.color, filter: "blur(40px)", transform: "translate(30%, -30%)" }} />

                <h4 className="text-slate-900 dark:text-white font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium mb-4" style={{ color: edu.color }}>{edu.institution}</p>

                <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-zinc-500">
                  <span className="flex items-center gap-1"><MapPin size={11} />{edu.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} />{edu.year}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-semibold border ${edu.bgClass} ${edu.borderClass}`}
                    style={{ color: edu.color }}
                  >
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certifications ── */}
        <div>
          <h3
            className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-purple-50 border border-purple-200 dark:bg-purple-500/10 dark:border-purple-500/30"
            >
              <Award size={18} style={{ color: "#c084fc" }} />
            </div>
            Certifications &amp; Achievements
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {certifications.map(({ name, color, bgClass, borderClass, hoverClass }) => (
              <div
                key={name}
                className={`p-4 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 cursor-default border ${bgClass} ${borderClass} ${hoverClass} hover:shadow-lg`}
              >
                <div
                  className="w-8 h-8 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${color}15` }}
                >
                  <Award size={16} style={{ color }} />
                </div>
                <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300 leading-snug">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
