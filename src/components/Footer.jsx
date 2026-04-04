import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com", accent: "#818cf8", hoverBg: "hover:bg-indigo-100 dark:hover:bg-indigo-500/20", hoverBorder: "hover:border-indigo-300 dark:hover:border-indigo-500/50", hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/raju-yadav-946b16229/", accent: "#34d399", hoverBg: "hover:bg-teal-100 dark:hover:bg-teal-500/20", hoverBorder: "hover:border-teal-300 dark:hover:border-teal-500/50", hoverText: "group-hover:text-teal-600 dark:group-hover:text-teal-400" },
  { name: "Email", icon: Mail, url: "mailto:rajuyadav91391@gmail.com", accent: "#c084fc", hoverBg: "hover:bg-purple-100 dark:hover:bg-purple-500/20", hoverBorder: "hover:border-purple-300 dark:hover:border-purple-500/50", hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400" },
];

const navLinks = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Experience", "#experience"], ["Contact", "#contact"],
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 350);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="scroll-top-btn"
        style={{
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <ArrowUp size={20} />
      </button>

      <footer
        className="relative overflow-hidden bg-slate-50 border-t border-slate-200 dark:bg-[#04040e] dark:border-indigo-500/10"
      >
        {/* Subtle top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(20,184,166,0.4), transparent)" }}
        />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #6366f1, #14b8a6)" }}
                >
                  RY
                </div>
                <span
                  className="font-bold text-lg text-slate-900 dark:text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Raju <span className="gradient-text-static">Yadav</span>
                </span>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xs mb-6">
                Full Stack Software Developer specializing in MERN stack applications with a passion for scalable, production-grade code.
              </p>
              {/* Socials */}
              <div className="flex gap-3">
                {socialLinks.map(({ name, icon: Icon, url, hoverBg, hoverBorder, hoverText }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    className={`group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 hover:-translate-y-1 ${hoverBg} ${hoverBorder}`}
                  >
                    <Icon size={16} className={`text-slate-500 dark:text-zinc-500 transition-colors duration-200 ${hoverText}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-slate-900 dark:text-white text-sm font-semibold mb-5 tracking-wider uppercase">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-slate-300 dark:bg-zinc-700 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-400 transition-colors duration-200"
                      />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-slate-900 dark:text-white text-sm font-semibold mb-5 tracking-wider uppercase">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:+918858463612" className="text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                    +91-8858463612
                  </a>
                </li>
                <li>
                  <a href="mailto:rajuyadav91391@gmail.com" className="text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 break-all">
                    rajuyadav91391@gmail.com
                  </a>
                </li>
                <li className="text-slate-600 dark:text-zinc-400">Greater Noida, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200 dark:border-white/5"
          >
            <p className="flex items-center gap-1">
              © {year} Raju Yadav · Made with{" "}
              <Heart size={13} className="fill-red-500 text-red-500 mx-0.5" />
              in India
            </p>
            <p className="gradient-text-static text-xs font-medium">Full Stack Developer · MERN · AWS</p>
          </div>
        </div>
      </footer>
    </>
  );
}
