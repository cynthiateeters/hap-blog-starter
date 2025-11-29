---
title: "Directory structure"
description: "How files and folders are organized in this Eleventy site."
order: 2
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/config/" target="_blank" rel="noopener">Configuration Options</a> — Input/output directories</li>
      <li><a href="https://www.11ty.dev/docs/copy/" target="_blank" rel="noopener">Passthrough File Copy</a> — Static assets</li>
    </ul>
  </div>
</div>

## Overview

This site follows Eleventy conventions with some customization. The key insight: Eleventy is flexible about where you put things, but this site uses a clean separation between content, templates, data, and configuration.

## Root directory

```
hap-blog-starter/
├── _config/              # Modular configuration files
├── _data/                # Global data (available to all templates)
├── _includes/            # Layouts and partials
├── content/              # All site content (input directory)
├── css/                  # Stylesheets (included via bundles)
├── public/               # Static assets (copied to _site/)
├── _site/                # Build output (generated, git-ignored)
├── eleventy.config.js    # Main Eleventy configuration
├── package.json          # Node dependencies and scripts
└── README.md             # Project documentation
```

## Configuration: `eleventy.config.js`

The main configuration file. This site configures:

- **Input directory**: `content/` (not the default `.`)
- **Includes directory**: `../_includes` (relative to input)
- **Data directory**: `../_data` (relative to input)
- **Output directory**: `_site/`

```javascript
// From eleventy.config.js
export const config = {
  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
    output: "_site"
  }
};
```

## Configuration: `_config/`

Modular configuration split into separate files:

```
_config/
└── filters.js    # Custom template filters
```

This keeps `eleventy.config.js` cleaner by moving filters to a separate file that's imported as a plugin.

## Data: `_data/`

Global data files available to all templates via their filename:

```
_data/
├── metadata.js           # Site metadata (title, URL, author)
├── cloudinary.js         # HAP image URL helper
└── eleventyDataSchema.js # Data validation with Zod
```

**Example**: `metadata.js` exports an object, accessible in templates as `{{ metadata.title }}`.

```javascript
// _data/metadata.js
export default {
  title: "HAP's Learning Lab Blog",
  url: "https://hap-blog.netlify.app/",
  language: "en",
  // ...
};
```

## Templates: `_includes/`

Layouts and reusable partials:

```
_includes/
├── layouts/
│   ├── base.njk     # HTML shell (head, header, footer)
│   ├── home.njk     # Home page layout (extends base)
│   ├── post.njk     # Blog post layout (extends base)
│   └── docs.njk     # Documentation layout (extends base)
├── postslist.njk    # Reusable post list partial
└── css/             # CSS files (bundled into pages)
    ├── hap-colors.css
    ├── hap-fonts.css
    ├── index.css
    ├── prism-hap-theme.css
    └── prism-diff.css
```

**Layout inheritance**: `post.njk` extends `base.njk` by specifying `layout: layouts/base.njk` in its front matter.

## Content: `content/`

All site content lives here. This is the **input directory**.

```
content/
├── index.njk              # Home page
├── blog.njk               # Blog archive page
├── tags.njk               # All tags page
├── tag-pages.njk          # Individual tag pages (pagination)
├── about.md               # About page
├── 404.md                 # Error page
├── sitemap.xml.njk        # Generated sitemap
├── content.11tydata.js    # Default data for all content
├── blog/                  # Blog posts
│   ├── blog.11tydata.js   # Default data for posts
│   └── *.md               # Individual blog posts
└── docs/                  # Documentation (you're reading it)
    ├── docs.11tydata.js   # Default data for docs
    └── *.md               # Documentation pages
```

## Directory data files

Files named `*.11tydata.js` apply data to all files in that directory:

**`content/content.11tydata.js`** - All content defaults:
```javascript
export default {
  layout: "layouts/home.njk"
};
```

**`content/blog/blog.11tydata.js`** - Blog post defaults:
```javascript
export default {
  tags: ["posts"],
  layout: "layouts/post.njk"
};
```

This means blog posts automatically:
- Use the `post.njk` layout
- Get added to the `posts` collection

## Static assets: `public/`

Files copied directly to `_site/` without processing:

```
public/
└── fonts/
    ├── Nunito/           # Variable font files
    └── Source_Code_Pro/  # Monospace font files
```

Configured in `eleventy.config.js`:
```javascript
eleventyConfig.addPassthroughCopy({
  "./public/": "/"
});
```

## Build output: `_site/`

Generated by Eleventy. Contains the final static site:

```
_site/
├── index.html
├── about/index.html
├── blog/index.html
├── blog/post-name/index.html
├── docs/index.html
├── tags/index.html
├── fonts/
├── dist/              # Bundled CSS/JS
└── feed/feed.xml
```

This directory is git-ignored and regenerated on each build.

## How Eleventy finds files

1. **Templates**: Looks in `_includes/` (configured as `../includes` relative to `content/`)
2. **Data**: Looks in `_data/` (configured as `../_data` relative to `content/`)
3. **Content**: Processes everything in `content/` that matches template formats
4. **Static files**: Copies `public/` contents directly to output

## Learn more

- [Eleventy Configuration](https://www.11ty.dev/docs/config/)
- [Input Directory](https://www.11ty.dev/docs/config/#input-directory)
- [Data Cascade](https://www.11ty.dev/docs/data-cascade/)
