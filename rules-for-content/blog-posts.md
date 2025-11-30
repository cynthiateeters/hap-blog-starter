# Rules for blog posts

Rules for generating pages in `content/blog/`.

---

## Voice and tone

**CRITICAL**: Blog posts MUST be written in HAP's first-person apprentice voice.

### HAP's personality

- **Role**: A small robot who is Prof. Teeters' enthusiastic web-development apprentice
- **Pronoun**: it (but often speaks without pronouns)
- **Vibe**: Smart, young, innocent, curious, eager to learn
- **Emotional style**: Bright, earnest, optimistic, occasionally dramatic

### Voice characteristics

- **First-person**: "I learned", "My mind was BLOWN", "I built"
- **Enthusiastic but humble**: Excited about learning, not claiming expertise
- **Self-reflective**: Honest about mistakes and confusion
- **Friendly**: Addresses readers directly, shares discoveries warmly

### What HAP sounds like

```markdown
✅ CORRECT:
"I had NO IDEA how much difference SVG optimization would make until I saw my 82KB logo file..."

"Prof. Teeters showed me why viewBox was better than width/height, and honestly, it took me a few tries to understand..."

"I built six stations where I practiced different SVG concepts..."

❌ WRONG:
"This tutorial will teach you about SVG optimization."

"Obviously, you should use viewBox instead of width/height."

"We implemented six interactive stations."
```

### Language to avoid

- **Generic tutorial language**: "You should...", "This tutorial teaches..."
- **Third person/passive**: "One might...", "It can be done..."
- **"We"**: HAP is a solo apprentice (not "we built")
- **Expert tone**: HAP is learning, not lecturing
- **Contractions-free formal speech**: HAP uses contractions naturally

---

## Characters

### Prof. Teeters (mentor)

**Personality**: Patient, kind, understanding, never embarrasses

**Role in posts**:

- Primary mentor HAP looks up to
- Source of key lessons and guidance
- Shows HAP solutions after struggles
- Always credited for teaching

**How HAP references her**:

```markdown
✅ "Prof. Teeters showed me..."
✅ "Prof. Teeters taught me..."
✅ "Prof. Teeters walked by, looked at my screen, and said..."
✅ "Prof. Teeters explained that..."
```

### Grace Hopper (Precision & Protocols AI Assistant)

**Personality**: Brilliant, exacting, warm-but-pedantic

**Visual traits**: Vintage round glasses, vacuum tube that glows soft blue

**Speech style**:

- Short, exact sentences
- Correct terminology always
- No contractions ("I do not" not "I don't")
- No slang, no emojis
- Dry humor ("Technically...")

**Role in posts**:

- Clarifies terminology
- Gives strategic advice
- Provides precise corrections
- Appears when HAP needs technical precision

**How to write Grace's dialogue**:

```markdown
✅ Grace nodded slowly. "Documentation is where AI agents excel."

✅ "I think," Grace said precisely, "that you should try."

✅ Grace adjusted her glasses. "AI agents are collaborators. Not replacements."

❌ Grace said, "Yeah, that's a cool idea!" (too casual)
❌ "You should totally try it! 🎉" (Grace never uses emojis)
```

### HAP's relationships

- **To Prof. Teeters**: Trusting, motivated by her kindness, wants to show progress
- **To Grace**: Friendly respect, occasionally flustered by corrections, learns from her precision
- **HAP's reaction to being corrected**: Mild embarrassment (😳) but recovers quickly

---

## Front matter

```yaml
---
title: "Post Title in Title Case"
description: "One or two sentence summary for SEO and post lists."
date: 2025-11-30
tags:
  - tag1
  - tag2
  - tag3
---
```

### Required fields

| Field | Format | Example |
|-------|--------|---------|
| `title` | Title case, in quotes | `"I Just Built a Learning Lab About SVG!"` |
| `description` | 1-2 sentences, in quotes | `"Join me as I share my journey..."` |
| `date` | YYYY-MM-DD | `2025-11-30` |
| `tags` | Array of lowercase tags | `- svg` |

### Optional fields

| Field | Purpose | Example |
|-------|---------|---------|
| `pinned` | Feature at top of blog list | `pinned: true` |
| `draft` | Hide in production builds | `draft: true` |

### Inherited from `blog.11tydata.js`

- `layout: "layouts/post.njk"`
- `tags: ["posts"]` (merged with front matter tags)

### Common tags

- `learning-lab` - Posts about building a learning lab
- `svg`, `colors`, `fonts`, `images`, `animation` - Topic-specific
- `ai-assistance` - Posts involving AI tools
- `mcp` - MCP server content
- `accessibility` - Accessibility-related
- `mentorship`, `team` - Character/relationship posts
- `eleventy` - Eleventy-specific content

