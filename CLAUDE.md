# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**HAP's Learning Lab Blog** - A static blog built with Eleventy v3 where HAP (HyBit A. ProtoBot™) chronicles his journey building interactive learning labs. Each blog post tells the story of creating one learning lab in HAP's first-person apprentice voice.

**Current state**: Transformation in progress from generic Eleventy Base Blog v9 template to HAP-branded blog.

**Technology stack**:
- Eleventy v3.1.2 (static site generator)
- Nunjucks templates
- Markdown for blog posts
- Zero-JavaScript output (all pre-rendered)
- Eleventy Image plugin (automatic WebP, responsive srcset)
- Prism.js syntax highlighting

**Parent project**: `../hybit-intrinsic-layouts` contains HAP design system (CSS, fonts, Prism theme)

## Implementation plan

**Comprehensive documentation available**:
- `../hybit-intrinsic-layouts/reports/hap-blog-transformation-plan.md` (1,958 lines) - Strategic plan
- `../hybit-intrinsic-layouts/reports/hap-blog-executive-overview.md` - Executive summary
- `../hybit-intrinsic-layouts/reports/phase1-implementation-guide.md` - Step-by-step tactical guide
- `../hybit-intrinsic-layouts/reports/hap-cloudinary-complete-inventory.md` - All 21 HAP images

**Two-phase approach**:

### Phase 1: HAP branding & design system (5-7 hours)
1. **Phase 1.1**: Metadata & configuration (30 min)
2. **Phase 1.2**: Font integration (30 min)
3. **Phase 1.3**: Color system migration (1.5 hours)
4. **Phase 1.4**: Typography & layout (included in 1.3)
5. **Phase 1.5**: Navigation & header (1 hour)
6. **Phase 1.6**: Syntax highlighting (30 min)
7. **Phase 1.7**: Image support (1 hour, optional)

### Phase 2: First blog post - hybit-svg (2-3 hours)
1. **Phase 2.1**: Content planning (30 min)
2. **Phase 2.2**: Write blog post (1.5 hours)
3. **Phase 2.3**: Testing & refinement (1 hour)

**Follow the implementation guide** at `../hybit-intrinsic-layouts/reports/phase1-implementation-guide.md` for exact commands and code.

## Common development commands

### Local development

```bash
# Install dependencies (one time)
npm install

# Start development server
npm run start  # http://localhost:8080

# Build for production
npm run build  # Output: _site/

# Clean build
rm -rf _site && npm run build
```

### Testing

```bash
# Serve production build
npm run serve

# Debug build
npx @11ty/eleventy --serve --quiet
```

### Deployment

**Recommended**: Netlify or Vercel
- Build command: `npm run build`
- Publish directory: `_site`
- Node version: 18+

## HAP design system

### Color format standard

**CRITICAL**: All colors MUST use `hsl()` format exclusively.

```css
/* ✅ CORRECT */
:root {
  --warm-orange: hsl(32, 76%, 63%);
  --peach-background: hsl(32, 41%, 90%);
  --teal-darker: hsl(168, 34%, 35%);
}

/* ❌ WRONG - NEVER use hex or rgb */
:root {
  --warm-orange: #E8A557;  /* FORBIDDEN */
  --peach-background: rgb(232, 220, 201);  /* FORBIDDEN */
}
```

### HAP color palette

**Base colors** (from `css/hap-colors.css`):
- `--warm-orange`: hsl(32, 76%, 63%) - Primary brand color
- `--peach-background`: hsl(32, 41%, 90%) - Page background
- `--cream-white`: hsl(32, 100%, 97%) - Card backgrounds
- `--dark-brown`: hsl(28, 45%, 16%) - Body text
- `--medium-brown`: hsl(22, 22%, 34%) - Secondary text
- `--teal-accent`: hsl(168, 28%, 54%) - Accent color
- `--teal-darker`: hsl(168, 34%, 35%) - Links (WCAG AA)

**WCAG AA compliance**:
- Text contrast: 4.5:1 minimum (normal text)
- Large text contrast: 3:1 minimum (≥18px or ≥14px bold)
- All color custom properties ending in `-darker` are WCAG AA compliant

### Typography

