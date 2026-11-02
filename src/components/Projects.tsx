"use client";

import React, { useState } from "react";
import {
  Code2,
  ExternalLink,
  Server,
  Cpu,
  Layers,
  ArrowUpRight,
  Zap,
  CheckCircle,
  BookOpen,
  X,
  Copy,
  Check,
  Video,
  Monitor,
  Database,
  Cloud,
  Mail,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { featuredProjects, ProjectItem, personalInfo } from "@/data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProjectForReadme, setSelectedProjectForReadme] = useState<ProjectItem | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = ["All", "Full-Stack", "Core Backend", "Workflow Automation"];

  const filteredProjects =
    filter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === filter);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Code2 className="h-4 w-4" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Architectures
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  filter === cat
                    ? "bg-cyan-500 text-slate-950 shadow-md font-bold"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block rounded-md bg-cyan-950/80 px-2.5 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-800/80 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-slate-850 p-2 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics row */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-lg bg-slate-900/90 p-2.5 border border-slate-800 text-center"
                      >
                        <div className="text-[10px] uppercase font-mono text-slate-400">
                          {metric.label}
                        </div>
                        <div className="text-xs font-mono font-bold text-cyan-300 mt-0.5 truncate">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Highlights list */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="text-cyan-400 shrink-0 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons & Tags Footer */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                {/* Readme Button if available */}
                {project.readmeContent && (
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedProjectForReadme(project)}
                      className="inline-flex items-center space-x-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30 transition-all"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Read Architecture / Documentation</span>
                    </button>

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        <span>GitHub Repo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-900 px-2 py-0.5 text-[11px] font-mono text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Many More on GitHub CTA Button */}
        <div className="mt-14 text-center">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-cyan-500/30 transition-all">
            <div className="text-left">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
                <GithubIcon className="h-4 w-4" />
                <span>Open Source Repositories & Experiments</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Looking for many more projects?
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Explore additional distributed system prototypes, competitive coding solutions, microservices, and experiments on my GitHub profile.
              </p>
            </div>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 group flex items-center space-x-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <GithubIcon className="h-4 w-4 text-slate-950" />
              <span>Many More on GitHub</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Project Readme Modal */}
      {selectedProjectForReadme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0b0f19] border border-cyan-500/30 shadow-2xl overflow-hidden my-auto">
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-6 py-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-cyan-400" />
                <span className="font-bold text-white text-base">
                  {selectedProjectForReadme.title} // Documentation
                </span>
              </div>

              <div className="flex items-center space-x-3">
                {selectedProjectForReadme.links?.github && (
                  <a
                    href={selectedProjectForReadme.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-xs font-semibold text-white border border-slate-700"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProjectForReadme(null)}
                  className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Readme Content Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300 font-sans text-sm">
              {/* Overview */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
                  Project Overview
                </h3>
                <p className="text-slate-200 leading-relaxed text-sm">
                  {selectedProjectForReadme.readmeContent?.overview}
                </p>
              </div>

              {/* Features List */}
              {selectedProjectForReadme.readmeContent?.features && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProjectForReadme.readmeContent.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="rounded-xl bg-slate-900/80 p-3.5 border border-slate-800 flex items-start space-x-3"
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <div>
                          <div className="font-bold text-white text-xs">
                            {feat.title}
                          </div>
                          <div className="text-slate-400 text-xs mt-0.5 leading-snug">
                            {feat.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Backend Architecture Breakdown */}
              {selectedProjectForReadme.readmeContent?.backendArchitecture && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    Backend Architecture Breakdown
                  </h3>
                  <div className="space-y-3">
                    <div className="rounded-xl bg-slate-900/90 p-4 border border-slate-800">
                      <div className="flex items-center space-x-2 text-white font-bold text-xs mb-1">
                        <Server className="h-4 w-4 text-purple-400" />
                        <span>Redis — Socket Adapter & State Management</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedProjectForReadme.readmeContent.backendArchitecture.redis}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-900/90 p-4 border border-slate-800">
                      <div className="flex items-center space-x-2 text-white font-bold text-xs mb-1">
                        <Database className="h-4 w-4 text-emerald-400" />
                        <span>MongoDB — Persistence & Chat Storage</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedProjectForReadme.readmeContent.backendArchitecture.mongodb}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-900/90 p-4 border border-slate-800">
                      <div className="flex items-center space-x-2 text-white font-bold text-xs mb-1">
                        <Cloud className="h-4 w-4 text-cyan-400" />
                        <span>AWS S3 — Meeting File Uploads</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedProjectForReadme.readmeContent.backendArchitecture.s3}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-900/90 p-4 border border-slate-800">
                      <div className="flex items-center space-x-2 text-white font-bold text-xs mb-1">
                        <Mail className="h-4 w-4 text-amber-400" />
                        <span>SMTP & Nodemailer — Mail Delivery</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedProjectForReadme.readmeContent.backendArchitecture.smtp}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* How to Run Locally */}
              {selectedProjectForReadme.readmeContent?.runLocallyInstructions && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                    Run It Locally
                  </h3>
                  <div className="space-y-3 font-mono text-xs">
                    {/* Server */}
                    <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span>Terminal 1: Node.js Server & Docker Infra</span>
                        <button
                          onClick={() =>
                            handleCopy(
                              selectedProjectForReadme.readmeContent!.runLocallyInstructions!.server,
                              "server"
                            )
                          }
                          className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300"
                        >
                          {copiedCode === "server" ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-cyan-300 overflow-x-auto">
                        <code>{selectedProjectForReadme.readmeContent.runLocallyInstructions.server}</code>
                      </pre>
                    </div>

                    {/* Frontend */}
                    <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span>Terminal 2: Browser Frontend</span>
                        <button
                          onClick={() =>
                            handleCopy(
                              selectedProjectForReadme.readmeContent!.runLocallyInstructions!.frontend,
                              "frontend"
                            )
                          }
                          className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300"
                        >
                          {copiedCode === "frontend" ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-cyan-300 overflow-x-auto">
                        <code>{selectedProjectForReadme.readmeContent.runLocallyInstructions.frontend}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* References */}
              {selectedProjectForReadme.readmeContent?.references && (
                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Architectural References & Upstream Code:
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedProjectForReadme.readmeContent.references.map((ref, rIdx) => (
                      <a
                        key={rIdx}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-cyan-400 hover:underline"
                      >
                        <span>{ref.name}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
