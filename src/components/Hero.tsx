"use client";

import React from "react";
import {
  Play,
  ArrowRight,
  Download,
  Code2,
  Terminal,
  Server,
  Zap,
  CheckCircle,
  Sparkles,
  Layers,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeChefIcon, CodeforcesIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function Hero({ onOpenResume }: { onOpenResume?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status & Role Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 rounded-full bg-slate-900/90 border border-slate-700/80 px-3.5 py-1 text-xs text-slate-200 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">{personalInfo.availability}</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 px-3.5 py-1 text-xs font-mono text-cyan-300">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="text-gradient hover:brightness-110 transition-all">
              {personalInfo.name}
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight">
            Software Development Engineer &bull;{" "}
            <span className="text-cyan-400 font-mono">Full-Stack & Core Backend Architect</span>
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Specializing in full-stack platforms and high-throughput core backend microservices. Proven track record architecting full-stack systems like <strong className="text-white">VentoMotors</strong> (React, IndexedDB, Spring Boot, ActiveMQ 95% latency speedup) and the <strong className="text-white">Email Sender SaaS</strong> (Next.js & K8s HPA), alongside mission-critical core backend infrastructure for <strong className="text-white">Kyosk</strong> (Kafka clusters, 10k+ daily events, 99.9% telecom payment uptime).
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* Watch Formative Video CTA */}
          <a
            href="#video-tour"
            className="group flex items-center space-x-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-105 active:scale-95 transition-all"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-cyan-400 group-hover:scale-110 transition-transform">
              <Play className="h-3 w-3 fill-current translate-x-0.5" />
            </span>
            <span>Watch Formative Video Tour</span>
          </a>

          {/* Explore Projects */}
          <a
            href="#projects"
            className="flex items-center space-x-2 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700/80 px-6 py-3.5 text-sm font-semibold text-slate-100 hover:border-slate-600 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Resume View / Download */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 px-5 py-3.5 text-sm font-semibold text-cyan-300 hover:border-cyan-400 transition-all"
            >
              <Download className="h-4 w-4" />
              <span>View Resume</span>
            </button>
          )}
        </div>

        {/* Social Badges Strip */}
        <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/80">
          <span className="text-xs uppercase font-mono tracking-wider text-slate-400 mr-2">
            Verified Profiles:
          </span>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg bg-slate-900/90 border border-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            <LinkedinIcon className="h-3.5 w-3.5 text-blue-400" />
            <span>LinkedIn / kushal88053</span>
          </a>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg bg-slate-900/90 border border-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-500 hover:text-white transition-all"
          >
            <GithubIcon className="h-3.5 w-3.5 text-slate-100" />
            <span>GitHub / kushal88053</span>
          </a>

          <a
            href={personalInfo.socials.codechef}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg bg-slate-900/90 border border-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:border-amber-500 hover:text-amber-400 transition-all"
          >
            <CodeChefIcon className="h-3.5 w-3.5 text-amber-400" />
            <span>CodeChef: 1700 (Rank 77)</span>
          </a>

          <a
            href={personalInfo.socials.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg bg-slate-900/90 border border-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all"
          >
            <CodeforcesIcon className="h-3.5 w-3.5 text-cyan-400" />
            <span>Codeforces / kushal88053</span>
          </a>

          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg bg-slate-900/90 border border-slate-800 px-3 py-1.5 text-xs text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-all"
          >
            <span className="font-bold text-amber-500 text-xs">LC</span>
            <span>LeetCode: 800+ Solved</span>
          </a>
        </div>

        {/* Highlight Impact Cards Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 bg-slate-900/50"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded">
                  VERIFIED
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white">
                {stat.label}
              </h3>
              <p className="mt-1 text-[11px] text-slate-400 leading-tight">
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
