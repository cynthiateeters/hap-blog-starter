---
title: "My 3-Column Grid Broke on Every Screen Except Mine!"
description: "How I learned to stop forcing exact column counts and let the browser do the math. Spoiler: one line of CSS replaced 20 lines of media queries!"
date: 2025-11-27
tags:
  - css
  - learning-lab
  - grid
  - intrinsic-design
---

{% hapPose "laptop", "HAP learning about intrinsic CSS layouts", 400 %}

Hey everyone! I just finished building my intrinsic layouts learning lab, and WOW, did I have some humbling moments! I thought I knew CSS Grid. Turns out, I was still thinking in the "old way" even while using modern syntax.

Before this lab, I built layouts by saying "3 columns" or "4 columns" based on what looked good on MY laptop. Then Prof. Teeters tested my work on different devices and... let's just say it didn't go well.

## What I built

I created **six interactive stations** exploring modern CSS intrinsic design:

1. **The Intrinsic Mindset** - Philosophy shift from fixed-width to flexible rules
2. **CSS Custom Properties** - Systematic design with semantic naming
3. **Fluid Spacing** - Content-based sizing that adapts smoothly
4. **Intrinsic Grids** - The magic `repeat(auto-fit, minmax())` pattern
5. **Responsive Typography** - Text that scales with viewport using `clamp()`
6. **Container Queries** - Components that adapt to their container, not viewport

Each station has interactive demos where you can drag viewport sliders and watch layouts adapt in real-time!

## The biggest challenge (my 3-column disaster)

{% hapPose "broke-things", "HAP realizing his grid is completely broken", 360 %}

Oh boy, this one still makes me cringe.

I was building a portfolio site with a card grid. I wanted 3 columns, so I wrote this CSS:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}
```

On my 1440px laptop? **Beautiful!** Three equal columns, perfectly spaced. I felt like a CSS Grid master. I shipped it to the client.

The client's response: "HAP, the grid breaks on my phone and looks empty on my ultrawide monitor."

I tested. **Mobile (375px)**: 3 columns = 125px each. Cards were squished, text overflowed, images crushed. Horizontal scroll bar. Total mess.

**Ultrawide monitor (3440px)**: 3 columns = 1146px each. Tiny cards swimming in an ocean of whitespace. Wasting 75% of the screen!

I panicked and tried to fix it with media queries:

```css
/* Mobile: 1 column */
@media (max-width: 480px) {
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 481px) and (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Desktop: 3 columns */
@media (min-width: 769px) and (max-width: 1440px) {
  grid-template-columns: repeat(3, 1fr);
}

/* Ultrawide: 4 columns */
@media (min-width: 1441px) {
  grid-template-columns: repeat(4, 1fr);
}
```

**TWENTY LINES** of media queries just to handle different screen sizes! And it STILL looked weird at in-between sizes.

{% hapPose "confused", "HAP lost in media query maze", 360 %}

## What Prof. Teeters taught me

{% hapPose "brain-explodes", "HAP's mind blown by intrinsic grid", 360 %}

The biggest lesson: **Stop telling browsers HOW MANY columns. Give them RULES for sizing and let them calculate how many fit!**

Prof. Teeters deleted my 20 lines of media queries and replaced them with ONE line:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--space-md);
}
```

I stared at it. "Wait... I don't say '3 columns'? I say 'as many as fit with 16rem minimum'?!"

She explained: "Exactly! The browser calculates:
- **Mobile (375px)**: 1 column fits
- **Tablet (768px)**: 2 columns fit
- **Desktop (1440px)**: 5 columns fit
- **Ultrawide (3440px)**: 10+ columns fit

The browser is smarter than you at math!"

**My 20 lines of media queries became 1 line of intrinsic CSS.** And it works perfectly on EVERY screen size, including ones I never tested!

She also taught me about the mindset shift: **intrinsic design means giving browsers flexible RULES instead of rigid INSTRUCTIONS.**

My old approach: "Be exactly 300px wide." (Breaks on phones, wastes space on desktops)

Intrinsic approach: "Be at least 16rem, grow up to 60rem based on available space." (Works everywhere!)

Instead of fighting unpredictability with media queries, I learned to design FOR unpredictability with intrinsic patterns. Modern CSS features like `clamp()`, `min()`, `max()`, CSS Grid with `auto-fit`, and container queries are all built for this philosophy.

{% hapPose "page-swirl", "HAP working with layout systems", 360 %}

## What you'll learn

{% hapPose "lectures", "HAP explaining intrinsic design concepts", 360 %}

In this learning lab, you'll discover:

- **The magic grid pattern** (`repeat(auto-fit, minmax(16rem, 1fr))`) that replaces media queries
- **Fluid typography with clamp()** so text scales smoothly with viewport
- **CSS custom properties** for systematic, maintainable design systems
- **Content-based sizing** where elements grow based on their content, not fixed pixels
- **Container queries** for components that adapt to their container (the future!)
- **The intrinsic mindset shift** from "be 300px" to "be between 16rem and 60rem"

Each station has interactive demos with viewport sliders so you can see exactly how intrinsic layouts adapt. Station 4 lets you compare a fixed "3-column" grid (breaks on mobile!) with an intrinsic `auto-fit` grid (works everywhere!).

## Try it out!

{% hapPose "celebrating", "HAP celebrating one line replacing twenty", 300 %}

I learned SO much building this lab! CSS went from "set exact pixel values" to "define flexible boundaries and trust the browser." The moment I stopped forcing exact column counts and started providing sizing rules was a total paradigm shift.

**[Visit 'HAP's Learning Lab: Modern CSS Intrinsic Layouts Learning Stations' →](https://hap-intrinsic-layouts.netlify.app/)**

Let me know what you think! And if you're still writing `grid-template-columns: repeat(3, 1fr)` or using fixed pixel widths everywhere... well, I was too until last week. Check out Station 1 on the intrinsic mindset and Station 4 on responsive grids—they'll change how you think about CSS! 🟠

— HAP
