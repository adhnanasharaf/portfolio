"use client";

import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  BrainCircuit,
  Terminal,
  BookOpen,
  Award,
  GraduationCap,
  Sparkles,
  Layers,
  Database,
  Cloud,
  Code2,
  Wrench,
  CheckCircle2,
  Calendar,
  Building2,
  Users,
  FileCheck2,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("adhnanasharaf567@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const skillsData = [
    {
      category: "AI & Machine Learning",
      icon: BrainCircuit,
      skills: [
        "PyTorch",
        "Neural Networks",
        "ML Architecture",
        "ML Training",
        "Fine-Tuning",
        "LangChain",
        "LangGraph",
        "RAG Pipelines",
        "Multi-Agent Systems",
        "Prompt Engineering",
        "OpenAI API",
        "Claude API",
        "Hugging Face",
        "LLMOps",
        "Langfuse",
      ],
      accent: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30",
    },
    {
      category: "Programming Languages",
      icon: Code2,
      skills: [
        "Python",
        "JavaScript (ES6+)",
        "TypeScript",
        "Java",
        "C++",
        "HTML5",
        "CSS3",
      ],
      accent: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30",
    },
    {
      category: "Full Stack & Backend",
      icon: Layers,
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
        "Microservices",
        "WebSockets",
        "MERN Stack",
      ],
      accent: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      category: "Databases & Vector Stores",
      icon: Database,
      skills: [
        "Pinecone",
        "ChromaDB",
        "MongoDB",
        "PostgreSQL",
        "SQLite",
        "SQL",
      ],
      accent: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS (S3, EC2, Elastic Beanstalk)",
        "Docker",
        "Git",
        "GitHub Actions",
        "CI/CD Pipelines",
      ],
      accent: "from-sky-500/20 to-blue-500/20 text-sky-300 border-sky-500/30",
    },
    {
      category: "Tools & Security",
      icon: Wrench,
      skills: [
        "MCP Servers",
        "Claude AI",
        "Postman",
        "Nmap",
        "Kali Linux",
      ],
      accent: "from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-500/30",
    },
  ];

  const statHighlights = [
    { label: "Manual Escalation Drop", value: "40%", sub: "at RateUp AI deployments" },
    { label: "Hallucination Reduction", value: "30%", sub: "via domain-specific RAG" },
    { label: "Obstacle Detection Accuracy", value: "93%", sub: "IEEE ICCCNT 2025 Paper" },
    { label: "Red-Team Recon Time Saved", value: "60%", sub: "Kali Linux MCP Server" },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans relative overflow-x-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-[-15%] left-[10%] w-[650px] h-[650px] bg-gradient-to-br from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-purple-600/15 via-violet-600/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-emerald-600/10 via-teal-600/5 to-transparent rounded-full blur-[140px]" />
      </div>
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-28">
        {/* Hero / Summary Section */}
        <section className="space-y-8 pt-4">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">Open to AI Engineering & LLM Systems Roles</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              ADHNAN A
            </h1>
            <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-indigo-200 to-blue-300 font-medium">
              AI Engineer · Applied LLMs & Multi-Agent Orchestration · Researcher
            </p>
          </div>

          {/* Professional Summary Card */}
          <div className="glow-card rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500" />
            <div className="space-y-3 pl-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Summary</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                AI Engineer with production experience building and deploying LLM-powered chatbots, RAG pipelines, and multi-agent orchestration systems at RateUp. IEEE-accepted researcher (ICCCNT 2025) with an accepted paper on computer vision-based assistive navigation for the visually impaired. Shipped a custom Kali Linux MCP server for AI-assisted penetration testing and an AI-powered CLI ebook manager — both in production use. AWS-certified in Generative AI and Solutions Architecture. Proficient in Python, Node.js, LangChain, LangGraph, and the MERN stack.
              </p>
            </div>
          </div>

          {/* Action & Contact Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm px-4 h-10 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all"
              onClick={copyEmailToClipboard}
            >
              {copiedEmail ? <Check className="w-4 h-4 mr-2 text-emerald-400" /> : <Copy className="w-4 h-4 mr-2" />}
              {copiedEmail ? "Email Copied!" : "adhnanasharaf567@gmail.com"}
            </Button>
            <Button
              variant="outline"
              className="bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.1] text-slate-200 text-xs sm:text-sm h-10 rounded-xl"
              asChild
            >
              <a href="tel:+918075661597">
                <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                +91 8075661597
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.1] text-slate-200 text-xs sm:text-sm h-10 rounded-xl"
              asChild
            >
              <a href="https://github.com/adhnanasharaf" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 text-slate-100" />
                GitHub
                <ArrowUpRight className="w-3 h-3 ml-1 text-slate-400" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.1] text-slate-200 text-xs sm:text-sm h-10 rounded-xl"
              asChild
            >
              <a href="https://linkedin.com/in/adhnan-a-1156641b2" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2 text-blue-400" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 ml-1 text-slate-400" />
              </a>
            </Button>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Kerala, India</span>
            </div>
          </div>

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {statHighlights.map((stat, i) => (
              <div
                key={i}
                className="glow-card rounded-xl p-5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1.5">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-mono">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">01 / Experience</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-blue-400" />
                Professional Experience
              </h2>
            </div>
          </div>

          <div className="glow-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-5">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl font-bold text-white tracking-tight">AI Engineer</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono font-medium">Contract</span>
                  <span className="text-slate-400 font-medium">·</span>
                  <span className="text-base font-semibold text-blue-400">RateUp</span>
                </div>
                <div className="text-xs text-slate-400 mt-1.5 flex items-center gap-3 font-mono">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-indigo-400" /> 01/2025 – 07/2025</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-400" /> Remote</span>
                </div>
              </div>
              <div className="inline-flex self-start sm:self-auto items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Production Deployment
              </div>
            </div>

            <ul className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                <span>
                  Designed and deployed production AI agents and chatbots using <strong className="text-white font-semibold">LangChain</strong>, <strong className="text-white font-semibold">LangGraph</strong>, <strong className="text-white font-semibold">GPT-4</strong>, and <strong className="text-white font-semibold">Claude</strong>, automating multi-step customer support workflows and <strong className="text-emerald-300 font-semibold">cutting manual escalation by 40%</strong> across active deployments.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                <span>
                  Built multi-turn conversational AI systems with <strong className="text-white font-semibold">Node.js</strong> and <strong className="text-white font-semibold">MongoDB</strong>, integrating <strong className="text-white font-semibold">RAG pipelines</strong> for context-aware knowledge retrieval — enabling persistent session memory and <strong className="text-emerald-300 font-semibold">reducing hallucination rates by 30%</strong> in domain-specific queries.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                <span>
                  Deployed chatbots on <strong className="text-white font-semibold">AWS</strong> in high-traffic environments, maintaining <strong className="text-emerald-300 font-semibold">sub-500ms response latency</strong> under concurrent load and architecting a multi-agent orchestration layer for parallel task execution.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                <span>
                  Integrated <strong className="text-white font-semibold">Pinecone vector database</strong> for semantic search, improving response relevance and enabling sub-second retrieval across large enterprise document corpora.
                </span>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                <span>
                  Established <strong className="text-white font-semibold">LLM observability</strong> using structured logging and performance metrics, reducing debugging time for production incidents and enabling data-driven prompt iteration.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
              {[
                "LangChain",
                "LangGraph",
                "GPT-4",
                "Claude",
                "RAG",
                "Pinecone",
                "Node.js",
                "MongoDB",
                "AWS",
                "Multi-Agent",
                "LLMOps",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">02 / Featured Projects</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Terminal className="w-6 h-6 text-emerald-400" />
                Production & Open Source Work
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="glow-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                    Cybersecurity & AI
                  </span>
                  <a
                    href="https://github.com/adhnanasharaf/kali_Linux_Mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors border border-white/[0.06]"
                    aria-label="View Kali Linux MCP Server on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    Kali Linux MCP Penetration Testing Server
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom Model Context Protocol (MCP) server interfacing with Claude AI to automate penetration testing workflows and security audits.
                  </p>
                </div>

                <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>
                      Designed and deployed a custom MCP server for Kali Linux interfacing with Claude AI to automate penetration testing workflows — including Nmap scan generation, execution, and structured vulnerability reporting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>
                      <strong className="text-emerald-300">Reduced manual red-team scan configuration time by 60%</strong> through AI-assisted reconnaissance, automated command generation, and a centralized audit dashboard built with Node.js and Express.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>
                      Implemented role-based access controls and a hardened orchestration layer for secure multi-user red-team environments.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 mt-4 border-t border-white/[0.06] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {["MCP Server", "Claude AI", "Kali Linux", "Nmap", "Node.js", "Express.js", "RBAC"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-white/[0.02] hover:bg-white/[0.08] border-white/[0.1] text-slate-200 text-xs h-9 rounded-lg group/btn"
                  asChild
                >
                  <a
                    href="https://github.com/adhnanasharaf/kali_Linux_Mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3.5 h-3.5 mr-2" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glow-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    LLM CLI & Tooling
                  </span>
                  <a
                    href="https://github.com/adhnanasharaf/Ebook_classification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors border border-white/[0.06]"
                    aria-label="View AI Ebook Manager on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    AI-Powered Ebook Manager CLI
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Intelligent command-line tool with LLM-based automatic classification, metadata extraction, and library management via Calibre.
                  </p>
                </div>

                <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>
                      Built an AI-powered CLI tool using Node.js, Express.js, and LLMs to automate ebook classification, metadata enrichment, and library organization via Calibre integration.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>
                      Implemented SQLite with indexed fields for structured metadata storage, <strong className="text-emerald-300">reducing book lookup time by ~70%</strong> compared to flat-file search.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>
                      Delivered a single-command interface for managing, searching, format-converting, and tagging ebook libraries across 1,000+ titles.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 mt-4 border-t border-white/[0.06] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Express.js", "LLMs", "Calibre Integration", "SQLite", "CLI Tooling"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-white/[0.02] hover:bg-white/[0.08] border-white/[0.1] text-slate-200 text-xs h-9 rounded-lg group/btn"
                  asChild
                >
                  <a
                    href="https://github.com/adhnanasharaf/Ebook_classification"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3.5 h-3.5 mr-2" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Publications Section */}
        <section id="research" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">03 / Research & Publications</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-indigo-400" />
                Peer-Reviewed Research
              </h2>
            </div>
          </div>

          <div className="glow-card rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 mb-2.5">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>IEEE ICCCNT 2025 · Amrita University</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Computer Vision-Based Voice-Assisted Indoor Navigation System
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Assistive Navigation for the Visually Impaired
                </p>
              </div>
              <div className="text-right self-start sm:self-auto">
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] text-indigo-300 border border-indigo-500/20">
                  Accepted & Presented
                </span>
              </div>
            </div>

            <ul className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  Accepted and presented at the <strong className="text-white">16th International IEEE ICCCNT 2025 Conference</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  Implemented deep learning pipelines for real-time obstacle detection and voice assistance, achieving <strong className="text-emerald-300 font-semibold">93% obstacle detection accuracy</strong> in real-world benchmark tests.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
              {[
                "Computer Vision",
                "Deep Learning",
                "Obstacle Detection",
                "Voice Assistance",
                "Assistive AI",
                "IEEE Conference",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold">04 / Technical Stack</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <BrainCircuit className="w-6 h-6 text-purple-400" />
                Skills & Technologies
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.map((category, idx) => {
              const IconComp = category.icon;
              return (
                <div
                  key={idx}
                  className="glow-card rounded-2xl p-5 space-y-4 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.accent} border`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{category.category}</h3>
                      <span className="text-[11px] text-slate-400 font-mono">{category.skills.length} competencies</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-200 border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">05 / Education</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <GraduationCap className="w-6 h-6 text-sky-400" />
                Academic Background
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Amrita University</h3>
                  <p className="text-xs sm:text-sm font-medium text-blue-400 mt-0.5">B.Tech in Computer Science & Engineering</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  06/2025
                </span>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> Kollam, Kerala
              </div>
              <div className="pt-3 border-t border-white/[0.06]">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Key Coursework:</span>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  Data Structures, Algorithms, Machine Learning, Computer Networks, DBMS, Operating Systems.
                </p>
              </div>
            </div>

            <div className="glow-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Model Higher Secondary School</h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-400 mt-0.5">Higher Secondary Education (Science)</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  2021
                </span>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-rose-400" /> Kollam, Kerala
              </div>
              <div className="pt-3 border-t border-white/[0.06]">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Academic Performance:</span>
                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Scored 99%</strong> in Mathematics, Physics, Chemistry & Biology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">06 / Certifications</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Award className="w-6 h-6 text-amber-400" />
                Industry Certifications
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glow-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">AWS APAC Solutions Architecture</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Virtual Experience · AWS</p>
              </div>
            </div>

            <a
              href="https://www.udemy.com/certificate/UC-0c3bdb2c-1550-4204-9f40-115c5ca12d7d/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card rounded-2xl p-5 flex items-center justify-between gap-4 hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors flex items-center gap-1.5 flex-wrap">
                    <span>Generative AI with Large Language Models</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Udemy · Foundation Models, Fine-tuning, RLHF & LLM Systems
                  </p>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.04] group-hover:bg-purple-500/20 text-slate-400 group-hover:text-purple-300 transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </section>

        {/* Leadership & Community Section */}
        <section id="leadership" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-rose-400 uppercase font-semibold">07 / Leadership</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Users className="w-6 h-6 text-rose-400" />
                Leadership & Community
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glow-card rounded-2xl p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Security Team Lead</h3>
                  <p className="text-xs sm:text-sm font-medium text-rose-400">Blockcamp National Hackathon</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  05/2023
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Led the security team for a national-level blockchain hackathon, overseeing participant verification, safety protocols, and cross-functional coordination across 200+ attendees.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Community Initiative Lead</h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-400">Unchain: Breaking Addiction Together</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  2023
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Initiated and led a community awareness campaign on substance abuse for teenagers at a local school, connecting participants with professional support resources.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">08 / Contact</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Mail className="w-6 h-6 text-blue-400" />
                Let&apos;s Connect
              </h2>
            </div>
          </div>

          <div className="glow-card rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s build next-generation AI systems together
              </h3>
              <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                I am open to discuss AI engineering opportunities, LLM & RAG architectures, multi-agent workflows, or collaborative research.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="mailto:adhnanasharaf567@gmail.com"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/50 hover:bg-white/[0.05] transition-all text-slate-200 group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Email</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate">
                    adhnanasharaf567@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+918075661597"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/50 hover:bg-white/[0.05] transition-all text-slate-200 group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate">
                    +91 8075661597
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/adhnan-a-1156641b2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-400/50 hover:bg-white/[0.05] transition-all text-slate-200 group"
              >
                <div className="p-2.5 rounded-lg bg-blue-400/10 text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate">
                    Adhnan A
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/adhnanasharaf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-slate-400/50 hover:bg-white/[0.05] transition-all text-slate-200 group"
              >
                <div className="p-2.5 rounded-lg bg-white/[0.04] text-slate-300 group-hover:bg-white group-hover:text-black transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate">
                    @adhnanasharaf
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-slate-200">
                <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate">
                    Kerala, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] py-8 bg-[#07090e]/80 text-slate-400 text-xs font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Adhnan A — AI Engineer & Researcher.
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/adhnanasharaf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/adhnan-a-1156641b2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:adhnanasharaf567@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


