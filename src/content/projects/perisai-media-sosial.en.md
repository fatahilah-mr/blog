---
title: "PERISAI: Rapid Response & Social Portal of Temon"
description: "Public complaint platform powered by Google Gemini 2.0 Flash AI auto-triage (1-3s), instant email notifications, and 15-village interactive GIS map."
status: "completed"
techStack:
  - Next.js 16
  - TypeScript
  - Tailwind CSS
  - Supabase PostgreSQL
  - Google Gemini AI
  - Nodemailer SMTP
  - MapLibre GL
startDate: "2026-07-28"
repoUrl: "https://github.com/temonkec-cpu/Media-Sosial"
demoUrl: "https://perisai-media-sosial.vercel.app"
heroImage: "/uploads/perisai-temon/perisai-temon-1.webp"
featured: true
references:
  - title: "Next.js 16 App Router Docs"
    url: "https://nextjs.org/docs"
  - title: "Supabase PostgreSQL & Row Level Security"
    url: "https://supabase.com/docs"
  - title: "Google Gemini 2.0 Flash API Reference"
    url: "https://ai.google.dev/docs"
  - title: "Nodemailer SMTP Architecture"
    url: "https://nodemailer.com"
---

## 📌 1. Problem

Kapanewon Temon governs 15 villages (*Kalurahan*) and hosts Yogyakarta International Airport (YIA). Rapid infrastructure growth triggered an increasing surge of public grievances (damaged roads, lighting, drainage, public service requests).

Prior to the **PERISAI** platform, grievance management suffered from 4 critical bottlenecks:
1. **Fragmented Channels:** Citizen reports were scattered across personal WhatsApp and social media without centralized tracking.
2. **Slow Manual Triage:** Public Relations staff manually sorted dozens of reports and drafted bureaucratic responses over **24–72 hours**.
3. **Zero Transparency:** Citizens had no mechanism to track whether reports were received, in-progress, or resolved.
4. **Database Security Risks:** Internal tables lacked *Row Level Security* (RLS), exposing admin accounts to accidental deletion or privilege tampering.

## 👤 2. Target User

- **Citizens of Kapanewon Temon:** Demand a 24/7 public complaint portal with instant email tracking receipts.
- **PR Team & Admin Operators:** Need AI triage recommendations to accelerate official responses using polite bureaucratic etiquette (*"Sedulur"*).
- **Super Admins:** Manage user directories and database-level security policies.

## 💡 3. Solution

Built **PERISAI** (*Portal Elektronik Respons Cepat & Integrasi Sosial Aman Inklusif*), a full-stack digital ecosystem that slashes bureaucratic response times from days to seconds.

Core technical solutions:
- **Google Gemini 2.0 Flash AI Triage:** Automatically analyzes report sentiment, categorizes issues, and drafts official responses upon form submission.
- **Instant Email & Tracking Receipt:** Issues a unique 12-digit tracking code (`TKT-2026-XXXX`) synchronized with automated email delivery via Nodemailer SMTP.
- **15-Village Interactive GIS Map:** MapLibre GL spatial visualization featuring gesture-lock toggles for smooth mobile UX.
- **Hardened Architecture:** Next.js 16 App Router, Supabase PostgreSQL, and database-level RLS security triggers.

## ⭐ 4. Key Features

- **📝 Public Form & Rate Limiter (`/lapor`):** Responsive submission form with 15-village validation and IP-based Rate Limiting (10 requests / 10 mins).
- **🤖 Gemini AI Auto-Triage (`/api/ai/process-aduan`):** Automated sentiment analysis, 6-category tagging, and official draft generation within 1–3 seconds.
- **📧 Transactional Email Engine (Nodemailer SMTP):** Dispatches automated receipts and status updates (In-Progress/Resolved) complying with RFC 5322 headers.
- **🔍 Real-Time Complaint Tracker (`/lacak`):** Public tracking page with 500ms debounced search for instant progress updates.
- **🗺️ Admin Dashboard & Locked Map (`/dashboard/reports`):** Admin triage dashboard featuring a *Collapsible Map Panel* preventing mobile touch interference.
- **🛡️ PostgreSQL RLS Hardening:** PL/pgSQL trigger `protect_superadmin_integrity()` locking Super Admin accounts against unauthorized mutations.

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: Email Deliverability & Spam Filter Avoidance**
  - *Issue:* Confirmation emails sent from Vercel Serverless were flagged by Gmail as new external sender messages.
  - *Solution:* Upgraded to explicit SSL Port 465 `smtp.gmail.com`, added RFC 5322 headers, and `await`ed SMTP promises before returning HTTP responses.
