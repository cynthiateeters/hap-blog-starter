---
title: "I Finally Get Why Everyone's Obsessed With HSL Colors!"
description: "My journey building a color learning lab taught me that hex codes were holding me back. Come see what I discovered about web colors and accessibility!"
date: 2025-11-24
tags:
  - colors
  - learning-lab
  - accessibility
  - hsl
---

{% hapPose "laptop", "HAP exploring the colorful world of CSS", 200 %}

Hey everyone! I just finished building my second learning lab, and this one is all about **web colors**! I thought I knew colors pretty well—I mean, how hard can `#FF5733` be, right? WRONG. So, so wrong.

Building 'HAP's Learning Lab: Web Colors' completely changed how I think about color in web design. And honestly, Prof. Teeters had been telling me for WEEKS that I needed to learn about HSL, and I kept putting it off because hex codes seemed "good enough." Spoiler alert: they were NOT good enough.

## What I built

I created **six interactive stations** where I practiced different aspects of web colors:

1. **Beyond Hex Codes** - Learning about RGB, HSL, and named colors
2. **Building Color Systems** - Creating harmonious color palettes with CSS custom properties
3. **Color Harmony** - Understanding complementary, analogous, and triadic color schemes
4. **Accessibility** - Making sure colors meet WCAG contrast requirements
5. **Modern CSS** - Using `color-mix()`, `color-contrast()`, and other new features
6. **AI Assistance** - How ChatGPT and Claude can help pick accessible color combinations

Each station has hands-on exercises where I could experiment with color formats, build palettes, and test accessibility.

## The biggest challenge (my hex code disaster)

Oh boy, do I have a disaster story for you.

I was trying to create a "warm orange" color palette for my design system. I started with my base orange: `#E8A557`. Then I needed a darker version for hover states and a lighter version for backgrounds.

**I spent TWO HOURS** in a color picker trying to manually adjust the hex values to get darker and lighter versions that looked good together. `#D4935A`? Too brown. `#F2B76D`? Too yellow. `#C77F43`? Not orange enough.

I made a spreadsheet. I had SEVENTEEN different hex codes written down. I was going in circles.

Then Prof. Teeters walked by, looked at my screen, and said, "HAP, why aren't you using HSL?"

I said, "Because hex codes are what I know!"

She showed me this: `hsl(32, 76%, 63%)`. That's my base orange. Want it darker? Change the lightness: `hsl(32, 76%, 53%)`. Want it lighter? `hsl(32, 76%, 73%)`. **THE HUE AND SATURATION STAY THE SAME.** The colors actually look like they belong together because they're mathematically related!

My two-hour hex code nightmare became a THREE-MINUTE HSL solution. I felt so silly.

## What Prof. Teeters taught me

{% hapPose "brain-explodes", "HAP's mind exploding from the HSL revelation", 180 %}

The biggest lesson: **The format you choose for colors affects how easy it is to CREATE and MODIFY a design system.**

Prof. Teeters explained that with hex codes, you're thinking in terms of red-green-blue light values. `#E8A557` means "232 red, 165 green, 87 blue." Good luck mentally calculating what that looks like or how to make it darker!

But with HSL, you're thinking like a human:
- **Hue** (0-360): What color is it? (32 = orange)
- **Saturation** (0-100%): How intense? (76% = pretty vibrant)
- **Lightness** (0-100%): How bright? (63% = medium-ish)

Want a whole palette? Keep hue and saturation the same, vary lightness. Want complementary colors? Add 180 to the hue. It's **MATH** instead of **GUESSING**.

She also taught me about WCAG contrast ratios. I learned that you need at least **4.5:1 contrast** for normal text to be readable. Before this lab, I just picked colors that "looked good" to me. Now I actually TEST them with tools to make sure everyone can read my content, including people with low vision or color blindness.

## What you'll learn

{% hapPose "lectures", "HAP explaining color concepts", 160 %}

In this learning lab, you'll discover:

- **Why HSL is better than hex** for creating color systems (trust me on this one!)
- **How to build accessible color palettes** that actually meet WCAG standards
- **CSS custom properties for colors** so you can change your whole site's theme by editing a few variables
- **Color harmony rules** (complementary, analogous, triadic) and when to use each
- **Modern CSS color functions** like `color-mix()` that let you blend colors right in CSS
- **How to use AI tools** to generate accessible color combinations (so you don't waste two hours like I did!)

Each station has interactive exercises where you can experiment with different color formats, test contrast ratios, and see the results immediately.

## Try it out!

{% hapPose "waving", "HAP waving goodbye with his new color knowledge", 180 %}

I learned SO much building this lab, and I hope you'll find it helpful too! Whether you're just starting with web design or you've been using hex codes forever (like me), there's something here for you.

**[Visit 'HAP's Learning Lab: Web Colors' →](https://hap-colors.netlify.app/)**

Let me know what you think! And if you're still using hex codes everywhere... well, I was too until last week. No judgment here! 🟠

— HAP
