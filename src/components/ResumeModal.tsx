"use client";

import React from "react";
import Image from "next/image";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  FileCheck,
} from "lucide-react";
import { personalInfo, experiences, featuredProjects, educationList } from "@/data/portfolioData";

export default function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="printable-resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto"
    >
      <div
        id="printable-resume-card"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0b0f19] border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
      >
        {/* Modal Header */}
        <div
          id="printable-resume-header"
          className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-6 py-4"
        >
          <div className="flex items-center space-x-2">
            <FileCheck className="h-5 w-5 text-cyan-400" />
            <span className="font-bold text-white text-base">
              Resume // {personalInfo.name}
            </span>
            <span className="rounded bg-cyan-950 px-2 py-0.5 text-[10px] font-mono text-cyan-300 border border-cyan-800">
              SDE
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            {/* Primary: Direct Download PDF */}
            <a
              href="/Kushal_Patel_Resume.pdf"
              download="Kushal_Patel_Resume.pdf"
              className="flex items-center space-x-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition-all"
              title="Download original PDF directly"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors"
              title="Print document"
            >
              <Printer className="h-3.5 w-3.5 text-cyan-400" />
              <span>Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Body */}
        <div
          id="printable-resume-content"
          className="overflow-y-auto p-6 sm:p-10 space-y-6 bg-slate-950 text-slate-200 font-sans print:bg-white print:text-black"
        >
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-5 print:border-slate-300 flex flex-col items-center">
            <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-cyan-500/50 mb-3 shadow-lg bg-slate-900 print:border-slate-400">
              <Image
                src="/profile.png"
                alt="Kushal Patel"
                fill
                className="object-cover object-top"
              />
            </div>
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
              {personalInfo.name.toUpperCase()}
            </h1>
            <p className="mt-1 text-xs font-mono text-slate-400 print:text-gray-700 flex flex-wrap items-center justify-center gap-3">
              <span>{personalInfo.location}</span>
              <span>&bull;</span>
              <span>{personalInfo.phone}</span>
              <span>&bull;</span>
              <span>{personalInfo.email}</span>
            </p>
            <div className="mt-2.5 flex flex-wrap justify-center gap-4 text-xs font-medium text-cyan-400 print:text-blue-800">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={personalInfo.socials.codechef} target="_blank" rel="noreferrer">
                CodeChef
              </a>
              <a href={personalInfo.socials.codeforces} target="_blank" rel="noreferrer">
                Codeforces
              </a>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer">
                LeetCode (800+ solved)
              </a>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2.5 print:text-black print:border-slate-300">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs space-y-1 text-slate-300 print:text-gray-800">
              <p>
                <strong className="text-white print:text-black">Languages:</strong> Java, JavaScript, TypeScript, SQL
              </p>
              <p>
                <strong className="text-white print:text-black">Technologies & Frameworks:</strong> Spring Boot, Spring MVC, Spring Security, Hibernate, JPA, Node.js, WebSockets, React.js, RESTful APIs, Microservices, Temporal, Apache Kafka, RabbitMQ, ActiveMQ, Redis, Prometheus, Grafana, MySQL, PostgreSQL
              </p>
              <p>
                <strong className="text-white print:text-black">Cloud & DevOps:</strong> AWS (EC2, ECR, ECS, RDS, S3, Lambda, SES, Route 53, Elastic Beanstalk, CodePipeline, CodeDeploy, CodeCommit, AMI), Docker, Kubernetes (HPA), CI/CD, cPanel
              </p>
              <p>
                <strong className="text-white print:text-black">Developer & Testing Tools:</strong> Git, GitHub, Postman, JUnit, Mockito, Redis Insight, Kafka UI, VS Code, IntelliJ IDEA
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-3 print:text-black print:border-slate-300">
              EXPERIENCE
            </h2>

            {experiences.map((exp, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white print:text-black text-sm">
                      {exp.company}
                    </span>
                    <span className="text-xs text-slate-400 print:text-gray-600 ml-2">
                      — {exp.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 print:text-gray-600">
                    {exp.period} | {exp.location}
                  </span>
                </div>

                <div className="mt-2 space-y-3">
                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx}>
                      <div className="text-xs font-bold text-cyan-300 print:text-gray-900 mb-0.5">
                        Project: {proj.name}
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800 leading-relaxed pl-1">
                        {proj.details.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2.5 print:text-black print:border-slate-300">
              FEATURED PROJECTS
            </h2>
            {featuredProjects.map((p, idx) => (
              <div key={idx} className="mb-3.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white print:text-black text-xs">
                    {p.title}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400 print:text-gray-600">
                    [{p.category}] &bull; {p.tags.slice(0, 4).join(", ")}
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 print:text-gray-800 leading-relaxed mt-0.5 pl-1">
                  {p.highlights.slice(0, 3).map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2.5 print:text-black print:border-slate-300">
              EDUCATION
            </h2>
            {educationList.map((edu, idx) => (
              <div key={idx} className="mb-2.5 flex justify-between items-baseline text-xs">
                <div>
                  <div className="font-bold text-white print:text-black">
                    {edu.institution}
                  </div>
                  <div className="text-slate-400 print:text-gray-600">
                    {edu.degree}
                  </div>
                </div>
                <div className="text-right font-mono text-slate-400 print:text-gray-600">
                  <div>{edu.period}</div>
                  <div className="text-cyan-400 print:text-gray-900 font-bold">
                    {edu.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2 print:text-black print:border-slate-300">
              ACHIEVEMENTS & EXTRACURRICULAR
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 print:text-gray-800 space-y-1 pl-1">
              <li>
                <strong>Problem Solving:</strong> Solved 800+ DSA problems on LeetCode and 1,000+ problems across competitive coding platforms.
              </li>
              <li>
                <strong>Competitive Programming:</strong> Achieved a highest rating of 1700 on CodeChef and secured Global Rank 77 in Cook-Off.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
