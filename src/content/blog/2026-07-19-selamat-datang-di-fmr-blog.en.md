---
title: Welcome to fmr.blog
description: My first blog post on the new website.
pubDate: 2026-07-19
heroImage: /uploads/Logo Web Blog.png
tags:
  - welcome
  - tech
lang: en
draft: false
project: "fmr-blog"
---

Hello world! Welcome to **fmr.blog**, my new digital home where I share lab notes, code snippets and IT infrastructure documentation. 

This article marks the first milestone for this blog. I’ve deliberately written it not just as a ‘Hello World’ formality, but also as a reminder of why this platform was built.

### Why Build a Blog (Again)?

In an era where information flits by so quickly on social media in the form of short videos, having a well-indexed text-based _blog_ might sound old-fashioned. However, for an IT practitioner—be it a _System Administrator_, a _Network Engineer_, or an LLM enthusiast—written documentation is everything. 

This blog serves as:

1. **Knowledge Base:** A place where I document server experiments, network case studies, or installations of new open-source tools.
2. **Discussion Forum:** There is direct integration with GitHub Discussions (via Giscus) below each article, making it easy for fellow engineers to exchange ideas.
3. **Portfolio Archive:** As concrete proof of work for the projects I’ve worked on.

### A Peek Behind the Scenes (Tech Stack)

For those of you who are curious, this blog is designed with the philosophy of “as little JavaScript as possible, as fast a response as possible” using the following modern tech stack:

*   **Astro 5 & Node.js:** Main Static Site Generator (SSG) powered by Node.js build-time compilation for a Zero-JS by default experience.
*   **TypeScript & Zod:** Strict type-safety and automated content collection schema validation at build time.
*   **Sveltia CMS & Cloudflare Functions:** Git-backed CMS at `/admin` with serverless GitHub OAuth proxy running on Cloudflare Pages edge network.
*   **Vanilla CSS & Google Fonts:** Lightweight design system with Forest Green design tokens, glassmorphism, and Inter/Outfit web fonts without heavy CSS frameworks.
*   **Shiki & Giscus:** Automatic code block syntax highlighting (`github-dark`) and GitHub Discussions-based comment system dynamically synced with dark/light mode.
*   **Astro Sitemap & RSS Feed:** Automated XML Sitemap generation for Google Search Console and RSS feed output at `/rss.xml`.

### What’s Next?

Looking ahead, you can look forward to more technical posts here. From network _troubleshooting_ and exploring _Large Language Models_ to _reviews_ of _self-hosted_ tools.

Thank you for stopping by! Don’t forget to make use of the **RSS Feed** feature in the _footer_ so you don’t miss the latest _updates_, and let’s have a chat in the comments section. 

Cheers to _open-source_! ☕
