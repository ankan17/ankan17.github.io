---
name: Ankan Poddar Portfolio
description: A senior engineer's site as one terminal session in Barcelona blue and garnet.
colors:
  ground: "#060c1f"
  chrome: "#0e1a3d"
  line: "#2a3b6b"
  text: "#f4f6fb"
  soft: "#c9d3ec"
  link: "#8db8f2"
  garnet: "#a50044"
  blue: "#004d98"
  gold: "#edbb00"
  ink: "#0e1a33"
  code-well: "#1e2126"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Mono Variable, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(28px, 5.4vw, 46px)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Atkinson Hyperlegible Mono Variable, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.3
  title:
    fontFamily: "Atkinson Hyperlegible Mono Variable, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Atkinson Hyperlegible Mono Variable, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible Mono Variable, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  dot: "50%"
  none: "0px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "32px"
  xl: "56px"
  bar: "48px"
  status: "44px"
components:
  prompt-segment-garnet:
    backgroundColor: "{colors.garnet}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 16px"
  prompt-segment-blue:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 16px"
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "13px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.ink}"
  title-bar:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.soft}"
    height: "48px"
  status-bar:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    height: "44px"
  status-item-current:
    backgroundColor: "{colors.garnet}"
    textColor: "#ffffff"
    padding: "0 22px"
  project-figure:
    backgroundColor: "{colors.code-well}"
    textColor: "{colors.link}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
    height: "128px"
---

# Design System: Ankan Poddar Portfolio

## Overview

**Creative North Star: "The Session"**

The whole site is one terminal session. Every page is a command and its printed output: a prompt line, then the content, then a cursor waiting at the end. Nothing from the terminal world is decoration; the title bar, prompt segments, directory listing, README-style case study and status-bar navigation each do a terminal job. The football lives only in the colors (Barcelona blue and garnet); copy stays strictly professional and no crest or club imagery appears.

The ground is deep navy with white and pale blue text. Garnet is too dark to read as text on navy, so it appears only as a solid block carrying white text. Gold is rationed to the live cursor, focus rings, and the one primary action. One self-hosted monospace family carries everything. Depth is flat: structure comes from solid chrome bars, hairline borders and tonal steps of navy.

**Key Characteristics:**
- One monospace family, hierarchy by size and weight only.
- Solid color blocks (garnet, blue) with white text; no gradients, no shadows, square corners.
- Gold means "act here or look here": primary button, cursor, focus ring.
- Navigation is a fixed status bar with numbered items (1 home, 2 work, 3 experience, 4 contact), also bound to number keys.
- CSS-only motion: typed first command, blinking cursor, short view transitions; all static under reduced motion.

## Colors

A navy ground with a pale-blue reading ramp, two Barcelona block colors, and a single gold signal.

