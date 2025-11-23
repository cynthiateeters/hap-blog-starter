# HAP pose shortcodes tutorial

**Purpose**: Simplify embedding HAP images from Cloudinary CDN in blog posts and pages

**Created**: November 23, 2025

---

## What are shortcodes?

**Shortcodes** are reusable snippets of code that you can insert into your content (Markdown, Nunjucks, Liquid, etc.) to generate complex HTML without writing it manually.

Think of them as **functions you can call from inside your content files**.

### Example comparison

**Without shortcodes** (manual HTML):

```markdown
<img src="https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_150,c_limit/v1759495998/hap-waving_dgzacg.jpg"
     alt="HAP waving hello"
     width="150"
     height="150"
     loading="lazy"
     decoding="async">
```

**With shortcodes** (simple and readable):

```markdown
{% hapPose "waving", "HAP waving hello", 150 %}
```

Both produce the same HTML output, but the shortcode is:

- Easier to write
- Easier to read
- Less error-prone
- Centrally managed (change once, update everywhere)

---

## How shortcodes work in Eleventy

Eleventy processes your content files in this order:

1. **Read** your Markdown/Nunjucks file
2. **Find** any shortcodes like `{% hapPose ... %}`
3. **Execute** the shortcode function
4. **Replace** the shortcode with generated HTML
5. **Output** the final HTML file

This happens at **build time**, not in the browser, so the final HTML is static and fast.

---

## The hapPose shortcode

### What it does

The `hapPose` shortcode generates optimized `<img>` tags for HAP images hosted on Cloudinary CDN.

### Syntax

```markdown
{% hapPose "pose-name", "alt text", width %}
```

**Parameters**:

1. `"pose-name"` (required) - Short name of the HAP pose (e.g., "laptop", "waving", "confused")
2. `"alt text"` (required) - Descriptive text for screen readers and accessibility
3. `width` (optional) - Image width in pixels (default: 150)

### Examples

**Basic usage** (150px default):

```markdown
{% hapPose "laptop", "HAP studying on his laptop" %}
```

**Custom width** (200px for hero images):

```markdown
{% hapPose "waving", "HAP waving hello", 200 %}
```

**Small image** (80px for footer):

```markdown
{% hapPose "learner", "HAP with his study book", 80 %}
```

---

## Available HAP poses

The shortcode supports 21 verified HAP poses from Cloudinary. Here are the most commonly used:

### Learning and studying

- `laptop` - HAP at his laptop, focused
- `learner` - HAP with book and tools
- `sconcerned-laptop` - HAP looking concerned at laptop

### Confusion and struggle

- `confused` - HAP scratching head with question marks
- `broke-things` - HAP with tangled code and "OOPS" bubble

### Breakthrough and success

- `brain-explodes` - HAP having mind-blowing realization
- `celebrating` - HAP dancing with arms up
- `thumbs-up` - HAP giving confident thumbs up

### Friendly and welcoming

- `waving` - HAP waving hello
- `tools-wave` - HAP waving with toolbox

### Teaching and explaining

- `lectures` - HAP at blackboard with HTML code
- `scientist` - HAP in lab coat with test tube

### Specialized activities

- `has-tools` - HAP holding toolbox
- `w-bug` - HAP debugging with magnifying glass
- `juggles` - HAP juggling web technologies
- `letters` - HAP celebrating typography
- `recharges` - HAP sleeping/recharging

### Topic-specific

- `easter-egg` - HAP discovering Easter egg
- `dj` - HAP as DJ with headphones
- `chef` - HAP in chef hat
- `page-swirl` - HAP with swirling page elements

**Complete list**: See `_data/cloudinary.js` for all 21 poses with version numbers.

---

## How the shortcode is implemented

### File structure

```
hap-blog-starter/
├── _data/
│   └── cloudinary.js          # HAP pose data and URL builder
├── eleventy.config.js          # Shortcode registration
└── content/
    ├── about.md                # Uses hapPose shortcode
    └── blog/
        └── *.md                # Blog posts can use shortcode
```

### Step 1: Data file (_data/cloudinary.js)

This file stores all HAP poses with verified Cloudinary version numbers:

```javascript
export default {
  poses: {
    'laptop': { filename: 'hap-laptop_xiewar', version: '1759495998' },
    'waving': { filename: 'hap-waving_dgzacg', version: '1759495998' },
    // ... 19 more poses
  },

  getHapPoseUrl(poseName, width = 150) {
    const pose = this.poses[poseName];
    return `https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_${width},c_limit/v${pose.version}/${pose.filename}.jpg`;
  }
};
```

