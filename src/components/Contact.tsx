"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Code2,
  Sparkles,
  Terminal,
  MessageSquare,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, CodeChefIcon, CodeforcesIcon } from "@/components/Icons";
import confetti from "canvas-confetti";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kp88053@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#06b6d4", "#3b82f6", "#10b981", "#8b5cf6"],
          });
        } catch (err) {
          // ignore
        }
      } else {
        throw new Error("Unable to send message automatically.");
      }
    } catch (err) {
      // Fallback: If network blocks third-party fetch, allow direct mailto
      setErrorMessage(
        "Direct submission service was busy or blocked by browser extensions. Click below to send directly via your email app."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hi Kushal, I came across your portfolio website and would like to connect with you!"
  )}`;

  return (
    <section id="contact" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Resilient
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Messages sent here land directly in my personal Gmail inbox (
            <span className="text-cyan-400 font-mono">kp88053@gmail.com</span>). You can also message me directly on WhatsApp or connect on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">
                      Email Address (Direct Inbox)
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">
                      Phone & Call
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-base font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Instant WhatsApp CTA */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 py-2.5 px-4 text-xs font-semibold text-emerald-300 transition-all"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Chat Instantly on WhatsApp</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">
                    Base Location
                  </div>
                  <div className="text-base font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social Links Box */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Connect Directly:
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-blue-400 hover:border-blue-500/40 border border-slate-800 transition-all"
                >
                  <LinkedinIcon className="h-4 w-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-slate-600 border border-slate-800 transition-all"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:border-amber-500/40 border border-slate-800 transition-all"
                >
                  <CodeChefIcon className="h-4 w-4 text-amber-400" />
                  <span>CodeChef</span>
                </a>
                <a
                  href={personalInfo.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 border border-slate-800 transition-all"
                >
                  <CodeforcesIcon className="h-4 w-4 text-cyan-400" />
                  <span>Codeforces</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Message Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Active Inbox</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below. The message is automatically dispatched to{" "}
                <span className="text-cyan-400 font-mono font-semibold">{personalInfo.email}</span>, with your email set as reply-to.
              </p>

              {submitted ? (
                <div className="rounded-xl bg-emerald-950/40 p-8 border border-emerald-500/30 text-center animate-in fade-in duration-300">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Delivered to Kushal&apos;s Inbox!
                  </h4>
                  <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto">
                    Thank you, {formData.name || "friend"}. Your message has been sent to{" "}
                    <span className="text-cyan-400 font-mono">kp88053@gmail.com</span>. Kushal will reply directly to your email (
                    <span className="text-cyan-400">{formData.email}</span>).
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 border border-slate-800 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl bg-slate-900/90 px-4 py-3 text-sm text-white border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Your Email Address (For reply)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl bg-slate-900/90 px-4 py-3 text-sm text-white border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Kushal, we would like to interview you for an SDE role / discuss an architecture project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl bg-slate-900/90 px-4 py-3 text-sm text-white border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-600 resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-xl bg-amber-950/40 p-4 border border-amber-500/30 text-xs text-amber-200">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p>{errorMessage}</p>
                          <a
                            href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                              `Portfolio Message from ${formData.name || "Visitor"}`
                            )}&body=${encodeURIComponent(
                              `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                            )}`}
                            className="mt-2 inline-flex items-center space-x-1.5 text-cyan-300 underline font-semibold hover:text-cyan-200"
                          >
                            <span>Click here to open email app directly</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending to Kushal&apos;s Gmail...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message to kp88053@gmail.com</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