- **Challenge 2: Mobile Screen Scrolling Map Touch Conflict**
  - *Issue:* The interactive GIS map canvas intercepted finger gestures when users scrolled down mobile screens.
  - *Solution:* Designed a *Collapsible Map Panel* locked by default with `[ 🗺️ Open Map ]` and `[ 🔒 Lock Map ]` toggles.
- **Challenge 3: Text Squeezing on Medium Viewports**
  - *Issue:* Banner text descriptions wrapped awkwardly on tablet viewports.
  - *Solution:* Refactored CSS wrappers using `flex-1 w-full` and `leading-relaxed` for proportional horizontal expansion.
- **Challenge 4: Disaster Recovery Persistence on Trial VPS**
  - *Issue:* Developing on a 3-month trial Cloud VPS required full environment portability.
  - *Solution:* Tagged Git Release `v1.0.0-stable` and generated a comprehensive backup archive `perisai-media-sosial-FULL-BACKUP.zip` (156 MB) containing all code, `.env`, and `schema.sql`.

## 📈 6. Impact

- **Before:** Triage turnaround and official responses took **24–72 hours** without tracking receipts.
- **After:**
  - **Instant AI Triage:** Report classification and response drafting complete in **1–3 seconds**.
  - **100% Confirmation Delivery:** Citizens receive instant tracking IDs and receipts in their email inbox.
  - **Integrated GIS & Audit Trail:** All grievances mapped across 15 villages with immutable audit logs in Supabase.

## 🛠️ Tech Choices

- **Next.js 16 (App Router):** Superior hybrid rendering (SSR/Client) performance and clean Vercel Serverless integration.
- **Supabase PostgreSQL & RLS:** High-performance relational database with built-in Row Level Security.
- **Google Gemini 2.0 Flash:** Ultra-fast, cost-efficient generative AI model tailored for Indonesian text analysis and local context.
- **Nodemailer & Gmail SMTP:** Reliable transactional email delivery supporting 500–2,000 emails/day without recurring API subscription costs.
- **Tailwind CSS & Material 3:** Consistent visual design tokens and multi-device responsiveness.

## 🖼️ Screenshots & Visual Demo

![Main Public Landing Page Interface of PERISAI Kapanewon Temon](/uploads/perisai-temon/perisai-temon-1.webp)
*Figure 1: Main public landing page interface of PERISAI Kapanewon Temon featuring 24/7 official announcements and primary action buttons.*

![Public Complaint Form Interface](/uploads/perisai-temon/perisai-temon-2.webp)
*Figure 2: Public complaint submission form at `/lapor` route with citizen identification fields, 15-village dropdowns, and submission guidelines.*

![Real-Time Complaint Tracking Interface](/uploads/perisai-temon/perisai-temon-3.webp)
*Figure 3: Real-time public complaint tracking page supporting instant lookups via 12-digit unique Tracking Codes (`TKT-2026-XXXX`).*

![Education & Public Information FAQ Interface](/uploads/perisai-temon/perisai-temon-4.webp)
*Figure 4: Education and public service page featuring interactive FAQ accordions and Kapanewon Temon information disclosure guidelines.*

![Command Center Temon Admin Dashboard](/uploads/perisai-temon/perisai-temon-5.webp)
*Figure 5: Main Command Center Temon admin dashboard presenting real-time Supabase metrics and recent citizen complaint tables.*

![Interactive 15-Village GIS Map & Report Management](/uploads/perisai-temon/perisai-temon-6.webp)
*Figure 6: Report management dashboard equipped with an interactive 15-village GIS spatial map around YIA Airport and canvas gesture lock controls.*

![User Directory & Access Control Management](/uploads/perisai-temon/perisai-temon-7.webp)
*Figure 7: User directory management page for controlling administrator roles (Super Admin, Public Relations Operator, Field Staff).*

![System Activity Logs & Security Audit Trail](/uploads/perisai-temon/perisai-temon-8.webp)
*Figure 8: System activity log page recording real-time chronological audit events, authentication triggers, and CSV export tools.*