**Fonts** (hosted locally in `public/fonts/`):
- **Nunito**: Primary UI font (variable weight 200-1000, regular + italic)
- **Source Code Pro**: Monospace for code (variable weight 200-900, regular + italic)
- Format: WOFF2 variable fonts
- `font-display: swap` for faster initial render

**Fluid typography** (uses clamp()):
```css
h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 2.5rem);
}
```

### Syntax highlighting

**HAP Prism theme**: `css/prism-hap-theme.css`
- Warm color scheme matching HAP palette
- Dark background for contrast
- Optimized for readability

## HAP's voice guidelines

**CRITICAL**: Blog posts MUST be written in HAP's first-person apprentice voice.

### Do's ✅

- **First-person**: "I learned", "My mind was BLOWN", "I built"
- **Share real mistakes**: "I spent THREE HOURS debugging..." (specific disasters)
- **Reference Prof. Teeters**: "Prof. Teeters showed me...", "Prof. Teeters taught me..."
- **Enthusiastic but humble**: Excited about learning, not claiming expertise
- **Specific examples**: "82KB logo file" not "large file"
- **Include 🟠 emoji**: HAP's signature at end of posts
- **Attribution**: Credit Prof. Teeters for guidance and lessons

### Don'ts ❌

- **Generic tutorial language**: "You should...", "This tutorial teaches..."
- **Skip the struggle**: Every post needs a disaster/mistake story
- **Third person/passive**: "One might...", "It can be done..."
- **Overly technical**: Balance technical detail with personal context
- **Forget Prof. Teeters**: HAP doesn't learn alone - he has a mentor
- **Use "we"**: HAP is solo apprentice (not "we built")

### Blog post structure (established pattern)

Each blog post follows this 6-section structure:

1. **Opening**: HAP's excitement about new lab
2. **Why this topic**: Initial confusion/problem that led to lab
3. **What I built**: 6 stations overview (brief)
4. **Biggest challenge**: Specific disaster story (memorable, relatable)
5. **What Prof. Teeters taught me**: Key lesson learned
6. **Try it out**: Link to live lab + HAP's encouragement

**Target length**: 800-1200 words (readable, not overwhelming)

### Example HAP voice patterns

```markdown
❌ WRONG: "This tutorial will teach you about SVG optimization."
✅ CORRECT: "I had NO IDEA how much difference SVG optimization would make until I saw my 82KB logo file..."

❌ WRONG: "Obviously, you should use viewBox instead of width/height."
✅ CORRECT: "Prof. Teeters showed me why viewBox was better than width/height, and honestly, it took me a few tries to understand..."

❌ WRONG: "We implemented six interactive stations."
✅ CORRECT: "I built six stations where I practiced different SVG concepts..."
```

## Image support strategy

### Hybrid approach

**HAP poses** (Cloudinary CDN):
- 21 verified poses across 8 emotional categories
- Already optimized on CDN
- Shortcode: `{% hapPose "pose-name", "alt text", width %}`

**Learning lab screenshots** (Eleventy Image):
- Automatic WebP conversion
- Responsive srcset (400/800/1200px widths)
- Lazy loading
- Shortcode: `{% labScreenshot "path", "alt text" %}`

### HAP pose inventory

**Complete inventory**: `../hybit-intrinsic-layouts/reports/hap-cloudinary-complete-inventory.md`

**Emotional journey mapping**:
1. **Opening** (excited): `laptop`, `waving`, `learner`
2. **Confusion** (struggling): `confused`, `broke-things`
3. **Breakthrough** (aha moment): `brain-explodes`, `aha-moment`
4. **Success** (completion): `celebrating`, `thumbs-up`, `proud`

**Distribution per blog post**:
- Maximum 3-5 HAP poses
- Maximum 1-2 learning lab screenshots
- Reserve `brain-explodes` for true paradigm shifts only

### Available HAP poses

**Learning category**:
- `laptop` - HAP at laptop (general working)
- `learner` - HAP studying/reading

**Confusion category**:
- `confused` - Scratching head
- `broke-things` - Things went wrong

**Breakthrough category**:
- `brain-explodes` - Mind blown (use sparingly!)
- `aha-moment` - Light bulb moment

