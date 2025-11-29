---
title: "Collections and tags"
description: "How content is organized into collections and how tag pages are generated."
order: 5
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/collections/" target="_blank" rel="noopener">Collections</a> — Grouping content together</li>
      <li><a href="https://www.11ty.dev/docs/pagination/" target="_blank" rel="noopener">Pagination</a> — Creating pages from data</li>
    </ul>
  </div>
</div>

## What are collections?

Collections are groups of content that Eleventy creates automatically. They let you query and iterate over related content—like "all blog posts" or "all pages tagged with svg".

## How collections are created

### From tags

The simplest way: add `tags` to front matter or directory data.

```javascript
// content/blog/blog.11tydata.js
export default {
  tags: ["posts"]
};
```

This creates `collections.posts` containing all files in `content/blog/`.

### Built-in collections

Eleventy provides these automatically:

| Collection | Contents |
|------------|----------|
| `collections.all` | Every piece of content |
| `collections.posts` | Items tagged "posts" |
| `collections.docs` | Items tagged "docs" |
| `collections.[tagname]` | Items with any tag |

## The posts collection

In this site, blog posts are collected via `content/blog/blog.11tydata.js`:

```javascript
export default {
  tags: ["posts"],
  layout: "layouts/post.njk"
};
```

Every `.md` file in `content/blog/` automatically joins `collections.posts`.

**Accessing posts in templates:**

{% raw %}
```nunjucks
{% for post in collections.posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <time>{{ post.date | readableDate }}</time>
  </article>
{% endfor %}
```
{% endraw %}

## Collection item properties

Each item in a collection has:

| Property | Description |
|----------|-------------|
| `url` | Output URL of the page |
| `inputPath` | Source file path |
| `outputPath` | Output file path |
| `date` | Page date |
| `data` | All front matter and cascaded data |
| `content` | Rendered content (if available) |

**Example:**

{% raw %}
```nunjucks
{% for post in collections.posts %}
  {{ post.url }}           {# /blog/my-post/ #}
  {{ post.data.title }}    {# "My Post Title" #}
  {{ post.data.tags }}     {# ["posts", "svg"] #}
  {{ post.date }}          {# Date object #}
{% endfor %}
```
{% endraw %}

## Multiple tags

Content can have multiple tags and appear in multiple collections:

```markdown
---
title: "SVG Animation Tutorial"
tags:
  - svg
  - animation
  - tutorial
---
```

This post appears in:
- `collections.posts` (from `blog.11tydata.js`)
- `collections.svg`
- `collections.animation`
- `collections.tutorial`

## Tag pages

This site generates a page for each tag automatically using pagination.

### `content/tag-pages.njk`

{% raw %}
```javascript
---js
const pagination = {
  data: "collections",
  size: 1,
  alias: "tag",
  filter: ["all", "posts"]
};

const eleventyComputed = {
  title: "Tagged '{{ tag }}'",
  permalink: function(data) {
    return `/tags/${this.slugify(data.tag)}/`;
  }
};
---
<h1>Tagged "{{ tag }}"</h1>

{% set postslist = collections[ tag ] %}
{% include "postslist.njk" %}
```
{% endraw %}

**How it works:**

1. `pagination.data: "collections"` - Paginate over all collections
2. `pagination.size: 1` - One page per collection
3. `pagination.alias: "tag"` - Call each collection "tag"
4. `pagination.filter` - Skip "all" and "posts" collections
5. `eleventyComputed.permalink` - Generate URL like `/tags/svg/`

**Result:** Automatic pages at `/tags/svg/`, `/tags/animation/`, etc.

### `content/tags.njk`

Lists all tags:

{% raw %}
```nunjucks
<h1>Tags</h1>

<ul>
{% for tag in collections | getKeys | filterTagList | sortAlphabetically %}
  {% set tagUrl %}/tags/{{ tag | slugify }}/{% endset %}
  <li><a href="{{ tagUrl }}">{{ tag }}</a></li>
{% endfor %}
</ul>
```
{% endraw %}

**Filter chain:**
1. `getKeys` - Get collection names
2. `filterTagList` - Remove internal tags
3. `sortAlphabetically` - Sort A-Z

## Navigation plugin

The `@11ty/eleventy-navigation` plugin creates menus from front matter.

### Adding to navigation

```markdown
---
title: "About"
eleventyNavigation:
  key: About
  order: 2
---
```

### Rendering navigation

In `base.njk`:

{% raw %}
```nunjucks
<nav>
  <ul>
    {% for entry in collections.all | eleventyNavigation %}
      <li>
        <a href="{{ entry.url }}"
           {% if entry.url == page.url %}aria-current="page"{% endif %}>
          {{ entry.title }}
        </a>
      </li>
    {% endfor %}
  </ul>
</nav>
```
{% endraw %}

**How it works:**
1. `eleventyNavigation` filter extracts navigation items
2. Items sorted by `order` property
3. `aria-current="page"` marks the active page

## Sorting collections

### By date (default)

Collections are sorted by date ascending by default.

### Reverse order (newest first)

{% raw %}
```nunjucks
{% for post in collections.posts | reverse %}
  {{ post.data.title }}
{% endfor %}
```
{% endraw %}

### Custom sorting

Use the `sort` filter with a property:

{% raw %}
```nunjucks
{% for doc in collections.docs | sort(attribute='data.order') %}
  {{ doc.data.title }}
{% endfor %}
```
{% endraw %}

## Filtering collections

### Limit results

{% raw %}
```nunjucks
{# First 3 posts #}
{% for post in collections.posts | reverse | head(3) %}
  {{ post.data.title }}
{% endfor %}
```
{% endraw %}

### Filter by property

{% raw %}
```nunjucks
{# Only featured posts #}
{% for post in collections.posts %}
  {% if post.data.featured %}
    {{ post.data.title }}
  {% endif %}
{% endfor %}
```
{% endraw %}

## Previous/next navigation

Get adjacent items in a collection:

{% raw %}
```nunjucks
{% set previousPost = collections.posts | getPreviousCollectionItem %}
{% set nextPost = collections.posts | getNextCollectionItem %}

{% if previousPost %}
  <a href="{{ previousPost.url }}">← {{ previousPost.data.title }}</a>
{% endif %}

{% if nextPost %}
  <a href="{{ nextPost.url }}">{{ nextPost.data.title }} →</a>
{% endif %}
```
{% endraw %}

Used in `post.njk` for blog post navigation.

## Collections in this site

| Collection | Source | Contents |
|------------|--------|----------|
| `collections.all` | Automatic | All content |
| `collections.posts` | `tags: ["posts"]` | Blog posts |
| `collections.docs` | `tags: ["docs"]` | Documentation |
| `collections.svg` | Post tags | SVG-tagged posts |
| `collections.animation` | Post tags | Animation posts |
| (etc.) | Post tags | Other tag collections |

## Learn more

- [Eleventy Collections](https://www.11ty.dev/docs/collections/)
- [Pagination](https://www.11ty.dev/docs/pagination/)
- [Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/)
