---
title: "PERISAI AYOM TEMON"
description: "A digital platform for anonymous reporting and rapid response to violence against women and children (PPA) in Temon District, powered by PWA, AI Triage, and Leaflet GIS."
status: "completed"
techStack:
  - Next.js 16 (App Router)
  - TypeScript
  - Supabase (PostgreSQL & Realtime)
  - Tailwind CSS 4
  - Leaflet GIS Engine
  - Google Gemini 2.5 Flash
  - Resend Email API
  - Cloudflare Turnstile
startDate: "2026-08-01"
repoUrl: "https://github.com/temonkec-cpu/AYOM-TEMON"
demoUrl: "https://ayom-temon.vercel.app"
heroImage: "https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-01.webp"
featured: true
references:
  - title: "Indonesian Law No. 12 of 2022 on Sexual Violence Crimes (UU TPKS)"
    url: "https://peraturan.go.id/id/uu-no-12-tahun-2022"
  - title: "SAPA 129 Hotline - Ministry of Women Empowerment and Child Protection RI"
    url: "https://kpppa.go.id"
  - title: "Supabase Realtime & PostgreSQL RLS Documentation"
    url: "https://supabase.com/docs"
  - title: "Next.js 16 App Router & Server Actions Documentation"
    url: "https://nextjs.org/docs"
---

## 📌 1. Problem (Background & Problem Statement)

Violence against women and children (PPA) is a critical societal crisis that frequently remains underreported. In **Temon District, Kulon Progo Regency** (encompassing 15 villages/Kalurahan), victims and witnesses face severe psychological and logistical barriers when attempting to report incidents:

1. **Fear of Retaliation & Identity Leakage:** Victims hesitate to report due to intense fear that their personal identity might be exposed to perpetrators or the local community.
2. **Digital Footprint Hazards on Victim Devices:** In domestic violence (KDRT) scenarios, the perpetrator often inspects or monitors the victim's smartphone. Automated confirmation emails or SMS replies sent to the victim's device pose an immediate physical safety hazard.
3. **Panic & Cognitive Load During Crises:** During an active domestic emergency, panic-stricken victims lack the time and cognitive capacity to fill out long, complex reporting forms.
4. **Lack of Real-Time Triage Tools for Responders:** District Task Force responders required a centralized **Command Center** capable of automatically categorizing case urgency (distinguishing active 24/7 emergencies from routine cases), mapping case distributions across 15 villages, and providing transparent tracking without compromising victim anonymity.

---

## 👤 2. Target User (Primary Users)

**PERISAI AYOM TEMON** is architected to serve 3 primary user groups:

1. **Victims & Witnesses (Citizens of Temon District):**
   - Residents across 15 villages (Glagah, Palihan, Janten, Kebonrejo, Temon Kulon, Temon Wetan, Kulur, Kaligintung, Plumbon, Kedundang, Sindutan, Jangkaran, Karangwuni, Demangrejo, and Kaliidake).
   - Require 100% anonymous reporting, zero digital footprints, non-intimidating UX for non-tech-savvy users, and a 1-tap emergency button when in danger.

2. **PPA Task Force Responders & District Government:**
   - Field responders and officers tasked with verifying reports, initiating emergency intervention, coordinating with local police/clinics, and maintaining an audit trail.

3. **System Administrators & Developers:**
   - Platform managers handling Role-Based Access Control (RBAC), emergency email alert toggles, and managing Supabase database and AI integrations.

---

## 💡 3. Solution (Offered Solution)

**PERISAI AYOM TEMON** (*Operational Assurance & Mentoring App for Women and Child Protection*) provides a holistic technology solution uniting a ***Victim-Centered Approach***, PWA offline resilience, AI Triage intelligence, and interactive GIS spatial mapping:

- **Zero-Victim Email Architecture & 100% Anonymous Reporting:** Citizens can submit reports without disclosing their full name, national ID, or personal phone number. The system strictly **NEVER sends email confirmations or push notifications to the reporter's phone**, eliminating digital traces on victim devices.
- **PWA 1-Click SOS Panic Button & Local Pre-Save Profile:** Victims can pre-fill emergency profiles stored 100% locally in `localStorage` on their phone (Zero-Server Pre-Save Profile). In danger, tapping a single red SOS button sends an instant `DARURAT` alert with real-time GPS coordinates.
- **Double-Bezel Safety & Quick Exit (ESC):** A persistent floating *"QUICK EXIT (ESC)"* button that instantly redirects the browser to Google Search and clears navigation history upon a single tap or keyboard `ESC` key press.
- **AI Triage Powered by Gemini 2.5 Flash:** Automatically analyzes incident narratives, recommending urgency tiers (`Low`, `Medium`, `High`, `EMERGENCY`), risk indicators, and initial action guidance for Task Force officers.
- **Command Center Dashboard:** Officer interface featuring a *Dual-View Switcher* (Drag & Drop Kanban Board and 23-column Interactive Table), coupled with a Leaflet GIS Map featuring *Live Search* and *Auto FlyTo Zoom-In* capabilities.

---

## ⭐ 4. Key Features (Core Capabilities)

- **🚨 PWA-Ready 1-Click SOS Panic Button:** Emergency response trigger accessible directly from the PWA Home Screen Shortcut. Instantly transmits precise GPS coordinates and labeled emergency contacts (`0812... (personal), 0898... (emergency kin)`).
- **🛡️ Local Pre-Save Safe Profile (`PreSaveProfileModal.tsx`):** Pre-fill emergency profile forms saved securely in phone memory without transmitting data to servers until the SOS button is triggered.
- **🔍 Anonymous Case Tracking via Tracking ID & 6-Digit PIN:** Citizens monitor investigation progress anonymously by inputting their assigned Tracking ID (`AYOM-2026-XXXX`) and a random 6-digit PIN.
- **🗺️ Leaflet GIS Map with Live Search & Auto Zoom-In:** Interactive map of 15 villages featuring a *Live Search Bar* (by Tracking ID, Reporter Name, or Village), a *Spiral Coordinate Offset* algorithm to prevent overlapping markers, and **`map.flyTo` Smooth Zoom-In (Level 16)** with *Auto Popup Open* on search match.
- **📋 Dual-View Command Center (Kanban Board & 23-Column Table):** Responders manage case lifecycles (*Waiting*, *In Progress*, *Resolved*, *Rejected*) via Drag & Drop Kanban cards, date range filtering, officer email alert toggles, and full 23-column CSV data export.
- **🔴 Active Emergency Stat Card:** Intelligent stat widget counting active `EMERGENCY` reports requiring active intervention (resolved emergency cases are automatically excluded).
- **🔒 Multi-Layered Security (Turnstile + Rate Limiting):** Cloudflare Turnstile bot protection, in-memory rate limiting on server actions, and SSL/TLS encrypted Supabase PostgreSQL Row Level Security (RLS).
- **🎨 Modern PERISAI Design System:** Built with the official PERISAI Design Brief color palette (*Teal Dark* `#32848D`, *Teal Medium* `#619892`, *Sage Green* `#93B39D`, *Light Olive* `#B0C99E`, *Soft Lime* `#CBDCA5`, *Off White* `#F6FAF5`) and crisp vector logo `favicon.svg`.

---

## 🧱 5. Challenges & Lessons Learned (Technical Roadblocks & Problem Solving)

- **Challenge 1: Protecting Victim Privacy & Preventing Digital Footprints on Persecuted Devices.**
  - *Obstacle:* Sending traditional confirmation emails or push notifications leaves digital evidence on the reporter's phone, which perpetrator(s) can discover during phone inspections.
  - *Solution:* Engineered a *Zero-Victim Email Architecture*. Instant email alerts are exclusively delivered to official Task Force officer inboxes (`OFFICER_EMAIL`), while reporters receive only a Tracking ID & 6-digit PIN displayed on screen for personal recording.

