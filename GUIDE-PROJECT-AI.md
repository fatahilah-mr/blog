<system_instructions>
# AI GUIDELINE: WRITING PROJECTS
This document contains the exact rules and schemas an AI or CMS must follow when creating or editing project showcase entries in this repository (`fmr.blog`).

## 1. FILE LOCATION & NAMING CONVENTION
- **Directory:** `src/content/projects/`
- **Filename:** `your-project-slug.id.md` or `your-project-slug.en.md`
  - Use lowercase, kebab-case for the slug.
  - Append `.id.md` for Indonesian content or `.en.md` for English content to ensure Sveltia CMS and Astro i18n routing sync cleanly.

## 2. FRONTMATTER SCHEMA (YAML)
Every project MUST begin with a YAML frontmatter block enclosed by `---`. 
Below is the strict Zod schema definition from `src/content/config.ts`:

```yaml
---
# [REQUIRED] Title of the project
title: "fmr.blog"

# [REQUIRED] Short description of the project
description: "Blog pribadi dan galeri proyek interaktif berbasis Astro 5 dan Sveltia CMS."

# [REQUIRED] Current status. Must be exactly 'active', 'completed', or 'archived'
status: "active"

# [REQUIRED] Array of technologies used (e.g. Astro 5, TypeScript, Cisco, MikroTik)
techStack:
  - Astro 5
  - TypeScript
  - Sveltia CMS
  - Cloudflare Pages

# [REQUIRED] Date the project started (YYYY-MM-DD)
startDate: "2026-07-19"

# [OPTIONAL] URL to the source code repository (valid URL or "")
repoUrl: "https://github.com/fatahilah-mr/blog"

# [OPTIONAL] URL to the live demo (valid URL or "")
demoUrl: "https://blog.fatah.web.id"

# [OPTIONAL] Path to project cover image. Must be stored in /public/uploads/
heroImage: "/uploads/project-cover.jpg"

# [OPTIONAL] Set to true to feature this project. Defaults to false
featured: true

# [OPTIONAL] Array of cited references/sources for the Collapsible References Accordion
references:
  - title: "Astro 5 Documentation"
    url: "https://docs.astro.build"
---
```

## 3. COPYWRITING & LAYOUT RULES
1. **No H1 in Content Body:** NEVER write an `# Project Title` (H1) inside the markdown body. The Astro project layout (`src/pages/projects/[slug].astro`) automatically renders the frontmatter `title` inside a styled Double-Bezel header with responsive action buttons and status pills.
2. **No Raw References in Body:** NEVER write raw link lists at the bottom of the markdown body. ALWAYS put citations in the frontmatter `references:` array so the UI renders them in the interactive Collapsible Accordion (`<details class="references-accordion">`).
3. **Recommended Section Structure:** A complete project showcase entry should use `##` (H2) headings:
   - **Latar Belakang / Permasalahan:** Mengapa proyek ini dibuat?
   - **Arsitektur & Tech Stack:** Bagaimana sistem ini bekerja di balik layar?
   - **Fitur-Fitur Utama:** Apa saja keunggulan dan kemampuan sistem?
   - **Hasil & Pembelajaran (*Lessons Learned*):** Apa pencapaian atau efisiensi yang didapatkan?
4. **Action Buttons:**
   - If `repoUrl` or `demoUrl` is provided in frontmatter, Astro automatically renders styled MUI action buttons (*Repository* & *Live Demo*). On mobile (< 640px), these buttons auto-stack into 2 full-width rows for clean touch padding.
5. **Code Snippets & Tables:** Use GitHub Flavored Markdown (GFM) with explicit language identifiers for code blocks, and clear table structures that fit desktop container bounds.
</system_instructions>