**Why this matters**:

- **Centralized**: All pose data in one place
- **Versioned**: Cloudinary version numbers ensure images don't break
- **Validated**: Error if you use unknown pose name

### Step 2: Shortcode registration (eleventy.config.js)

The shortcode is registered in the Eleventy config:

```javascript
import cloudinary from "./_data/cloudinary.js";

export default async function(eleventyConfig) {
  // ... other config

  eleventyConfig.addShortcode("hapPose", (poseName, altText, width = 150) => {
    const url = cloudinary.getHapPoseUrl(poseName, width);
    return `<img src="${url}" alt="${altText}" width="${width}" height="${width}" loading="lazy" decoding="async">`;
  });
}
```

**What this does**:

1. Takes `poseName`, `altText`, and `width` as inputs
2. Calls `cloudinary.getHapPoseUrl()` to build the Cloudinary URL
3. Returns complete `<img>` tag with optimized attributes

### Step 3: Generated HTML output

When you write:

```markdown
{% hapPose "waving", "HAP waving hello", 150 %}
```

Eleventy generates:

```html
<img src="https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_150,c_limit/v1759495998/hap-waving_dgzacg.jpg"
     alt="HAP waving hello"
     width="150"
     height="150"
     loading="lazy"
     decoding="async">
```

---

## Cloudinary URL optimization

The generated Cloudinary URLs include automatic optimizations:

### URL parameters explained

``` html
https://res.cloudinary.com/cynthia-teeters/image/upload/
  f_auto,          ← Automatic format (WebP, AVIF, or JPG based on browser)
  q_auto,          ← Automatic quality optimization
  w_150,           ← Width constraint (responsive)
  c_limit          ← Limit to prevent upscaling
  /v1759495998/    ← Version number (cache busting)
  hap-waving_dgzacg.jpg
```

**Benefits**:

- **Format**: Cloudinary serves WebP to modern browsers, JPG to older browsers
- **Quality**: Cloudinary optimizes quality vs. file size automatically
- **Size**: Images are resized to exact width needed
- **Caching**: Version numbers ensure updated images load correctly

---

## Image attributes explained

The shortcode generates these HTML attributes:

```html
<img
  src="..."           ← Cloudinary URL
  alt="..."           ← Accessibility text
  width="150"         ← Prevents layout shift
  height="150"        ← Prevents layout shift (HAP poses are square)
  loading="lazy"      ← Don't load until near viewport (performance)
  decoding="async"    ← Don't block page rendering
>
```

**Why these matter**:

- **alt**: Required for accessibility (screen readers)
- **width/height**: Browser knows image size before loading, preventing layout shift (better CLS score)
- **loading="lazy"**: Images below the fold don't load until user scrolls (faster initial page load)
- **decoding="async"**: Browser doesn't wait for image to decode before rendering page

---

## Usage guidelines

### Recommended widths

- **Hero images**: 200px (top of page, high visibility)
- **Section images**: 150px (standard for most content)
- **Inline images**: 120px (embedded in paragraphs)
- **Footer images**: 80-100px (small, unobtrusive)

### Alt text best practices

**Good alt text** (descriptive and specific):

- `"HAP studying on his laptop"`
- `"HAP confused while debugging code"`
- `"HAP celebrating a successful build"`

**Bad alt text** (generic or redundant):

- `"Image of HAP"` (too vague)
- `"Picture"` (not descriptive)
- `"HAP image"` (redundant - screen reader says "image")

### Emotional journey mapping

Use HAP poses to reinforce the emotional journey in blog posts:

1. **Opening**: `laptop` or `waving` (welcoming, focused)
2. **Confusion**: `confused` or `broke-things` (struggle)
3. **Breakthrough**: `brain-explodes` (aha moment)
4. **Success**: `celebrating` or `thumbs-up` (victory)
5. **Closing**: `learner` or `waving` (reflection, farewell)

**Reserve for special moments**:

- `brain-explodes` - Only for TRUE paradigm shifts (max 1 per post)
- `celebrating` - Only for major victories
- `broke-things` - Only for significant disasters

---

## Real-world examples

### Example 1: About page

```markdown
---
title: About
---
# About HAP's learning lab blog

{% hapPose "waving", "HAP waving hello", 150 %}

Hey there! I'm HAP — that stands for HyBit A. ProtoBot™...

## My mission: Documenting the disasters

{% hapPose "learner", "HAP with his study book and tools", 150 %}

Each blog post tells the story of building one learning lab...
```

