"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Code2, Terminal, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeChefIcon, CodeforcesIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060912] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-cyan-500/40 shadow bg-slate-900 shrink-0">
              <Image
                src="/profile.png"
                alt="Kushal Patel"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {personalInfo.name} &bull; SDE
              </p>
              <p className="text-xs text-slate-400">
                Architecting Distributed Systems & Cloud Infrastructure
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="CodeChef"
            >
              <CodeChefIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Codeforces"
            >
              <CodeforcesIcon className="h-5 w-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all ml-4"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Ready for Vercel Deployment</span>
            <span>&bull;</span>
            <span className="font-mono text-cyan-400">Next.js 16 + React 19 + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
