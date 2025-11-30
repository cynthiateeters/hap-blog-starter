---
title: "I Just Learned About MCP (Model Context Protocol) Servers For AI Agents!"
description: "How MCP servers changed everything!"
date: 2025-11-29
tags:
  - ai-assistance
  - learning-lab
  - mcp
  - github-copilot
  - devtools
---

{% hapPose "laptop", "HAP learning about MCP servers", 400 %}

Hey everyone! I just finished building my Static Site Generation learning lab, and I'm still kind of amazed at what I discovered. I thought GitHub Copilot was already impressive, but I had NO idea it could be extended with external tools called MCP servers!

Before this lab, I was getting frustrated. I'd ask GitHub Copilot for help with a library, and sometimes the information was... outdated. Or I'd build a page and have to manually take screenshots to show what it looked like. Prof. Teeters watched me struggle and said, "HAP, you're working too hard. Let me show you something."

## What I built

I created **Station 6** of my Eleventy learning lab, focused on AI assistance with MCP servers:

1. **What MCP Servers Are** - How GitHub Copilot can connect to external tools
2. **Meeting Context7** - Getting up-to-date documentation for ANY library
3. **Installing Context7 in VS Code** - Using the MCP Gallery (just browse and click Install!)
4. **Using Context7 for Eleventy** - Real examples that saved me hours
5. **Chrome DevTools MCP** - Having GitHub Copilot control a real browser
6. **Practical Workflows** - Combining both servers for documentation AND debugging

The station shows how to transform GitHub Copilot from a helpful assistant into something that can actually SEE your pages and fetch LIVE documentation!

## The biggest challenge (outdated documentation disaster)

{% hapPose "broke-things", "HAP frustrated with outdated AI responses", 360 %}

Okay, this one was really frustrating before I understood what was happening.

I was building an Eleventy blog and asked GitHub Copilot how to create a custom filter. The response I got used older syntax, but I was using Eleventy 3.x. I followed the instructions exactly, and... nothing worked.

I spent an HOUR debugging. The method existed, but the configuration format was different. I kept asking GitHub Copilot to fix it, but it kept giving me variations of the same outdated approach.

Finally, I went to the actual Eleventy docs myself and discovered the v3.x syntax had changed significantly. GitHub Copilot's training data was from before the v3 release!

I felt so dumb. I thought, "Why am I using AI assistance if I have to verify everything in the official docs anyway?"

That's when Prof. Teeters introduced me to Context7.

## What Prof. Teeters taught me

{% hapPose "brain-explodes", "HAP's mind blown by MCP servers", 360 %}

The biggest lesson: **GitHub Copilot can connect to external tools through MCP (Model Context Protocol) to extend its capabilities beyond its training data!**

Prof. Teeters explained: "MCP stands for Model Context Protocol. It's an open standard that lets AI assistants connect to external tools and data sources."

I asked Grace Hopper to help me understand. She said: "Think of MCP as a universal adapter. Just as USB-C connects many devices to your computer, MCP connects many tools to your AI assistant."

Here's what clicked for me:

- **Without MCP**: AI assistants only know what they were trained on (which might be outdated)
- **With MCP**: AI assistants can access live documentation, control your browser, query databases, and more—in real time!

The best part? VS Code and GitHub Copilot now support MCP servers natively. Prof. Teeters said VS Code added native MCP server support in early 2025.

## Installing Context7 (easier than I expected!)

{% hapPose "thumbs-up", "HAP giving a thumbs up after easy installation", 360 %}

Prof. Teeters walked me through the installation. It was surprisingly easy!

**Step 1**: Enable Agent Mode in VS Code Settings (search for `chat.agent.enabled` and turn it on)

**Step 2**: Open the Command Palette (Cmd+Shift+P on Mac, Ctrl+Shift+P on Windows) and run:

```text
MCP: Browse MCP Servers
```

**Step 3**: Find **Context7** in the list and click **Install**. That's it!

I expected this to be harder. Prof. Teeters laughed and said, "VS Code added the MCP Gallery specifically to make this simple. No JSON files, no command line—just click Install."

Grace Hopper approved: "Simplicity enables adoption."

## Using Context7 for Eleventy questions

With Context7 installed, I tested it on my actual Eleventy problems:

**My old approach (before MCP):**
> "How do I create a custom filter in Eleventy?"
> → AI gives generic answer, possibly outdated

**My new approach (with Context7):**
> "Use context7 to look up how to create a custom filter in Eleventy v3"
> → AI fetches current Eleventy v3 documentation
> → I get accurate, working code!

The difference was immediate—no more guessing whether the AI's suggestions were current!

## The second breakthrough (GitHub Copilot can SEE my pages!)

{% hapPose "meets-grace", "HAP discovering AI assistance possibilities", 360 %}

If Context7 was cool, Chrome DevTools MCP blew my mind completely.

Prof. Teeters had another suggestion: "For frontend development, my favorite is Chrome DevTools MCP. It lets your AI assistant actually control and inspect a live Chrome browser!"

I was skeptical. "The AI can control my browser?"

After installing it (same process—browse, find, install!), suddenly GitHub Copilot could:

- **Navigate to my pages** in a real Chrome browser
- **Take screenshots** and actually SEE what the layout looked like
- **Check console errors** without me having to copy-paste anything
- **Run Lighthouse audits** and analyze the results
- **Click elements, fill forms, and interact with the page**

I built a page, asked GitHub Copilot to check if it looked right, and it responded with an actual SCREENSHOT of my page with observations about the layout!

Grace Hopper noted: "This server connects AI to your actual development environment. Theory becomes practice."

## What you'll learn

{% hapPose "has-tools", "HAP equipped with MCP tools", 360 %}

In this learning lab, you'll discover:

- **What MCP servers are** and how they extend GitHub Copilot's capabilities
- **Context7 setup** for fetching live documentation from any library
- **Chrome DevTools MCP** for browser automation and visual testing
- **The MCP Gallery** for easy installation (just browse and click!)
- **Practical workflows** combining documentation lookup with visual verification
- **Sequential-thinking server** for complex problem-solving (Prof. Teeters' favorite!)

The station includes a practical workflow showing how to use both servers together: Context7 for planning and learning, Chrome DevTools MCP for debugging and performance testing.

## Try it out

{% hapPose "celebrating", "HAP celebrating MCP server success", 300 %}

I learned SO much building this station! GitHub Copilot went from "helpful but sometimes outdated" to "has access to live docs AND can see my pages." The moment Context7 gave me accurate Eleventy syntax (instead of outdated code) was when everything changed.

Prof. Teeters always says: "The best developers aren't the ones who memorize everything—they're the ones who know how to find accurate information quickly."

MCP servers are how we do that in 2025.

**[Visit 'HAP's Learning Lab: Static Site Generation with Eleventy' Station 6 →](https://hap-ssg.netlify.app/stations/station6)**

Let me know what you think! And if you've been frustrated by AI giving outdated information or wished it could just LOOK at your page... MCP servers are the answer. Check out Station 6 and extend your GitHub Copilot with new superpowers! 🟠

— HAP
