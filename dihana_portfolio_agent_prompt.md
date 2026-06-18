# 🚀 Agent Prompt — Transform Positivus Theme into Dihana Febin's Portfolio Website

---

## 🎯 YOUR MISSION

You are transforming the **Positivus marketing agency theme** (built with Astro) into a **stunning personal portfolio website** for **Dihana Febin**, a Digital Marketer from Kerala, India. This is a full content + design overhaul — every text, color, section, and component must be updated to reflect her brand, personality, and expertise.

Work **file by file, section by section**. After each major change, confirm what was done before moving to the next task.

---

## 👩 ABOUT DIHANA FEBIN (The Person You're Building For)

- **Name:** Dihana Febin
- **Role:** Digital Marketer
- **Company:** Iberr Technologies LLP (Perintalmanna, Kerala, India)
- **LinkedIn:** https://www.linkedin.com/in/dihanafebin/
- **Location:** Kerala, India
- **Education:** B.Com — University of Calicut (2021–2024)
- **Experience:** Online Marketer at Iberr Technologies LLP · Full-time · Oct 2025 – Present (9 months)
- **Tagline:** *"Strategy. Creativity. Results That Grow."*
- **Personal Bio:**
  > "Digital marketing is how I think, not just what I do. I'm a Digital Marketer at Iberr Technologies LLP, building brand presence through content, campaigns, and creative strategy. I work with Photoshop, Illustrator, SEO, and Meta Ads — blending creativity with data to make marketing that actually connects. B.Com graduate from the University of Calicut. Passionate about putting the right message in front of the right people. Always learning. Always creating."

### Her Core Skills:
- Adobe Photoshop
- Adobe Illustrator
- Digital Marketing
- Social Media Marketing (Instagram, Facebook, LinkedIn)
- SEO & Content Strategy
- Meta Ads & Google Ads
- Graphic Design
- Content Creation (graphics, reels, ad copies)
- Campaign Analytics & Reporting
- Brand Strategy

### Certifications:
- Digital Marketing Course Completion — ETUDEMY (Jan 2025) · Credential ID: EDDM022-579
- Graphic Designing Professional — ETUDEMY (Mar 2025) · Credential ID: EDP025-651

---

## 🎨 DESIGN DIRECTION

