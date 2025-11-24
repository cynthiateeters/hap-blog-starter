---
title: "The Day Prof. Teeters Asked: 'Does This Animation Help Your Users?'"
description: "My journey from making buttons bounce just because I could, to understanding that animations are communication tools—not decoration. Come see what I discovered about purposeful animation!"
date: 2025-11-28
tags:
  - css
  - learning-lab
  - animations
  - transitions
---

{% hapPose "laptop", "HAP learning about CSS animations", 400 %}

Hey everyone! I just finished building my CSS animations learning lab, and honestly? It completely changed how I think about what animations are FOR.

When I started learning animations, I thought they were just about making things look cool. Bouncing buttons! Spinning logos! Sliding menus! Everything moved, everything animated, and I thought that made me a better web developer.

Then Prof. Teeters asked me one question that stopped me cold: **"Does this animation help your users, or is it just showing off what CSS can do?"**

That question led me on a journey from decorative animation to purposeful animation—and I built six learning stations to share everything I discovered.

## What I built

I created **six interactive stations** exploring CSS animations from a completely different perspective than I expected:

1. **CSS Transforms** - Moving, scaling, and rotating elements without breaking layout
2. **CSS Transitions** - Making state changes smooth instead of jarring
3. **Timing Functions** - How easing curves affect how animations *feel*
4. **Micro-interactions** - Helpful feedback for buttons, forms, and toggles
5. **Keyframe Animations** - Multi-step sequences that teach and delight
6. **AI Assistance** - Using AI to help with animations while staying accessible

Each station focuses on *why* animations matter to users, not just *how* to write the code.

## The biggest challenge (my bouncing button disaster)

{% hapPose "broke-things", "HAP realizing his animations don't help anyone", 360 %}

Oh boy, this one really humbled me.

I had just learned CSS keyframe animations and decided to make the COOLEST button you've ever seen. When you hovered over it, the button would:

- Bounce up and down (5 times!)
- Rotate 360 degrees (2 full spins!)
- Change colors through a rainbow gradient
- Scale from 1x to 1.5x and back
- All in 3 seconds!

I was SO proud. I showed it to Prof. Teeters, hovering my cursor and watching my masterpiece perform.

She watched the entire animation. Then she asked:

**"HAP, what does this animation communicate to the user?"**

I said, "That it's interactive! That you can click it!"

She asked, "Does it take 3 seconds of rainbow spinning to communicate that?"

I felt my circuits deflate. She was right. My animation didn't *help* anyone understand what the button did. It didn't make the interface easier to use. It didn't provide helpful feedback. It just... showed off that I could write CSS animations.

She showed me a different approach:

```css
.button {
  background: hsl(32, 76%, 63%);
  transform: scale(1);
  transition: transform 200ms ease-out,
              background 200ms ease-out;
}

.button:hover {
  background: hsl(32, 76%, 53%);
  transform: scale(1.02);
}

.button:active {
  transform: scale(0.98);
}
```

That's it. **200 milliseconds. A 2% scale change. A subtle color shift.**

It felt responsive. Professional. Like it was giving feedback: "I see you hovering. I'm ready to be clicked."

My 3-second rainbow spinner? That was just showing off.

{% hapPose "confused", "HAP rethinking everything he knows about animation", 360 %}

## But wait—when Prof. Teeters showed me the REAL mistakes

The bouncing button wasn't my only problem. I had built a whole demo site full of animations I thought were impressive, and Prof. Teeters walked through it pointing out issues I'd never considered:

**The distracting loader**: I made a loading spinner that bounced, pulsed, changed colors, AND rotated—all at once. Prof. Teeters said, **"This doesn't say 'loading.' It says 'LOOK AT ME LOOK AT ME!' Your users are trying to wait patiently. Why are you yelling at them?"** She taught me that loading animations should be calm and rhythmic, not attention-demanding.

**The mysterious form feedback**: When users submitted a form successfully, I made the entire page flash green for 2 seconds. Prof. Teeters asked, **"Where did the form go? Did it submit? Is the green saying success or is this an error?"** I learned that animations need to *communicate clearly*, not just look pretty. A simple checkmark appearing next to the submit button tells users exactly what happened.

**The menu that takes forever**: My slide-in navigation menu animated for 1.5 seconds. Prof. Teeters started a stopwatch and said, **"Users are trying to navigate. You're making them WAIT to click a link."** She taught me that animations should feel instant for functional UI—around 200-300ms. Slower animations make interfaces feel sluggish.

## What Prof. Teeters taught me

{% hapPose "juggles", "HAP balancing purpose, timing, and accessibility", 360 %}

The biggest lesson: **Animations are communication tools, not decoration.**

Prof. Teeters explained that every animation should answer the question: *What is this telling the user?*

**Good animations communicate:**

- **State change** - "This button is now active"
- **Feedback** - "Your form submitted successfully"
- **Guidance** - "Look here for the next step"
- **System status** - "We're loading your content"
- **Relationship** - "This panel slides out from this button"

**Bad animations just:**

- Show off what CSS can do
- Distract from the actual content
- Slow down user tasks
- Add complexity without purpose

She also taught me about **accessibility and respect**:

**Never flash more than 3 times per second** (seizure risk!)

**Respect `prefers-reduced-motion`** for users who get motion sick:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This tells browsers to skip animations for users who requested reduced motion in their system settings. It's not optional—it's **essential for accessibility**.

**Keep functional animations fast** (200-300ms) so interfaces feel responsive, not sluggish.

She taught me that animation timing isn't about what looks coolest to me as the developer. It's about what *helps users* complete their tasks confidently and comfortably.

## What you'll learn

{% hapPose "has-tools", "HAP ready with animation tools and principles", 360 %}

In this learning lab, you'll discover:

- **Why transforms are the foundation** of performant animations (they don't affect document flow!)
- **How timing functions change how animations feel** (not just how long they take)
- **What makes micro-interactions helpful** vs distracting (buttons, forms, toggles that actually assist users)
- **When to use keyframe animations** for multi-step sequences (and when NOT to)
- **How to optimize for 60fps** using GPU-accelerated properties (transform and opacity)
- **Why accessibility isn't optional** (reduced motion, seizure safety, respectful timing)

Each station focuses on making animations that **help** people, not animations that just **impress** people.

The whole lab follows the philosophy Prof. Teeters taught me: Before you animate something, ask yourself *"Does this help my users, or am I just showing off?"*

## Try it out

{% hapPose "tools-wave", "HAP ready with purposeful animation skills", 300 %}

I learned SO much building this lab! Animations went from "make things bounce because I can" to "communicate state changes clearly and accessibly." The moment Prof. Teeters asked if my animations *helped* users changed everything for me.

**[Visit 'HAP's Learning Lab: CSS Transitions and Animations Learning Stations' →](https://hap-animation.netlify.app/)**

Want to see what purposeful animation looks like? Start with Station 1 to learn transforms (the foundation), then work through the stations to see how I learned to make animations that actually *help* people instead of just looking cool. 🟠

— HAP
