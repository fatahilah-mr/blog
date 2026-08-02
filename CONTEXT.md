# 📘 CODEBASE CONTEXT & AI AGENT GUIDE — `fmr.blog`

> **Note for AI Agents:** This document contains a comprehensive, production-ready specification of the `fmr.blog` repository. Any AI agent reading this file will gain an immediate, full-spectrum understanding of the system architecture, content schemas, design philosophy, file structures, execution commands, and recent conversation/work history.

---

## 🛠️ 1. Project Overview & Tech Stack

`fmr.blog` is a modern, high-performance personal blog and interactive project portfolio built for **Fatahilah (fatahilah-mr)**.

* **Production URL:** `https://blog.fatah.web.id`
* **Repository:** `fatahilah-mr/blog`
* **Framework:** **Astro 5** (Static Site Generator / SSG)
* **UI Components:** **React 19** (`@astrojs/react`), **Material-UI v9** (`@mui/material`, `@mui/icons-material`), **Emotion** (`@emotion/react`, `@emotion/styled`)
* **Content Management:** **Sveltia CMS** (Git-based CMS located at `/public/admin/`)
* **Type Safety & Validation:** **TypeScript 5.9** & **Zod** (`astro:content`)
* **Integrations:** `@astrojs/sitemap`, `@astrojs/rss`
* **Syntax Highlighting:** **Shiki** (`github-dark` & `github-light`)

---

## 📁 2. File & Directory Architecture

```
/data/data/com.termux/files/home/projects/blog/
├── guide/                        # Authoritative AI Guidelines & Documentation
│   ├── GUIDE-PROJECT-AI.md      # MANDATORY rules & 8-H2 component structure for project entries
│   ├── GUIDE-BLOG-AI.md         # Mandatory rules & schema for blog post entries
│   └── PORTFOLIO.md             # Portfolio overview and guidelines
├── public/                       # Static public assets
│   ├── admin/                   # Sveltia CMS configuration (`config.yml`, `index.html`)
│   └── uploads/                 # Uploaded media assets, organized into dedicated project sub-directories
│       ├── web-blog/            # fmr.blog screenshots (1-7)
│       ├── web-portfolio/       # Fatahilah Portfolio screenshots (1-7)
│       ├── perisai-temon/       # PERISAI screenshots (1-8)
│       ├── ayom-temon/          # AYOM TEMON screenshots (1-8)
│       ├── web-gateway/         # FATAH Gateway screenshots (1-3)
│       ├── web-portfolio-arifin-prasetyo/ # Arifin Prasetyo Portfolio screenshots (1-5)
│       └── web-portfolio-setia-wati/     # Setia Wati Portfolio screenshots (1-6)
├── src/                          # Application source code
│   ├── components/              # Reusable Astro & React UI components
│   ├── content/                 # Astro Content Collections
│   │   ├── config.ts            # Zod schemas for `blog` and `projects`
│   │   ├── blog/                # Blog post markdown entries (`.id.md` & `.en.md`)
│   │   └── projects/            # Project showcase markdown entries (`.id.md` & `.en.md`)
│   ├── i18n/                    # i18n translation dictionaries
│   │   ├── id.ts                # Bahasa Indonesia UI strings
│   │   └── en.ts                # English UI strings
│   ├── layouts/                 # Page layout components (e.g. `Base.astro`)
│   ├── pages/                   # Astro File-based Router
│   │   ├── index.astro          # Landing / Homepage
│   │   ├── about.astro          # About Me page
│   │   ├── 404.astro            # Custom 404 page
│   │   ├── rss.xml.ts           # Dynamic RSS feed generator
│   │   ├── blog/                # Blog list (`index.astro`) and dynamic slug route (`[slug].astro`)
│   │   ├── projects/            # Projects list (`index.astro`) and dynamic slug route (`[slug].astro`)
│   │   └── tags/                # Tag filtering dynamic routes (`[tag].astro`)
│   ├── styles/                  # Global CSS styles
│   └── utils/                   # Helper functions (i18n helpers, date formatters)
├── astro.config.mjs             # Astro project configuration
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript configuration
└── CONTEXT.md                   # Complete Codebase Context & AI Guide (THIS FILE)
```

