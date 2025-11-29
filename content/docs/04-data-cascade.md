---
title: "Data cascade"
description: "Understanding how data flows through Eleventy from global files to front matter."
order: 4
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/data-cascade/" target="_blank" rel="noopener">Data Cascade</a> — How data merges from multiple sources</li>
      <li><a href="https://www.11ty.dev/docs/data-global/" target="_blank" rel="noopener">Global Data Files</a> — The <code>_data</code> directory</li>
      <li><a href="https://www.11ty.dev/docs/data-frontmatter/" target="_blank" rel="noopener">Front Matter Data</a> — YAML in content files</li>
    </ul>
  </div>
</div>

## What is the data cascade?

The data cascade is Eleventy's system for merging data from multiple sources. Data flows from general (global) to specific (front matter), with more specific sources overriding more general ones.

This is one of Eleventy's most powerful features—it lets you set defaults at any level and override them where needed.

## Priority order

From lowest to highest priority (later sources override earlier):

1. **Global data** - `_data/*.js` files
2. **Directory data** - `dirname.11tydata.js` files
3. **Template data** - `filename.11tydata.js` files
4. **Front matter** - YAML at top of content files

**Example:** If `_data/metadata.js` sets `layout: "default"` but a blog post's front matter sets `layout: "post"`, the post uses `"post"`.

## Global data: `_data/`

Files in `_data/` are available to all templates. The filename becomes the variable name.

### `_data/metadata.js`

```javascript
export default {
  title: "HAP's Learning Lab Blog",
  url: "https://hap-blog.netlify.app/",
  language: "en",
  description: "Join me HAP (HyBit A. ProtoBot)...",
  author: {
    name: "HAP (HyBit A. ProtoBot)",
    email: "cynthiateeters@gmail.com",
    url: "https://hap-blog.netlify.app/about/"
  }
};
```

**Accessing in templates:**

{% raw %}
```nunjucks
<html lang="{{ metadata.language }}">
<title>{{ metadata.title }}</title>
<a href="{{ metadata.author.url }}">{{ metadata.author.name }}</a>
```
{% endraw %}

### `_data/cloudinary.js`

Custom data with helper functions:

```javascript
export default {
  cloudName: 'cynthia-teeters',
  baseUrl: 'https://res.cloudinary.com/cynthia-teeters/image/upload',
  poses: {
    'laptop': { filename: 'hap-laptop_xiewar', version: '1759495998' },
    // ...
  },
  getHapPoseUrl(poseName, width = 150) {
    const pose = this.poses[poseName];
    return `${this.baseUrl}/f_auto,q_auto,w_${width}/v${pose.version}/${pose.filename}.jpg`;
  }
};
```

This data file exports both data and a method, used by the `hapPose` shortcode.

## Directory data: `*.11tydata.js`

Files named `[dirname].11tydata.js` apply to all files in that directory.

### `content/content.11tydata.js`

Applies to ALL content:

```javascript
export default {
  layout: "layouts/home.njk"
};
```

Every file in `content/` gets `layout: "layouts/home.njk"` unless overridden.

### `content/blog/blog.11tydata.js`

Applies to all blog posts:

```javascript
export default {
  tags: ["posts"],
  layout: "layouts/post.njk"
};
```

**Effect:**
- Every `.md` file in `content/blog/` automatically:
  - Uses `layouts/post.njk` (overrides the content default)
  - Gets tagged `"posts"` (added to `collections.posts`)

### `content/docs/docs.11tydata.js`

Applies to all documentation:

```javascript
export default {
  layout: "layouts/docs.njk",
  tags: ["docs"],
  eleventyExcludeFromCollections: false
};
```

## Front matter

YAML at the top of content files. Highest priority—overrides everything.

### Blog post example

```markdown
---
title: "I Just Built a Learning Lab About SVG!"
description: "Join me as I share my journey..."
date: 2025-11-23
tags:
  - svg
  - learning-lab
  - web-graphics
---

Content here...
```

**What's inherited vs. specified:**

| Property | Source | Value |
|----------|--------|-------|
| `layout` | `blog.11tydata.js` | `layouts/post.njk` |
| `tags` | Front matter + `blog.11tydata.js` | `["posts", "svg", "learning-lab", "web-graphics"]` |
| `title` | Front matter | `"I Just Built..."` |
| `date` | Front matter | `2025-11-23` |

**Note:** Arrays like `tags` are merged, not replaced.

### Documentation page example

```markdown
---
title: "Getting started"
description: "Clone, install, and run this Eleventy site locally."
order: 1
---
```

The `order` property is custom—used for sorting docs pages.

## How data merges

### Simple values: Override

```javascript
// _data/defaults.js
export default { color: "blue" };

// Front matter
---
color: red
---

// Result: color = "red"
```

### Arrays: Merge

```javascript
// blog.11tydata.js
export default { tags: ["posts"] };

// Front matter
---
tags:
  - svg
  - graphics
---

// Result: tags = ["posts", "svg", "graphics"]
```

### Objects: Deep merge

```javascript
// _data/metadata.js
export default {
  author: { name: "HAP", url: "/about/" }
};

// Front matter
---
author:
  url: "/custom-about/"
---

// Result: author = { name: "HAP", url: "/custom-about/" }
```

## Accessing data in templates

All cascaded data is available in templates:

{% raw %}
```nunjucks
{# Global data #}
{{ metadata.title }}
{{ metadata.author.name }}

{# Page-specific data (front matter) #}
{{ title }}
{{ description }}
{{ date | readableDate }}

{# Eleventy-provided data #}
{{ page.url }}
{{ page.inputPath }}
{{ page.date }}

{# Collections #}
{% for post in collections.posts %}
  {{ post.data.title }}
{% endfor %}
```
{% endraw %}

## Data flow diagram

```
┌─────────────────────────────────────────────────────┐
│                    _data/                           │
│  metadata.js → available as `metadata`              │
│  cloudinary.js → available as `cloudinary`          │
└─────────────────────┬───────────────────────────────┘
                      │ lowest priority
                      ▼
┌─────────────────────────────────────────────────────┐
│              content/content.11tydata.js            │
│  layout: "layouts/home.njk"                         │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              content/blog/blog.11tydata.js          │
│  layout: "layouts/post.njk"  ← overrides home.njk   │
│  tags: ["posts"]                                    │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              Front matter (my-post.md)              │
│  title: "My Post"                                   │
│  tags: ["svg"]  ← merges with ["posts"]             │
└─────────────────────┴───────────────────────────────┘
                      │ highest priority
                      ▼
              Final merged data
```

## Common patterns

### Set defaults, override when needed

```javascript
// content.11tydata.js - default for all pages
export default { layout: "layouts/home.njk" };

// blog.11tydata.js - override for blog
export default { layout: "layouts/post.njk" };

// specific-post.md - override for one post
---
layout: layouts/special.njk
---
```

### Add to collections automatically

```javascript
// blog.11tydata.js
export default { tags: ["posts"] };
```

Every blog post is now in `collections.posts` without adding `tags` to each file.

### Exclude from collections

```markdown
---
eleventyExcludeFromCollections: true
---
```

Or in a directory data file for the whole directory.

## Learn more

- [Eleventy Data Cascade](https://www.11ty.dev/docs/data-cascade/)
- [Global Data Files](https://www.11ty.dev/docs/data-global/)
- [Directory Data Files](https://www.11ty.dev/docs/data-template-dir/)
- [Front Matter Data](https://www.11ty.dev/docs/data-frontmatter/)