- **Challenge 2: Overlapping Marker Coordinates on the GIS Map.**
  - *Obstacle:* When multiple reports originate from the same village (or use fallback village coordinates without GPS access), Leaflet markers stacked on the exact same pixel, hiding newer reports beneath older ones.
  - *Solution:* Developed a *Spiral Coordinate Offset/Jitter* algorithm inside `TemonMapLeaflet.tsx`. When matching coordinates are detected (within 4 decimal places), subsequent markers automatically offset in a spiral pattern, ensuring 100% of pins remain visible and clickable.

- **Challenge 3: Rapid Map Navigation to Specific Case Locations for Officers.**
  - *Obstacle:* Officers found it time-consuming to manually locate a specific report pin among dozens scattered across 15 villages.
  - *Solution:* Integrated a *Live Search Bar* on the map card connected to Leaflet's `map.flyTo()` API. Typing a Tracking ID (e.g. `AYOM-2026-9X2K`) triggers a smooth camera fly-to animation, zooming in to level 16 and automatically opening the marker's *Popup Window* with actionable buttons.

- **Challenge 4: High-Stress Friction in Emergency Reporting.**
  - *Obstacle:* Victims under active physical threat cannot spend minutes filling out multi-field forms.
  - *Solution:* Implemented a local *Pre-Save Profile* system (`PreSaveProfileModal.tsx`) and *PWA 1-Click Panic Button* (`PanicButtonModal.tsx`). Profiles are pre-saved in advance, allowing 1-tap emergency dispatch with precise GPS location in under 3 seconds.

---

## 📈 6. Impact (Outcomes & Results)

- **Before Implementation:**
  - Citizens were hesitant to report due to privacy leaks or complex reporting procedures.
  - Emergency response times were delayed by manual WhatsApp coordination and unorganized intake channels.
  - Responders lacked spatial visibility into case clusters across 15 district villages.

- **After Implementation:**
  - **100% Privacy Protection:** Reporters submit cases anonymously with zero digital footprints left on personal devices.
  - **Sub-3-Second Emergency Dispatch:** Active emergency signals are dispatched instantly via 1-tap PWA Panic Buttons.
  - **Task Force Operational Efficiency:** Centralized Command Center monitoring (Kanban Board + Live Search GIS Map) streamlined intervention workflows between District Officials, Police, and Healthcare Centers.
  - **Structured Governance & Audit Readiness:** All cases are documented across 23 parameters in Supabase, ready for CSV export for regional government reporting.

---

## 🛠️ Tech Choices (Technology Stack & Technical Rationale)

- **Next.js 16 (App Router) & React 19:**
  - *Rationale:* Delivers fast Server Components rendering, secure Server Actions for data mutations without public API exposure, and robust PWA support.
- **Supabase (PostgreSQL, Auth, & Realtime Engine):**
  - *Rationale:* Provides enterprise PostgreSQL storage, *Row Level Security* (RLS) data protection, and *Supabase Realtime Channels* enabling instant (0s latency) automatic map & Kanban UI updates upon database changes.
- **Google Gemini 2.5 Flash (via Portkey AI / Native Client):**
  - *Rationale:* Ultra-fast and accurate LLM inference in Indonesian narrative analysis for automatic urgency triage, risk factor extraction, and responder action recommendations.
- **Leaflet Engine & OpenStreetMap:**
  - *Rationale:* Lightweight, open-source GIS mapping library offering flexible custom marker rendering without recurring commercial API costs.
- **Tailwind CSS 4 & Vanilla CSS Design System:**
  - *Rationale:* Enables exact styling implementation of the official PERISAI palette (*Teal Dark*, *Teal Medium*, *Sage Green*, *Off White*) without runtime CSS-in-JS overhead, paired with GPU-accelerated micro-animations.
- **Resend Email API:**
  - *Rationale:* High-deliverability transactional email service ensuring emergency notification alerts reach officer inboxes instantly without spam filtering.
- **Cloudflare Turnstile:**
  - *Rationale:* Frictionless bot protection guarding submission endpoints without subjecting distressed victims to frustrating CAPTCHA challenges.

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