---

## 📜 3. Content Collection Schemas (`src/content/config.ts`)

### A. Projects Collection (`projects`)
File Naming: `your-project-slug.id.md` (Indonesian) or `your-project-slug.en.md` (English).

```typescript
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),                             // Project title
    description: z.string(),                             // 1-2 sentence summary
    status:      z.enum(['active', 'completed', 'archived']), // Mandatory status
    techStack:   z.array(z.string()),                    // List of technologies used
    startDate:   z.coerce.date(),                        // Start date (YYYY-MM-DD)
    repoUrl:     z.string().url().or(z.literal('')).optional(), // GitHub repo URL
    demoUrl:     z.string().url().or(z.literal('')).optional(), // Live demo URL
    heroImage:   z.string().optional(),                  // Path in /uploads/ or /assets/
    featured:    z.boolean().default(false),             // Show on homepage
    references:  z.array(z.object({                      // Citation links array
      title: z.string(),
      url:   z.string().optional(),
    })).optional(),
  }),
});
```

### B. Blog Collection (`blog`)
File Naming: `your-post-slug.id.md` or `your-post-slug.en.md`.

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage:   z.string().optional(),
    tags:        z.array(z.string()).default([]),
    lang:        z.enum(['id', 'en']).default('id'),
    draft:       z.boolean().default(false),
    project:     z.string().optional(),
    references:  z.array(referenceSchema).optional(),
  }),
});
```

---

## 🎯 4. AI Rules for Writing Project Entries (`guide/GUIDE-PROJECT-AI.md`)

When creating or editing any project entry in `src/content/projects/`, AI agents **MUST STICK STRICTLY** to the following 8-H2 component structure and rules:

### Mandatory 8-H2 Section Structure:
1. `## 📌 1. Problem (Latar Belakang & Masalah)` (or `## 📌 1. Problem` in English)
2. `## 👤 2. Target User (Pengguna Utama)` (or `## 👤 2. Target User` in English)
3. `## 💡 3. Solution (Solusi yang Ditawarkan)` (or `## 💡 3. Solution` in English)
4. `## ⭐ 4. Key Features (Fitur-Fitur Utama)` (or `## ⭐ 4. Key Features` in English)
5. `## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)` (or `## 🧱 5. Challenges & Lessons Learned` in English)
6. `## 📈 6. Impact (Dampak & Hasil)` (or `## 📈 6. Impact` in English)
7. `## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)` (or `## 🛠️ Tech Choices` in English)
8. `## 🖼️ Screenshots & Visual Demo`

### Strict Guidelines:
* ❌ **NO H1 (`#`) IN BODY:** Astro layouts render the frontmatter `title` inside a specialized Double-Bezel header. Never use `# Title` inside markdown body.
* ❌ **NO MANUAL REFERENCES IN BODY:** All citations/links must be defined inside the frontmatter `references:` array so Astro renders them inside interactive collapsible accordions.
* 📷 **IMAGE CAPTIONS:** Every screenshot under section 8 must have a short italicized caption directly below it (`*Figure 1: ...*` or `*Gambar 1: ...*`).
* ✍️ **ACTIVE COPYWRITING:** Apply high-converting active voice, concise phrasing, clear problem-solution framing, and quantifiable impact (metrics/percentages).

---

## 🌐 5. i18n & Routing Mechanics

* Content files use `.id.md` and `.en.md` suffixes.
* Astro dynamic routes (`src/pages/projects/[slug].astro` and `src/pages/blog/[slug].astro`) match slugs by stripping the `.id` / `.en` suffix or rendering localized content seamlessly.
* Action buttons (`Repo` & `Demo`) are rendered automatically from frontmatter fields `repoUrl` and `demoUrl`.