**Teaching category**:
- `teaching` - Pointing/explaining
- `proud` - Hands on hips, confident

**Friendly category**:
- `waving` - Greeting/hello
- `celebrating` - Arms up, excited
- `thumbs-up` - Approval/success

**Tools category**:
- `tool-belt` - Ready to work
- `with-wrench` - Building/fixing

**Activity category**:
- `running` - Fast movement/urgency
- `sitting` - Relaxed pose

**Specialty category**:
- `space-suit` - Advanced topic
- `bike` - Journey metaphor
- `retro` - Vintage tech theme

See `../hybit-intrinsic-layouts/reports/hap-cloudinary-complete-inventory.md` for complete URLs and usage guidelines.

## File organization

```
hap-blog-starter/
├── _data/
│   ├── metadata.js           # Site metadata (title, author, URL)
│   └── cloudinary.js         # HAP pose URL helper (Phase 1.7)
├── _includes/
│   ├── layouts/
│   │   ├── base.njk          # Base HTML template (header, footer)
│   │   ├── home.njk          # Home page layout
│   │   └── post.njk          # Blog post layout
│   └── partials/
│       └── image-guide.md    # Image usage docs (Phase 1.7)
├── css/
│   ├── hap-colors.css        # HAP color system (all hsl())
│   ├── hap-fonts.css         # Font-face declarations
│   ├── prism-hap-theme.css   # Syntax highlighting
│   └── index.css             # Main blog styles
├── content/
│   ├── blog/                 # Blog posts (Markdown)
│   │   ├── images/           # Screenshots directory
│   │   └── *.md              # Individual blog posts
│   ├── about/                # About page
│   └── index.njk             # Home page (shows latest posts)
├── public/
│   └── fonts/                # Local font files
│       ├── Nunito/           # 2 variable font files
│       └── Source_Code_Pro/  # 2 variable font files
├── eleventy.config.js        # Eleventy configuration + shortcodes
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## Content conventions

### Heading capitalization

**Blog posts** (educational content): Use **title case**

```markdown
✅ CORRECT: "The Big Mistake I Made With SVG Files"
✅ CORRECT: "What Prof. Teeters Taught Me About Optimization"
```

**Markdown documentation**: Use **sentence case**

```markdown
✅ CORRECT: "# Getting started with the blog"
✅ CORRECT: "## How to write a blog post"
```

### Markdown standards

**From user's global rules**:
- Headers: Sentence case (docs), single space after `#`
- Lists: Use `-` exclusively (never `*` or `+`)
- Code blocks: Always specify language (```css not ```)
- Links: `[text](url)` with NO spaces
- Tables: Include header separator row

### Emoji usage

**HAP's signature emoji**: 🟠 (orange circle)

**Approved emoji** (good visibility on peach background):
- 🟠 HAP's signature - use as safe alternative
- 🔬 Science, research, HAP's lab context
- 📊 Data, metrics
- 🎯 Goals, targets
- 🎨 Design, colors
- 🚀 Performance
- 🌐 Web, browsers
- 📸 Images
- 🗂️ Organization
- ♿ Accessibility

**Never use** (poor visibility on peach):
- ❌ 💡 ⚡ ⭐ ✨ (yellow = invisible)
- ❌ 🤖 (use HAP images instead)

## Eleventy architecture

### Zero-JavaScript philosophy

- **Static output**: All pages pre-rendered at build time
- **No client-side JS**: Progressive enhancement only
- **Performance**: Target 95-100 Lighthouse scores
- **Image optimization**: Automatic WebP, lazy loading
- **Font optimization**: Variable fonts, font-display: swap

### Key Eleventy concepts

**Collections**: Auto-generated from content
```javascript
collections.posts  // All blog posts
collections.all    // All content
```

**Filters**: Transform data in templates
```nunjucks
{{ date | readableDate }}
{{ content | htmlDateString }}
```

**Shortcodes**: Reusable components
```nunjucks
{% hapPose "laptop", "HAP at his laptop", 150 %}
{% labScreenshot "path/to/image.png", "Screenshot description" %}
```

### Blog post frontmatter

