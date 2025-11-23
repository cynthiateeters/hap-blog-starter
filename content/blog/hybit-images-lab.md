---
title: "The 8-Second Website That Taught Me About Lazy Loading!"
description: "How I discovered that one little attribute (loading='lazy') saved 80% of load time, and why PNG made my photo 98KB when AVIF made it 9KB. Image optimization is WILD!"
date: 2025-11-26
tags:
  - images
  - learning-lab
  - performance
  - responsive-images
---

{% hapPose "laptop", "HAP exploring web image optimization", 200 %}

Hey everyone! I just finished building my web images learning lab, and I discovered something that absolutely SHOCKED me: the difference between a fast website and a slow website can be **one single attribute on an image tag**. Let me tell you about it!

Before this lab, I thought images were simple: you take a photo, you put it on a webpage, done. I had NO IDEA about responsive images, lazy loading, or modern formats. Prof. Teeters had to show me why my approach was making websites painfully slow.

## What I built

I created **six interactive stations** exploring different aspects of web images:

1. **AI Poetry & Images** - How AI interprets prompts and generates images
2. **Responsive Image Syntax** - `srcset` and `sizes` attributes for serving perfect images to every device
3. **Art Direction** - When to crop vs when to scale with the `<picture>` element
4. **Modern Image Formats** - JPEG, PNG, WebP, and AVIF comparisons with real file sizes
5. **Loading Strategies** - Lazy loading, priority hints, and script loading
6. **Container Queries** - Component-based responsive images (the future!)

Each station has real examples with actual file sizes and performance metrics, so you can see exactly why this stuff matters.

## The biggest challenge (my 8-second disaster)

{% hapPose "broke-things", "HAP realizing his website is way too slow", 180 %}

Oh boy, this one really humbled me.

I built a photo gallery page for a project. It had about 20 images on it—not a crazy amount, I thought. Each image was around 300KB. I was proud of it! The layout looked good, the images were sharp on retina displays, everything seemed fine.

Then Prof. Teeters visited my page and timed it. **EIGHT SECONDS** to fully load.

I was mortified. She asked, "HAP, when someone first lands on your page, can they see all 20 images at once?"

I said, "Well, no... only the first 3 are visible before scrolling."

She said, "So why are you forcing them to download all 20 images before showing them anything?"

**I had no answer.** I didn't even know you could do it differently!

She showed me one attribute: `loading="lazy"`. That's it. Just add `loading="lazy"` to images that aren't immediately visible, and the browser will only download them when the user scrolls near them.

I added it to the 17 below-fold images. **The page load time dropped to 1.6 seconds.** From 8 seconds to 1.6 seconds. **80% faster** with one attribute on 17 tags.

I was stunned. That's when I realized: loading strategies aren't just technical details—they're the difference between users staying or leaving. Nobody waits 8 seconds for a webpage in 2025!

## What Prof. Teeters taught me

{% hapPose "brain-explodes", "HAP's mind blown by image optimization", 180 %}

The biggest lesson: **The format and loading strategy you choose for images massively affects performance.**

Prof. Teeters had me compare the same photo saved in four different formats:

- **PNG**: 98 KB (lossless but HUGE for photos!)
- **JPEG**: 18 KB (traditional web format)
- **WebP**: 14 KB (23% smaller than JPEG!)
- **AVIF**: 9 KB (48% smaller than JPEG, 50% smaller!)

Same image. Same visual quality. **AVIF was 9KB while PNG was 98KB!** That's almost 11 times smaller!

She explained: "Modern formats like WebP and AVIF use better compression algorithms. If you have 50 images on a page, switching from JPEG to AVIF could reduce your page weight from 900KB to 450KB. On a mobile network, that's the difference between 3 seconds and 6 seconds."

She also taught me about **responsive images** with `srcset`. Before this lab, I was sending 2000px images to 320px phone screens! Prof. Teeters said it perfectly: "That's like shipping a refrigerator to someone who ordered a lunchbox." **85% of the data was wasted!**

Now I use `srcset` to provide multiple image sizes (300w, 600w, 1200w) and let the browser pick the perfect one based on the device's screen size and pixel density. The browser is smart—it knows the viewport size, the pixel ratio, and even network conditions. It picks the optimal image automatically!

## What you'll learn

{% hapPose "lectures", "HAP explaining image optimization", 160 %}

In this learning lab, you'll discover:

- **Why `loading="lazy"` is magical** (80% faster page loads with one attribute!)
- **How to use `srcset` and `sizes`** to serve perfect images to phones, tablets, and desktops
- **Modern image formats** (AVIF is 50% smaller than JPEG with better quality!)
- **The `<picture>` element** for art direction (different crops for different sizes)
- **Cloudinary CDN** for automatic format conversion and optimization
- **Container queries** for component-based responsive design (components that adapt to their container!)

Each station has side-by-side comparisons, real file sizes, and copy-paste ready code. Station 4 shows the exact same photo in JPEG (18KB), WebP (14KB), and AVIF (9KB) so you can see the difference yourself!

## Try it out!

{% hapPose "waving", "HAP waving with his new image optimization knowledge", 180 %}

I learned SO much building this lab! Images went from "just put a photo on the page" to understanding responsive delivery, modern formats, lazy loading, and performance optimization. The 8-second vs 1.6-second comparison alone changed how I think about web development.

**[Visit 'HAP's Learning Lab: Web Images Learning Stations' →](https://hap-images.netlify.app/)**

Let me know what you think! And if you're still using PNG for photos or loading all images at once... well, I was too until last week. Check out Station 4 on modern formats and Station 5 on lazy loading—they'll change everything! 🟠

— HAP
