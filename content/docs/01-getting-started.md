---
title: "Getting started"
description: "Clone, install, and run this Eleventy site locally."
order: 1
---

## Prerequisites

Before you begin, ensure you have:

- **Node.js 18 or higher** - Check with `node --version`
- **npm** - Comes with Node.js, check with `npm --version`
- **Git** - For cloning the repository
- **A code editor** - VS Code recommended

## Clone the repository

```bash
git clone https://github.com/cynthiateeters/hap-blog-starter.git
cd hap-blog-starter
```

## Install dependencies

```bash
npm install
```

This installs all packages listed in `package.json`, including:

- `@11ty/eleventy` (v3.1.2) - The static site generator
- `@11ty/eleventy-navigation` - Navigation plugin
- `@11ty/eleventy-plugin-rss` - RSS feed generation
- `@11ty/eleventy-plugin-syntaxhighlight` - Code syntax highlighting
- `luxon` - Date formatting library

## Run the development server

```bash
npm start
```

This runs `npx @11ty/eleventy --serve --quiet` which:

1. Builds the site to the `_site/` directory
2. Starts a local server at `http://localhost:8080`
3. Watches for file changes and rebuilds automatically
4. Refreshes your browser when files change

## Build for production

```bash
npm run build
```

This generates the static site in `_site/` without starting a server. Use this before deploying.

## Available npm scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `npm start` | `eleventy --serve --quiet` | Development with live reload |
| `npm run build` | `eleventy` | Production build |
| `npm run debug` | `DEBUG=Eleventy* eleventy` | Build with debug output |
| `npm run debugstart` | `DEBUG=Eleventy* eleventy --serve` | Dev server with debug output |

## Project structure overview

After cloning, you'll see:

```
hap-blog-starter/
├── _config/          # Modular configuration
├── _data/            # Global data files
├── _includes/        # Layouts and partials
├── content/          # All site content
├── css/              # Stylesheets
├── public/           # Static assets (copied as-is)
├── eleventy.config.js # Main configuration
└── package.json      # Dependencies and scripts
```

See [Directory structure](/docs/02-directory-structure/) for detailed explanations.

## Verify it works

After running `npm start`, you should see:

```
[11ty] Wrote XX files in X.XX seconds
[11ty] Watching…
[11ty] Server at http://localhost:8080/
```

Open `http://localhost:8080` in your browser. You should see the HAP blog homepage.

## Common issues

**Port already in use**

If port 8080 is taken, Eleventy will automatically try the next available port.

**Node version too old**

This site requires Node.js 18+. Update Node if you see compatibility errors.

**Missing dependencies**

If you see module not found errors, run `npm install` again.

## Learn more

- [Official Eleventy Getting Started](https://www.11ty.dev/docs/getting-started/)
- [Eleventy Command Line Usage](https://www.11ty.dev/docs/usage/)