**Required fields**:
```markdown
---
title: "My Blog Post Title"
description: "Brief summary for SEO and post list"
date: 2025-11-23
tags:
  - svg
  - optimization
---

Blog post content here...
```

**Optional fields**:
```markdown
draft: true  # Hide from production
eleventyExcludeFromCollections: true  # Don't include in post list
```

## Performance requirements

### Lighthouse targets

**All pages must meet**:
- Performance: 95-100/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 100/100

### Optimization checklist

- [ ] All images have explicit width/height
- [ ] Below-fold images use `loading="lazy"`
- [ ] Hero image has `fetchpriority="high"`
- [ ] Variable fonts used (fewer HTTP requests)
- [ ] CSS uses custom properties (not repeated values)
- [ ] No layout shift (CLS = 0)
- [ ] Semantic HTML throughout
- [ ] Skip link for keyboard users

## Accessibility requirements

### WCAG AA compliance mandatory

**Text contrast**:
- Normal text: 4.5:1 minimum
- Large text (≥18px or ≥14px bold): 3:1 minimum
- All HAP colors ending in `-darker` are compliant

**Semantic HTML**:
```html
<header>, <nav>, <main>, <article>, <footer>
<h1> through <h6> in order (no skipping levels)
```

**ARIA labels**:
```html
<nav aria-label="Site navigation">
<nav aria-label="Post navigation">
```

**Image alt text**:
- Descriptive (not "image of" or "picture of")
- Context-appropriate
- Empty `alt=""` for decorative images only

**Keyboard navigation**:
- All interactive elements focusable
- Visible focus indicators
- Logical tab order

## Legal and licensing

### Multi-license approach

- **Code**: MIT License (open source)
- **HAP™ Character**: Proprietary (Prof. Teeters)
- **Educational Content**: Proprietary (academic use allowed)

### Required copyright notices

**HTML footer** (in `_includes/layouts/base.njk`):
```html
<footer class="footer">
  <p><strong>HAP's Learning Lab Blog</strong> | An AI-Enhanced Educational Experience by Prof. Cynthia Teeters</p>
  <p class="footer-reminder">
    Thanks for reading my blog! If you want to try any of my learning labs, just click the links in the posts. 🟠 — HAP
  </p>
  <div class="footer-copyright">
    <p>HAP™ Educational Content © 2025 Cynthia Teeters. All rights reserved.</p>
    <p>HyBit A. ProtoBot™ (HAP™) character and the apprentice learning methodology are proprietary educational innovations.</p>
  </div>
</footer>
```

**Always use**:
- HAP™ (with trademark symbol)
- HyBit A. ProtoBot™ (with trademark symbol)

## Blog posts to create

From `../hybit-intrinsic-layouts/reports/labs.txt`, six blog posts planned:

1. **hybit-svg** (Phase 2) - Scalable vector graphics
2. **hybit-intrinsic-layouts** - Modern CSS layouts
3. **hybit-colors** - Accessibility and color theory
4. **hybit-fonts** - Variable fonts and typography
5. **hybit-images** - Image optimization
6. **hybit-animation** - CSS and JavaScript motion

**Time per post**: 1.5-2 hours (after first post template established)

## Common pitfalls to avoid

1. **Don't use Write tool on existing files** - Use Edit instead
2. **Don't break HAP's voice** - First-person, humble, references Prof. Teeters
3. **Don't use hex/rgb colors** - Use hsl() format exclusively
4. **Don't skip performance testing** - Lighthouse scores before deployment
5. **Don't forget width/height on images** - Causes layout shift
6. **Don't use color alone** - Pair with icons/text for accessibility
7. **Don't commit without local testing** - Test at http://localhost:8080
8. **Don't use generic tutorial language** - HAP's voice is personal, not instructional
9. **Don't hallucinate HAP poses** - Use only verified poses from inventory
10. **Don't skip disaster story in blog posts** - Makes content relatable

## Project-specific resources

### Planning documents

**Located in `../hybit-intrinsic-layouts/reports/`**:
- `hap-blog-transformation-plan.md` - Complete strategic plan (1,958 lines)
- `hap-blog-executive-overview.md` - Executive summary
- `phase1-implementation-guide.md` - Step-by-step implementation
- `hap-cloudinary-complete-inventory.md` - All HAP images (21 poses)

