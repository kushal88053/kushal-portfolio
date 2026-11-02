"use client";

import React from "react";
import { GraduationCap, Calendar, Award, Building, BookOpen } from "lucide-react";
import { educationList } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Foundation
          </h2>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-md bg-cyan-950 px-2.5 py-1 text-xs font-mono font-bold text-cyan-400 border border-cyan-800">
                    {edu.grade}
                  </span>
                  <span className="flex items-center space-x-1 text-xs font-mono text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>

                <div className="flex items-center space-x-2 text-sm text-cyan-300 font-medium mb-4">
                  <Building className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{edu.institution}</span>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-800">
                  {edu.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start space-x-2"
                    >
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
