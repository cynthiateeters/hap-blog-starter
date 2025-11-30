---
title: "Web feeds (RSS/Atom)"
description: "How web feeds work and how this site generates an Atom feed."
order: 9
---

<div class="docs-callout docs-callout--official">
  <p class="docs-callout__title">📚 Official Eleventy docs</p>
  <div class="docs-callout__content">
    <ul>
      <li><a href="https://www.11ty.dev/docs/plugins/rss/" target="_blank" rel="noopener">RSS Plugin</a> — Feed generation for Eleventy</li>
      <li><a href="https://aboutfeeds.com/" target="_blank" rel="noopener">About Feeds</a> — Beginner-friendly explanation of RSS</li>
    </ul>
  </div>
</div>

## What are web feeds?

Web feeds (RSS or Atom) deliver content in a standardized XML format that feed reader applications can parse. Feeds automatically update when new content is published, allowing subscribers to see new posts without visiting the site directly.

Think of it as a subscription service for websites—readers add your feed URL to their feed reader app, and your posts appear alongside content from other sites they follow.

**Comparison to other methods:**

| Method | User control | Privacy | Algorithm |
|--------|--------------|---------|-----------|
| Web feeds | Full | High | None |
| Email newsletter | Medium | Low | None |
| Social media | Low | Low | Yes |

## RSS vs Atom

Both RSS and Atom are XML-based syndication formats. Most feed readers support both.

| Feature | RSS | Atom |
|---------|-----|------|
| Created | 1999 | 2003 |
| XML format | Less strict | More standardized |
| Common use | Podcasts | Blogs |
| Support | Universal | Universal |

This site uses Atom format.

## How this site creates feeds

**Plugin:** `@11ty/eleventy-plugin-rss`

**Configuration** in `eleventy.config.js`:

```javascript
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

eleventyConfig.addPlugin(feedPlugin, {
  type: "atom", // or "rss", "json"
  outputPath: "/feed/feed.xml",
  stylesheet: "pretty-atom-feed.xsl",
  templateData: {
    eleventyNavigation: {
      key: "Feed",
      order: 4
    }
  },
  collection: {
    name: "posts",
    limit: 10,
  },
  metadata: {
    language: "en",
    title: "HAP's Learning Lab Blog",
    subtitle: "Join HAP (HyBit A. ProtoBot) as he shares his journey...",
    base: "https://hap-blog.netlify.app/",
    author: {
      name: "HAP (HyBit A. ProtoBot)"
    }
  }
});
```

## Configuration options

| Option | Purpose | This site's value |
|--------|---------|-------------------|
| `type` | Feed format | `"atom"` |
| `outputPath` | Output file location | `"/feed/feed.xml"` |
| `stylesheet` | XSL for browser display | `"pretty-atom-feed.xsl"` |
| `collection.name` | Which collection to use | `"posts"` |
| `collection.limit` | Max entries (0 = unlimited) | `10` |
| `metadata.title` | Feed title | Blog name |
| `metadata.base` | Site base URL | Production URL |

## The generated feed

**URL:** `/feed/feed.xml`

**Contents:**

- Feed metadata (title, subtitle, author)
- Links to 10 most recent blog posts
- Full HTML content of each post
- Publication dates in RFC 3339 format

**Pretty stylesheet:** The `pretty-atom-feed.xsl` file transforms raw XML into readable HTML when viewed in a browser. Without it, browsers display raw XML.

## Subscribing to feeds

### Steps

1. Copy the feed URL: `https://hap-blog.netlify.app/feed/feed.xml`
2. Open a feed reader application
3. Add new subscription with the URL

### Popular feed readers

| Reader | Platform | Cost |
|--------|----------|------|
| [Feedly](https://feedly.com/) | Web | Free tier |
| [Inoreader](https://www.inoreader.com/) | Web | Free tier |
| [NetNewsWire](https://netnewswire.com/) | Mac/iOS | Free |
| [The Old Reader](https://theoldreader.com/) | Web | Free |

## Customizing the feed

**Change feed format:**

```javascript
type: "rss", // Switch from Atom to RSS 2.0
```

**Include more posts:**

```javascript
collection: {
  name: "posts",
  limit: 25, // Show 25 instead of 10
},
```

**Change output location:**

```javascript
outputPath: "/rss.xml", // Different URL
```

**Unlimited entries:**

```javascript
collection: {
  name: "posts",
  limit: 0, // All posts
},
```

## Learn more

- [Eleventy RSS Plugin](https://www.11ty.dev/docs/plugins/rss/)
- [About Feeds](https://aboutfeeds.com/)
- [Atom Syndication Format (RFC 4287)](https://www.ietf.org/rfc/rfc4287.txt)
