---
title: "Customization"
description: "Step-by-step guides for extending and customizing this Eleventy site."
order: 7
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/config/" target="_blank" rel="noopener">Configuration</a> — All configuration options</li>
      <li><a href="https://www.11ty.dev/docs/plugins/" target="_blank" rel="noopener">Plugins</a> — Extend Eleventy's functionality</li>
    </ul>
  </div>
</div>

## Adding a new page

### Simple page

Create a Markdown file in `content/`:

```markdown
<!-- content/contact.md -->
---
title: "Contact"
description: "Get in touch"
eleventyNavigation:
  key: Contact
  order: 4
---

## Contact us

Email: example@example.com
```

The page will:
- Use `layouts/home.njk` (from `content.11tydata.js`)
- Appear at `/contact/`
- Show in navigation (via `eleventyNavigation`)

### Page with custom layout

```markdown
---
title: "Special Page"
layout: layouts/base.njk
---
```

Override the default layout in front matter.

## Adding a new blog post

Create a Markdown file in `content/blog/`:

```markdown
<!-- content/blog/my-new-post.md -->
---
title: "My New Blog Post"
description: "A brief summary of the post"
date: 2025-11-29
tags:
  - topic1
  - topic2
---

Post content here...
```

The post automatically:
- Uses `layouts/post.njk`
- Joins `collections.posts`
- Gets a URL like `/blog/my-new-post/`

### Required front matter

| Field | Purpose |
|-------|---------|
| `title` | Post title |
| `description` | Summary for lists and SEO |
| `date` | Publication date (YYYY-MM-DD) |

### Optional front matter

| Field | Purpose |
|-------|---------|
| `tags` | Additional tags (array) |
| `draft` | Set `true` to hide in production |

## Creating a new layout

### 1. Create the layout file

```html
<!-- _includes/layouts/gallery.njk -->
---
layout: layouts/base.njk
---
<div class="gallery-layout">
  <h1>{{ title }}</h1>

  <div class="gallery-grid">
    {{ content | safe }}
  </div>
</div>
```

### 2. Use the layout

```markdown
---
title: "Photo Gallery"
layout: layouts/gallery.njk
---

Gallery content here...
```

### 3. Add styles (optional)

Add CSS to `css/index.css`:

```css
.gallery-layout {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

## Adding a new shortcode

### 1. Define in `eleventy.config.js`

```javascript
// Simple shortcode
eleventyConfig.addShortcode("button", (text, url) => {
  return `<a href="${url}" class="button">${text}</a>`;
});

// Shortcode with default argument
eleventyConfig.addShortcode("icon", (name, size = 24) => {
  return `<svg class="icon" width="${size}" height="${size}">
    <use href="/icons.svg#${name}"></use>
  </svg>`;
});
```

### 2. Use in templates

{% raw %}
```nunjucks
{% button "Learn More", "/about/" %}
{% icon "arrow-right" %}
{% icon "star", 32 %}
```
{% endraw %}

### Paired shortcodes

For content that wraps other content:

```javascript
eleventyConfig.addPairedShortcode("callout", (content, type = "info") => {
  return `<div class="callout callout-${type}">${content}</div>`;
});
```

{% raw %}
```nunjucks
{% callout "warning" %}
This is important information!
{% endcallout %}
```
{% endraw %}

## Adding a new filter

### 1. Add to `_config/filters.js`

```javascript
// Simple filter
eleventyConfig.addFilter("reverse", (str) => {
  return str.split("").reverse().join("");
});

// Filter with argument
eleventyConfig.addFilter("limit", (array, count) => {
  return array.slice(0, count);
});

// Filter for objects
eleventyConfig.addFilter("values", (obj) => {
  return Object.values(obj);
});
```

### 2. Use in templates

{% raw %}
```nunjucks
{{ "hello" | reverse }}
{# Output: olleh #}

{% for post in collections.posts | limit(5) %}
```
{% endraw %}

## Adding a new collection

### Via tags (simplest)

Add a tag to content:

```markdown
---
tags:
  - tutorials
---
```

Access as `collections.tutorials`.

### Via directory data

Create `content/tutorials/tutorials.11tydata.js`:

```javascript
export default {
  tags: ["tutorials"],
  layout: "layouts/tutorial.njk"
};
```

All files in `content/tutorials/` join the collection.

### Via config (advanced)

In `eleventy.config.js`:

```javascript
eleventyConfig.addCollection("recentPosts", (collectionApi) => {
  return collectionApi.getFilteredByTag("posts")
    .reverse()
    .slice(0, 5);
});
```

Access as `collections.recentPosts`.

## Modifying navigation

### Add page to navigation

```markdown
---
title: "New Page"
eleventyNavigation:
  key: NewPage
  order: 5
---
```

### Change navigation order

Lower `order` values appear first:

```markdown
eleventyNavigation:
  key: About
  order: 2
```

### Nested navigation

```markdown
eleventyNavigation:
  key: Subpage
  parent: ParentPage
  order: 1
```

### Remove from navigation

Simply omit `eleventyNavigation` from front matter.

## Adding CSS

### Option 1: Edit existing files

Add styles to `css/index.css`.

### Option 2: Create new CSS file

1. Create `css/my-styles.css`
2. Include in `base.njk`:

{% raw %}
```nunjucks
<style>{% include "css/my-styles.css" %}</style>
```
{% endraw %}

### Option 3: Page-specific CSS

Use the bundle system in any template:

{% raw %}
```nunjucks
{% css %}
.special-class {
  color: red;
}
{% endcss %}
```
{% endraw %}

## Adding static files

Place files in `public/` to copy them directly to the output:

```
public/
├── images/
│   └── logo.png      → _site/images/logo.png
├── downloads/
│   └── file.pdf      → _site/downloads/file.pdf
└── robots.txt        → _site/robots.txt
```

No processing—files copy as-is.

## Adding data files

### Global data

Create `_data/mydata.js`:

```javascript
export default {
  siteName: "My Site",
  socialLinks: [
    { name: "Twitter", url: "https://twitter.com/..." },
    { name: "GitHub", url: "https://github.com/..." }
  ]
};
```

Access as `mydata.siteName` or `mydata.socialLinks`.

### JSON data

Create `_data/config.json`:

```json
{
  "itemsPerPage": 10,
  "showDrafts": false
}
```

Access as `config.itemsPerPage`.

### Fetched data

```javascript
// _data/posts.js
export default async function() {
  const response = await fetch("https://api.example.com/posts");
  return response.json();
};
```

Data fetched at build time and cached.

## Common patterns

### Draft posts

```markdown
---
title: "Work in Progress"
draft: true
---
```

Drafts show in development but not in production builds.

### Scheduled posts

Use future dates—they'll only appear after that date:

```markdown
---
date: 2025-12-25
---
```

### Exclude from collections

```markdown
---
eleventyExcludeFromCollections: true
---
```

Page builds but doesn't appear in any collection.

### Custom permalinks

```markdown
---
permalink: /custom-url/
---
```

Or with data:

{% raw %}
```markdown
---
permalink: /blog/{{ title | slugify }}/
---
```
{% endraw %}

## Learn more

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Nunjucks Templating](https://mozilla.github.io/nunjucks/)
- [Eleventy Starter Projects](https://www.11ty.dev/docs/starter/)
