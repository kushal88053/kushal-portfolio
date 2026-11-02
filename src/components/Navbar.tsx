"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Code2,
  Terminal,
  Play,
  FileText,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeChefIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar({ onOpenResume }: { onOpenResume?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Video Tour", href: "#video-tour" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Competitive Coding", href: "#coding" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-slate-950 text-lg shadow-md group-hover:scale-105 transition-transform">
            KP
          </div>
          <div>
            <div className="font-bold text-white tracking-tight flex items-center space-x-2">
              <span>{personalInfo.name}</span>
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <p className="text-[11px] font-mono text-cyan-400/90 -mt-0.5">
              Software Development Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Quick Video Tour Button */}
          <a
            href="#video-tour"
            className="flex items-center space-x-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>Video Tour</span>
          </a>

          {/* Social Quick Links */}
          <div className="flex items-center space-x-1 border-l border-slate-800 pl-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef Profile"
              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 transition-colors"
            >
              <CodeChefIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Resume CTA */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 xl:hidden">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="flex sm:hidden items-center space-x-1 rounded-md bg-cyan-500 px-2.5 py-1 text-xs font-bold text-slate-950"
            >
              <FileText className="h-3 w-3" />
              <span>Resume</span>
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#090d16]/98 border-b border-slate-800 px-6 py-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col space-y-3">
            <a
              href="#video-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 rounded-lg bg-cyan-500/10 py-2.5 text-sm font-semibold text-cyan-300 border border-cyan-500/30"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>Watch Formative Video Tour</span>
            </a>

            <div className="flex justify-center space-x-4 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400"
              >
                <CodeChefIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
