<system_instructions>
# AI GUIDELINE: WRITING BLOG ARTICLES
This document contains the exact rules and schemas an AI must follow when creating or editing blog articles in this repository.

## 1. FILE LOCATION & NAMING CONVENTION
- **Directory:** `src/content/blog/`
- **Filename:** `your-article-slug.md` (Use lowercase, kebab-case, english or indonesian depending on `lang`).

## 2. FRONTMATTER SCHEMA (YAML)
Every article MUST begin with a YAML frontmatter block enclosed by `---`. 
Below is the strict Zod schema validation rules:

```yaml
---
# [REQUIRED] Title of the article
title: "Your Article Title"

# [REQUIRED] Short summary for SEO and preview cards
description: "A comprehensive description of what this article is about."

# [REQUIRED] Publication date (YYYY-MM-DD or full ISO 8601)
pubDate: "2024-12-31"

# [OPTIONAL] Date of last update. Only add if editing an older article
updatedDate: "2025-01-15"

# [OPTIONAL] Path to cover image. Images should be in /public/uploads/
heroImage: "/uploads/cover-image.jpg"

# [OPTIONAL] Array of relevant tags
tags: ["programming", "astro", "typescript"]

# [OPTIONAL] Language of the content. Must be exactly 'id' or 'en'. Defaults to 'id'.
lang: "id"

# [OPTIONAL] Set to true if the article is not ready for publication. Defaults to false.
draft: false

# [OPTIONAL] Slug of a related project in src/content/projects/ to link this article to.
project: "fmr.blog"
---
```

## 3. CONTENT GUIDELINES
1. **No H1 in Content:** Do NOT write an `# Article Title` (H1) at the top of the markdown body. The Astro layout already renders the `title` from the frontmatter as an H1. Start your content directly or use `##` (H2) for your first sub-heading.
2. **Formatting:** Use GitHub Flavored Markdown (GFM). Use bolding, italics, lists, and tables where appropriate to improve readability.
3. **Code Blocks:** Provide language tags for all code blocks (e.g., ```typescript) to ensure proper Shiki syntax highlighting.
4. **Tone:** Professional, analytical, yet accessible. Treat the reader as a peer engineer.
</system_instructions>
