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
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { featuredProjects, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Core Backend", "Workflow Automation"];

  const filteredProjects =
    filter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === filter);

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

              {/* Tags & Links Footer */}
              <div className="pt-4 border-t border-slate-800/80">
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
      </div>
    </section>
  );
}
