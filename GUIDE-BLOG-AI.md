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
# [REQUIRED] Title of the article
title: "Judul Artikel Anda"

# [REQUIRED] Short summary for SEO and preview cards (1-2 sentences)
description: "Deskripsi ringkas mengenai topik dan poin penting yang dibahas."

# [REQUIRED] Publication date (YYYY-MM-DD)
pubDate: "2026-07-23"

# [OPTIONAL] Date of last update. Add only when modifying an existing article
updatedDate: "2026-07-25"

# [OPTIONAL] Path to cover image. Images MUST be stored in /public/uploads/
heroImage: "/uploads/cover-image.jpg"

# [OPTIONAL] Array of relevant tags (lowercase, e.g. ["tech", "networking", "ai"])
tags: ["tech", "networking"]

# [OPTIONAL] Language of the content. Must be 'id' or 'en'. Defaults to 'id'
lang: "id"

# [OPTIONAL] Set to true if drafting. Defaults to false
draft: false

# [OPTIONAL] Slug of a related project in src/content/projects/
project: "fmr-blog"
---
```

## 3. CONTENT & LAYOUT RULES
1. **No H1 in Content Body:** NEVER write an `# Article Title` (H1) inside the markdown body. The Astro page layout (`src/pages/blog/[slug].astro`) automatically renders the frontmatter `title` inside a styled Double-Bezel header with responsive metadata pills. Start directly with introductory text or `##` (H2) headings.
2. **Table of Contents (TOC):** Astro automatically builds an interactive Table of Contents for all `##` (H2) and `###` (H3) headings. Ensure heading levels follow a logical hierarchy.
3. **Syntax Highlighting:** Always specify language identifiers for code blocks (e.g. ```bash, ```typescript, ```json) so Shiki renders high-end syntax highlighting.
4. **Media & Images:** Reference cover images or inline figures using `/uploads/filename.ext` from the public directory.
5. **Tone & Style:** Professional, authoritative, yet accessible. Focus on IT Network System Administration, Server Infrastructure, and AI Prompt Engineering.
</system_instructions>
