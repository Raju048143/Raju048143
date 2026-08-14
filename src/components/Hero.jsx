import { useEffect, useState, useRef, useCallback } from "react";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Backend Architect",
  "React.js Specialist",
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

// ── Interactive Particle Network ──
function ParticleNetwork({ canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    // Particles
    const count = Math.min(80, Math.floor(window.innerWidth / 18));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      color: ["rgba(99,102,241,", "rgba(20,184,166,", "rgba(168,85,247,"][Math.floor(Math.random() * 3)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Detect theme for opacity adjustments
      const isDark = document.documentElement.classList.contains("dark");
      const dotAlpha = isDark ? 0.6 : 0.85;
      const lineAlphaMultiplier = isDark ? 0.15 : 0.4;
      const lineWidth = isDark ? 0.5 : 1;
      const dotScale = isDark ? 1 : 1.3;

      // Update & draw particles
      for (const p of particles) {
        // Subtle mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.8;
          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Dampen velocity
        p.vx *= 0.998;
        p.vy *= 0.998;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * dotScale, 0, Math.PI * 2);
        ctx.fillStyle = p.color + dotAlpha + ")";
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            const alpha = (1 - d / 160) * lineAlphaMultiplier;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark ? `rgba(99,102,241,${alpha})` : `rgba(79,70,229,${alpha})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [canvasRef]);

  return null;
}

export default function Hero() {
  const typedRole = useTypewriter(ROLES);
  const canvasRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      {/* ── Layer 1: Animated mesh gradient background ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary aurora blobs — stronger in light mode */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-50 dark:opacity-20"
          style={{
            top: "-10%",
            left: "-10%",
            background: "radial-gradient(circle, rgba(99,102,241,0.6), transparent 70%)",
            filter: "blur(80px)",
            animation: "float-slow 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-40 dark:opacity-15"
          style={{
            top: "50%",
            right: "-5%",
            background: "radial-gradient(circle, rgba(20,184,166,0.6), transparent 70%)",
            filter: "blur(80px)",
            animation: "float 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-35 dark:opacity-15"
          style={{
            bottom: "-5%",
            left: "30%",
            background: "radial-gradient(circle, rgba(168,85,247,0.5), transparent 70%)",
            filter: "blur(70px)",
            animation: "float-slow 14s ease-in-out infinite 4s",
          }}
        />

        {/* Rotating gradient ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.12] dark:opacity-[0.05]"
          style={{
            background: "conic-gradient(from 0deg, #6366f1, #14b8a6, #a855f7, #6366f1)",
            animation: "rotate-slow 20s linear infinite",
            filter: "blur(60px)",
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute opacity-[0.15] dark:opacity-[0.04]"
          style={{
            top: "15%",
            right: "15%",
            width: 120,
            height: 120,
            border: "2px solid #6366f1",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animation: "float 8s ease-in-out infinite, rotate-slow 15s linear infinite",
          }}
        />
        <div
          className="absolute opacity-[0.15] dark:opacity-[0.04]"
          style={{
            bottom: "20%",
            left: "10%",
            width: 80,
            height: 80,
            border: "2px solid #14b8a6",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "float-slow 10s ease-in-out infinite 3s, rotate-slow 12s linear infinite reverse",
          }}
        />
        <div
          className="absolute opacity-[0.12] dark:opacity-[0.03]"
          style={{
            top: "60%",
            right: "25%",
            width: 60,
            height: 60,
            border: "1.5px solid #a855f7",
            transform: "rotate(45deg)",
            animation: "float 6s ease-in-out infinite 1s",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Layer 2: Interactive particle network ── */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[1]" style={{ opacity: 0.7 }} />
      <ParticleNetwork canvasRef={canvasRef} />

      {/* ── Layer 3: Soft edge blend (light touch, no heavy darkening) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(248,250,252,0.4) 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[2] hidden dark:block"
        style={{ background: "radial-gradient(ellipse at center, transparent 60%, rgba(6,6,17,0.4) 100%)" }}
      />

      {/* ── Layer 4: Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center hero-enter" style={{ paddingTop: "5rem" }}>
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
              src={`${import.meta.env.BASE_URL}photo.png`}
              alt="Raju Yadav — Full Stack Developer"
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
          serving <strong>6,000+ users</strong> across multiple live platforms. Specialized in React.js, Node.js, MongoDB,
          and AWS deployments. Passionate about{" "}
          <span style={{ color: "#34d399" }}>clean, production-grade code</span>.
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
            href={`${import.meta.env.BASE_URL}Raju_Yadav_Resume.pdf`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-teal-50 border border-teal-200 text-teal-700 dark:bg-teal-500/10 dark:border-teal-500/30 dark:text-teal-400 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mb-16">
          {[
            { href: "https://github.com/Raju048143", icon: Github, label: "GitHub", color: "#818cf8" },
            { href: "https://www.linkedin.com/in/raju-yadav-946b16229/", icon: Linkedin, label: "LinkedIn", color: "#2dd4bf" },
            { href: "mailto:rajuyadav91391@gmail.com", icon: Mail, label: "Email", color: "#c084fc" },
          ].map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="group relative w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 hover:-translate-y-1"
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
            { value: "6+", label: "Live Projects" },
            { value: "6K+", label: "Users Served" },
            { value: "250+", label: "APIs Built" },
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <span className="text-xs text-zinc-600 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} style={{ color: "#6366f1" }} />
      </div>
    </div>
  );
}
