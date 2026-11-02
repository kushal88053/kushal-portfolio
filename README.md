# Kushal Patel - Portfolio Website

A modern, high-performance developer portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. Optimized for seamless deployment on **Vercel**.

## 🌟 Key Features

1. **Interactive Formative Video Walkthrough**:
   - Dynamic 5-chapter architecture walkthrough showcasing:
     - *Chapter 1*: Engineering Overview (Distributed Systems, Java Spring Boot, Kafka, AWS, Kubernetes).
     - *Chapter 2*: 95%+ API Latency Reduction at VentoMotors (ActiveMQ + Redis asynchronous pipeline).
     - *Chapter 3*: Kyosk High-Throughput Kafka (10k+ msgs/day) & 99.9% Telecom Recharge Microservice.
     - *Chapter 4*: SaaS Email Infrastructure with Kubernetes Horizontal Pod Autoscaling (HPA) handling 100k+ emails/day.
     - *Chapter 5*: Algorithmic Mastery (1,000+ solved DSA challenges, CodeChef 1700, Global Rank 77 Cook-Off).
   - Features real-time animated architecture canvas, dynamic metrics, AI voice narration support, subtitles, playback speed control (1x/1.25x/1.5x), and theater mode.

2. **Full Resume Details**:
   - **Experience**: Gruslabs Software Solutions (VentoMotors & Kyosk) and Walkover Web Solutions (MSG91 & ViaSocket).
   - **Featured Projects**: Email SaaS (K8s HPA, RabbitMQ, AWS SES), VentoMotors Real-Time Factory Analytics, Kyosk Telecom Engine, Automation Engine.
   - **Skills Matrix**: Filterable matrix with search (Languages, Backend Frameworks, Event Streaming, Cloud & DevOps, Databases, Testing Tools).
   - **Competitive Programming Showcase**: CodeChef, Codeforces, LeetCode, GitHub with domain breakdown.
   - **Education**: Master of Computer Applications (MCA) & Bachelor of Computer Applications (BCA).
   - **Instant Resume Viewer & Print**: Modal with one-click "Print / Save PDF" view.

3. **Links & Contact**:
   - LinkedIn: [https://www.linkedin.com/in/kushal88053/](https://www.linkedin.com/in/kushal88053/)
   - GitHub: [https://github.com/kushal88053](https://github.com/kushal88053)
   - CodeChef: [https://www.codechef.com/users/kushal88053](https://www.codechef.com/users/kushal88053)
   - Codeforces: [https://codeforces.com/profile/kushal88053](https://codeforces.com/profile/kushal88053)
   - Email: `kp88053@gmail.com`
   - Phone: `+91-7024400235`

---

## 🚀 How to Run Locally

```bash
# Navigate to project directory
cd kushal-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## 🚢 How to Deploy to Vercel

### Option 1: Via GitHub & Vercel Dashboard (Recommended)

1. Create a new repository on your GitHub account (e.g. `kushal-portfolio`).
2. Link and push your local repository:
   ```bash
   cd kushal-portfolio
   git remote add origin https://github.com/kushal88053/kushal-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
4. Click **"Add New Project"** and select `kushal-portfolio`.
5. Click **"Deploy"**. Vercel will automatically detect Next.js and build your site.

### Option 2: Deploy directly via Vercel CLI

```bash
cd kushal-portfolio
npx vercel
```
