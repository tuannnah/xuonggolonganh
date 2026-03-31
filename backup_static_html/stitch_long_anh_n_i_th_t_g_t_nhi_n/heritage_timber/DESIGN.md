```markdown
# Design System Strategy: The Curated Atelier

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is not a template; it is a digital extension of the artisan’s workshop. Our Creative North Star is **The Digital Curator**. We aim to evoke the tactile, sensory experience of high-end Vietnamese woodworking—the smell of polished timber, the smoothness of natural grain, and the quiet luxury of a well-lit showroom.

To break the "standard website" feel, we employ **Intentional Asymmetry**. We reject rigid, centered grids in favor of editorial-style layouts where high-contrast typography overlaps imagery, and white space is used as a structural element. The interface should feel like a premium coffee-table book: breathable, authoritative, and timeless.

---

## 2. Colors: Tonal Depth & Organic Warmth
The palette is rooted in the earth, using deep wood tones and sun-drenched ambers to create a sense of heritage and trust.

### The Palette
- **Primary (`#502905`)**: The core of the brand. Use for high-authority elements and deep-tone backgrounds.
- **Secondary (`#875200`)**: The "Amber" accent. Reserved for focus states, call-to-actions, and moments of warmth.
- **Surface & Background (`#FDF9F4`)**: A soft, "unbleached paper" cream that reduces eye strain and feels more premium than pure white.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Use background color shifts. A section using `surface-container-low` should sit directly against the `surface` background to define its boundary. Traditional lines are "noise"; color transitions are "architecture."

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine veneer.
- **Level 0 (Base):** `surface`
- **Level 1 (Sections):** `surface-container-low`
- **Level 2 (Cards/Modules):** `surface-container-lowest` (pure white) to create a subtle "pop" against the cream background.

### The "Glass & Gradient" Rule
For hero sections or premium floating headers, use **Glassmorphism**. Apply `surface` at 80% opacity with a `20px` backdrop-blur. For primary CTAs, apply a subtle linear gradient from `primary` to `primary_container` to give buttons a "buffed wood" sheen rather than a flat plastic look.

---

## 3. Typography: Editorial Authority
We pair the heritage of the Serif with the modern precision of the Sans-Serif.

- **Display & Headlines (`notoSerif`)**: This is our "Voice." Use `display-lg` (3.5rem) for hero statements. Tighten the letter-spacing (`-0.02em`) for a high-end fashion editorial feel.
- **Titles & Body (`beVietnamPro`)**: This is our "Function." Vietnamese typography requires generous line-heights to accommodate diacritics without cluttering. Ensure `body-lg` has a line-height of at least `1.6`.
- **Hierarchy Tip:** Overlap a `display-md` serif headline across the edge of a high-resolution furniture photograph to create depth and brand sophistication.

---

## 4. Elevation & Depth: Tonal Layering
We move away from the "shadow-heavy" web of the past, opting for "Ambient Light."

- **The Layering Principle:** Stack `surface-container-low` cards on a `surface` background. The contrast is enough to define the shape without visual clutter.
- **Ambient Shadows:** Only use shadows for interactive floating elements (like a "Request a Quote" FAB). Use a `32px` blur with 5% opacity, using the `on-surface` color (`#1C1C19`) to tint the shadow, making it feel like a natural shadow cast by wood.
- **The "Ghost Border" Fallback:** If a border is required for a form input, use `outline-variant` at 20% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons: The Signature Touch
- **Primary:** `primary` background, `on-primary` text. No border. `0.25rem` (sm) radius.
- **Secondary (The Amber Glow):** `secondary` background. Use this only for the final conversion step (e.g., "Purchase").
- **Tertiary:** No background. `notoSerif` bold text with a 1px underline that expands on hover.

### Premium Cards
- **Construction:** Forbid dividers. Use `2.75rem` (8) of vertical spacing to separate the image from the product title.
- **Interaction:** On hover, the card should transition from `surface-container-lowest` to a very subtle "ambient shadow" lift.

### Input Fields
- **Style:** Underline-only or subtle `surface-container-high` backgrounds. 
- **States:** Error states use `error` (`#BA1A1A`) text but maintain the soft, rounded aesthetic of the design system.

### Navigation: The Floating Atelier
- **Style:** A floating `surface` bar with Glassmorphism (`backdrop-blur`). 
- **Asymmetry:** Place the logo on the far left, but group navigation items to the right to create a sophisticated, unbalanced balance.

---

## 6. Do's and Don'ts

### Do:
- **Use "White Space" as a Material:** Give furniture photos room to breathe. Use the `24` (8.5rem) spacing token between major sections.
- **Embrace Asymmetry:** Align text to the left while placing images to the right-center to create a dynamic flow.
- **Use Large Imagery:** Only use high-resolution, warm-lit photography of natural wood.

### Don't:
- **Don't use Dividers:** Never use a horizontal line to separate content. Use the spacing scale (`8` or `12`).
- **Don't use High Contrast Shadows:** Avoid the "dirty" look of heavy black shadows.
- **Don't use Standard Grids:** Avoid the "3-column card row" whenever possible. Try a "2-column staggered" layout for product showcases to feel more like a curated gallery.