"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  SkipForward,
  SkipBack,
  Sparkles,
  Cpu,
  Zap,
  Server,
  Layers,
  Award,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { formativeVideoChapters, VideoChapter } from "@/data/portfolioData";

export default function FormativeVideoPlayer({ id = "video-tour" }: { id?: string }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState<boolean>(false);
  const [isTheater, setIsTheater] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"visual" | "code">("visual");

  const totalDuration = formativeVideoChapters.reduce((acc, c) => acc + c.duration, 0);
  const currentChapter: VideoChapter = formativeVideoChapters[currentChapterIndex];

  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sync current time with chapters
  useEffect(() => {
    let accumulated = 0;
    for (let i = 0; i < formativeVideoChapters.length; i++) {
      if (currentTime >= accumulated && currentTime < accumulated + formativeVideoChapters[i].duration) {
        if (currentChapterIndex !== i) {
          setCurrentChapterIndex(i);
        }
        break;
      }
      accumulated += formativeVideoChapters[i].duration;
    }
    if (currentTime >= totalDuration) {
      setIsPlaying(false);
      setCurrentTime(0);
      setCurrentChapterIndex(0);
    }
  }, [currentTime, currentChapterIndex, totalDuration]);

  // Timer loop for video playback
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 0.2 * playbackSpeed;
          return next >= totalDuration ? totalDuration : next;
        });
      }, 200);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, totalDuration]);

  // Speech narration trigger on chapter change
  useEffect(() => {
    if (isPlaying && isVoiceEnabled && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentChapter.narration);
      utterance.rate = playbackSpeed;
      utterance.pitch = 1.0;
      speechSynthRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  }, [currentChapterIndex, isPlaying, isVoiceEnabled, playbackSpeed, currentChapter.narration]);

  // Voice narration toggle handler
  const toggleVoice = () => {
    const nextState = !isVoiceEnabled;
    setIsVoiceEnabled(nextState);
    if (!nextState && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    } else if (nextState && isPlaying && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentChapter.narration);
      utterance.rate = playbackSpeed;
      window.speechSynthesis.speak(utterance);
    }
  };

  const jumpToChapter = (index: number) => {
    let acc = 0;
    for (let i = 0; i < index; i++) {
      acc += formativeVideoChapters[i].duration;
    }
    setCurrentTime(acc);
    setCurrentChapterIndex(index);
    if (isPlaying && isVoiceEnabled && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(formativeVideoChapters[index].narration);
      utterance.rate = playbackSpeed;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
  };

  // Canvas visual rendering animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.03 * playbackSpeed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Background subtle grid
      ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Render chapter-specific visual architecture
      const type = currentChapter.visualType;

      if (type === "intro") {
        // Orbiting distributed microservice nodes
        const cx = w / 2;
        const cy = h / 2 - 10;
        const count = 6;
        const radius = Math.min(w, h) * 0.32;

        // Central Server Hub
        const pulse = Math.sin(t * 3) * 4;
        ctx.beginPath();
        ctx.arc(cx, cy, 32 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.25)";
        ctx.fill();
        ctx.strokeStyle = "#06b6d4";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 12px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("SPRING BOOT", cx, cy - 6);
        ctx.font = "10px monospace";
        ctx.fillStyle = "#38bdf8";
        ctx.fillText("BACKEND CORE", cx, cy + 9);

        // Surrounding connected nodes
        const labels = ["ActiveMQ", "Kafka", "AWS ECS", "Redis", "K8s HPA", "PostgreSQL"];
        for (let i = 0; i < count; i++) {
          const angle = (i * (Math.PI * 2)) / count + t * 0.5;
          const nx = cx + Math.cos(angle) * radius;
          const ny = cy + Math.sin(angle) * radius;

          // Connecting line
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(nx, ny);
          ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Traveling packet dot
          const packetProgress = (t * 1.5 + i * 0.25) % 1;
          const px = cx + (nx - cx) * packetProgress;
          const py = cy + (ny - cy) * packetProgress;
          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "#22d3ee";
          ctx.fill();

          // Node circle
          ctx.beginPath();
          ctx.arc(nx, ny, 20, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
          ctx.fill();
          ctx.strokeStyle = "#818cf8";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = "#e2e8f0";
          ctx.font = "9px monospace";
          ctx.fillText(labels[i], nx, ny);
        }
      } else if (type === "optimization") {
        // Latency reduction comparison visualizer (Before vs After)
        const leftX = w * 0.25;
        const rightX = w * 0.75;
        const baseY = h * 0.72;

        // Bar 1: Old latency (35s)
        const maxH = h * 0.5;
        ctx.fillStyle = "rgba(239, 68, 68, 0.25)";
        ctx.fillRect(leftX - 35, baseY - maxH, 70, maxH);
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 2;
        ctx.strokeRect(leftX - 35, baseY - maxH, 70, maxH);

        ctx.fillStyle = "#f87171";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("30 - 40s", leftX, baseY - maxH - 12);
        ctx.font = "11px monospace";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("Legacy Synchronous", leftX, baseY + 18);

        // Bar 2: New Latency (2.5s)
        const newH = Math.max(16, maxH * 0.08 + Math.sin(t * 4) * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.35)";
        ctx.fillRect(rightX - 35, baseY - newH, 70, newH);
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 2;
        ctx.strokeRect(rightX - 35, baseY - newH, 70, newH);

        ctx.fillStyle = "#34d399";
        ctx.font = "bold 16px monospace";
        ctx.fillText("2.5s (95% ⬇)", rightX, baseY - newH - 12);
        ctx.font = "11px monospace";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("ActiveMQ + Redis Cache", rightX, baseY + 18);

        // Pipeline arrow in center
        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 12px monospace";
        ctx.fillText("⚡ Asynchronous Queue Pipeline", w / 2, h * 0.2);

        // Animated packet from left to right
        const animX = leftX + 45 + ((t * 2) % 1) * (rightX - leftX - 90);
        ctx.beginPath();
        ctx.arc(animX, h * 0.38, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
      } else if (type === "kafka") {
        // High-Throughput Kafka Bus & Multi-Channel Top-Up
        const busY = h * 0.45;
        // Central Kafka bus line
        ctx.beginPath();
        ctx.moveTo(40, busY);
        ctx.lineTo(w - 40, busY);
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.fillStyle = "#fbbf24";
        ctx.font = "bold 12px monospace";
        ctx.textAlign = "center";
        ctx.fillText("APACHE KAFKA HIGH-THROUGHPUT EVENT STREAM (10k+ msgs/day)", w / 2, busY - 14);

        // Flying message blocks on Kafka stream
        for (let i = 0; i < 7; i++) {
          const px = 50 + (((t * 80 + i * 85) % (w - 100)) + (w - 100)) % (w - 100);
          ctx.fillStyle = i % 2 === 0 ? "#10b981" : "#06b6d4";
          ctx.fillRect(px - 14, busY - 10, 28, 20);
          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 8px monospace";
          ctx.fillText("MSG", px, busY + 3);
        }

        // Telecom and gateway nodes below
        const targets = ["Vodacom", "MTN Group", "Orange", "WhatsApp Twilio", "AWS SES"];
        const step = (w - 100) / (targets.length - 1);
        for (let i = 0; i < targets.length; i++) {
          const tx = 50 + i * step;
          const ty = h * 0.8;

          ctx.beginPath();
          ctx.moveTo(tx, busY + 10);
          ctx.lineTo(tx, ty - 18);
          ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
          ctx.fillRect(tx - 38, ty - 16, 76, 32);
          ctx.strokeStyle = "#38bdf8";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(tx - 38, ty - 16, 76, 32);

          ctx.fillStyle = "#e2e8f0";
          ctx.font = "bold 9px monospace";
          ctx.fillText(targets[i], tx, ty);
          ctx.font = "8px monospace";
          ctx.fillStyle = "#34d399";
          ctx.fillText("99.9% Up", tx, ty + 10);
        }
      } else if (type === "kubernetes") {
        // Kubernetes HPA autoscaling simulation
        const baseY = h * 0.6;
        const podCount = 6;
        const spacing = (w - 100) / podCount;

        ctx.fillStyle = "#818cf8";
        ctx.font = "bold 13px monospace";
        ctx.textAlign = "center";
        ctx.fillText("☸️ KUBERNETES HORIZONTAL POD AUTOSCALER (HPA) CLUSTER", w / 2, h * 0.18);
        ctx.font = "11px monospace";
        ctx.fillStyle = "#38bdf8";
        ctx.fillText("Auto-scaled workload: 100,000+ daily SaaS emails handled with zero dropped packets", w / 2, h * 0.28);

        for (let i = 0; i < podCount; i++) {
          const px = 60 + i * spacing + spacing / 2;
          const isActive = i < 4 || Math.sin(t * 2 + i) > 0;

          ctx.fillStyle = isActive ? "rgba(99, 102, 241, 0.2)" : "rgba(30, 41, 59, 0.4)";
          ctx.fillRect(px - 32, baseY - 35, 64, 70);
          ctx.strokeStyle = isActive ? "#6366f1" : "rgba(100, 116, 139, 0.3)";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(px - 32, baseY - 35, 64, 70);

          ctx.fillStyle = isActive ? "#a5b4fc" : "#64748b";
          ctx.font = "bold 10px monospace";
          ctx.fillText(`POD #${i + 1}`, px, baseY - 15);

          // Pulse LED indicator
          ctx.beginPath();
          ctx.arc(px, baseY + 6, 5, 0, Math.PI * 2);
          ctx.fillStyle = isActive ? "#10b981" : "#ef4444";
          ctx.fill();

          ctx.font = "8px monospace";
          ctx.fillStyle = "#cbd5e1";
          ctx.fillText(isActive ? "RabbitMQ Worker" : "Standby", px, baseY + 24);
        }
      } else if (type === "dsa") {
        // Binary Tree / Graph search traversal
        ctx.fillStyle = "#34d399";
        ctx.font = "bold 13px monospace";
        ctx.textAlign = "center";
        ctx.fillText("ALGORITHMIC MASTERY | 1,000+ PROBLEMS SOLVED", w / 2, h * 0.15);

        // Simple tree visual
        const treeNodes = [
          { id: 1, x: w / 2, y: h * 0.35, val: "Root" },
          { id: 2, x: w / 2 - 90, y: h * 0.55, val: "DP" },
          { id: 3, x: w / 2 + 90, y: h * 0.55, val: "Graphs" },
          { id: 4, x: w / 2 - 130, y: h * 0.78, val: "Trees" },
          { id: 5, x: w / 2 - 50, y: h * 0.78, val: "Greedy" },
          { id: 6, x: w / 2 + 50, y: h * 0.78, val: "Binary" },
          { id: 7, x: w / 2 + 130, y: h * 0.78, val: "Trie" },
        ];

        // Lines
        const edges = [
          [1, 2],
          [1, 3],
          [2, 4],
          [2, 5],
          [3, 6],
          [3, 7],
        ];

        ctx.strokeStyle = "rgba(52, 211, 153, 0.4)";
        ctx.lineWidth = 1.5;
        edges.forEach(([from, to]) => {
          const n1 = treeNodes.find((n) => n.id === from)!;
          const n2 = treeNodes.find((n) => n.id === to)!;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        });

        const activeNodeIndex = Math.floor(t * 2) % treeNodes.length;

        treeNodes.forEach((node, idx) => {
          const isTraversed = idx === activeNodeIndex;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
          ctx.fillStyle = isTraversed ? "rgba(16, 185, 129, 0.4)" : "rgba(15, 23, 42, 0.9)";
          ctx.fill();
          ctx.strokeStyle = isTraversed ? "#34d399" : "#64748b";
          ctx.lineWidth = isTraversed ? 2.5 : 1;
          ctx.stroke();

          ctx.fillStyle = isTraversed ? "#ffffff" : "#cbd5e1";
          ctx.font = "bold 9px monospace";
          ctx.fillText(node.val, node.x, node.y + 3);
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [currentChapter, playbackSpeed]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      id={id}
      className={`relative w-full rounded-2xl transition-all duration-300 ${
        isTheater
          ? "fixed inset-0 z-50 flex flex-col justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
          : "glass-card my-10 overflow-hidden border border-cyan-500/20 shadow-2xl"
      }`}
    >
      {/* Top Video Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3 sm:px-6">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block animate-pulse" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Formative Video Walkthrough
            </span>
            <span className="rounded bg-cyan-950/80 px-2 py-0.5 text-[10px] font-semibold text-cyan-300 border border-cyan-800">
              INTERACTIVE HD
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={() => setActiveTab(activeTab === "visual" ? "code" : "visual")}
            className="hidden sm:inline-flex items-center space-x-1 rounded bg-slate-800/80 px-2.5 py-1 text-slate-300 hover:text-white transition-colors"
          >
            {activeTab === "visual" ? <Terminal className="h-3.5 w-3.5" /> : <Activity className="h-3.5 w-3.5" />}
            <span>{activeTab === "visual" ? "View Code Logic" : "View Architecture Visual"}</span>
          </button>
          <button
            onClick={() => setIsTheater(!isTheater)}
            className="rounded p-1 text-slate-400 hover:text-white transition-colors"
            title={isTheater ? "Exit Theater View" : "Theater Mode"}
          >
            {isTheater ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Main Video Display Screen (Canvas & Interactive HUD) */}
      <div className="relative aspect-video w-full bg-[#050811] overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Dynamic Canvas / Code Switch */}
        {activeTab === "visual" ? (
          <canvas
            ref={canvasRef}
            width={854}
            height={480}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="h-full w-full overflow-auto bg-slate-950 p-6 font-mono text-xs text-slate-300">
            <div className="mb-2 flex items-center space-x-2 text-cyan-400">
              <Terminal className="h-4 w-4" />
              <span>Production Implementation // {currentChapter.title}</span>
            </div>
            <pre className="rounded-lg bg-slate-900/90 p-4 border border-slate-800 text-slate-100 overflow-x-auto">
              <code>{currentChapter.codeSnippet || "// Full production implementation available on GitHub"}</code>
            </pre>
            <p className="mt-3 text-xs text-slate-400">
              {currentChapter.diagramTitle}
            </p>
          </div>
        )}

        {/* Live Status Overlay Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none">
          <span className="flex items-center space-x-1.5 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white border border-slate-700/80 shadow-lg">
            <Activity className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>{currentChapter.badge}</span>
          </span>
          <span className="rounded-full bg-cyan-950/90 px-2.5 py-1 text-xs font-mono text-cyan-300 border border-cyan-700/60 shadow-lg">
            CH {currentChapter.id}/{formativeVideoChapters.length}
          </span>
        </div>

        {/* Metrics Pill on Right */}
        <div className="absolute top-4 right-4 hidden sm:flex flex-col gap-1.5 pointer-events-none">
          {currentChapter.metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 rounded-lg bg-slate-950/85 px-3 py-1 text-right border border-slate-800/80 shadow"
            >
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}:</span>
              <span className="text-xs font-mono font-bold text-cyan-300">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Center Play Overlay when Paused */}
        {!isPlaying && (
          <div
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-black/50 backdrop-blur-[2px] transition-all hover:bg-black/40"
          >
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-2xl shadow-cyan-500/50 transition-transform hover:scale-110 active:scale-95">
              <Play className="h-8 w-8 sm:h-10 sm:w-10 translate-x-0.5 fill-current" />
            </div>
            <p className="mt-4 text-sm font-semibold tracking-wide text-white drop-shadow">
              Play Formative Video Tour
            </p>
            <p className="text-xs text-slate-300">
              Interactive architecture demo • Audio narration supported
            </p>
          </div>
        )}

        {/* Animated Subtitles / Narration Bar */}
        <div className="absolute bottom-2 inset-x-3 sm:bottom-4 sm:inset-x-8 rounded-xl bg-slate-950/90 px-4 py-2.5 text-center border border-slate-800/80 shadow-2xl backdrop-blur-md">
          <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug line-clamp-2">
            &ldquo;{currentChapter.narration}&rdquo;
          </p>
        </div>
      </div>

      {/* Scrub Bar & Chapter Timeline */}
      <div className="border-t border-slate-800/80 bg-slate-950/95 px-4 pt-3 pb-2 sm:px-6">
        <div className="relative mb-2">
          {/* Timeline scrub input */}
          <input
            type="range"
            min={0}
            max={totalDuration}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
          />

          {/* Chapter Markers */}
          <div className="relative w-full h-1 mt-1 flex">
            {formativeVideoChapters.map((ch, idx) => {
              const widthPct = (ch.duration / totalDuration) * 100;
              const isCurrent = idx === currentChapterIndex;
              return (
                <button
                  key={ch.id}
                  onClick={() => jumpToChapter(idx)}
                  style={{ width: `${widthPct}%` }}
                  className={`group relative h-1.5 transition-all text-left ${
                    isCurrent ? "bg-cyan-400" : "bg-slate-700/60 hover:bg-slate-500"
                  }`}
                  title={`${ch.title} (${ch.duration}s)`}
                >
                  <span className="sr-only">{ch.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          {/* Left Controls: Play/Pause, Rewind, Skip */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current translate-x-0.5" />}
            </button>

            <button
              onClick={() => {
                setCurrentTime(0);
                setCurrentChapterIndex(0);
              }}
              className="rounded p-1.5 text-slate-400 hover:text-white transition-colors"
              title="Restart from beginning"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            <button
              onClick={() => {
                const prevIdx = Math.max(0, currentChapterIndex - 1);
                jumpToChapter(prevIdx);
              }}
              disabled={currentChapterIndex === 0}
              className="rounded p-1.5 text-slate-400 hover:text-white disabled:opacity-30 transition-colors"
              title="Previous Chapter"
            >
              <SkipBack className="h-4 w-4" />
            </button>

            <button
              onClick={() => {
                const nextIdx = Math.min(formativeVideoChapters.length - 1, currentChapterIndex + 1);
                jumpToChapter(nextIdx);
              }}
              disabled={currentChapterIndex === formativeVideoChapters.length - 1}
              className="rounded p-1.5 text-slate-400 hover:text-white disabled:opacity-30 transition-colors"
              title="Next Chapter"
            >
              <SkipForward className="h-4 w-4" />
            </button>

            <span className="font-mono text-xs text-slate-400">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </span>
          </div>

          {/* Center: Current Chapter Title Pill */}
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <span className="font-semibold text-slate-200">{currentChapter.title}</span>
          </div>

          {/* Right Controls: Speed, Voice Narration, Tab */}
          <div className="flex items-center space-x-2">
            {/* Speed Selector */}
            <div className="flex rounded-md bg-slate-900 p-0.5 text-[11px] font-mono border border-slate-800">
              {[1, 1.25, 1.5].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2 py-0.5 rounded ${
                    playbackSpeed === speed ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>

            {/* Voice Narration Button */}
            <button
              onClick={toggleVoice}
              className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all border ${
                isVoiceEnabled
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
              }`}
              title="Toggle AI Speech Voiceover"
            >
              {isVoiceEnabled ? <Volume2 className="h-3.5 w-3.5 text-emerald-400" /> : <VolumeX className="h-3.5 w-3.5" />}
              <span className="hidden sm:inline">{isVoiceEnabled ? "Voice ON" : "Voice OFF"}</span>
            </button>
          </div>
        </div>

        {/* Chapter Quick Selector Pills */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {formativeVideoChapters.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => jumpToChapter(idx)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs text-left transition-all border ${
                currentChapterIndex === idx
                  ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-300 font-medium"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center space-x-1.5">
                <span className="font-mono text-[10px] text-cyan-400">0{ch.id}</span>
                <span className="truncate max-w-[130px] sm:max-w-none">{ch.title.split(". ")[1] || ch.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
