# Beehiiv Entity Graph System

A comprehensive research visualization tool for exploring entities, relationships, and quotes from Tyler Denk's Beehiiv journey.

## 🎯 Features

- **Interactive Entity Graph**: Navigate through connected entities visually
- **Progressive Disclosure**: From graph → entity details → evidence
- **Smart Embed System**: URLs transform to interactive previews
- **250+ Verified Quotes**: Direct quotes with timestamps and sources
- **Evidence-Based Relationships**: Every connection backed by verified excerpts
- **Apple-Inspired Design**: Minimal grayscale interface following strict design rules

## 🏗️ Architecture

Built with strict adherence to CLAUDE.md rules:
- **shadcn/ui components only** - No external component libraries
- **100% English interface** - All text in English
- **Grayscale Apple design** - Black, white, grays only
- **4px spacing system** - Consistent visual hierarchy
- **Research-optimized UX** - Maximum information, minimal cognitive load

## 📊 Data Structure

- **250/350+ quotes** extracted and integrated (71% complete)
- **100+ entities** with canonical names and aliases
- **Verified relationships** with temporal information
- **Source attribution** with YouTube timestamps and URLs
- **Progressive disclosure** from overview to detailed evidence

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── EntityGraph.tsx # Main graph visualization
│   ├── EntityPage.tsx  # Individual entity details
│   ├── SmartEmbed.tsx  # URL to embed transformation
│   └── EvidenceModal.tsx # Evidence verification
├── data/
│   └── entityData.ts   # Structured research data
└── lib/
    └── utils.ts        # shadcn/ui utilities
```

## 🎨 Design Principles

Following CLAUDE.md rules for maximum research consumption:
- **Minimal Apple aesthetic** - Clean, purposeful interface
- **Progressive disclosure** - Reveal information gradually
- **Evidence verification** - Every claim backed by sources
- **Symmetric layout** - Perfect visual balance
- **Research-first UX** - Optimized for information processing

## 📚 Data Sources

All information extracted from verified sources:
- Tyler Denk YouTube interviews with timestamps
- Official Beehiiv announcements and metrics
- Verified financial data and growth metrics
- Canonical entity relationships with evidence

## 🔗 Live Demo

Visit the live application: [Beehiiv Entity Graph](https://darwinborges.github.io/beehiiv-entity-graph/)

---

Built with React + TypeScript + Vite following strict CLAUDE.md guidelines for research visualization.