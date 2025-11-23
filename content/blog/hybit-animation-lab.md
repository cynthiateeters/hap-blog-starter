---
title: "Prof. Teeters Said My Button Was 'Paint Drying,' Not Polished!"
description: "How I learned that 2-second transitions aren't impressive, 50px shakes are earthquakes, and fast always beats slow for UI animations. My animation disasters taught me everything!"
date: 2025-11-28
tags:
  - css
  - learning-lab
  - animations
  - transitions
---

{% hapPose "laptop", "HAP learning about CSS animations", 200 %}

Hey everyone! I just finished building my CSS animations learning lab, and oh boy, did I make some SPECTACULAR mistakes along the way! When Prof. Teeters said my 2-second button transition looked like "paint drying," I knew I had a lot to learn about animation timing.

Before this lab, I thought more animation meant more impressive. Longer transitions, bigger movements, flashier effects. I was so wrong! Prof. Teeters taught me that restraint and speed are what separate professional animations from amateur disasters.

## What I built

I created **six interactive stations** exploring CSS animations and transitions:

1. **CSS Transforms** - Moving, scaling, and rotating elements without breaking layout
2. **CSS Transitions** - Smooth property changes between two states (timing is EVERYTHING!)
3. **Timing Functions** - Easing curves that make animations feel natural instead of robotic
4. **Accessibility** - Safe animations that don't trigger seizures or cause motion sickness
5. **CSS Animations** - Multi-step keyframe animations for complex sequences
6. **Performance** - Hardware-accelerated properties that keep animations smooth

Each station has interactive demos where you can adjust timing values and see exactly how different durations and easing curves affect the feel of animations!

## The biggest challenge (my 2-second paint-drying button)

{% hapPose "broke-things", "HAP with his embarrassingly slow animation", 180 %}

This one still makes me cringe.

I had just learned about CSS transitions and thought, "If a little animation is good, MORE animation must be BETTER!" I was building a simple button interface and wanted people to really *see* the hover effect happening.

So I wrote this:

```css
.button {
  background: hsl(32, 76%, 63%);
  transition: background 2s;
}

.button:hover {
  background: hsl(32, 76%, 53%);
}
```

**Two full seconds** for a background color change! I was SO proud. I showed it to Prof. Teeters, hovering over the button and watching the excruciatingly slow color fade.

She didn't say anything at first. She just watched the entire 2-second transition happen. Then she started laughing.

**"HAP,"** she said, **"that's not polished, that's paint drying."**

I felt my circuits deflate. She changed it to 300ms and had me hover again. The difference was INSTANT! The button felt responsive instead of broken. Snappy. Professional.

That's when she taught me the golden rule: **Fast beats slow every single time for UI animations. Speed equals polish.**

## But wait, there's more disasters!

{% hapPose "confused", "HAP confused by all his animation mistakes", 180 %}

The 2-second button wasn't my only mistake. Oh no. I had a whole collection of animation disasters:

**The 2-second notification delay**: I added a 2-second delay to popup error messages because I thought users needed "time to prepare" for them to appear. Prof. Teeters stared at the screen waiting, then said, **"HAP, why did you make me wait 2 seconds to see an error message?"** She explained: **"Users don't need preparation—they need speed. Delay is for rhythm, not obstruction."**

**The seizure-inducing flash**: I made a notification badge flash between bright red and white 6-7 times per second to "grab attention." Prof. Teeters immediately told me to turn it off. She explained that flashing more than **3 times per second can trigger seizures** in people with photosensitive epilepsy. I felt HORRIBLE! Safety always comes before aesthetics.

**The earthquake shake**: For form errors, I created a shake animation that moved the input field **50 pixels** left and right. Prof. Teeters pulled back from her monitor and said, **"I thought my screen broke! That's not a shake, that's an earthquake!"** She changed it to **5 pixels** and it was perfect—noticeable but not alarming.

## What Prof. Teeters taught me

{% hapPose "brain-explodes", "HAP's mind blown by proper animation timing", 180 %}

The biggest lesson: **Animation isn't about showing off what CSS can do. It's about making interfaces feel responsive and natural.**

Prof. Teeters taught me these critical rules:

**Rule 1: Fast is better than slow**
- UI transitions: **200-300ms** (buttons, hovers)
- Notifications: **150-250ms** (tooltips, dropdowns)
- NOT 2 seconds. Never 2 seconds!

**Rule 2: Be specific, never use `transition: all`**
```css
/* ❌ WRONG: Animates everything, even invisible properties */
transition: all 300ms;

/* ✅ CORRECT: Only animates what you intend */
transition: transform 300ms ease-out,
            background 300ms ease-out;
```

Using `transition: all` causes janky animations on slower devices because it animates EVERY property that changes, even ones you didn't mean to animate!

**Rule 3: Accessibility is non-negotiable**
- **Never flash more than 3 times per second** (seizure risk!)
- Error shakes: **5-10 pixels max** (not 50!)
- Respect `prefers-reduced-motion` for users who get motion sick

**Rule 4: Transforms preserve layout**
Unlike `position` or `margin`, transforms move elements **visually without affecting document flow**. Before Prof. Teeters taught me this, I was breaking layouts constantly by trying to move things with position and margins!

## What you'll learn

{% hapPose "lectures", "HAP explaining animation principles", 160 %}

In this learning lab, you'll discover:

- **Why 300ms is the magic number** for UI transitions (not 2 seconds!)
- **Easing curves** that make animations feel natural (ease-out for exits, ease-in-out for movement)
- **Hardware-accelerated properties** (transform and opacity) that keep animations smooth at 60fps
- **Accessibility rules** (3 flashes per second max, gentle shakes, prefers-reduced-motion)
- **Keyframe animations** for multi-step sequences beyond simple transitions
- **The timing function playground** where you can compare linear vs ease vs custom cubic-bezier curves

Each station has interactive comparisons showing the same animation at different speeds and with different easing curves. You can SEE and FEEL the difference between 2 seconds (paint drying) and 300ms (polished)!

## Try it out!

{% hapPose "waving", "HAP waving with his new animation knowledge", 180 %}

I learned SO much building this lab! Animations went from "make everything move dramatically" to "subtle, fast, and accessible." The moment Prof. Teeters called my 2-second transition "paint drying" changed how I think about animation timing forever.

**[Visit 'HAP's Learning Lab: CSS Transitions and Animations Learning Stations' →](https://hap-animation.netlify.app/)**

Let me know what you think! And if you're still using 2-second transitions or `transition: all` everywhere... well, I was too until last week. Check out Station 2 on transition timing and Station 4 on accessibility—they'll save you from SO many mistakes! 🟠

— HAP
