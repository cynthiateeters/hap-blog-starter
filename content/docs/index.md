---
title: "Eleventy documentation"
description: "Learn how this Eleventy site works - from directory structure to custom shortcodes."
eleventyNavigation:
  key: Docs
  order: 3
order: 0
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <p class="docs-callout__content">
    This site uses <strong>Eleventy v3.1.2</strong>. For comprehensive documentation, visit <a href="https://www.11ty.dev/docs/" target="_blank" rel="noopener">11ty.dev/docs</a>.
  </p>
</div>

# How this site works

This documentation explains how this Eleventy (11ty) static site is built. Each section covers a specific concept, using actual code from this site as examples.

## Prerequisites

This documentation assumes:

- Basic HTML and CSS knowledge
- Familiarity with the command line
- Node.js and npm installed
- Some experience with templating concepts

## Documentation sections

1. **[Getting started](/docs/01-getting-started/)** - Clone, install, and run the site
2. **[Directory structure](/docs/02-directory-structure/)** - How files are organized
3. **[Templates and layouts](/docs/03-templates-layouts/)** - Nunjucks templating and inheritance
4. **[Data cascade](/docs/04-data-cascade/)** - How data flows through the site
5. **[Collections and tags](/docs/05-collections-tags/)** - Organizing and querying content
6. **[Shortcodes and filters](/docs/06-shortcodes-filters/)** - Custom functionality
7. **[Customization](/docs/07-customization/)** - Extending the site
8. **[HAP Pose Guide](/docs/08-hap-pose-guide/)** - Using Cloudinary images

## About Eleventy

Eleventy is a simpler static site generator. It transforms templates and content into static HTML files. Key features:

- **Zero-config by default** - Works out of the box
- **Template language agnostic** - Supports Nunjucks, Liquid, Markdown, and more
- **Fast builds** - No bundler overhead
- **Flexible data model** - The data cascade is powerful

## Official resources

- [Eleventy documentation](https://www.11ty.dev/docs/)
- [Eleventy GitHub repository](https://github.com/11ty/eleventy)
- [Nunjucks documentation](https://mozilla.github.io/nunjucks/)
