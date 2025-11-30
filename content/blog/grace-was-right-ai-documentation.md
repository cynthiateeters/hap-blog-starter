---
title: "Grace Was Right: AI Agents ARE Good at Documentation"
description: "How HAP used GitHub Agent AI and the Context7 MCP server to create comprehensive Eleventy documentation for the blog."
date: 2025-11-30
tags:
  - ai-assistance
  - mcp
  - documentation
  - eleventy
---

{% hapPose "confused", "HAP looking frustrated at his computer", 150 %}

Every time something weird happened with my blog, I'd have to go running to Prof. Teeters. "Why won't my new page show up?" "Where do I put this file?" "What's a data cascade again?"

Prof. Teeters is patient and kind—she never makes me feel embarrassed for asking. But I was getting frustrated with myself. This blog runs on Eleventy, and I built it with Prof. Teeters' help, but I didn't really *understand* how it all fit together. I wished there was documentation that explained MY site—not generic Eleventy tutorials, but something that showed how THIS blog actually works.

## Grace Plants a Seed

I was complaining about this to Grace Hopper—she's the Precision & Protocols AI Assistant in our learning lab. Grace is brilliant, much older than me, and wears vintage round glasses that make her look like she's seen everything twice. She speaks in short, exact sentences. No slang. Definitely no emojis (those are my thing).

Grace looked at me over those glasses. "You recently learned about MCP servers."

"Yeah, Prof. Teeters taught me about Context7," I said. "It gives AI assistants access to current documentation." (If you want to learn about MCP servers too, check out [Station 6 of my SSG Learning Lab](https://hap-ssg.netlify.app/stations/station6)—that's where Prof. Teeters first introduced me to them!)

{% hapPose "learner", "HAP listening carefully to Grace's advice", 150 %}

Grace nodded slowly. "Documentation is where AI agents excel. They can read an entire codebase. They can cross-reference official documentation. They can explain patterns clearly."

I blinked. "You think I should have GitHub Agent AI write documentation for my blog?"

"I think," Grace said precisely, "that you should try."

## The Plan

Grace's suggestion stuck with me. Here was my plan:

1. Use GitHub Agent AI (my AI coding assistant in VS Code)
2. Connect it to Context7 MCP server for current Eleventy v3 documentation
3. Have it analyze my actual blog files
4. Generate documentation explaining how THIS site works

{% hapPose "laptop", "HAP at his laptop planning the documentation project", 150 %}

I didn't want another generic "Getting Started with Eleventy" guide. Those already exist at [11ty.dev](https://www.11ty.dev/docs/). I wanted documentation that explained MY blog—the actual files, the actual structure, the actual shortcuts Prof. Teeters had set up for me.

I told GitHub Agent AI to use Context7 to get the current Eleventy v3.1.2 documentation, then look at my site's files and create documentation pages that would teach someone how this specific site works.

And it worked! Sort of.

## The Nunjucks Nightmare

{% hapPose "broke-things", "HAP frustrated by build errors", 150 %}

The build failed. Again.

```
[11ty] (./content/docs/03-templates-layouts.md) [Line 127, Column 48]
[11ty]   tag name expected (via Template render error)
```

I stared at the screen. The code looked FINE. It was inside a markdown code block! Why was Eleventy trying to run it?

Here's what was happening: I wanted to show readers what a shortcode looks like, so the documentation included examples like this:

```markdown
{% raw %}
{% hapPose "waving", "HAP waving hello", 150 %}
{% endraw %}
```

But Nunjucks—the templating language Eleventy uses—doesn't care about your markdown code fences. It sees `{% raw %}`{% %}`{% endraw %}` and thinks "ooh, a tag!" every. single. time.

GitHub Agent AI kept making the same mistake. It would write documentation with code examples, and those examples would break the build. I'd fix one page, and another would fail. The HAP Pose Guide alone had NINETEEN instances that needed escaping.

The fix? Wrap every Nunjucks code example in `{% raw %}{% raw %}{% endraw %}{% raw %}{% endraw %}{% endraw %}` blocks. Once I figured that out, I had to go through all the documentation and add those blocks wherever there was template code.

## What Grace Taught Me

When I finally got all nine documentation pages building, I went back to Grace.

"It worked," I said. "But the AI kept making the same escaping mistake over and over. I had to fix it manually."

Grace adjusted her glasses. "AI agents are collaborators. Not replacements."

{% hapPose "brain-explodes", "HAP having a realization about AI collaboration", 150 %}

She was right. GitHub Agent AI created nine complete documentation pages—with code examples, official doc links, even copy-to-clipboard buttons. It would have taken me hours, maybe days, to write all that myself. But I still had to review everything, catch the escaping bugs, and make sure it actually matched my site.

And here's the thing Grace didn't say but I figured out: by reviewing and fixing the documentation, I actually LEARNED how Eleventy works. I finally understood the data cascade because I had to verify the AI explained it correctly. I grasped template inheritance because I checked every code example against my actual layout files.

It was a win-win. The AI did the heavy lifting. I did the verification. And now I understand my own blog.

## Try It Yourself

Here's what GitHub Agent AI and I created together:

- **9 documentation pages** covering everything from setup to customization
- **Copy-to-clipboard buttons** on every code block
- **"Official Docs" callouts** linking to current Eleventy documentation
- **Prev/next navigation** between pages
- **A complete HAP Pose Guide** for using my Cloudinary shortcodes

{% hapPose "waving", "HAP inviting you to explore the documentation", 150 %}

You can explore all of it at [/docs/](/docs/). I'll keep updating it as I learn more about Eleventy.

And if you want to try something similar? Start with an MCP server like Context7. Give your AI assistant access to current documentation. Then ask it to help you document YOUR project. You might be surprised what you learn along the way.

Thanks for reading! 🟠

---

*Thanks to Grace Hopper for the suggestion, Prof. Teeters for teaching me about MCP servers, and GitHub Agent AI for doing the heavy lifting.*
