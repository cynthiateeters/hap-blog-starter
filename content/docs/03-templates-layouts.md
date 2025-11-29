---
title: "Templates and layouts"
description: "Understanding Nunjucks templating and layout inheritance in this Eleventy site."
order: 3
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/layouts/" target="_blank" rel="noopener">Layouts</a> — Template inheritance and chaining</li>
      <li><a href="https://www.11ty.dev/docs/languages/nunjucks/" target="_blank" rel="noopener">Nunjucks</a> — Template language syntax</li>
    </ul>
  </div>
</div>

## What is Nunjucks?

Nunjucks is a templating language for JavaScript. Eleventy supports multiple template languages, but this site uses Nunjucks (`.njk` files) for layouts and some content pages.

Nunjucks lets you:
- Insert dynamic data into HTML
- Use conditionals and loops
- Create reusable layouts and partials
- Include other template files

## Template inheritance

Template inheritance lets you define a base layout and extend it. Child templates can override or add to the parent.

**How it works in this site:**

```
base.njk (HTML shell)
├── home.njk (extends base, adds welcome message)
├── post.njk (extends base, adds post metadata)
└── docs.njk (extends base, adds docs navigation)
```

## The base layout: `base.njk`

Located at `_includes/layouts/base.njk`, this is the HTML shell for every page.

**Key sections:**

{% raw %}
```html
<!doctype html>
<html lang="{{ metadata.language }}">
<head>
    <!-- Meta tags, title, CSS -->
    <title>{{ title or metadata.title }}</title>
</head>
<body>
    <header><!-- Site header, navigation --></header>

    <main id="main">
        {{ content | safe }}
    </main>

    <footer><!-- Site footer --></footer>
</body>
</html>
```
{% endraw %}

**The critical line:**

{% raw %}
```nunjucks
{{ content | safe }}
```
{% endraw %}

This is where child template content gets inserted. The `safe` filter tells Nunjucks not to escape HTML.

## Extending base: `home.njk`

The home layout extends base and adds a welcome message:

{% raw %}
```nunjucks
---
layout: layouts/base.njk
---
{# HAP's welcome message #}
<div class="hap-welcome">
    <p class="welcome-text">
        Hi! I'm HAP (HyBit A. ProtoBot™)...
    </p>
</div>

{{ content | safe }}
```
{% endraw %}

**How it works:**

1. Front matter declares `layout: layouts/base.njk`
2. Everything below front matter becomes `content` in base.njk
3. The `{% raw %}{{ content | safe }}{% endraw %}` in home.njk receives content from pages using this layout

## Extending base: `post.njk`

The post layout adds metadata, tags, and navigation:

{% raw %}
```nunjucks
---
layout: layouts/base.njk
---
<style>{% include "css/prism-hap-theme.css" %}</style>

<article class="post-layout">
    <header class="post-header">
        <h1>{{ title }}</h1>
        <time datetime="{{ page.date | htmlDateString }}">
            {{ page.date | readableDate }}
        </time>
        <ul class="post-metadata">
            {%- for tag in tags | filterTagList %}
            <li><a href="/tags/{{ tag | slugify }}/">{{ tag }}</a></li>
            {%- endfor %}
        </ul>
    </header>

    <section class="post-content">
        {{ content | safe }}
    </section>
</article>
```
{% endraw %}

**Features:**

- Includes Prism syntax highlighting CSS
- Displays post title, date, and tags
- Wraps content in semantic `<article>` element
- Adds previous/next post navigation

## Partials

Partials are reusable template snippets. Include them with `{% raw %}{% include %}{% endraw %}`.

**Example: `postslist.njk`**

{% raw %}
```nunjucks
<ol reversed class="postlist">
{%- for post in postslist | reverse %}
    <li class="postlist-item">
        <a href="{{ post.url }}">{{ post.data.title }}</a>
        <time datetime="{{ post.date | htmlDateString }}">
            {{ post.date | readableDate("LLLL yyyy") }}
        </time>
    </li>
{%- endfor %}
</ol>
```
{% endraw %}

**Using partials:**

{% raw %}
```nunjucks
{% set postslist = collections.posts %}
{% include "postslist.njk" %}
```
{% endraw %}

The partial uses variables (`postslist`) set before the include.

## Nunjucks syntax reference

### Variables

Output data with double curly braces:

{% raw %}
```nunjucks
{{ title }}
{{ metadata.author.name }}
{{ page.url }}
```
{% endraw %}

### Filters

Transform data with the pipe character:

{% raw %}
```nunjucks
{{ title | upper }}
{{ page.date | readableDate }}
{{ content | safe }}
```
{% endraw %}

### Conditionals

{% raw %}
```nunjucks
{% if title %}
    <h1>{{ title }}</h1>
{% else %}
    <h1>{{ metadata.title }}</h1>
{% endif %}
```
{% endraw %}

### Loops

{% raw %}
```nunjucks
{% for post in collections.posts %}
    <li>{{ post.data.title }}</li>
{% endfor %}
```
{% endraw %}

With loop index:

{% raw %}
```nunjucks
{% for tag in tags %}
    {{ loop.index }}: {{ tag }}
{% endfor %}
```
{% endraw %}

### Comments

{% raw %}
```nunjucks
{# This is a comment - not rendered in output #}

{#- This removes whitespace before the comment -#}
```
{% endraw %}

### Include

Insert another template file:

{% raw %}
```nunjucks
{% include "postslist.njk" %}
{% include "css/index.css" %}
```
{% endraw %}

### Set

Create or modify variables:

{% raw %}
```nunjucks
{% set postslist = collections.posts %}
{% set pageTitle = title or "Default Title" %}
```
{% endraw %}

## Data available in templates

Eleventy provides these variables automatically:

| Variable | Description |
|----------|-------------|
| `content` | Rendered content from child template |
| `page.url` | URL of the current page |
| `page.date` | Date of the page |
| `page.inputPath` | Source file path |
| `collections` | All collections (posts, tags, etc.) |
| `eleventy.generator` | Eleventy version string |

Plus any data from:
- Global data files (`_data/`)
- Directory data files (`*.11tydata.js`)
- Front matter

## How a page renders

When Eleventy builds `/blog/my-post.md`:

1. **Read front matter** - Gets `layout: layouts/post.njk`
2. **Render Markdown** - Converts `.md` to HTML
3. **Apply post.njk** - Wraps content, adds metadata
4. **post.njk specifies base.njk** - Content flows up
5. **Apply base.njk** - Wraps in HTML shell
6. **Output** - Writes to `_site/blog/my-post/index.html`

## Learn more

- [Eleventy Layouts](https://www.11ty.dev/docs/layouts/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/templating.html)
- [Eleventy Data Cascade](https://www.11ty.dev/docs/data-cascade/)
