---
title: fmr.blog
description: My personal blog and project showcase built with Astro and Sveltia CMS.
status: active
techStack:
  - Astro 5
  - TypeScript
  - Node.js
  - Sveltia CMS
  - Cloudflare Pages Functions
  - Cloudflare Pages
  - Vanilla CSS
  - Zod
  - Giscus
  - Shiki
  - Astro Sitemap
  - Astro RSS
  - NPM
  - Git
  - GitHub CLI
  - Termux
repoUrl: https://github.com/fatahilah-mr/blog
demoUrl: https://blog.fatahmr.my.id
heroImage: /uploads/Logo Web Blog.png
featured: true
startDate: 2026-07-19
---

The development of **fmr.blog** stemmed from the need for a personal digital space that would serve not only as a portfolio, but also as a hub for knowledge sharing, infrastructure experimentation and IT documentation. The site was designed from the outset to be an extremely lightweight, super-fast and easy-to-manage platform without relying on a traditional _database_.

### 🏗️ Architecture & Key Technologies

Rather than using a _monolithic_ platform such as WordPress, this blog is built using a modern architectural approach (Jamstack):

*   **Astro 5 (Static Site Generator):** Chosen for its ability to generate pure static HTML without loading any built-in _JavaScript_ (_Zero-JS by default_). This ensures near-instant page load times and is highly search engine optimised (SEO-friendly).
*   **Node.js & NPM:** Used as the local development runtime environment, a dependency package manager, and for the build process of static pages.
*   **TypeScript:** Provides strict typing (_type-safety_) for configurations, content schemas, and UI component properties.
*   **Sveltia CMS:** A modern alternative to Decap/Netlify CMS. Sveltia enables content management (_Markdown_) via a visual interface directly connected to a GitHub repository (Git-based CMS).
*   **Cloudflare Pages & Functions:** The entire site is _deployed_ on Cloudflare’s _edge network_. Serverless functions (`functions/oauth`) handle GitHub OAuth authentication for the CMS without requiring an external backend server.
*   **Vanilla CSS, Design Tokens & Google Fonts:** Features pure CSS styling using the _Forest Green_ colour variable (`#4A7856`), transparent effects (_glassmorphism_), the Inter and Outfit web fonts, and a light/dark mode toggle (_Dark/Light Mode_).
*   **Zod Content Collections:** Ensures the integrity of article and project data through strict schema validation during the _build_ process.
*   **Shiki & Giscus:** Code syntax highlighting using Shiki `github-dark`, as well as an interactive commenting system based on GitHub Discussions via Giscus.
*   **Astro Sitemap & RSS Integration:** Automated generation of an XML Sitemap (`sitemap-index.xml`) for Google Search Console and an RSS Feed (`/rss.xml`) for news aggregators.

### ✨ Key Features

Some of the technical features implemented in this project include:

*   **Glassmorphism Design & Dark Theme:** The user interface (_User Interface_) is built using pure CSS with modern transparency effects (_glassmorphism_). The site also fully supports switching between light and dark modes (_Dark/Light Mode_).
*   **GitHub-Based Comment System (Giscus):** Utilises the GitHub Discussions feature as the comment engine. This choice was made because the blog’s readership consists largely of IT professionals, _developers_ and infrastructure engineers who are already familiar with the GitHub ecosystem.
*   **Integrated RSS Feed:** Allows loyal readers and third-party _aggregator_ applications to subscribe to articles without having to visit the site manually.
*   **SEO & Performance:** Achieves a maximum _Lighthouse_ score thanks to the absence of bloat, dynamic metadata, and an automatic _sitemap_ for Google Search Console.

### 🚀 Aims and Aspirations

As well as serving as a personal lab notebook, fmr.blog is aimed at anyone interested in exploring the world of IT. Through this blog, everything from troubleshooting and server documentation to experiments with Large Language Models (LLMs) will be shared openly so that it may benefit as many people as possible.
