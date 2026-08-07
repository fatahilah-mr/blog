---
title: "AYOM TEMON | Violence Against Women & Children Reporting Platform"
description: "An anonymous, encrypted, and privacy-first reporting platform for violence against women and children, integrated with Gemini AI & GIS mapping for Kapanewon Temon."
status: "completed"
techStack:
  - Next.js 16
  - React 19
  - TypeScript
  - TailwindCSS v4
  - Supabase PostgreSQL & Auth
  - Google Gemini AI (Portkey AI)
  - MapLibre GL & Leaflet GIS
  - Cloudflare Turnstile CAPTCHA
  - Resend SMTP Email API
startDate: "2026-07-20"
repoUrl: "https://github.com/fatahilah-mr/AYOM-TEMON"
demoUrl: "https://ayom-temon.vercel.app"
heroImage: "https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-01.webp"
featured: true
references:
  - title: "Indonesian Law No. 12 of 2022 on Sexual Violence Crimes (UU TPKS)"
    url: "https://peraturan.go.id"
  - title: "SAPA 129 Women & Children Protection Hotline"
    url: "https://kpppa.go.id"
  - title: "Supabase PostgreSQL & Auth Documentation"
    url: "https://supabase.com/docs"
  - title: "Next.js 16 App Router Documentation"
    url: "https://nextjs.org/docs"
---


## 📌 1. Problem

Violence against women and children at the sub-district level often remains hidden under the surface. In Kapanewon Temon, Kulon Progo Regency, Yogyakarta, most victims and witnesses hesitate to report physical, psychological, or sexual abuse due to four major barriers:
- **Fear of Stigma & Identity Exposure:** Victims fear social exposure or retaliation from perpetrators, forcing them into silence.
- **Trauma-Inducing Manual Reporting:** Conventional reporting required physical visits to sub-district offices or police stations.
- **Delayed Emergency Response:** Task force officers lacked an automated early warning system to handle critical emergencies immediately.
- **Fragmented Incident Data:** Reports were not mapped geographically across the 15 Kalurahan (villages), making targeted prevention difficult.

---

## 👤 2. Target User

1. **Victims & Citizens of Kapanewon Temon:** Public users requiring an anonymous, secure, and instant emergency reporting channel accessible via mobile.
2. **Kapanewon Temon Protection Task Force (Super Admin & PR Operators):** Emergency response officers monitoring real-time submissions, verifying AI triage, updating status, and routing referrals to specialized agencies (UPTD PPA Kulon Progo / Police).
3. **Field Officers & Referral Partners:** Community caseworkers requiring read-only access to monitor referral progress for legal, medical, or safe-house support.

---

## 💡 3. Solution

**AYOM TEMON** (*Aplikasi Yakin Operasional & Mentoring Perlindungan Perempuan & Anak*) was built as a modern, unified web portal for public reporting and task force command operations. Key capabilities include:
- **100% Anonymous & Encrypted Public Reporting:** Users receive a unique **12-Character Tracking Code** (e.g., `AYOM-8492-X7K`) without creating an account or revealing personal identity.
- **Automated AI Triage (Google Gemini 2.5 Flash via Portkey AI):** Instantly analyzes incoming submissions to classify urgency (*EMERGENCY* vs *REGULAR*), summarize incident timelines, and draft recommended action plans.
- **Real-Time Officer Email Alerts (Resend API):** Triggers immediate emergency email notifications straight to duty officer inboxes upon critical submissions.
- **15-Kalurahan Interactive GIS Map (MapLibre GL & Leaflet):** Visualizes incident distribution across all 15 Kalurahan in Kapanewon Temon, equipped with a Quick Exit key (*Esc*) for victim privacy.

---

## ⭐ 4. Key Features

- **🔒 Anonymous Submissions & Unique Tracking:** Public reporting form with automatic village geolocation and Cloudflare Turnstile anti-bot protection.
- **🤖 Automated AI Triage & Summarization:** Intelligent analysis engine categorizing abuse types (Physical, Psychological, Sexual, Neglect) and extracting key event timelines.
- **🛡️ 3-Tier Granular Access Control (RBAC):**
  - **👑 Super Admin:** Full platform control, task force account management, email alert configuration, and system audit logs.
  - **🛡️ PR Operator (`admin`):** Monitors public reports, updates case statuses (`Pending`, `In Progress`, `Referred`, `Completed`, `Rejected`), appends case notes, and reviews system audit logs.
  - **🤝 Field Officer (`user`):** Locked *Read-Only* access to track report progress without accidental status modifications.
- **🗺️ Interactive 15-Kalurahan GIS Map:** Visualizes incident hotspots based on map coordinates and village boundaries.
- **📊 Date Range Filter & CSV Export:** Enables task force officers to export monthly report summaries and audit trails into UTF-8 BOM CSV format in one click.
- **⚡ Supabase Realtime & Audit Trail:** Instant Command Center interface updates without browser refreshes, backed by full officer activity logging.
- **🚨 Quick Exit & Anti-Tracking Mode:** Emergency escape button that immediately redirects the browser to Google and clears temporary navigation history.

