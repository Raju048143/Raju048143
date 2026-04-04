import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Backend Architect",
  "React.js Expert",
];

function useTypewriter(words, speed = 100, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const delay = isDeleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

// Floating particle component
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={style}
    />
  );
}

export default function Hero() {
  const typedRole = useTypewriter(ROLES);
  const canvasRef = useRef(null);

  // Animated grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame;
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gridSize = 80;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      for (let x = 0; x <= cols; x++) {
        for (let y = 0; y <= rows; y++) {
          const posX = x * gridSize;
          const posY = y * gridSize;
          const dist = Math.sqrt(
            Math.pow(posX - canvas.width / 2, 2) +
              Math.pow(posY - canvas.height / 2, 2)
          );
          const alpha =
            Math.max(0, 1 - dist / (canvas.width * 0.6)) *
            (0.04 + 0.02 * Math.sin(t * 0.01 + dist * 0.005));
          ctx.fillStyle = `rgba(99,102,241,${alpha})`;
          ctx.beginPath();
          ctx.arc(posX, posY, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      t++;
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const particles = [
    { width: 300, height: 300, top: "10%", left: "5%", background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)", filter: "blur(40px)", animation: "float 7s ease-in-out infinite" },
    { width: 400, height: 400, top: "60%", right: "5%", background: "radial-gradient(circle, rgba(20,184,166,0.15), transparent 70%)", filter: "blur(50px)", animation: "float-slow 9s ease-in-out infinite" },
    { width: 200, height: 200, top: "30%", right: "20%", background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)", filter: "blur(30px)", animation: "float 5s ease-in-out infinite 2s" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated dot canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Glow orbs */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ position: "absolute", ...p }} />
      ))}

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, var(--bg-main) 90%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center" style={{ paddingTop: "5rem" }}>
        {/* Profile Image */}
        <div className="relative flex justify-center mb-8">
          <div className="relative group">
            {/* Animated rotating border */}
            <div 
              className="absolute -inset-1.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "conic-gradient(from 0deg, #6366f1, #14b8a6, #c084fc, #6366f1)",
                animation: "rotate-slow 4s linear infinite",
              }}
            />
            {/* Inner mask */}
            <div className="absolute inset-0.5 rounded-full bg-slate-50 dark:bg-[#060611] z-10" />
            
            {/* Image */}
            <img 
              src="/photo.png" 
              alt="Raju Yadav" 
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover z-20 border-2 border-transparent shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Floating indicator */}
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-slate-50 dark:border-[#060611] rounded-full z-30 animate-pulse" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 leading-none tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-slate-900 dark:text-white">Raju </span>
          <span className="gradient-text">Yadav</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center gap-2 mb-6 h-12">
          <span className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-zinc-300">
            {typedRole}
          </span>
          <span
            className="w-0.5 h-8 inline-block rounded-full"
            style={{ background: "#6366f1", animation: "blink 1s step-end infinite" }}
          />
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Building{" "}
          <span style={{ color: "#818cf8" }}>scalable MERN stack applications</span>{" "}
          with production-grade code. Specialized in React.js, Node.js, MongoDB,
          and AWS. Passionate about{" "}
          <span style={{ color: "#34d399" }}>solving complex challenges</span>.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-base"
          >
            <span>Get In Touch</span>
          </button>
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-secondary text-base"
          >
            View My Work
          </button>
          <a
            href="/Raju_Yadav_Resume.pdf"
            download="Raju_Yadav_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-teal-50 border border-teal-200 text-teal-700 dark:bg-teal-500/10 dark:border-teal-500/30 dark:text-teal-400"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mb-16">
          {[
            { href: "https://github.com", icon: Github, label: "GitHub", color: "#818cf8" },
            { href: "https://www.linkedin.com/in/raju-yadav-946b16229/", icon: Linkedin, label: "LinkedIn", color: "#2dd4bf" },
            { href: "mailto:rajuyadav91391@gmail.com", icon: Mail, label: "Email", color: "#c084fc" },
          ].map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="group relative w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10"
            >
              <Icon
                size={20}
                className="transition-all duration-300 group-hover:scale-110"
                style={{ color: "rgb(161,161,170)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(161,161,170)")}
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `${color}15` }}
              />
            </a>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-px mb-14">
          {[
            { value: "4+", label: "Projects" },
            { value: "2+", label: "Years Exp" },
            { value: "100%", label: "Committed" },
            { value: "15+", label: "Tech Skills" },
          ].map(({ value, label }, i) => (
            <div key={i} className="flex items-center">
              <div className="px-8 py-4 text-center">
                <div className="text-2xl font-black gradient-text-static">{value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
              </div>
              {i < 3 && <div className="w-px h-10 hidden sm:block bg-slate-200 dark:bg-white/10" />}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} style={{ color: "#6366f1" }} />
      </div>
    </div>
  );
}