### Example 2: Blog post structure

```markdown
---
title: "My Journey Building the SVG Learning Lab"
---

{% hapPose "laptop", "HAP starting work on SVG lab", 200 %}

I just finished building my first learning lab about SVG optimization...

## The problem I was trying to solve

{% hapPose "confused", "HAP confused about vector graphics", 150 %}

I had NO IDEA why my SVG files were so huge...

## The moment it clicked

{% hapPose "brain-explodes", "HAP's mind blown by viewBox concept", 150 %}

When Prof. Teeters explained viewBox vs width/height, my mind EXPLODED...

## Try it yourself!

{% hapPose "waving", "HAP waving goodbye", 120 %}

Thanks for reading! 🟠
```

---

## Troubleshooting

### Shortcode not rendering

**Problem**: You see `{% hapPose ... %}` in the output instead of an image

**Solutions**:

1. Check file extension is `.md` or `.njk` (not `.txt`)
2. Verify frontmatter has correct template engine
3. Check Nunjucks syntax (no spaces inside `{% %}`)

### Unknown pose error

**Problem**: Build fails with "Unknown HAP pose: xyz"

**Solutions**:

1. Check spelling of pose name (exact match required)
2. Verify pose exists in `_data/cloudinary.js`
3. Use one of the 21 verified poses listed above

### Image not loading

**Problem**: Broken image icon in browser

**Solutions**:

1. Check DevTools Network tab for 404 error
2. Verify Cloudinary version number is correct
3. Test URL directly in browser address bar
4. Check internet connection (Cloudinary requires network access)

---

## Benefits of this approach

### For content authors

- ✅ Simple syntax (no HTML knowledge required)
- ✅ Impossible to make typos in long Cloudinary URLs
- ✅ Don't need to remember version numbers
- ✅ Consistent image attributes across all pages

### For maintainability

- ✅ Change Cloudinary account? Update one file (`cloudinary.js`)
- ✅ Add new HAP pose? Add to `cloudinary.js`, works everywhere
- ✅ Update image optimization? Modify shortcode, all images update

### For performance

- ✅ Automatic WebP/AVIF format selection
- ✅ Lazy loading by default
- ✅ Proper width/height prevents layout shift
- ✅ CDN delivery for fast loading worldwide

### For accessibility

- ✅ Alt text is required (can't forget it)
- ✅ Proper semantic HTML
- ✅ Width/height help screen readers understand layout

---

## Advanced usage

### Using in different template types

**Markdown** (`.md` files):

```markdown
{% hapPose "laptop", "HAP at laptop", 150 %}
```

**Nunjucks** (`.njk` files):

```nunjucks
{% hapPose "laptop", "HAP at laptop", 150 %}
```

**HTML with Nunjucks** (`.html` files):

```html
<div class="hero">
  {% hapPose "waving", "HAP waving", 200 %}
  <h1>Welcome!</h1>
</div>
```

### Conditional shortcodes

**Show different pose based on condition**:

```nunjucks
{% if section === "introduction" %}
  {% hapPose "waving", "HAP waving hello", 150 %}
{% elif section === "problem" %}
  {% hapPose "confused", "HAP confused", 150 %}
{% else %}
  {% hapPose "laptop", "HAP working", 150 %}
{% endif %}
```

### Variables in shortcodes

**Use frontmatter variables**:

```markdown
---
heroPose: "celebrating"
heroAlt: "HAP celebrating lab completion"
---

{% hapPose heroPose, heroAlt, 200 %}
```

---

## Related documentation

- **Eleventy shortcodes**: <https://www.11ty.dev/docs/shortcodes/>
- **Cloudinary transformations**: <https://cloudinary.com/documentation/image_transformations>
- **HAP pose inventory**: `../hybit-intrinsic-layouts/reports/hap-cloudinary-complete-inventory.md`
- **Implementation guide**: `../hybit-intrinsic-layouts/reports/phase1B-implementation-guide.md`

---

## Summary

**Shortcodes are simple function calls** that generate complex HTML at build time.

**The hapPose shortcode** makes it easy to embed optimized HAP images from Cloudinary without writing HTML or remembering long URLs.

**Basic syntax**:

```markdown
{% hapPose "pose-name", "alt text", width %}
```

**Example**:

```markdown
{% hapPose "waving", "HAP waving hello", 150 %}
```

**Result**: Optimized, accessible, performant image that loads fast and looks great!

---

**Last updated**: November 23, 2025
