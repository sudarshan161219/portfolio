import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Layout,
  ArrowRight,
  ExternalLink,
  Mail,
  Zap,
  Globe,
  Instagram,
  Twitter,
} from "lucide-react";

const BRAND_NAME = "BuildwithSud";
const CONTACT_EMAIL = "invii@invii.online";

const services = [
  {
    title: "SaaS Development",
    icon: <Cpu size={24} />,
    desc: "Full-cycle web apps from database to UI.",
  },
  {
    title: "API Integration",
    icon: <Terminal size={24} />,
    desc: "Connecting Stripe, OpenAI, or custom Node backends.",
  },
  {
    title: "React Dashboards",
    icon: <Layout size={24} />,
    desc: "High-performance admin panels and data visualization.",
  },
];

const BRAND_COLORS = {
  upwork: "bg-[#14a800] hover:bg-[#14a800]/90", // Upwork Green
  fiverr: "bg-[#1dbf73] hover:bg-[#1dbf73]/90", // Fiverr Green
};

const projects = [
  {
    name: "Retain | Client Portal",
    tag: "SaaS / Productivity",
    desc: "A real-time retainer management dashboard. Features zero-login client access via secure magic links and WebSocket-powered budget syncing. Replaces manual spreadsheet reporting.",
    stack: ["React", "Socket.io", "PostgreSQL", "Node.js"],
    link: "https://retain-frontend-gamma.vercel.app/",
    highlight: true, // This is your "Crown Jewel" now
  },
  {
    name: "SignOff | Approval Flow",
    tag: "Live Product",
    desc: "The friction-free way to get client approvals. Secure file delivery using Cloudflare R2 with no login required. Features automated workflows and secure timed-access tokens.",
    stack: ["React", "Cloudflare R2", "Node.js", "Tailwind"],
    link: "https://signoff-one.vercel.app/",
    highlight: false,
  },
  {
    name: "Invo | Document Engine",
    tag: "Frontend Tool",
    desc: "A privacy-focused, offline-first document generator. Creates Invoices, Quotes, and Receipts instantly in the browser. Zero-latency architecture with no server-side tracking.",
    stack: ["React", "Local Storage", "Vite", "Tailwind"],
    link: "https://invo-eight.vercel.app/",
    highlight: false,
  },
  {
    name: "Hunt | Job Aggregator",
    tag: "Internal Tool",
    desc: "Automated lead generation engine. Scrapes and filters freelance opportunities from multiple RSS feeds using background cron jobs.",
    stack: ["TypeScript", "Cron", "Prisma", "Node.js"],
    link: null, // Keep null until you finish the dashboard
  },
];
export const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      {/* NAV */}
      <header className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center border-b border-zinc-900">
        <div className="flex items-center gap-2">
          <Code2 className="text-white" />
          <span className="text-xl font-bold tracking-tight">{BRAND_NAME}</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#work" className="hover:text-white transition">
            Work
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-gray-400 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Technical partner for your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-600">
            next big build.
          </span>
        </h1>

        <p className="text-gray-400 mt-6 text-xl max-w-2xl leading-relaxed">
          Specialized web development for startups and businesses. Focusing on
          performance, privacy, and scalable architecture.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition flex items-center gap-2"
          >
            Hire Me <ArrowRight size={18} />
          </a>
          <a
            href="#work"
            className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-lg font-medium hover:bg-zinc-800 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-zinc-900/50 border-y border-zinc-900"
      >
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h3 className="text-3xl font-bold mb-12">Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-white transition">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-12">Selected Works</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`flex flex-col p-8 rounded-2xl border transition relative overflow-hidden ${
                project.highlight
                  ? "bg-zinc-900 border-zinc-700 shadow-2xl shadow-green-900/10"
                  : "bg-zinc-900/30 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {project.highlight && (
                <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">
                  Featured
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.highlight
                      ? "bg-green-500/10 text-green-400"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {project.tag}
                </span>
                {project.link ? (
                  <Globe className="text-zinc-400" size={20} />
                ) : (
                  <Database className="text-zinc-600" size={20} />
                )}
              </div>

              <h4 className="font-bold text-2xl mb-3">{project.name}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-zinc-500">
                    #{tech}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTON IF LINK EXISTS */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition"
                >
                  <Zap size={16} fill="black" /> Try Live App
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to build?</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10">
          I operate as a{" "}
          <span className="text-white font-medium">
            Remote-First Technical Partner
          </span>
          . I prioritize clean code, strict confidentiality, and asynchronous
          communication.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Option A: Upwork */}
          <a
            href="https://www.upwork.com/freelancers/~01e5b163c79e61259b?mp_source=share"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center justify-center gap-3 px-8 py-4 text-white rounded-lg font-bold transition shadow-lg hover:shadow-xl ${BRAND_COLORS.upwork}`}
          >
            <ExternalLink size={18} />
            Hire on Upwork
          </a>

          {/* Option B: Fiverr */}
          <a
            href="https://www.fiverr.com/sudarshan100m"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center justify-center gap-3 px-8 py-4 text-white rounded-lg font-bold transition shadow-lg hover:shadow-xl ${BRAND_COLORS.fiverr}`}
          >
            <ExternalLink size={18} />
            Hire on Fiverr
          </a>
        </div>

        {/* EMAIL & SOCIALS */}
        <div className="mt-12 pt-12 border-t border-zinc-900 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <Mail size={16} />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-white transition"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/buildwithSud"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition flex items-center gap-2 text-sm"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/build_withsud/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition flex items-center gap-2 text-sm"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-zinc-600 text-xs text-center py-8">
        © {new Date().getFullYear()} {BRAND_NAME}. All systems normal.
      </footer>
    </div>
  );
};
