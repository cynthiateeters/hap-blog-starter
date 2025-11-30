# Rules for documentation pages

Rules for generating pages in `content/docs/`.

---

## Voice and tone

- **Instructional voice**: Clear, direct, technical
- **No HAP personality**: Documentation is written by an AI agent, not HAP
- **No emojis** in body text (except 📚 in callout box title)
- **Second person** when giving instructions: "Create a file..." not "You should create..."
- **Present tense**: "This file contains..." not "This file will contain..."

---

## Front matter

```yaml
---
title: "Page title here"
description: "Brief description for SEO and page lists."
order: 9
---
```

**Required fields**:

| Field | Format | Example |
|-------|--------|---------|
| `title` | Sentence case, in quotes | `"Getting started"` |
| `description` | One sentence, in quotes | `"Clone, install, and run this site."` |
| `order` | Integer | `9` |

**Inherited from `docs.11tydata.js`** (do not specify):

- `layout: "layouts/docs.njk"`
- `tags: ["docs"]`

---

## Page structure

### 1. Official docs callout box (required)

Immediately after front matter, before any content:

```html
<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/..." target="_blank" rel="noopener">Topic Name</a> — Brief description</li>
      <li><a href="https://www.11ty.dev/docs/..." target="_blank" rel="noopener">Another Topic</a> — Brief description</li>
    </ul>
  </div>
</div>
```

**Rules for callout box**:

- Include 1-3 relevant official documentation links
- Use `target="_blank" rel="noopener"` on all external links
- Use em dash `—` (not hyphen `-`) between link and description
- Can include non-Eleventy links if highly relevant (e.g., aboutfeeds.com for RSS)

### 2. Main content sections

Use H2 (`##`) for main sections. Structure varies by topic but typically includes:

- **What is X?** - Brief explanation of the concept
- **How it works** - Technical details
- **Configuration/Usage** - How this site implements it
- **Examples** - Code samples with output
- **Common patterns** - Practical applications
- **Learn more** - Links to official docs (final section)

### 3. Learn more section (required)

Final section with external links:

```markdown
## Learn more

- [Eleventy Topic](https://www.11ty.dev/docs/...)
- [Related Resource](https://example.com/)
```

---

## Formatting rules

### Headers

- **H2** (`##`) for main sections
- **H3** (`###`) for subsections
- **Sentence case**: "How this site creates feeds" not "How This Site Creates Feeds"
- No punctuation at end of headers
- Blank line after every header

### Code blocks

**Always specify language**:

```javascript
// JavaScript code
```

```html
<!-- HTML code -->
```

```nunjucks
{# Nunjucks template code #}
```

```markdown
<!-- Markdown example -->
```

```bash
npm install
```

```yaml
---
front: matter
---
```

```css
.selector {
  property: value;
}
```

**Nunjucks escaping**: Wrap Nunjucks code examples in raw blocks to prevent execution:

```markdown
{% raw %}
```nunjucks
{% for item in items %}
  {{ item.name }}
{% endfor %}
```
{% endraw %}
```

### Tables

Use tables for:

- Comparing options
- Listing configuration values
- Showing field definitions

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data | Data | Data |
```

- Left-align all columns (default)
- No trailing pipes
- Keep column headers short

### Lists

- Use `-` exclusively (never `*` or `+`)
- Use **bold** for term definitions: `- **term** - Definition here`
- 2-space indentation for nested items

### Inline code

- Use backticks for: file names, function names, property names, values
- Examples: `eleventy.config.js`, `hapPose`, `layout: "post"`, `true`

### Links

- Internal links: `[Page name](/docs/page-name/)`
- External links in body: `[Link text](https://example.com/)`
- No spaces inside brackets or parentheses

---

## Code example patterns

### Configuration examples

Show the actual code from this site:

```markdown
**Configuration** in `eleventy.config.js`:

```javascript
eleventyConfig.addPlugin(pluginName, {
  option: "value",
});
```
```

### Usage examples

Show input and output:

```markdown
**Usage:**

{% raw %}
```nunjucks
{% shortcodeName "arg1", "arg2" %}
```
{% endraw %}

**Output:**

```html
<div class="result">Content here</div>
```
```

### File location pattern

When showing where code lives:

```markdown
**Definition** in `eleventy.config.js`:

```javascript
// code here
```
```

Or:

```markdown
**File**: `_data/cloudinary.js`

```javascript
// code here
```
```

---

## Content patterns

### Explaining "what is X"

Start with a one-sentence definition, then expand:

```markdown
## What are shortcodes?

Shortcodes are reusable template functions. They take arguments and return content—usually HTML.
```

### Showing inheritance/defaults

Use tables to show what's inherited vs. specified:

```markdown
| Property | Source | Value |
|----------|--------|-------|
| `layout` | `blog.11tydata.js` | `layouts/post.njk` |
| `title` | Front matter | User-specified |
```

### Step-by-step instructions

Use H3 for numbered steps:

```markdown
### 1. Create the file

```javascript
// code
```

### 2. Register in config

```javascript
// code
```

### 3. Use in templates

```nunjucks
// code
```
```

### Diagrams

Use ASCII art for flow diagrams:

```markdown
```
┌─────────────────┐
│  Global data    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Directory data │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Front matter   │
└─────────────────┘
```
```

---

## File naming

- Filename: `XX-topic-name.md` where XX is a two-digit number
- URL becomes: `/docs/XX-topic-name/`
- Order in front matter should match filename number

Examples:

- `01-getting-started.md` → `order: 1`
- `09-feeds.md` → `order: 9`

---

## Checklist for new docs pages

- [ ] Front matter has title, description, order
- [ ] Official docs callout box at top with relevant links
- [ ] Headers in sentence case
- [ ] Code blocks have language specified
- [ ] Nunjucks examples wrapped in `{% raw %}` blocks
- [ ] "Learn more" section at bottom
- [ ] Internal links use correct paths
- [ ] External links have `target="_blank" rel="noopener"`
- [ ] No HAP voice or emojis in body
- [ ] `content/docs/index.md` updated with link to new page

---

## Example page structure

```markdown
---
title: "Topic name"
description: "Brief description of this topic."
order: 9
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/topic/" target="_blank" rel="noopener">Topic</a> — Official guide</li>
    </ul>
  </div>
</div>

## What is topic?

Brief explanation of the concept.

## How this site uses topic

**Configuration** in `eleventy.config.js`:

```javascript
// actual code from this site
```

## Configuration options

| Option | Purpose | Default |
|--------|---------|---------|
| `option1` | Description | `"value"` |

## Examples

**Basic usage:**

{% raw %}
```nunjucks
{% example "arg" %}
```
{% endraw %}

**Output:**

```html
<div>Result</div>
```

## Learn more

- [Official Topic Docs](https://www.11ty.dev/docs/topic/)
- [Related Resource](https://example.com/)
```
