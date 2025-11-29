---
title: "Shortcodes and filters"
description: "Custom shortcodes and filters that extend Eleventy's templating capabilities."
order: 6
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/shortcodes/" target="_blank" rel="noopener">Shortcodes</a> — Reusable template functions</li>
      <li><a href="https://www.11ty.dev/docs/filters/" target="_blank" rel="noopener">Filters</a> — Transform data in templates</li>
    </ul>
  </div>
</div>

## What are shortcodes?

Shortcodes are reusable template functions. They take arguments and return content—usually HTML.

**Syntax:**

{% raw %}
```nunjucks
{% shortcodeName "arg1", "arg2" %}
```
{% endraw %}

## The `hapPose` shortcode

This site's custom shortcode for HAP character images from Cloudinary.

### Definition

In `eleventy.config.js`:

```javascript
import cloudinary from "./_data/cloudinary.js";

eleventyConfig.addShortcode("hapPose", (poseName, altText, width = 150) => {
  const url = cloudinary.getHapPoseUrl(poseName, width);
  return `<img src="${url}" alt="${altText}" width="${width}" height="${width}" loading="lazy" decoding="async">`;
});
```

### Usage

{% raw %}
```nunjucks
{% hapPose "laptop", "HAP working on his laptop", 200 %}
{% hapPose "confused", "HAP looking confused", 150 %}
{% hapPose "celebrating", "HAP celebrating success" %}
```
{% endraw %}

### Output

```html
<img src="https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_200/v1759495998/hap-laptop_xiewar.jpg"
     alt="HAP working on his laptop"
     width="200" height="200"
     loading="lazy" decoding="async">
```

### Available poses

Defined in `_data/cloudinary.js`:

| Pose name | Description |
|-----------|-------------|
| `laptop` | HAP at his laptop |
| `waving` | HAP waving hello |
| `confused` | HAP looking confused |
| `celebrating` | HAP celebrating |
| `broke-things` | HAP with tangled wires |
| `thumbs-up` | HAP giving approval |
| `lectures` | HAP teaching |
| `scientist` | HAP experimenting |

See the [HAP Pose Guide](/docs/08-hap-pose-guide/) for a complete tutorial and list of all available poses.

## The `currentBuildDate` shortcode

Returns the current build timestamp.

### Definition

```javascript
eleventyConfig.addShortcode("currentBuildDate", () => {
  return (new Date()).toISOString();
});
```

### Usage

{% raw %}
```nunjucks
<!-- Built on {% currentBuildDate %} -->
```
{% endraw %}

### Output

```html
<!-- Built on 2025-11-29T20:15:30.123Z -->
```

Used in `base.njk` footer for build tracking.

## What are filters?

Filters transform data in templates. They're called with the pipe character.

{% raw %}
```nunjucks
{{ value | filterName }}
{{ value | filterName("argument") }}
```
{% endraw %}

## Date filters

This site uses Luxon for date formatting. Filters defined in `_config/filters.js`.

### `readableDate`

Human-readable date format.

```javascript
eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
  return DateTime.fromJSDate(dateObj, { zone: zone || "utc" })
    .toFormat(format || "dd LLLL yyyy");
});
```

**Usage:**

{% raw %}
```nunjucks
{{ page.date | readableDate }}
{# Output: 29 November 2025 #}

{{ page.date | readableDate("LLLL yyyy") }}
{# Output: November 2025 #}
```
{% endraw %}

### `htmlDateString`

ISO format for HTML `datetime` attributes.

```javascript
eleventyConfig.addFilter("htmlDateString", (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
});
```

**Usage:**

{% raw %}
```nunjucks
<time datetime="{{ page.date | htmlDateString }}">
  {{ page.date | readableDate }}
</time>
{# Output: <time datetime="2025-11-29">29 November 2025</time> #}
```
{% endraw %}

### `dateInParts`

Returns date components for custom styling.

```javascript
eleventyConfig.addFilter("dateInParts", (dateObj, zone) => {
  const dt = DateTime.fromJSDate(dateObj, { zone: zone || "utc" });
  return {
    day: dt.toFormat('dd'),
    month: dt.toFormat('LLLL'),
    year: dt.toFormat('yyyy')
  };
});
```

**Usage in `post.njk`:**

