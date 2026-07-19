<system_instructions>
# AI GUIDELINE: WRITING PROJECTS
This document contains the exact rules and schemas an AI must follow when creating or editing project showcase entries in this repository.

## 1. FILE LOCATION & NAMING CONVENTION
- **Directory:** `src/content/projects/`
- **Filename:** `your-project-slug.md` (Use lowercase, kebab-case).

## 2. FRONTMATTER SCHEMA (YAML)
Every project MUST begin with a YAML frontmatter block enclosed by `---`. 
Below is the strict Zod schema validation rules:

```yaml
---
# [REQUIRED] Title of the project
title: "fmr.blog"

# [REQUIRED] Short description of the project
description: "High-performance, bilingual personal journal and project showcase."

# [REQUIRED] Current status. Must be exactly 'active', 'completed', or 'archived'.
status: "active"

# [REQUIRED] Array of technologies used
techStack: ["Astro", "TypeScript", "Sveltia CMS", "Cloudflare Pages"]

# [REQUIRED] Date the project started (YYYY-MM-DD)
startDate: "2024-01-01"

# [OPTIONAL] URL to the source code repository. Must be a valid URL or an empty string "".
repoUrl: "https://github.com/fatahilah-mr/blog"

# [OPTIONAL] URL to the live demo. Must be a valid URL or an empty string "".
demoUrl: "https://blog.fatahmr.my.id"

# [OPTIONAL] Path to the project cover image. Must be in /public/uploads/
heroImage: "/uploads/project-cover.jpg"

# [OPTIONAL] Set to true to feature this project on the homepage. Defaults to false.
featured: true
---
```

## 3. CONTENT GUIDELINES
1. **No H1 in Content:** Do NOT write an `# Project Title` (H1) at the top of the markdown body. The Astro layout already renders the `title` from the frontmatter.
2. **Structure:** A good project showcase should typically include the following sections (using `##` H2):
   - **Background / Problem Statement:** Why was this built?
   - **Architecture / Tech Stack:** How does it work under the hood?
   - **Key Features:** What are the standout capabilities?
   - **Outcomes / Lessons Learned:** What was achieved or learned?
3. **Images:** If using inline images, reference them from `/uploads/...` assuming they will be served from the public directory.
4. **Formatting:** Use GitHub Flavored Markdown (GFM) and code blocks where applicable.
</system_instructions>
