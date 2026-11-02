"use client";

import React from "react";
import {
  Trophy,
  ExternalLink,
  Code2,
  CheckCircle2,
  Terminal,
  Award,
  TrendingUp,
  Brain,
  Hash,
} from "lucide-react";
import { competitiveProgramming } from "@/data/portfolioData";

export default function CompetitiveCoding() {
  const dsaDomains = [
    { name: "Dynamic Programming", solved: "180+ problems", icon: "📐" },
    { name: "Graph Theory & Trees", solved: "220+ problems", icon: "🌲" },
    { name: "Greedy & Binary Search", solved: "190+ problems", icon: "⚡" },
    { name: "Strings & Hash Maps", solved: "160+ problems", icon: "🔤" },
    { name: "Stacks, Queues & Heaps", solved: "140+ problems", icon: "📚" },
    { name: "Concurrency & System Logic", solved: "110+ problems", icon: "⚙️" },
  ];

  return (
    <section id="coding" className="py-20 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Trophy className="h-4 w-4" />
              <span>Algorithmic Problem Solving</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Competitive Programming & DSA
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-sm text-slate-400 max-w-md">
            1,000+ problems solved across competitive coding platforms with high algorithmic rigor and clean execution.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {competitiveProgramming.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-800 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {competitiveProgramming.profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card glass-card-hover rounded-2xl p-6 border transition-all flex flex-col justify-between group ${profile.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {profile.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>

                <div className="mb-3">
                  <span
                    className={`inline-block rounded-md px-2.5 py-1 text-xs font-mono font-bold border ${profile.tagColor}`}
                  >
                    {profile.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>@{profile.handle}</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Visit Profile &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Algorithmic Domain Competency */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="h-5 w-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">
              Data Structure & Algorithmic Domain Mastery
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {dsaDomains.map((domain, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 p-4 border border-slate-800 text-center hover:border-cyan-500/30 transition-all"
              >
                <div className="text-2xl mb-2">{domain.icon}</div>
                <div className="text-xs font-semibold text-white">
                  {domain.name}
                </div>
                <div className="text-[11px] font-mono text-cyan-400 mt-1">
                  {domain.solved}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
