<system_instructions>
# AI GUIDELINE: WRITING BLOG ARTICLES
This document contains the exact rules and schemas an AI or CMS must follow when creating or editing blog articles in this repository (`fmr.blog`).

## 1. FILE LOCATION & NAMING CONVENTION
- **Directory:** `src/content/blog/`
- **Filename:** `your-article-slug.id.md` or `your-article-slug.en.md`
  - Use lowercase, kebab-case for the slug.
  - Append `.id.md` for Indonesian content or `.en.md` for English content to ensure Sveltia CMS and Astro i18n routing sync cleanly.

## 2. FRONTMATTER SCHEMA (YAML)
Every article MUST begin with a YAML frontmatter block enclosed by `---`. 
Below is the strict Zod schema definition from `src/content/config.ts`:

```yaml
---
# [REQUIRED] Title of the article (Keep concise & punchy, < 60 characters)
title: "Panduan Hosting Cloud Modern: Komparasi 9 Platform PaaS"

# [REQUIRED] Short summary for SEO and preview cards (1-2 sentences)
description: "Panduan komparatif mendalam 9 platform hosting cloud dari arsitektur, batas gratis, hingga biaya."

# [REQUIRED] Publication date (YYYY-MM-DD)
pubDate: "2026-07-23"

# [OPTIONAL] Date of last update. Add only when modifying an existing article
updatedDate: "2026-07-25"

# [OPTIONAL] Path to cover image. Images MUST be stored in /public/uploads/
heroImage: "/uploads/cover-image.jpg"

# [OPTIONAL] Array of relevant tags (lowercase, e.g. ["tech", "networking", "hosting"])
tags: ["hosting", "devops", "cloud"]

# [OPTIONAL] Language of the content. Must be 'id' or 'en'. Defaults to 'id'
lang: "id"

# [OPTIONAL] Set to true if drafting. Defaults to false
draft: false

# [OPTIONAL] Slug of a related project in src/content/projects/
project: "fmr-blog"

# [OPTIONAL] Array of cited references/sources for the Collapsible References Accordion
references:
  - title: "Vercel vs Netlify 2026: Complete Comparison Guide"
    url: "https://techsy.io/en/blog/vercel-vs-netlify"
  - title: "Account Plans on Vercel"
    url: "https://vercel.com/docs/plans"
---
```

## 3. COPYWRITING & LAYOUT RULES
1. **Headline Copywriting (< 60 chars):** Headlines must be punchy, clear, high-impact, and direct (Clarity Over Cleverness). Avoid overly long or academic titles.
2. **No H1 in Content Body:** NEVER write an `# Article Title` (H1) inside the markdown body. The Astro layout (`src/pages/blog/[slug].astro`) automatically renders the frontmatter `title` inside a styled Double-Bezel header. Start directly with an engaging lead-in paragraph or `##` (H2) headings.
3. **No Raw References in Body:** NEVER write raw link lists or `## Karya yang Dikutip` at the bottom of the markdown body. ALWAYS put citations in the frontmatter `references:` array so the UI renders them in the interactive Collapsible Accordion (`<details class="references-accordion">`).
4. **Table of Contents (TOC):** Astro automatically builds an interactive Table of Contents for all `##` (H2) and `###` (H3) headings. Ensure heading levels follow a logical hierarchy.
5. **Code Blocks & Syntax Highlighting:** ALWAYS specify language identifiers for code blocks (e.g. ```bash, ```typescript, ```yaml, ```json) so Shiki renders high-contrast syntax colors across both Light Mode and Dark Mode.
6. **Glassmorphic Tables:** Tables automatically fit 100% of desktop container width (`table-layout: fixed`) and support horizontal scrolling on mobile. Ensure table headers and cell text wrap naturally.
7. **Tone & Style:** Professional, authoritative, engaging, and action-oriented. Focus on IT Network System Administration, Server Infrastructure, and AI Prompt Engineering.
</system_instructions>
