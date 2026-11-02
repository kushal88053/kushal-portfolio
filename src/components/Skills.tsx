"use client";

import React, { useState } from "react";
import {
  Cpu,
  Layers,
  Server,
  Cloud,
  Database,
  Wrench,
  Search,
  CheckCircle,
} from "lucide-react";
import { skillsData } from "@/data/portfolioData";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Cpu className="h-4 w-4 text-cyan-400" />,
      items: skillsData.languages.map((l) => ({ name: l.name, extra: `${l.level} • ${l.years}` })),
    },
    {
      title: "Technologies & Frameworks",
      icon: <Layers className="h-4 w-4 text-blue-400" />,
      items: skillsData.frameworks.map((f) => ({ name: f.name, extra: f.category })),
    },
    {
      title: "Event Streaming & Caching",
      icon: <Server className="h-4 w-4 text-purple-400" />,
      items: skillsData.messagingAndCaching.map((m) => ({ name: m.name, extra: m.role })),
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: <Cloud className="h-4 w-4 text-cyan-400" />,
      items: skillsData.cloudAndDevOps.map((c) => ({ name: c.name, extra: c.role })),
    },
    {
      title: "Databases & Observability",
      icon: <Database className="h-4 w-4 text-emerald-400" />,
      items: skillsData.databasesAndMonitoring.map((d) => ({ name: d.name, extra: d.role })),
    },
    {
      title: "Tools, Testing & IDEs",
      icon: <Wrench className="h-4 w-4 text-amber-400" />,
      items: skillsData.toolsAndTesting.map((t) => ({ name: t.name, extra: t.role })),
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Cpu className="h-4 w-4" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Architecture Matrix
            </h2>
          </div>

          {/* Quick Search */}
          <div className="mt-4 md:mt-0 relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Kafka, Spring)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-slate-900/90 pl-9 pr-4 py-2 text-xs text-white border border-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const filteredItems = cat.items.filter(
              (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.extra.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredItems.length === 0) return null;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2.5 pb-3 border-b border-slate-800 mb-4">
                    <div className="p-1.5 rounded-lg bg-slate-850 border border-slate-800">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {filteredItems.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="rounded-lg bg-slate-900/90 px-3 py-1.5 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850 transition-all flex items-center justify-between gap-2"
                      >
                        <span className="text-xs font-semibold text-slate-200">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400/80 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                          {item.extra}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
