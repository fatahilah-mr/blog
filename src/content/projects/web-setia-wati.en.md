---
title: "Setia Wati Portfolio"
description: "An interactive, aesthetic pink pastel personal portfolio website for Setia Wati (Kwettiau), engineered with React 19, Vite, TypeScript, and Motion."
status: "completed"
techStack:
  - React 19
  - Vite
  - TypeScript
  - Motion
  - Tailwind CSS
  - Lucide React
startDate: "2026-06-30"
repoUrl: "https://github.com/fatahilah-mr/web-setia-wati"
demoUrl: "https://kwettiau.fatah.web.id"
heroImage: "/uploads/setia-wati-portfolio-1.webp"
featured: true
references:
  - title: "Official React Documentation"
    url: "https://react.dev"
  - title: "Official Vite Documentation"
    url: "https://vitejs.dev"
  - title: "Motion Documentation"
    url: "https://motion.dev"
---


## 📌 1. Problem

Setia Wati (Kwettiau), a Computer & Network Engineering (TKJ) graduate from SMK Patriot Pituruh, needed a digital personal branding platform to showcase her identity. Conventional IT portfolios typically face three major flaws:
- **Rigid & Monochromatic UI:** Dominated by dark themes and raw code snippets without reflecting the creator's personal character.
- **Fragmented Identity Showcase:** Unable to bridge technical networking skills (TKJ) with creative interests like fiction writing, culinary arts, and pop culture (NCT Dream).
- **Static Interactivity:** Lacks modern responsive micro-interactions to engage recruiters or visitors.

---

## 👤 2. Target User

1. **Recruiters & Industry Partners:** School, organization, or corporate hiring teams evaluating Setia Wati's education, profile, and technical IT networking skills.
2. **Visitors & Community:** Peers and visitors exploring her personal profile, life motivation, creative journal writings, and favorite playlists.
3. **Clients & Collaborators:** Teams seeking collaboration in IT networking setup, visual design, or creative projects.

---

## 💡 3. Solution

Built a high-speed Single Page Application (SPA) web portfolio powered by **React 19** and **Vite** with a *Pink Pastel Glassmorphism* aesthetic. Key capabilities include:
- **Characterful Visual Design:** A warm color palette (soft pink pastel, rose, and white) combined with modern glassmorphism styling.
- **Engaging UI Micro-Interactions:** 3D Mouse Tilt Parallax effects on favorite cards, smooth component transitions via **Motion**, and an interactive music player widget.
- **Direct Mail Contact Module:** Interactive email modal dynamically parsing visitor input into a `mailto:` URI without requiring complex backend servers.

---

## ⭐ 4. Key Features

- **🔒 3D Card Tilt Parallax Effect:** Interactive 3D response on favorite cards that rotates dynamically following mouse cursor movement.
- **🤖 Smart Scroll-Spy Header:** Auto-hiding header on scroll-down that reappears on scroll-up, featuring an active section tracker.
- **🛡️ Lazy Loaded Image & Shimmer Skeleton:** Custom `LazyImage` component providing smooth shimmering fallback animations during asset loading.
- **🗺️ Interactive Playlist & Like System:** Music player widget featuring dynamic track liking toggles that update UI states in real time.
- **📊 Interactive Email Modal Popup:** Dialog enabling visitors to draft and launch emails directly via their default mail client.
- **⚡ Biodata & Technical Skill Showcase:** Structured presentation of personal profile and technical TKJ skill badges (*Networking Setup*, *Cisco Packet Tracer*, *Hardware Troubleshooting*).

---

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: 3D Tilt Transform Math & Mobile Scroll Performance**
  - *Problem:* 3D tilt transformations and scroll-linked animations risk layout thrashing and frame drops on mobile devices.
  - *Solution:* Applied CSS `will-change: transform, box-shadow` optimization, cubic bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), and added `{ passive: true }` scroll event listeners.
- **Challenge 2: Complex SPA State Architecture**
  - *Problem:* Managing interactive UI states (header visibility, mobile drawer, playlist tracks, contact modal) across an SPA without state sprawl.
  - *Solution:* Decoupled code into modular components (`LazyImage.tsx`, data `playlist.ts`, `types.ts`) and effectively leveraged React Hooks (`useState`, `useEffect`, `useRef`).

---

## 📈 6. Impact

- **Before:** No centralized digital platform existed to present both Setia Wati's technical TKJ credentials and personal creative identity.
- **After:**
  - **100% Mobile Responsive & Ultra-Fast:** A high-speed web portfolio that loads seamlessly across all screen sizes.
  - **Memorable Personal Brand:** Successfully establishes a distinct, memorable visual brand for recruiters and visitors alike.

---

## 🛠️ Tech Choices

- **React 19:** Selected for declarative component architecture, efficient DOM rendering, and reactive state management.
- **Vite:** Chosen for lightning-fast HMR and optimized production bundling.
- **Motion (Framer Motion):** Selected for fluid, declarative UI animations and transitions.
- **Tailwind CSS & CSS Variables:** Combines utility-first styling with custom CSS design tokens for complete theme control.
- **Lucide React:** Selected for lightweight, crisp, and customizable SVG icons.

---

## 🖼️ Screenshots & Visual Demo

![Main Hero Section Interface of Setia Wati Portfolio](/uploads/setia-wati-portfolio-1.webp)
*Figure 1: Main hero section interface of Setia Wati (Kwettiau) portfolio featuring soft pink pastel aesthetics, specialization badges, and profile photo.*

![Technical Networking & IT Skills Display](/uploads/setia-wati-portfolio-2.webp)
*Figure 2: Technical IT skill breakdown covering Networking Setup, Cisco Packet Tracer, and Hardware & LAN Troubleshooting.*

![Interactive 3D Card Tilt Parallax Idol Showcase](/uploads/setia-wati-portfolio-3.webp)
*Figure 3: Interactive idol showcase featuring 3D mouse tilt parallax card animations (Chen Zhe Yuan, Park Ji-Sung NCT Dream, Harry Vaughan).*

![Motivation & Creative Life Philosophy Quote Section](/uploads/setia-wati-portfolio-4.webp)
*Figure 4: Life philosophy and personal motivation quote section reflecting creative harmony between Cisco networking and web development.*

![Interactive Favorite Music Playlist Widget](/uploads/setia-wati-portfolio-5.webp)
*Figure 5: Interactive music playlist widget showcasing focus-enhancing tracks (NCT Dream, Dhruv, NCT 2021) with real-time like toggles.*

![Interactive Contact Letter Modal Dialog](/uploads/setia-wati-portfolio-6.webp)
*Figure 6: Interactive popup modal dialog 'Send a Letter to Kwettiau' enabling direct email communication via native mail clients.*

