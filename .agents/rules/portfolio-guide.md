---
trigger: always_on
---

DESIGN SURGERY — Ranked by Impact

1. Kill the Color System Ambiguity
accent-400 is Tailwind's default lime-400 — #a3e635. You have no custom token system. Everything is framework default. This is identifiable as AI output from 20 feet away.
typescript// tailwind.config.ts — build this file (it doesn't exist in your zip)
export default {
  theme: {
    extend: {
      colors: {
        'void':    { 900: '#080810', 800: '#0F0F1A', 700: '#1A1A2E' },
        'gold':    { prime: '#C9A84C', light: '#E8C97A', dim: '#8A6E32' },
        'signal':  '#00FFB3',
        'slate':   { /*keep Tailwind defaults*/ }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Instrument Serif', 'serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      }
    }
  }
}
Then replace every accent-400 → gold-prime, every dark-900 → void-900.
2. Section Header Uniformity — A Flat Pattern Repeated 5 Times
Every section:
jsx<h2 className="text-4xl font-display font-bold text-white mb-4">Title</h2>

<div className="w-20 h-1 bg-accent-400"></div>
Zero visual hierarchy differentiation between sections. Extract a SectionHeader component with variant props — left, center, oversized — and vary them per section.
3. Skills Section — Bullet Lists Are Indefensible
structural_analysis:
  Current implementation: 4 cards × 6 bullet points = 24 identical
  <li> elements with dot prefixes. Cognitive load: high. Memorability: zero.
  Time complexity of the user reading it: O(n). They won't.
Replace with animated pill tags that fill in on scroll — one whileInView stagger, dramatically more scannable:
tsx{category.skills.map((skill, i) => (
  <motion.span
    key={skill}
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    className="px-3 py-1 text-xs font-mono border border-gold-prime/30
               text-gold-prime rounded-full bg-void-800
               hover:border-gold-prime hover:bg-gold-prime/10 transition-all"
  >
    {skill}
  </motion.span>
))}
4. MatrixBackground — Wrong Aesthetic Anchor
A matrix rain on a portfolio for a Product Designer + Python Developer reads as: "I found a cool canvas tutorial." It's a 2003 screensaver. Your work is precision engineering and interface craft — the background should signal that.
Replace with: Subtle SVG grid with slow pan + noise texture overlay via CSS. Or keep the canvas but change to topographic contour lines — an engineering signal, not a hacker movie reference.
5. Hero Profile Image — Picsum.Photos Is a Placeholder
tsxsrc="https://picsum.photos/seed/animated-man-black-shirt/800/800"
This is a random stock photo. Replace with your actual headshot. Until you have one, use a geometric abstract placeholder you control — not a third-party URL that could change.

VITE BUILD CONFIG — Not Production Ready
typescript// Current: no build block at all in vite.config.ts
// Add this:
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor:  ['react', 'react-dom'],
        motion:  ['framer-motion'],
      }
    }
  },
  minify: 'terser',
  sourcemap: false,
  cssCodeSplit: true,
  assetsInlineLimit: 4096, // inline assets < 4KB as base64
}

FUNCTIONALITY GAPS — Priority Order
ItemEffortSignalTag filter on ProjectsLow — 1 useStateHigh — shows you can ship interactive featuresResume PDF downloadTrivial — drop in /publicExpected by every recruiterCopy email to clipboard20 linesRemoves the mailto: — it's not 2009Scroll progress bar30 linesPremium feel, near-zero costActive section highlight in NavbarIntersectionObserver hookSignals navigation qualityProject link prop wired up5 linesCurrently buttons render with no href

IMMEDIATE EXECUTION ORDER

 Add tailwind.config.ts with custom tokens — every other visual fix depends on this
 Move icons out of constants.tsx — decouple data from JSX
 Add "strict": true to tsconfig.json — fix the cascade of type errors it reveals
 Add build config to vite.config.ts — lazy loading + chunking
 Replace MatrixBackground or reconfigure it with pause-on-offscreen + corrected opacity default
 Wire project links — ExternalLink and Github buttons currently do nothing
 Move the Gemini key server-side before this ever deploys