**Always consult these documents** before making major changes or writing blog posts.

### Reports directory usage

Create reports in `../hybit-intrinsic-layouts/reports/` to keep this repo clean:
- Blog post drafts and planning
- Research and analysis
- Implementation progress
- External reviews

## Working with parent project

**Parent directory**: `../hybit-intrinsic-layouts`

**Copy assets from parent**:
```bash
# Fonts
cp -r ../hybit-intrinsic-layouts/fonts public/fonts

# Prism theme
cp ../hybit-intrinsic-layouts/css/prism-hap-theme.css css/prism-hap-theme.css
```

**Reference but don't copy**:
- `../hybit-intrinsic-layouts/css/style.css` - Full HAP design system (5,400 lines)
- Extract only what's needed for blog (~1,500 lines)
- Don't copy learning-lab-specific components

## Testing workflow

### Local testing

```bash
# 1. Clean build
rm -rf _site && npm run build

# 2. Start server
npm run start

# 3. Open browser
# http://localhost:8080

# 4. Test all pages
# - Home page (latest posts)
# - Archive page (all posts)
# - About page
# - Individual blog posts

# 5. Mobile test
# Resize to 375px width, check responsive behavior
```

### Visual inspection checklist

- [ ] Peach background visible (not white)
- [ ] HAP avatar in header
- [ ] Warm orange headings
- [ ] Teal navigation links
- [ ] Nunito font renders
- [ ] Footer with HAP message
- [ ] Code blocks have warm syntax highlighting
- [ ] Images display correctly (if Phase 1.7 complete)

### DevTools checks

**Network tab**:
- [ ] Fonts load without 404 errors
- [ ] Images optimized (WebP served)
- [ ] No console errors

**Elements tab**:
- [ ] Background color: `hsl(32, 41%, 90%)`
- [ ] Font family: `Nunito`
- [ ] No hex colors in computed styles

**Lighthouse audit**:
- [ ] Performance: ≥95/100
- [ ] Accessibility: 100/100
- [ ] Best Practices: 100/100
- [ ] SEO: 100/100

## Git workflow

### Before committing

```bash
# 1. Test locally
npm run start

# 2. Clean build
rm -rf _site && npm run build

# 3. Verify no errors
# Check terminal output for build errors

# 4. Stage changes
git add .

# 5. Commit
git commit -m "Brief description of changes"
```

### Commit message guidelines

**From user's global rules**: NO Claude references in commit messages
- ❌ Don't include "🤖 Generated with Claude Code"
- ❌ Don't include "Co-Authored-By: Claude"
- ✅ Keep clean and professional

**Good commit messages**:
- "Complete Phase 1.1: Update site metadata"
- "Add HAP fonts and color system"
- "Update header with HAP avatar"
- "Add first blog post about hybit-svg"

## Getting help

### For implementation

1. **Follow the guide**: `../hybit-intrinsic-layouts/reports/phase1-implementation-guide.md`
2. **Check transformation plan**: For strategic context and code examples
3. **Review HAP voice guidelines**: This file, "HAP's voice guidelines" section
4. **Verify HAP poses**: Use only poses from Cloudinary inventory

### For blog post writing

1. **Read example post**: In transformation plan Phase 2.2
2. **Follow 6-section structure**: Opening → Why → What → Challenge → Lesson → Try it
3. **Share specific disaster**: Real mistake with numbers/details
4. **Reference Prof. Teeters**: Credit mentor appropriately
5. **Test voice**: Read out loud - does it sound like HAP?

### For debugging

**Build fails**:
- Check syntax in `.njk` templates
- Verify all frontmatter is valid YAML
- Run `npm install` if dependencies missing

**Styles not applying**:
- Check order in `base.njk` (colors → fonts → index)
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Verify hsl() format in all colors

**Images not loading**:
- Cloudinary requires internet connection
- Check URLs match inventory exactly
- Verify shortcodes in `eleventy.config.js` (Phase 1.7)

---

**Remember**: This is HAP's personal blog about his learning journey. Voice, authenticity, and accessibility are more important than technical complexity. Keep it personal, keep it humble, keep it HAP!
