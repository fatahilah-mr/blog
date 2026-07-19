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

**fmr.blog** is a modern, statically-generated web application designed to serve as both a technical engineering journal and a portfolio showcase. The architecture prioritizes maximum page load velocity, zero unnecessary client-side JavaScript, and seamless content management using Git-based workflows.

The visual identity leverages a tailored Forest Green (`#4A7856`) design token, subtle glassmorphism, fluid responsive typography, and native dark mode syncing across components and embedded interactive widgets.

---

## Key Features

- **Ultra-Fast Static Site Generation**: Built on Astro 5, delivering optimal Core Web Vitals with minimal runtime overhead.
- **Dynamic Bilingual Support (`i18n`)**: Client-side language toggling between Indonesian (`id`) and English (`en`) via `FloatingLang.astro` without requiring duplicate page routing.
- **Serverless Git-Backed CMS**: Integrated [Sveltia CMS](https://github.com/sveltia/sveltia-cms) accessible via `/admin`. Authentication is handled completely serverless using Cloudflare Pages Functions (`/functions/oauth`), eliminating third-party authentication hosting fees.
- **Interactive Theme Engine**: Instant light/dark mode transitions with a spinning feedback state (`ThemeToggle.astro`) that dynamically broadcasts custom events to sync embedded Giscus comment frames.
- **Strict Content Schema Validation**: All blog articles and project showcases are typed and validated using Astro Content Collections (`Zod`) to guarantee data integrity during build time.

---

## Project Structure

```text
├── GUIDE-BLOG-AI.md         # System instructions for AI agents generating blog posts
├── GUIDE-PROJECT-AI.md      # System instructions for AI agents generating project showcases
├── functions/
│   └── oauth/               # Cloudflare Pages Functions for serverless GitHub OAuth proxy
│       ├── auth.js          # Redirects users to GitHub OAuth authorization screen
│       └── callback.js      # Exchanges code for access token & communicates with Sveltia CMS
├── public/
│   ├── admin/               # Sveltia CMS entry point and schema configuration
│   │   ├── config.yml       # Content collection schema mappings for the CMS
│   │   └── index.html       # Sveltia CMS web application loader with custom brand styling
│   ├── favicon.svg          # Project vector logo and favicon
│   └── uploads/             # Media storage folder managed by Sveltia CMS
└── src/
    ├── components/          # Reusable UI components (Header, Footer, Giscus, ThemeToggle, etc.)
    ├── content/
    │   ├── blog/            # Markdown articles for the engineering journal
    │   ├── projects/        # Markdown entries for the project showcase
    │   └── config.ts        # Zod validation schemas for content collections
    ├── layouts/             # Master HTML shells (Base.astro and Page.astro)
    ├── pages/               # Application routing (`index.astro`, `/blog`, `/projects`)
    └── styles/              # Global CSS tokens, variables, and utility classes
```

---

## Getting Started

### Prerequisites

Ensure your local development environment has:
- **Node.js**: Version `18.14.1` or higher (`v20+` recommended)
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

To verify content types and generate production-ready static files locally:

```bash
npm run build
```

This runs `astro check` for strict TypeScript/Zod diagnostic checks followed by compiling the site output into the `dist/` directory. You can preview the compiled build using `npm run preview`.

---

## Environment Configuration

When deploying to **Cloudflare Pages**, you must configure the following environment variables in the Cloudflare dashboard (`Settings > Environment variables`) to enable the Sveltia CMS GitHub OAuth authentication flow:

| Variable Name | Type | Description |
| :--- | :--- | :--- |
| `GITHUB_CLIENT_ID` | Plain Text | Client ID from your GitHub OAuth application. |
| `GITHUB_CLIENT_SECRET` | Secret | Client Secret from your GitHub OAuth application. |

> [!IMPORTANT]
> When configuring your OAuth application under **GitHub Developer Settings**, the **Authorization callback URL** must exactly match your live domain path: `https://YOUR_DOMAIN/oauth/callback`. Omitting the `/oauth/callback` segment will result in a redirect URI mismatch error during CMS login.

> [!NOTE]
> The `/admin` CMS login functionality requires the Cloudflare Pages Functions runtime (`/functions/oauth/`). Consequently, signing in via GitHub only works on the live deployed environment (`https://blog.fatahmr.my.id/admin`) or when running Wrangler locally with functions emulation.

---

## Content Management Workflow

You can publish and manage content through two primary workflows:

1. **Via Sveltia CMS (Recommended for Editorial Work)**:
   Navigate to `/admin` on the production site, sign in using your GitHub credentials, and use the visual markdown editor. Saving changes automatically commits to the `main` branch and triggers a Cloudflare Pages deployment.

2. **Via Direct Git Workflow**:
   Create or edit `.md` files directly within `src/content/blog/` or `src/content/projects/`. Ensure frontmatter attributes strictly match the schema defined in `src/content/config.ts`. Once committed and pushed to GitHub, Cloudflare Pages will automatically rebuild the site.

3. **Via AI Agents**:
   If you are using an AI coding assistant, simply prompt it to read `GUIDE-BLOG-AI.md` or `GUIDE-PROJECT-AI.md`. These files contain the exact frontmatter schemas and structural rules the AI needs to generate perfectly formatted content without errors.