### Primary
- **Blaugrana Blue** (#004d98): the prompt path segment, the status bar ground, the square bullets in point lists, the third title-bar dot. Always a fill with white text, never text on navy.
- **Garnet Block** (#a50044): the prompt handle segment, the current-page item in the status bar, text selection, the first title-bar dot. Fill only, white text on top; never used as text or border on navy.

### Secondary
- **Cursor Gold** (#edbb00): the live block cursor, the primary action fill, focus rings, the skip link, the second title-bar dot. Appears on a small share of any screen.

### Neutral
- **Deep Navy Ground** (#060c1f): page and body background.
- **Chrome Navy** (#0e1a3d): the title bar fill, and the browser theme color.
- **Rule Navy** (#2a3b6b): hairline borders on figures and code wells, scrollbar track.
- **Paper White** (#f4f6fb): primary text, command text, h3, secondary button outline.
- **Soft Pale Blue** (#c9d3ec): lede, prompts, dates, captions, supporting copy.
- **Link Blue** (#8db8f2): links, h2 headings, project names, figure text.
- **Ink Navy** (#0e1a33): dark text on gold and on inverted (hovered) buttons.
- **Code Well Gray** (#1e2126): background of project figures and the README figure block. A neutral near-black, slightly off the navy hue; kept because it is reused in both figure surfaces.

### Named Rules
**The Solid Block Rule.** Garnet and blue exist only as solid fills carrying white text. Never set garnet text or a garnet border on the navy ground.
**The One Signal Rule.** Gold is the only attention color: cursor, primary action, focus. Do not spend it on headings, bullets or decoration.

## Typography

**Display Font:** Atkinson Hyperlegible Mono Variable (with ui-monospace, SF Mono, Menlo, Consolas, monospace)
**Body Font:** the same family
**Label/Mono Font:** the same family

**Character:** A highly legible monospace used at generous sizes (17px body) so the terminal premise never costs readability. One family throughout; weight and size do the ranking.

### Hierarchy
- **Display** (700, clamp(28px, 5.4vw, 46px), 1.14, -0.03em): the single h1 per page, balanced wrap, max 21em.
- **Headline** (600, 21px, 1.3): h2 section heads and project names, in Link Blue.
- **Title** (600, 18px, 1.35): h3 role and item titles, in Paper White.
- **Body** (400, 17px, 1.6; 16px under 640px): prose, held to 68ch; lede is 18px at 44em in Soft Pale Blue.
- **Label** (600 on segments, 400 on command text, 19px, 1.4; 16px under 640px): prompt lines. Smaller supporting sizes: 16px for dates and stack lines, 14.5px to 15.5px for figures.

### Named Rules
**The One Family Rule.** Do not add a second typeface or a display face; the terminal is monospace end to end.

## Layout

Content sits in a single left-aligned column, max 1120px, centered, with a fluid gutter of clamp(20px, 7vw, 96px). The page frame is a fixed 48px title bar on top and a fixed 44px status bar at the bottom; the body pads past both (top 92px, bottom 116px). Prose measure is 68ch. Vertical rhythm steps through 8, 14, 18, 24, 32, 56px; sections separate by 56px, prompts sit 18px above their output. Project entries are a three-column grid with 32px gaps, collapsing to one column at 860px with 28px gaps. At 640px the status bar items share the width equally, the location tag and item numbers hide, prompt text drops to 16px and the cursor shrinks to 10x20px. Log and fact rows stack their label above the value on narrow screens.

## Elevation & Depth

Flat. There are no shadows. Depth is conveyed by solid chrome bars pinned top and bottom, a Rule Navy hairline around figure wells, and tonal steps from ground to chrome. State is shown by color inversion and border color, not by lift.

### Named Rules
**The Flat Terminal Rule.** No box-shadows, blurs or gradients on any surface. A new surface earns separation with a fill step or a 1px Rule Navy border.

## Shapes

Square. Buttons, prompt segments, figure wells and bars have 0 radius. The only curve is the 14px circular dot in the title bar. Borders are 1px (figures) or 1.5px (buttons). Point-list bullets are 7px solid blue squares. Links are underlined at 1px, thickening to 2px on hover.

## Components

### Prompt
The signature element. Two adjacent solid segments, handle "ankan" in garnet and path in blue (6px 16px padding, white text, 600), followed by command text in Paper White. A section heading is a prompt with a screen-reader-only heading text. The live prompt (shown only when scripting runs) holds a real input with a gold block cursor (12x24px, 1.1s stepped blink) positioned by character count; the static prompt shows the same cursor without an input. The first command types in with a stepped clip-path reveal.

### Buttons
- **Shape:** square (0px), 1.5px border.
- **Primary:** Cursor Gold fill and border, Ink Navy text, 600, padding 13px 22px. Hover inverts to white fill.
- **Secondary:** transparent, Paper White outline and text; hover fills Paper White with Ink Navy text.
- **Active:** 1px downward nudge. Focus: 2px gold outline, 3px offset.

### Navigation (status bar)
Fixed bottom strip, 44px, Blaugrana Blue fill, white 16px text, items padded 22px with a muted number prefix. Hover lightens the fill (#0a63bd) and underlines; the current page flips to Garnet Block. On mobile items share the width and numbers hide. The location tag sits right on desktop.

### Title bar
Fixed top strip, 48px, Chrome Navy, three dots (garnet, gold, blue) at left and the site name centered as the home link in Soft Pale Blue.

### Project entry
A link containing a Code Well figure (128px high on desktop, auto on mobile, 14.5px Link Blue text, Rule Navy border), the project name in Link Blue 21px 600 and a 16px Soft tagline. Hover brightens the border to Link Blue and underlines the name in white.

### Log and facts
Experience and contact read as plain logs: a date or term column (9.5em, Soft Pale Blue) beside the outcome text, capped at 68ch. Definition lists use an 8.5em term column. No tables.

## Do's and Don'ts

### Do:
- **Do** write every new page as a prompt line, its output, then the end prompt with the waiting cursor.
- **Do** keep garnet and blue as solid fills with white text, and keep gold for cursor, focus and the one primary action.
- **Do** use Link Blue for links and h2, Soft Pale Blue for supporting copy, Paper White for primary text.
- **Do** keep corners square, surfaces flat, and measure at 68ch.
- **Do** keep motion CSS-only and fully static under prefers-reduced-motion.

### Don't:
- **Don't** put garnet as text or border on the navy ground; it fails to read.
- **Don't** add club crests, photography, tables, a second typeface, shadows or gradients.
- **Don't** use gold on more than the cursor, focus and a single primary action per view.
- **Don't** let football appear in copy; it lives only in the colors.