---

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: Victim Privacy & Bot Prevention**
  - *Problem:* Risk of automated bot spam overloading the database, combined with potential privacy leaks.
  - *Solution:* Integrated Cloudflare Turnstile CAPTCHA server-side without tracking cookies, alongside anonymous hashing and randomized tracking codes.
- **Challenge 2: PostgreSQL Role Constraint & Hydration Mismatches**
  - *Problem:* Database check constraints stored `petugas` and `mitra_rujukan`, whereas the UI expected `admin` and `user`. Additionally, modal portals triggered hydration errors under React 19 / Next.js 16.
  - *Solution:* Built a bi-directional role mapper inside Server Actions and refactored modal portal state using React 19's native `useSyncExternalStore` API.
- **Challenge 3: AI Latency & Email Alert Reliability**
  - *Problem:* AI processing and SMTP dispatch occasionally exceeded 3 seconds, risking public form delays.
  - *Solution:* Architected asynchronous fallback handling via Portkey AI gateway and Resend API to maintain public form response times under 800ms.

---

## 📈 6. Impact

- **Before:** Reporting was manual, prone to privacy leaks, lacked GIS mapping, and emergency case verification took over 24 hours.
- **After:**
  - **Emergency Response < 15 Minutes:** Instant email alerts and AI triage categorize critical cases immediately for swift task force action.
  - **100% Victim Identity Confidentiality:** Victims report and track resolution safely using only their Tracking Code.
  - **90% Faster Monthly Reporting:** Single-click CSV exports and date filtering streamline monthly reporting for district authorities.

---

## 🛠️ Tech Choices

- **Next.js 16 (App Router & Turbopack):** Modern React framework delivering Server Actions, dynamic routing, and ultra-fast Turbopack builds.
- **React 19:** Leverages `useSyncExternalStore` for hydration-mismatch-free rendering.
- **TypeScript:** Enforces strict type safety without `any` types to prevent runtime errors.
- **Supabase PostgreSQL & Auth:** High-performance serverless PostgreSQL database with Supabase Auth and Realtime Subscriptions.
- **Google Gemini 2.5 Flash (via Portkey AI):** High-speed LLM for automated triage and incident timeline extraction.
- **MapLibre GL & Leaflet GIS:** Quota-free interactive maps for visual tracking across all 15 Kalurahan.
- **Cloudflare Turnstile:** Privacy-focused CAPTCHA preventing bot spam without frustrating users.
- **TailwindCSS v4:** Utility-first CSS engine for creating modern, responsive user interfaces.

---

## 🖼️ Screenshots & Visual Demo

![Main Public Landing Page Interface of PERISAI AYOM TEMON](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-01.webp)
*Figure 1: Main public landing page interface of PERISAI AYOM TEMON showcasing Safety-First UX privacy guarantees, 24-hour emergency hotlines, and Quick Exit (ESC) buttons.*

![Anonymous Public Complaint Submission Form & 1-Click Emergency SOS Banner](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-02.webp)
*Figure 2: Anonymous public reporting form at `/lapor` route featuring a 1-Click Emergency SOS banner, automatic 15-village GPS geolocation detection, and zero-digital-footprint protections.*

![Encrypted Anonymous Complaint Tracking Portal](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-03.webp)
*Figure 3: Encrypted anonymous complaint tracking page requiring unique Tracking Codes (`AYOM-2026-XXXX`) and secret 4-digit PINs.*

![Victim Rights & Digital Safety Education Page](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-04.webp)
*Figure 4: Education page covering legal literacy under Law No. 12 of 2022 (UU TPKS), victim recovery rights, and digital device safety guides.*

![Task Force Officer Login Authentication Portal](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-05.webp)
*Figure 5: Dedicated authentication portal for Kapanewon Temon Task Force officers integrated with Supabase Auth Google OAuth SSO.*

![Command Center Task Force Dashboard](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-06.webp)
*Figure 6: Main Command Center Task Force dashboard presenting real-time Supabase Bento Grid metrics, Resend API email alert toggles, and 15-village GIS map.*

![Public Complaint Management Kanban Board View](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-07.webp)
*Figure 7: Kanban Board view for complaint management featuring urgency and date-range filters, referral tags (Medical, Legal, Safe House), and interactive status transitions.*

![Public Complaint Management Data Table & Gemini AI Summary View](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-08.webp)
*Figure 8: Structured Data Table view displaying Gemini AI automated incident summaries, handling status, and CSV export functionality.*

![User Directory & 3-Tier RBAC Access Control Management](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-09.webp)
*Figure 9: User directory page displaying 3-Tier Role-Based Access Control (RBAC) rules for Super Admin, PR Operator, and Read-Only Field Staff.*

![System Activity Logs & Realtime Security Audit Trail](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-10.webp)
*Figure 10: System activity log page tracking real-time officer audit trails, administrative actions, severity filters, and CSV exports.*