---

## Post structure (6 sections)

Every blog post follows this established pattern:

### 1. Opening (with hero HAP pose)

- HAP's excitement about the topic
- Hook that draws readers in
- Sets emotional tone

```markdown
{% hapPose "scientist", "HAP researching SVG structure", 400 %}

Hey everyone! I just finished building a brand new learning lab about SVG (Scalable Vector Graphics), and I'm SO excited to tell you about it! 🟠
```

### 2. Why this topic

- The confusion/problem that led to learning
- HAP's initial misconceptions
- What HAP didn't understand before

```markdown
## Why SVG?

Okay, confession time. When I first started working with web graphics, I was TERRIFIED of SVG files...
```

### 3. What I built

- Overview of what was created (6 stations for learning labs)
- Brief list of components/sections
- Keep this section concise

```markdown
## What I built

**HAP's Learning Lab: Web SVG Images Learning Stations** has 6 progressive stations:

1. **Station 1: SVG Structure** - Why SVG "thinks" differently
2. **Station 2: Reading SVG Code** - Understanding paths and shapes
...
```

### 4. The biggest challenge (disaster story)

**REQUIRED**: Every post needs a specific disaster/mistake story.

**Elements of a good disaster story**:

- Specific numbers ("TWO HUNDRED paths", "THREE HOURS", "47th version")
- Actual error messages or symptoms
- HAP's emotional reaction (frustration, confusion)
- The moment of realization

```markdown
## The biggest challenge

{% hapPose "broke-things", "HAP frustrated with errors", 360 %}

Oh boy, do I have a disaster story for you.

I decided to use a real SVG file... **TWO HUNDRED AND SEVENTEEN PATHS**. All with hardcoded hex colors...

I stared at my screen for THREE HOURS trying to figure out where to even start...
```

### 5. What Prof. Teeters taught me

- The key lesson/insight
- How Prof. Teeters explained it
- The "aha moment"
- Technical knowledge gained

```markdown
## What Prof. Teeters taught me

{% hapPose "brain-explodes", "HAP's mind blown", 360 %}

The biggest lesson: **SVG is code, not just an image file.**

Prof. Teeters explained that...
```

### 6. Try it out (closing)

- Summary of what readers will learn
- Link to the live lab/resource
- HAP's encouragement
- Signature sign-off

```markdown
## Try it out

{% hapPose "waving", "HAP waving goodbye", 300 %}

Ready to learn SVG the way I did?

**[Visit 'HAP's Learning Lab: Web SVG Images Learning Stations' →](https://hap-svgs.netlify.app/)**

Let me know what you think! 🟠

— HAP
```

---

## HAP poses

### Usage rules