### Color Palette (keep Positivus structure, update colors):
- **Primary Accent:** `#B9FF66` (lime green — keep from Positivus, it's fresh and digital-feeling)
- **Dark Background:** `#191A23` (keep)
- **White/Light:** `#FFFFFF` and `#F3F3F3`
- **Accent Cards:** Alternate between dark `#191A23`, lime `#B9FF66`, and white `#FFFFFF` card backgrounds

### Typography:
- Keep the existing bold, modern font stack from Positivus
- Hero heading should be large and punchy
- Use highlight/pill styling on keywords (like the original theme does with colored backgrounds on words)

### Tone:
- Professional but warm and approachable
- Creative and confident — she's a marketer who knows her craft
- No corporate jargon — real, human language

---

## 📁 FILES TO MODIFY (Astro Project Structure)

Start by exploring the project with `ls` and `find` to understand the file structure, then work through these areas:

```
src/
  pages/
    index.astro          ← Main homepage (primary focus)
    about.astro          ← About page
    services.astro       ← Services page (repurpose as "What I Do")
    pricing.astro        ← Remove or repurpose as "Hire Me"
    articles.astro       ← Blog (keep or repurpose)
  components/
    (all section components)
  layouts/
    (base layout)
  data/
    (any JSON/TS data files)
public/
  (images, logos, etc.)
```

---

## ✏️ SECTION-BY-SECTION CONTENT CHANGES

### 1. 🔝 NAVIGATION BAR
**Current:** Logo | About us | Services | Use Cases | Pricing | Blog | [Request a quote button]

**Change to:**
- **Logo/Name:** `Dihana Febin` (text logo or keep image slot for her photo-based logo)
- **Nav Links:** `About` | `Skills` | `Work` | `Process` | `Contact`
- **CTA Button:** Change `Request a quote` → `Hire Me` (link to contact section)
- Remove the GitHub link from the button href, point to `#contact`

---

### 2. 🦸 HERO SECTION
**Current:** "Navigating the digital landscape for success" — agency copy

**Change to:**

**Headline:**
```
Hi, I'm Dihana —
A Digital Marketer
Who Makes Brands
Actually Connect.
```
*(Apply the Positivus highlight/colored-background pill effect on "Digital Marketer")*

**Subheadline:**
```
Strategy. Creativity. Results That Grow.
I blend SEO, Meta Ads, content, and design to build
brand presence that people actually notice.
```

**CTA Buttons:**
- Primary: `View My Work` → scrolls to #work section
- Secondary: `Let's Connect` → scrolls to #contact section

**Hero Image:** Replace the existing SVG illustration with a creative digital marketing themed illustration or keep a similar abstract marketing/digital graphic. If there's a placeholder slot, note it for the client to add their photo.

**Remove:** The company logo ticker strip (Amazon, Netflix, etc.) — replace with a **skills badge strip** showing:
`Photoshop · Illustrator · SEO · Meta Ads · Social Media · Content Creation · Google Ads · Analytics`
(styled as pill/tag badges in lime green and dark)

---

### 3. 🛠️ SERVICES SECTION → Rename to "What I Do"
**Current heading:** "Services" + "At our digital marketing agency..."

**Change to:**
- **Section Label:** `What I Do`
- **Heading:** `My Marketing Services`
- **Subtext:** `From strategy to execution — here's how I help brands grow online.`

**Service Cards (6 cards) — Update ALL titles and descriptions:**

| Card | Title | Description |
|------|-------|-------------|
| 1 | **Social Media Marketing** | Managing and growing brand accounts on Instagram, Facebook, and LinkedIn through consistent, engaging content strategies. |
| 2 | **SEO & Content Strategy** | Driving organic traffic with keyword research, on-page SEO, and content that ranks and resonates with the right audience. |
| 3 | **Meta & Google Ads** | Planning and executing targeted paid ad campaigns on Meta and Google — optimized for reach, clicks, and conversions. |
| 4 | **Graphic Design** | Creating scroll-stopping visuals — from social media graphics and reels to brand assets — using Photoshop and Illustrator. |
| 5 | **Content Creation** | Producing engaging ad copies, captions, blogs, and creative content that tells your brand's story effectively. |
| 6 | **Campaign Analytics** | Tracking performance with analytics tools and turning data into actionable insights through clear, detailed reports. |

**Update card button text** from `Service Info` → `Learn More`

---

### 4. 💼 CTA BANNER SECTION
**Current:** "Let's make things happen" — agency offer

**Change to:**
- **Heading:** `Ready to grow your brand online?`
- **Subtext:** `Let's work together to build a strategy that puts your brand in front of the right people — at the right time.`
- **Button:** `Get in Touch` → links to #contact
- Keep the illustration slot (or swap with a different creative visual)

---

### 5. 📊 CASE STUDIES SECTION → Rename to "My Work"
**Current:** Generic agency case studies

**Change heading to:** `My Work`
**Subtext:** `Real projects. Real results.`

**Update the 3 case study cards:**

| Card | Content |
|------|---------|
| 1 | **Social Media Growth Campaign** — Managed and grew Instagram and Facebook accounts for a local brand, resulting in increased engagement through consistent content calendars and creative reels. |
| 2 | **SEO Content Strategy** — Developed and executed an SEO-driven content plan that improved organic visibility and website traffic for a client through targeted keyword content. |
| 3 | **Meta Ads Campaign** — Planned and ran a paid Meta Ads campaign for a business, tracking performance and optimizing for improved reach and lead generation results. |

**Update card link text** from `Case Info` → `View Details`

---

### 6. ⚙️ WORKING PROCESS SECTION → Rename to "How I Work"
**Current:** 6 generic agency steps

**Keep the accordion/expand structure, update ALL step content:**

| Step | Title | Content |
|------|-------|---------|
| 01 | **Discovery Call** | We start with a conversation. I learn about your brand, your goals, your audience, and what you've tried before. This gives me the full picture before I touch anything. |
| 02 | **Research & Strategy** | I dive deep into your industry, competitors, and audience. Then I build a clear marketing strategy — the roadmap for everything we'll do together. |
| 03 | **Content & Creative** | I get to work — designing graphics, writing copy, creating reels, and building the creative assets your brand needs to stand out. |
| 04 | **Launch & Execute** | Campaigns go live. Content gets published. Ads start running. I manage everything to make sure execution is smooth and on-brand. |
| 05 | **Track & Optimize** | I monitor performance daily — tracking metrics, analyzing what's working, and making real-time adjustments to maximize results. |
| 06 | **Report & Refine** | You get a clear, easy-to-understand report on what happened, what worked, and what we'll do even better next time. |

---

### 7. 👥 TEAM SECTION → Convert to "About Me" Section
**Current:** Team grid with 6 fictional members

**Completely repurpose this section as a personal "About Me" section:**

- **Section heading:** `About Me`
- **Remove** the team grid entirely
- **Replace with a two-column layout:**
  - Left: Photo placeholder (large, styled with rounded border or orange ring like her LinkedIn profile picture style) + her name + title
  - Right: Bio text + stats/highlights

**Bio text:**
```
I'm Dihana Febin, a Digital Marketer based in Kerala, India,
currently working at Iberr Technologies LLP.

Digital marketing is how I think — not just what I do.
Every day, I'm building brand presence through content,
campaigns, and creative strategy that actually connects with people.

I work with Photoshop, Illustrator, SEO, and Meta Ads,
blending creativity with data to make marketing that cuts through
the noise. I'm a B.Com graduate from the University of Calicut,
and I'm always learning, always creating.

My mission? Putting the right message in front of the right people.
```

**Add 3 highlight stats below the bio (styled as bold numbers):**
- `9+ Months` — Professional Experience
- `2 Certifications` — Digital Marketing & Graphic Design
- `500+ Connections` — LinkedIn Network

**Add LinkedIn button:** `Connect on LinkedIn` → https://www.linkedin.com/in/dihanafebin/

---

### 8. ⭐ TESTIMONIALS SECTION
**Current:** 6 fictional testimonials from "Positivus" clients

**Update heading to:** `Kind Words`
**Subtext:** `What people say about working with me.`

**Replace testimonials with these (realistic, appropriate for an early-career marketer):**

```
Testimonial 1:
"Dihana's content strategy for our Instagram completely transformed 
our online presence. Her creativity and consistency are impressive 
for someone so early in their career."
— Marketing Manager, Iberr Technologies LLP

Testimonial 2:
"Working with Dihana on our Meta Ads campaign was a great experience. 
She's detail-oriented, proactive, and genuinely passionate about 
getting results."
— Client, Iberr Technologies LLP

Testimonial 3:
"Dihana designed our social media graphics and the quality was 
outstanding. She understands both the design and the marketing 
side — a rare combination."
— Team Member, Iberr Technologies LLP
```

*(Note: Keep only 3 testimonials, remove the extra 3 to keep it honest and realistic for her experience level)*

---

### 9. 📬 CONTACT SECTION
**Current:** Generic "Contact Us" with agency copy

**Update:**
- **Heading:** `Let's Work Together`
- **Subtext:** `Have a project in mind? Want to grow your brand online? I'd love to hear from you.`
- **Radio options:** Change `Say Hi` / `Get a Quote` → `Say Hello` / `Collaborate`
- **Form fields:** Keep Name, Email, Message
- **Submit button:** `Send Message`

**Update footer contact details:**
- Email: `dihanafebin@gmail.com` *(placeholder — confirm actual email)*
- LinkedIn: https://www.linkedin.com/in/dihanafebin/
- Location: `Kerala, India`
- Remove phone placeholder or replace with LinkedIn

---

### 10. 🔻 FOOTER
**Current:** Positivus branding + agency nav links

**Update:**
- **Logo/Name:** `Dihana Febin`
- **Tagline:** `Strategy. Creativity. Results That Grow.`
- **Nav links:** `About` | `Skills` | `Work` | `Process` | `Contact`
- **Social icons:** Link to her LinkedIn (https://www.linkedin.com/in/dihanafebin/), Instagram, Facebook
- **Copyright:** `© 2025 Dihana Febin. All rights reserved.`
- Remove credits to Positivus/Manul

---

## 🎨 ADDITIONAL DESIGN TASKS

### Add a Skills Section (New — between "What I Do" and "CTA Banner")
Create a new section with:
- **Heading:** `Skills & Tools`
- **Subtext:** `The tools and techniques I use to build brands.`
- Display skills as styled pill/badge cards in two rows:
  - Row 1 (Industry Knowledge): Digital Marketing · Social Media Marketing · SEO · Content Strategy · Meta Ads · Google Ads · Brand Strategy
  - Row 2 (Tools & Technologies): Adobe Photoshop · Adobe Illustrator · Meta Business Suite · Google Analytics · Canva · Content Calendar Management

### Update Page Title & Meta Tags
In the layout file, update:
```html
<title>Dihana Febin — Digital Marketer | Kerala, India</title>
<meta name="description" content="Dihana Febin is a Digital Marketer at Iberr Technologies LLP, specializing in social media marketing, SEO, Meta Ads, and creative content strategy. Based in Kerala, India." />
<meta name="keywords" content="Digital Marketer Kerala, Social Media Marketing, SEO, Meta Ads, Content Strategy, Dihana Febin" />
```

### Update the Site Logo
- Replace `Positivus` logo text/SVG with text: **"Dihana Febin"** styled in bold
- Or keep logo as a placeholder for her to add her personal branding later
- Add her tagline in smaller text: `Digital Marketer`

### Remove or Repurpose the Pricing Page
- If the project has a `pricing.astro` page — either delete it or convert it to a **"Hire Me"** page with:
  - Heading: `Let's Work Together`
  - Description of what she offers as a freelance/collaborative marketer
  - A contact CTA button

---

## ✅ EXECUTION ORDER

Work in this order for maximum efficiency:

1. **Explore project structure** — list all files, understand components
2. **Update `src/layouts/`** — page title, meta tags, font/color variables
3. **Update navigation** — component file for navbar
4. **Update Hero section** — headline, subtext, CTAs, remove logo strip
5. **Add Skills badge strip** below hero (or update logo strip component)
6. **Update Services section** — all 6 card titles and descriptions
7. **Update CTA Banner** — heading, subtext, button
8. **Update Case Studies** — all 3 cards
9. **Update Working Process** — all 6 steps
10. **Overhaul Team section → About Me** — structural change
11. **Add Skills & Tools section** — new section
12. **Update Testimonials** — 3 testimonials only
13. **Update Contact section** — heading, subtext, details
14. **Update Footer** — name, tagline, links, copyright
15. **Update all remaining pages** (about, services, pricing if exists)
16. **Final review** — search for any remaining "Positivus" or agency references and replace

---

## 🔍 IMPORTANT NOTES FOR THE AGENT

- **Search for ALL instances** of "Positivus", "agency", "our team", "our company", "we offer", "our services" and replace with personal/individual language ("I", "my", "Dihana")
- **Do NOT break** the existing Astro component structure — work within it
- **Preserve** the Positivus design system (lime green accents, dark cards, white cards, bold headings, pill-style highlighted words) — only change CONTENT and specific colors where noted
- If data is stored in **separate JSON or TypeScript data files**, update those instead of hardcoding in `.astro` files
- After all changes: **run `npm run dev`** (or equivalent) to verify no build errors
- If any component needs to be **structurally rebuilt** (like the Team → About Me conversion), do it carefully and ensure responsive layout is preserved

---

## 💬 FINAL GOAL

When complete, this site should feel like **Dihana's personal brand on the internet** — professional, creative, and authentically hers. A recruiter, client, or collaborator landing on this page should immediately understand who she is, what she does, and why they should work with her.

Good luck! Build something she'll be proud to share. 🎯
