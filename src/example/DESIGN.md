---
name: Kinetic Mono
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-gray: '#F5F5F5'
  border-subtle: '#E5E5E5'
  text-muted: '#757575'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 96px
    fontWeight: '900'
    lineHeight: 90%
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 95%
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 120%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.05em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-xl: 128px
  stack-lg: 80px
  stack-md: 40px
---

## Brand & Style

This design system is built for a software developer portfolio that demands authority, precision, and an athletic sense of momentum. The brand personality is "High-Performance Professional"—it communicates that code is a craft practiced with the same rigor as a sport.

The aesthetic follows **Athletic Minimalism**. It leans heavily into a high-contrast, monochromatic palette to create a sense of urgency and clarity. Key characteristics include:
- **Aggressive Typography:** Over-sized, heavy-weight headlines that command attention.
- **Strict Grids:** A disciplined layout that mirrors the structured nature of software engineering.
- **Intentional Whitespace:** Generous "breathing room" that elevates content to a premium status, ensuring the work remains the focus.
- **Sharp Transitions:** Rapid, decisive interactions without unnecessary fluff or "softness."

## Colors

The palette is strictly monochromatic to enforce focus and a "no-nonsense" professional vibe.

- **Black (#000000):** Used for primary text, heavy headlines, and high-impact call-to-action buttons. It represents the "solid" foundation of the code.
- **White (#FFFFFF):** The primary canvas. It must be used generously to provide the "athletic" whitespace characteristic of premium performance brands.
- **Gray Accents:** `#F5F5F5` is used for background sections to provide subtle separation without breaking the high-contrast rules. `#757575` is reserved for secondary information like meta-data or captions.

## Typography

The typography strategy uses a "Grotesque-Heavy" approach. 

- **Headlines:** Use **Hanken Grotesk** in extra-bold and black weights. Tighten the line height and letter spacing as the size increases to create a "blocky," impactful look.
- **Body:** **Inter** provides a systematic, neutral counterpoint to the aggressive headlines, ensuring long-form project descriptions remain highly legible.
- **Technical Accents:** **JetBrains Mono** is utilized for labels, technical specs, and code snippets, signaling the developer nature of the portfolio.
- **Styling:** Headlines should frequently use `text-transform: uppercase` to emulate the Nike/Adidas display style.

## Layout & Spacing

This design system uses a **12-column fixed grid** on desktop and a **4-column fluid grid** on mobile.

- **Vertical Rhythm:** Spacing between sections (stack-xl) should be exceptionally large to create a "gallery" feel for each portfolio piece.
- **Alignment:** Content should be strictly aligned to the grid. Use hard edges and avoid centering text; left-aligned "ragged right" layouts are preferred for an editorial feel.
- **The "Power Bar":** Navigation should be a fixed, high-contrast bar at the top or a minimal "floating" dock at the bottom to maintain the focus on the content.

## Elevation & Depth

To maintain a minimalist and sharp aesthetic, this design system **avoids shadows**. Depth is conveyed through:

- **Tonal Layering:** Use the `#F5F5F5` gray to create background containers for project cards.
- **High-Contrast Outlines:** Use 1px or 2px solid black borders to define elements.
- **Hard Overlays:** When an element is hovered, use a solid black fill with white text rather than a shadow.
- **Focus States:** High-visibility, solid 2px black outlines for keyboard navigation to emphasize the "utility" aspect of the system.

## Shapes

The shape language is **Sharp**. Rounded corners are strictly avoided to maintain a technical, architectural feel. 

- All buttons, input fields, and project cards must have 0px border-radius.
- Images should be cropped to hard rectangles.
- Accents (like progress bars or tags) should be strictly rectangular.

## Components

- **Buttons:** Primary buttons are solid black with white uppercase text. Secondary buttons are transparent with a 2px black border. Hover states should "invert" the colors instantly (no long transitions).
- **Project Cards:** Large, full-width or half-width images with a minimal 1px border. Labels should use the `label-code` typography at the top.
- **Input Fields:** Bottom-border only (`border-bottom: 2px solid black`). No background fill. Labels should be small and uppercase.
- **Chips/Tags:** Small rectangular boxes with `#111111` background and white text. Use for tech stacks (e.g., REACT, TYPESCRIPT).
- **Code Blocks:** Use the surface-gray background with a subtle 1px border. No syntax highlighting in neon colors; stick to varying shades of gray and bold/italic font weights for the code itself.
- **Navigation:** Simple text links in `label-code` style. Active state indicated by a solid underline.