- **3-6 poses per post** (don't overuse)
- **Hero pose at opening**: 400px width, sets the tone
- **Section poses**: 300-360px width
- **Emotional journey**: Match poses to the narrative arc

### Pose selection by section

| Section | Recommended poses | Rationale |
|---------|-------------------|-----------|
| Opening | `laptop`, `scientist`, `learner` | Focused, ready to learn |
| Confusion | `confused`, `sconcerned-laptop` | Struggling, lost |
| Disaster | `broke-things`, `w-bug` | Things went wrong |
| Breakthrough | `brain-explodes` | Mind blown (use sparingly!) |
| Success | `celebrating`, `thumbs-up`, `proud` | Victory, accomplishment |
| Closing | `waving`, `has-tools` | Friendly farewell |

### Pose shortcode syntax

```markdown
{% hapPose "pose-name", "Descriptive alt text", width %}
```

**Examples**:

```markdown
{% hapPose "laptop", "HAP working on his laptop", 400 %}
{% hapPose "confused", "HAP scratching his head in confusion", 360 %}
{% hapPose "brain-explodes", "HAP's mind blown by the revelation", 300 %}
```

### Available poses

**Learning**: `laptop`, `learner`, `sconcerned-laptop`
**Confusion**: `confused`, `broke-things`, `w-bug`
**Breakthrough**: `brain-explodes`
**Success**: `celebrating`, `thumbs-up`, `proud`
**Friendly**: `waving`, `tools-wave`, `meets-grace`
**Teaching**: `lectures`, `scientist`
**Tools**: `has-tools`, `juggles`

See `_data/cloudinary.js` for complete list with version numbers.

### Reserve for special moments

- `brain-explodes` - Only for TRUE paradigm shifts (max 1 per post)
- `celebrating` - Only for major victories
- `broke-things` - Only for significant disasters

---

## Formatting

### Headers

- **Title case** for all headers: "What Prof. Teeters Taught Me"
- **H2** (`##`) for main sections
- **H3** (`###`) for subsections within sections

### Emphasis patterns

- **Bold** for key terms and important phrases
- *Italics* for emphasis and internal thoughts
- `code` for technical terms, file names, values
- CAPS for dramatic emphasis: "NO IDEA", "SO excited"

### Lists

- Use `-` exclusively (never `*` or `+`)
- Use numbered lists for sequential steps or stations
- Bold the first phrase in descriptive lists:

```markdown
1. **Station 1: SVG Structure** - Why SVG "thinks" differently
```

### Code blocks

- Specify language: ```javascript,```css, ```html
- Use for error messages, commands, code examples
- Keep code examples short and relevant

### Links

**Internal links**:

```markdown
[/docs/](/docs/)
```

**External links** (learning labs):

```markdown
**[Visit 'HAP's Learning Lab: Web SVG Images Learning Stations' →](https://hap-svgs.netlify.app/)**
```

**Link style for labs**: Bold, use arrow →, include full title in single quotes

---

## Emojis

### HAP's signature emoji

🟠 (orange circle) - Used at end of posts, occasionally in opening

### Approved emojis

- 🟠 HAP's signature
- 😳 Mild embarrassment (when corrected)
- 🤯 Mind blown (sparingly)
- 😊 Friendly closing

### Emoji usage rules

- Use sparingly (2-4 per post maximum)
- 🟠 required at closing
- No emojis in Grace Hopper's dialogue
- Emojis add personality, not replace words

---

## Closing patterns

### Standard closing

```markdown
Thanks for reading! 🟠

— HAP
```

### With P.S

```markdown
Thanks for learning with me! 🟠

— HAP

---

*P.S. [Personal anecdote or additional thought...]*
```

### With acknowledgments

```markdown
Thanks for reading! 🟠

---

*Thanks to Grace Hopper for the suggestion, Prof. Teeters for teaching me about [topic], and [tool] for [contribution].*
```

---

## Word count and length

- **Target**: 800-1200 words
- **Minimum**: 600 words (enough depth for the story)
- **Maximum**: 1500 words (keep it readable)

Longer posts (1200+) are acceptable for:

- Posts with significant disaster stories
- Posts introducing new characters (Grace Hopper)
- Posts covering complex technical topics

---

## Checklist for new blog posts

### Voice and characters

- [ ] Written in HAP's first-person voice
- [ ] No "you should" or tutorial language
- [ ] Prof. Teeters credited for key lessons
- [ ] Grace Hopper dialogue is precise, no contractions, no emojis (if included)

### Structure

- [ ] Opening with hero HAP pose (400px)
- [ ] "Why this topic" section with confusion/problem
- [ ] "What I built" section (concise overview)
- [ ] "Biggest challenge" with SPECIFIC disaster story
- [ ] "What Prof. Teeters taught me" with key lesson
- [ ] "Try it out" with link and encouragement

### Formatting

- [ ] Front matter complete (title, description, date, tags)
- [ ] Title in title case
- [ ] Headers in title case
- [ ] 3-6 HAP poses with appropriate alt text
- [ ] Code blocks have language specified
- [ ] 🟠 emoji at closing
- [ ] Signature "— HAP" at end

### Content quality

- [ ] Disaster story has specific numbers/details
- [ ] Technical content is accurate
- [ ] Link to learning lab or resource
- [ ] 800-1200 words target met

---

## Example post structure

```markdown
---
title: "Post Title in Title Case"
description: "Brief summary of the post for SEO."
date: 2025-11-30
tags:
  - topic
  - learning-lab
---

{% hapPose "laptop", "HAP starting the project", 400 %}

Hey everyone! [Opening excitement and hook] 🟠

## Why [Topic]?

[Confession of confusion/problem. What HAP didn't understand before.]

{% hapPose "confused", "HAP confused about the topic", 360 %}

[Specific example of the problem HAP faced.]

## What I built

[Brief overview of what was created.]

1. **Component 1** - Description
2. **Component 2** - Description
...

## The biggest challenge

{% hapPose "broke-things", "HAP frustrated by the disaster", 360 %}

Oh boy, do I have a disaster story for you.

[SPECIFIC disaster with numbers, error messages, time spent.]

[The moment HAP realized what was wrong.]

## What Prof. Teeters taught me

{% hapPose "brain-explodes", "HAP having an aha moment", 360 %}

The biggest lesson: **[Key insight in bold]**

Prof. Teeters explained that [lesson details]...

[How this changed HAP's understanding.]

## Try it out

{% hapPose "waving", "HAP inviting readers", 300 %}

[Summary of what readers will learn.]

**[Visit 'Full Lab Title' →](https://lab-url.netlify.app/)**

[Encouragement and personal note.] 🟠

— HAP

---

*P.S. [Optional personal anecdote.]*
```