---

## ⚡ 6. CLI Commands & Workflow

```bash
# Development server
npm run dev

# Codebase validation & type-check
node ./node_modules/@astrojs/check/bin/astro-check.js

# Production build
node ./node_modules/@astrojs/check/bin/astro-check.js && node ./node_modules/astro/astro.js build
# or: npm run build (when node path is in environment PATH)

# Commit & Push
git add .
git commit -m "docs: update content"
git push origin main
```

---

## 📜 7. Conversation & Refactoring History Summary

In this workspace session, the user and AI agent executed a systematic refactoring of all 7 project showcase entries in `src/content/projects/` to achieve 100% compliance with `guide/GUIDE-PROJECT-AI.md` and apply high-impact **Conversion & Active Copywriting** principles, alongside categorizing all uploaded image assets into dedicated sub-directories.

### Key Work Completed:
1. **Refactored `gateway.id.md` & `gateway.en.md` (3 Screenshots):**
   * Restructured into 8 mandatory H2 sections.
   * Added main landing page and Sveltia CMS dashboard/editor screenshots (`web-gateway-1.webp` through `3.webp`).
2. **Refactored `fmr-blog.id.md` & `fmr-blog.en.md` (7 Screenshots):**
   * Updated with 4 main UI screenshots and 3 Sveltia CMS collection & media manager screenshots (`web-blog-1.webp` through `7.webp`).
3. **Refactored `fatahilah-portfolio.id.md` & `fatahilah-portfolio.en.md` (7 Screenshots):**
   * Formatted to strict 8-H2 schema with active, punchy bullet points and 7 WebP screenshots (`web-portfolio-1.webp` through `7.webp`).
4. **Refactored `perisai-media-sosial.id.md` & `perisai-media-sosial.en.md` (8 Screenshots):**
   * Enhanced copywriting to focus on social media toxicity defense, real-time protection, and privacy mechanisms (`perisai-temon-1.webp` through `8.webp`).
5. **Refactored `ayom-temon.id.md` & `ayom-temon.en.md` (8 Screenshots):**
   * Updated violence reporting platform documentation with active voice, emergency alert response (<15 mins), 100% victim confidentiality, and 90% faster reporting efficiency (`ayom-temon-1.webp` through `8.webp`).
6. **Refactored `arifin-prasetyo-portofolio.id.md` & `arifin-prasetyo-portofolio.en.md` (5 Screenshots):**
   * Transformed culinary portfolio entries to highlight mobile-first plating showcase, TanStack Router zero page-reload latency, and canonical SEO optimization (`arifin-prasetyo-portfolio-1.webp` through `5.webp`).
7. **Refactored `web-setia-wati.id.md` & `web-setia-wati.en.md` (6 Screenshots):**
   * Refined pink pastel glassmorphism portfolio entries with active tone, 3D tilt transform math explanations, and concise component state management (`setia-wati-portfolio-1.webp` through `6.webp`).
8. **Media Asset Sub-Directory Organization:**
   * Organized all WebP screenshots in `public/uploads/` into dedicated project folders (`web-blog/`, `web-portfolio/`, `perisai-temon/`, `ayom-temon/`, `web-gateway/`, `web-portfolio-arifin-prasetyo/`, `web-portfolio-setia-wati/`, `blog/`).
   * Updated markdown files to point to `/uploads/<subfolder>/<filename>.webp`.
9. **Migrated 3 Technical Blog Articles from `migrasi/`:**
   * Added 3 bilingual blog articles: `setup-gateway-keamanan-mikrotik`, `rancang-bangun-jaringan-kantor-cisco`, and `panduan-hosting-website-statis-pemula`.
10. **Verification & Build:**
   * Executed `astro check` and `astro build` successfully with **0 Errors** across all 45 generated static pages.
11. **Version Control:**
   * Cleanly staged, committed, and pushed changes to `main` branch on GitHub (`fatahilah-mr/blog`).
