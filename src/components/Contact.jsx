import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import useScrollReveal from "../hooks/useScrollReveal";

// ── EmailJS config (set in .env) ──────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ── Static data ───────────────────────────────────────────────
const contactCards = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "Reach me directly",
    value: "rajuyadav91391@gmail.com",
    href: "mailto:rajuyadav91391@gmail.com",
    bgClass: "bg-indigo-50 dark:bg-indigo-500/10",
    borderClass: "border-indigo-200 dark:border-indigo-500/30",
    textClass: "text-indigo-600 dark:text-indigo-400",
    hoverBorder: "hover:border-indigo-300 dark:hover:border-indigo-500/50",
    hoverShadow: "hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-500/20"
  },
  {
    icon: Phone,
    title: "Phone",
    subtitle: "Available for calls",
    value: "+91-8858463612",
    href: "tel:+918858463612",
    bgClass: "bg-teal-50 dark:bg-teal-500/10",
    borderClass: "border-teal-200 dark:border-teal-500/30",
    textClass: "text-teal-600 dark:text-teal-400",
    hoverBorder: "hover:border-teal-300 dark:hover:border-teal-500/50",
    hoverShadow: "hover:shadow-lg hover:shadow-teal-100 dark:hover:shadow-teal-500/20"
  },
  {
    icon: MapPin,
    title: "Location",
    subtitle: "Open to remote",
    value: "Greater Noida, India",
    href: null,
    bgClass: "bg-purple-50 dark:bg-purple-500/10",
    borderClass: "border-purple-200 dark:border-purple-500/30",
    textClass: "text-purple-600 dark:text-purple-400",
    hoverBorder: "hover:border-purple-300 dark:hover:border-purple-500/50",
    hoverShadow: "hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-500/20"
  },
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "I aim to respond to all inquiries within 24-48 hours. For urgent matters, feel free to reach out via phone.",
  },
  {
    q: "Do you take freelance projects?",
    a: "Yes! I'm open to freelance opportunities, contracts, and exciting full-time roles. Let's discuss your project.",
  },
  {
    q: "What's your availability?",
    a: "Currently employed at Radoms Digital with flexible hours. Open to consulting and select freelance projects.",
  },
  {
    q: "What's your typical project scope?",
    a: "From REST APIs and admin panels to full-stack platforms. Pricing is flexible based on project complexity and timeline.",
  },
];

// ── Component ─────────────────────────────────────────────────
export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",       // matches {{title}} in EmailJS template subject
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    setStatus("loading");

    try {
      // Template variables used: {{name}}, {{message}}, {{time}}
      // {{email}} is also sent for reply-to / reference
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

      setStatus("success");
      setFormData({ name: "", email: "", title: "", message: "" });

      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="section-padding relative bg-indigo-50/50 dark:bg-indigo-500/5">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div ref={sectionRef} className="max-w-6xl mx-auto relative reveal">
        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <p className="section-subtitle mb-3">Let's Talk</p>
          <h2 className="section-title mb-4">
            Get In <span className="gradient-text-static">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-zinc-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind or just want to connect? I'm always open to discussing new opportunities and collaborations.
          </p>
          <div
            className="h-px w-24 mx-auto mt-6"
            style={{ background: "linear-gradient(90deg, transparent, #6366f1, #14b8a6, transparent)" }}
          />
        </div>

        {/* ── Contact Info Cards ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contactCards.map(({ icon: Icon, title, subtitle, value, href, bgClass, borderClass, textClass, hoverBorder, hoverShadow }) => (
            <div
              key={title}
              className={`p-6 rounded-2xl text-center transition-all duration-300 border hover:-translate-y-1 ${bgClass} ${borderClass} ${hoverBorder} ${hoverShadow}`}
            >
              <div
                className={`w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center border ${bgClass} ${borderClass}`}
              >
                <Icon size={22} className={textClass} />
              </div>
              <h3
                className="text-slate-900 dark:text-white font-bold mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-slate-500 dark:text-zinc-600 text-xs mb-3">{subtitle}</p>
              {href ? (
                <a
                  href={href}
                  className={`text-sm font-medium break-all transition-colors duration-200 ${textClass}`}
                >
                  {value}
                </a>
              ) : (
                <p className={`text-sm font-medium ${textClass}`}>
                  {value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── Form + FAQ ── */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div
            className="lg:col-span-3 p-8 rounded-2xl glass border border-slate-200 dark:border-white/10"
          >
            <h3
              className="text-slate-900 dark:text-white font-bold text-xl mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Send a Message
            </h3>

            {/* EmailJS sends this entire form — field names match template variables */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Hidden: auto-filled timestamp → {{time}} in template */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                  timeZone: "Asia/Kolkata",
                })}
                readOnly
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-wider uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-wider uppercase">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-wider uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-2 tracking-wider uppercase">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"              /* matches {{message}} in template */
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="input-field resize-none"
                  required
                />
              </div>

              {/* ── Status banners ── */}
              {status === "success" && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400"
                >
                  <CheckCircle size={18} />
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}

              {status === "error" && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl text-sm font-medium bg-red-50 border border-red-200 text-red-600 dark:bg-red-500/10 dark:border-red-500/30 dark:text-red-400"
                >
                  <AlertCircle size={18} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              {/* ── Submit Button ── */}
              <button
                type="submit"
                id="contact-submit"
                disabled={status === "loading"}
                className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "loading" ? "bg-indigo-300 dark:bg-indigo-500/30 cursor-not-allowed" : "btn-primary hover:-translate-y-0.5"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── FAQ ── */}
          <div className="lg:col-span-2 space-y-4">
            <h3
              className="text-slate-900 dark:text-white font-bold text-lg mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Frequently Asked
            </h3>
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="p-5 rounded-2xl transition-all duration-300 glass glass-hover border border-slate-200 dark:border-white/10"
              >
                <h4 className="text-slate-800 dark:text-white text-sm font-semibold mb-2">{q}</h4>
                <p className="text-slate-500 dark:text-zinc-500 text-xs leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