{% raw %}
```nunjucks
{% set dateParts = page.date | dateInParts %}
<span class="date-day">{{ dateParts.day }}</span>
<span class="date-month">{{ dateParts.month }}</span>
<span class="date-year">{{ dateParts.year }}</span>
```
{% endraw %}

## Collection filters

### `head`

Get first or last N items from an array.

```javascript
eleventyConfig.addFilter("head", (array, n) => {
  if (n < 0) {
    return array.slice(n);  // Last n items
  }
  return array.slice(0, n);  // First n items
});
```

**Usage:**

{% raw %}
```nunjucks
{# First 3 posts #}
{% for post in collections.posts | head(3) %}

{# Last 5 posts #}
{% for post in collections.posts | head(-5) %}
```
{% endraw %}

### `min`

Return smallest number (used for pagination).

```javascript
eleventyConfig.addFilter("min", (...numbers) => {
  return Math.min.apply(null, numbers);
});
```

**Usage:**

{% raw %}
```nunjucks
{% set latestPostsCount = postsCount | min(numberOfLatestPostsToShow) %}
```
{% endraw %}

## Tag filters

### `filterTagList`

Remove internal tags from display.

```javascript
eleventyConfig.addFilter("filterTagList", function(tags) {
  return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
});
```

**Usage:**

{% raw %}
```nunjucks
{% for tag in tags | filterTagList %}
  <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>
{% endfor %}
```
{% endraw %}

Hides "all" and "posts" tags—they're for internal use.

### `getKeys`

Get object keys (for iterating collections).

```javascript
eleventyConfig.addFilter("getKeys", target => {
  return Object.keys(target);
});
```

**Usage:**

{% raw %}
```nunjucks
{% for tag in collections | getKeys | filterTagList %}
```
{% endraw %}

### `sortAlphabetically`

Sort strings A-Z.

```javascript
eleventyConfig.addFilter("sortAlphabetically", strings =>
  (strings || []).sort((b, a) => b.localeCompare(a))
);
```

**Usage:**

{% raw %}
```nunjucks
{% for tag in collections | getKeys | filterTagList | sortAlphabetically %}
```
{% endraw %}

## Built-in Eleventy filters

Eleventy includes these filters:

| Filter | Description |
|--------|-------------|
| `slugify` | Convert string to URL slug |
| `url` | Prepend path prefix |
| `log` | Console.log for debugging |

**Example:**

{% raw %}
```nunjucks
{{ "My Blog Post" | slugify }}
{# Output: my-blog-post #}
```
{% endraw %}

## Plugin filters

### `eleventyNavigation`

From `@11ty/eleventy-navigation`:

{% raw %}
```nunjucks
{% for entry in collections.all | eleventyNavigation %}
  <a href="{{ entry.url }}">{{ entry.title }}</a>
{% endfor %}
```
{% endraw %}

### `getPreviousCollectionItem` / `getNextCollectionItem`

Navigate between collection items:

{% raw %}
```nunjucks
{% set prev = collections.posts | getPreviousCollectionItem %}
{% set next = collections.posts | getNextCollectionItem %}
```
{% endraw %}

## Creating custom shortcodes

### Simple shortcode

```javascript
// eleventy.config.js
eleventyConfig.addShortcode("year", () => {
  return new Date().getFullYear().toString();
});
```

{% raw %}
```nunjucks
Copyright {% year %}
{# Output: Copyright 2025 #}
```
{% endraw %}

### Shortcode with arguments

```javascript
eleventyConfig.addShortcode("greeting", (name, emoji = "👋") => {
  return `<p>${emoji} Hello, ${name}!</p>`;
});
```

{% raw %}
```nunjucks
{% greeting "HAP" %}
{% greeting "Prof. Teeters", "🎓" %}
```
{% endraw %}

## Creating custom filters

### Simple filter

```javascript
eleventyConfig.addFilter("uppercase", (str) => {
  return str.toUpperCase();
});
```

{% raw %}
```nunjucks
{{ "hello" | uppercase }}
{# Output: HELLO #}
```
{% endraw %}

### Filter with arguments

```javascript
eleventyConfig.addFilter("truncate", (str, length = 100) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
});
```

{% raw %}
```nunjucks
{{ description | truncate(50) }}
```
{% endraw %}

## Learn more

- [Eleventy Shortcodes](https://www.11ty.dev/docs/shortcodes/)
- [Eleventy Filters](https://www.11ty.dev/docs/filters/)
- [Luxon Formatting](https://moment.github.io/luxon/#/formatting)
