<div align="center">
  <img src="public/readme-logo.svg" height="60" alt="fmr.blog Logo" />
  <p>
    <b>High-performance, bilingual personal journal and project showcase built with Astro 5, Sveltia CMS, and Cloudflare Pages.</b>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Astro%205-BC52EE?style=flat-square&logo=astro&logoColor=white" alt="Astro 5" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Pages" />
    <img src="https://img.shields.io/badge/Sveltia%20CMS-FF3E00?style=flat-square&logo=svelte&logoColor=white" alt="Sveltia CMS" />
  </p>
</div>

---

## Overview

**fmr.blog** is a modern, statically-generated web application designed to serve as both a technical engineering journal and a portfolio showcase. The architecture prioritizes maximum page load velocity, zero unnecessary client-side JavaScript, and seamless content management using Git-backed workflows.

The visual identity features an agency-grade Forest Green (`#4A7856`) design token system, double-bezel card depth (`.outer-shell`), glassmorphism, responsive typography, and native dark mode synchronization across components, Shiki code blocks, and embedded interactive widgets.

---

## Key Features

- **Ultra-Fast Static Site Generation**: Built on Astro 5, delivering optimal Core Web Vitals with zero runtime JavaScript overhead on content pages.
- **Bilingual i18n Architecture**: Instant language toggling between Indonesian (`id`) and English (`en`) with responsive metadata pills and single-row alignment.
- **Serverless Git-Backed CMS**: Integrated [Sveltia CMS](https://github.com/sveltia/sveltia-cms) accessible via `/admin`. Authentication is completely serverless using Cloudflare Pages Functions (`/functions/oauth`), eliminating third-party auth service dependencies.
- **Collapsible References Accordion System**: Native support for cited works and references via a structured `references` frontmatter field in Sveltia CMS, automatically rendering an interactive glassmorphic accordion (`<details class="references-accordion">`).
- **High-End Dual-Theme Shiki Code Blocks**: Mac-terminal window frame styling with traffic light dots, custom scrollbars, and isolated token highlighting (`github-light` in Light Mode, `github-dark` in Dark Mode).
- **Responsive Glassmorphic Tables**: Tables automatically enforce 100% container width on desktop (`table-layout: fixed`) and support touch-friendly horizontal scrolling on mobile.
- **Interactive Theme Engine**: Smooth light/dark mode transitions (`ThemeToggle.astro`) that dynamically broadcast custom events to synchronize embedded Giscus discussion frames.
- **Strict Content Schema Validation**: All blog articles and project showcases are typed and validated using Astro Content Collections (`Zod`).

---

## Project Structure

```text
├── GUIDE-BLOG-AI.md         # System instructions & schema guidelines for AI agents writing blog posts
├── GUIDE-PROJECT-AI.md      # System instructions & schema guidelines for AI agents writing projects
├── functions/
│   └── oauth/               # Cloudflare Pages Functions for serverless GitHub OAuth proxy
│       ├── auth.js          # Redirects users to GitHub OAuth authorization screen
│       └── callback.js      # Exchanges code for access token & communicates with Sveltia CMS
├── public/
│   ├── admin/               # Sveltia CMS entry point and schema configuration
│   │   ├── config.yml       # Content collection schema mappings for Sveltia CMS
│   │   └── index.html       # Sveltia CMS web application loader with brand styling
│   ├── favicon.svg          # Vector logo and favicon
│   └── uploads/             # Media storage folder managed by Sveltia CMS
└── src/
    ├── components/          # Reusable UI components (ArticleCard, ProjectCard, Giscus, ThemeToggle, etc.)
    ├── content/
    │   ├── blog/            # Markdown articles for the engineering journal
    │   ├── projects/        # Markdown entries for the project showcase
    │   └── config.ts        # Zod validation schemas for content collections
    ├── layouts/             # Master HTML shells (Base.astro)
    ├── pages/               # Application routing (`index.astro`, `/blog`, `/projects`, `/about`)
    └── styles/              # Global CSS design system tokens, variables, and utility classes
```

---

## Getting Started

### Prerequisites

Ensure your local development environment meets the following requirements:
- **Node.js**: `v18.14.1` or higher (`v20+` recommended)
- **Package Manager**: `npm` (`v10+`)

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone https://github.com/fatahilah-mr/blog.git
   cd blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:4321`.

### Build & Verification

To run TypeScript/Zod diagnostic checks and generate production static files locally:

```bash
npm run build
```

This compiles the output into the `dist/` directory. Preview the compiled build using `npm run preview`.

---

## Environment Configuration

When deploying to **Cloudflare Pages**, configure the following environment variables under **Settings > Environment variables** to enable the Sveltia CMS GitHub OAuth flow:

| Variable Name | Type | Description |
| :--- | :--- | :--- |
| `GITHUB_CLIENT_ID` | Plain Text | Client ID from your GitHub OAuth application. |
| `GITHUB_CLIENT_SECRET` | Secret | Client Secret from your GitHub OAuth application. |

> [!IMPORTANT]
> Under **GitHub Developer Settings > OAuth Applications**, set the **Authorization callback URL** to match your exact live domain path: `https://YOUR_DOMAIN/oauth/callback`. Omitting `/oauth/callback` will cause redirect URI mismatch errors during CMS login.

> [!NOTE]
> Signing in to `/admin` via GitHub OAuth relies on Cloudflare Pages Functions (`/functions/oauth/`). It functions on the live environment (`https://blog.fatahmr.my.id/admin`) or when running Wrangler functions emulation locally.

---

## Content Management Workflow

Publish and manage content through three supported workflows:

1. **Via Sveltia CMS (Recommended for Editorial Work)**:
   Navigate to `/admin` on the production site, sign in with your GitHub account, and use the visual markdown editor. Saving changes automatically commits to the `main` branch and triggers a Cloudflare Pages deployment.

2. **Via Direct Git Workflow**:
   Create or edit `.id.md` or `.en.md` files directly within `src/content/blog/` or `src/content/projects/`. Ensure frontmatter attributes strictly match the schema defined in `src/content/config.ts`. Once committed and pushed to GitHub, Cloudflare Pages automatically rebuilds the site.

3. **Via AI Assistants**:
   When using AI coding assistants, prompt them to inspect `GUIDE-BLOG-AI.md` or `GUIDE-PROJECT-AI.md`. These files contain the exact frontmatter schemas, copywriting rules, and layout guidelines required to generate perfectly formatted articles and project showcases.
