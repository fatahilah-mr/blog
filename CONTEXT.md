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

### Phase 1: Project Showcase & Media Refactoring
1. **Refactored 7 Showcase Projects to 8-H2 Schema:** Standardized `gateway`, `fmr-blog`, `fatahilah-portfolio`, `perisai-media-sosial`, `ayom-temon`, `arifin-prasetyo-portofolio`, and `web-setia-wati` across both `.id.md` and `.en.md` files. Applied active copywriting and problem-solution framing.
2. **Media Asset Directory Organization:** Organized WebP screenshots in `public/uploads/` into dedicated sub-directories (`web-blog/`, `web-portfolio/`, `perisai-temon/`, `ayom-temon/`, `web-gateway/`, `web-portfolio-arifin-prasetyo/`, `web-portfolio-setia-wati/`, `blog/`).
3. **Migrated Technical Blog Articles:** Integrated bilingual articles (`setup-gateway-keamanan-mikrotik`, `rancang-bangun-jaringan-kantor-cisco`, `panduan-hosting-website-statis-pemula`).

### Phase 2: AI Slop Cleaning & Homepage Personalization
4. **Purity & Copywriting Audit:** Removed 100% of em-dashes (`—`), generic achievement badges, and AI-slop cliché slogans from markdown files and pages.
5. **Skill Pillar Synchronization:** Synchronized 6 core technical pillars in `about.astro` with verified portfolio experience (Hardware & Cabling, Cisco Networking, MikroTik & Wireless, Linux Server, Windows Server, AI & Web Dev).
6. **Homepage Pinned Projects:** Replaced automatic `featured: true` detection with manual `PINNED_PROJECT_SLUGS` in `index.astro` (pinned: `perisai-media-sosial` & `ayom-temon`). Filtered homepage recent articles to `lang: 'id'`.

### Phase 3: Layout Refactoring & UX Improvements (Gemini AI Evaluation)
7. **Asymmetrical Homepage (70:30):** Refactored `index.astro` layout to an asymmetric 70:30 structure on desktop: Main Content (Recent Articles + Pinned Projects) on the left (~70%), and a sticky Sidebar (Author Bio, Core Skill Chips, Social Links & RSS) on the right (~30%).
8. **Language Filter Pills:** Added `Semua`, `🇮🇩 ID`, and `🇬🇧 EN` pills to `/blog` and `/projects`. Configured **`🇮🇩 ID` as the default active filter** on initial load to eliminate side-by-side duplicate entries of bilingual posts/projects.
9. **Searchable Category Dropdown:** Transformed the category filter dropdown on `/blog` and `/projects` so clicking it turns the trigger into a real-time text input (auto-focusing keyboard on mobile).
10. **Project Card Thumbnails (`heroImage`):** Upgraded `ProjectCard.astro` to render 16:9 thumbnail previews with `loading="lazy"`, `decoding="async"`, and smooth hover scale micro-animations. Fixed Astro 5 dotless slug detection (`proj.id.endsWith('.en.md')`).
11. **Full-Site Container Width Expansion (1200px):** Expanded `.container` in `Base.astro` and `.footer-content` in `Footer.astro` from `900px` to **`1200px`**. Removed inner max-width bottlenecks across `/blog`, `/projects`, `/about`, `/blog/[slug]`, and `/projects/[slug]` so desktop screens utilize wide space gracefully without empty side margins.

### Phase 4: CI/CD & Deployment Fixes
12. **GitHub Actions FTP Deploy Fix:** Updated `.github/workflows/deploy.yml` with `dangerous-clean-slate: true` to prevent `FTPError: 553` when target cPanel web hosting directories are emptied/recreated.
13. **Verification & Deployment:** Passed `astro check` (0 errors, 0 warnings) and `astro build` (45 static pages built). All changes committed and pushed to GitHub `main` branch.
