import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kushal Patel | Software Development Engineer & Backend Architect",
  description:
    "Portfolio of Kushal Patel — Software Development Engineer specializing in high-throughput distributed systems, Java Spring Boot, Node.js, Kafka, AWS, Docker, and Kubernetes.",
  keywords: [
    "Kushal Patel",
    "Software Engineer",
    "Software Development Engineer",
    "Backend Developer",
    "Spring Boot",
    "Java",
    "Distributed Systems",
    "Kafka",
    "AWS",
    "Kubernetes",
    "Full-Stack Developer",
    "Indore"
  ],
  authors: [{ name: "Kushal Patel", url: "https://github.com/kushal88053" }],
  openGraph: {
    title: "Kushal Patel | Software Development Engineer",
    description:
      "Backend & Distributed Systems Engineer. Solved 1,000+ algorithmic problems. Building high-throughput microservices and scalable cloud platforms.",
    type: "website",
    url: "https://kushal-portfolio.vercel.app",
    siteName: "Kushal Patel Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
