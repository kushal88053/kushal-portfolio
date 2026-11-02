"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  ExternalLink,
  Layers,
  Cpu,
  Zap,
  CheckCircle2,
  Server,
  Cloud,
} from "lucide-react";
import { experiences } from "@/data/portfolioData";

export default function Experience() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const currentExp = experiences[activeCompanyIndex];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Briefcase className="h-4 w-4" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience & Impact
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-slate-400 max-w-md">
            Production microservices, high-scale message queues, and enterprise SaaS systems deployed in live environments.
          </p>
        </div>

        {/* Company Tabs */}
        <div className="flex space-x-2 border-b border-slate-800 pb-2 mb-8 overflow-x-auto">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveCompanyIndex(idx)}
              className={`flex items-center space-x-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all whitespace-nowrap ${
                activeCompanyIndex === idx
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-md"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              }`}
            >
              <span>{exp.company}</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-850 text-slate-400">
                {exp.period.split("–")[1]?.trim() || "Present"}
              </span>
            </button>
          ))}
        </div>

        {/* Experience Details Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-white">{currentExp.role}</h3>
                <span className="rounded-full bg-cyan-950 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-800">
                  {currentExp.type}
                </span>
              </div>
              <p className="text-lg font-semibold text-cyan-400 mt-1">
                {currentExp.company}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4 text-cyan-400" />
                <span>{currentExp.period}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>{currentExp.location}</span>
              </span>
            </div>
          </div>

          <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            {currentExp.summary}
          </p>

          {/* Sub-projects list */}
          <div className="mt-8 space-y-8">
            {currentExp.projects.map((proj, pIdx) => (
              <div
                key={pIdx}
                className="rounded-xl bg-slate-900/70 p-6 border border-slate-800/90 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {proj.name}
                      </h4>
                    </div>
                  </div>

                  {proj.badge && (
                    <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-mono font-medium text-cyan-300 border border-slate-700">
                      {proj.badge}
                    </span>
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mt-4">
                  {proj.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-3 text-sm text-slate-300">
                      <ChevronRight className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 mr-2">Tech:</span>
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-mono text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* External links if any */}
                {proj.links && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {proj.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
