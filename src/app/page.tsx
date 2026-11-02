"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FormativeVideoPlayer from "@/components/FormativeVideoPlayer";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CompetitiveCoding from "@/components/CompetitiveCoding";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ResumeModal from "@/components/ResumeModal";
import Footer from "@/components/Footer";
import { Sparkles, Play, Video } from "lucide-react";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      {/* Background Subtle Ambient Gradients */}
      <div className="fixed inset-0 bg-dots-pattern opacity-25 pointer-events-none" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Formative Video Showcase Section */}
        <section id="video-tour" className="py-12 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
                <Video className="h-4 w-4" />
                <span>Video Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Interactive Formative Video Tour
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                An interactive video presentation exploring my engineering architecture: from cutting factory analytics query latency by 95% at VentoMotors to scaling Kyosk Kafka event streams and Kubernetes HPA clusters.
              </p>
            </div>

            {/* Video Player Component */}
            <FormativeVideoPlayer />
          </div>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Competitive Coding & Problem Solving */}
        <CompetitiveCoding />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
