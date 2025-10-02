# Shadow Protocol - Spy Game Interface

A cinematic spy thriller interface built with Astro, React, TailwindCSS, and GSAP. Features immersive animations, character profiles, and case file investigations.

## 🎬 Features

- **Parallax Hero Section** with Framer Motion zoom effects
- **Interactive Character Modal** with ASCII art character cards  
- **Timeline Dossier System** with case file filtering
- **Page Transitions** with custom overlay animations
- **Accessibility Features** including keyboard navigation and screen reader support
- **Responsive Design** optimized for mobile and desktop
- **Performance Optimized** with lazy loading and efficient animations

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── CharactersModal.jsx  # Character selection modal
│   ├── HeroContent.jsx     # Hero section content  
│   └── ParallaxZoom.jsx    # Parallax background effect
├── layouts/
│   └── Layout.astro        # Base page layout
├── pages/
│   ├── index.astro         # Landing page with film grid
│   ├── dossier.astro       # Case files timeline
│   ├── maya.astro          # Character detail example
│   └── case/
│       └── 01.astro        # Case detail example
├── styles/
│   └── global.css          # Global styles and components
└── public/
    ├── main.js            # Enhanced UX and accessibility
    └── images/            # Static assets
```
- **GSAP Entrance Animations**: Staggered hero content reveal
- **Spring Easing**: Natural motion with custom linear() easing functions
- **Performance Optimized**: 60fps target with GPU acceleration

### 🎨 Spy Theme
- **Color Scheme**: Deep black (#0a0a0a) with gold accents (#ffd700)
- **Typography**: Courier New monospace for authentic spy aesthetic
- **Interactive Elements**: Dossier loader, character selection modal
- **Visual Effects**: Backdrop blur, glowing hover states, evidence board styling

### 🖥️ Technical Stack
- **Astro 5.13+**: Static site generation with React components
- **Framer Motion**: useScroll/useTransform for parallax
- **GSAP 3.12+**: ScrollTrigger for advanced scroll animations
- **Tailwind CSS**: Utility-first styling with custom CSS variables
- **Lenis**: Smooth scrolling implementation

## 🚀 Quick Start

```bash
# Navigate to the web folder
cd web

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React/Astro components
│   ├── CharactersModal.jsx   # Animated character selection
│   ├── HeroContent.jsx       # Main spy-themed hero section
│   └── ParallaxZoom.jsx      # Framer Motion parallax component
├── layouts/
│   └── Layout.astro          # Base layout with spy theme
├── pages/
│   └── index.astro           # Landing page
└── styles/
    └── global.css            # Spy theme CSS variables and animations
```

## 🎯 Performance Targets
- **60fps** consistent animation performance
- **< 16.67ms** frame time
- **Reduced motion** support for accessibility
- **GPU acceleration** for transform animations

## 🔧 Key Components

### ParallaxZoom
- Framer Motion scroll-based scaling
- Sticky positioning for smooth parallax
- Integration with GSAP for enhanced zoom effects

### HeroContent
- Staggered entrance animations
- Interactive spy-themed buttons
- Loading simulation with progress bar
- Character modal integration

### CharactersModal
- Animated character selection
- Nested modal for character details
- Spring-based transitions

## 📝 Content Implementation Tasks

### Phase 1: Data Structure Setup ✅ COMPLETED
- [x] Create `/src/data/` directory for JSON content files
- [x] Set up characters.json with placeholder character data
- [x] Create cases.json with dummy case file content
- [x] Implement films.json with placeholder film information
- [x] Build timeline.json with sample timeline entries

### Phase 2: Component Integration ✅ COMPLETED
- [x] Update page components to import from data files
- [x] Implement dynamic rendering for case files in dossier
- [x] Create dynamic routes for case pages with [id].astro
- [x] Connect character modal to characters.json data
- [x] Test dynamic content updates by modifying JSON files
- [x] Add TypeScript interfaces for type safety
- [x] Fix all TypeScript compilation errors

### Phase 3: Dynamic Template System ✅ COMPLETED
- [x] Implement dynamic character routes `/character/[id]`
- [x] Convert static maya.astro to redirect to dynamic route
- [x] Update CharactersModal to use dynamic character routes
- [x] Add proper TypeScript types to all dynamic routes
- [x] Ensure all character pages generate from characters.json

### Phase 4: Content Creation Templates
- [ ] Create content template for new case entries
- [ ] Develop character profile template for consistency  
- [ ] Set up naming conventions for assets and resources
- [ ] Document JSON schema for future content creators

## 🏗️ Dynamic Content System

### Adding New Characters
Simply add a new character object to `/src/data/characters.json`:

```json
{
  "id": "new-character",
  "name": "NEW CHARACTER NAME",
  "role": "Character Role",
  "icon": "/ ^  ^ \\",
  "face": ["   .----.", "  / ^  ^ \\", "  |  --  |", "  \\ ---- /"],
  "profile": {
    "bio": "Character biography...",
    "specialties": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    "years": "Years active",
    "operations": "Number of operations",
    "countries": "Number of countries",
    "classification": "Security level",
    "timeline": [
      {"year": "YYYY", "title": "Operation Name", "desc": "Operation description"}
    ]
  }
}
```

The page will automatically be available at `/character/new-character` and the CharactersModal will include it.

### Adding New Cases
Add a new case object to `/src/data/cases.json`:

```json
{
  "id": "03",
  "slug": "/case/03", 
  "title": "CASE 03: NEW CASE NAME",
  "date": "YYYY-MM-DD",
  "summary": "Case summary...",
  "tags": ["#tag1", "#tag2"],
  "year": "2020s",
  "content": {
    "quote": "Case quote...",
    "missionSummary": ["Paragraph 1...", "Paragraph 2..."],
    "evidence": [
      {"title": "Evidence Title", "description": "Evidence description", "tags": ["#evidence"]}
    ],
    "outcome": {
      "status": "COMPLETED/ONGOING/CLASSIFIED",
      "statusDescription": "Brief status description",
      "details": ["Outcome detail 1...", "Outcome detail 2..."]
    },
    "connections": [
      {"caseId": "01", "title": "Connected case title", "connection": "Connection description"}
    ]
  }
}
```

The page will automatically be available at `/case/03` and appear in the dossier timeline.

### Phase 3: Content Population Strategy
- [ ] Create content template for new case entries
- [ ] Develop character profile template for consistency
- [ ] Set up naming conventions for assets and resources
- [ ] Document JSON schema for future content creators

### Phase 4: Initial Content Creation
- [ ] Write first real case study to replace placeholder
- [ ] Create one complete character profile
- [ ] Test full content pipeline from JSON to rendered page
- [ ] Refine schema based on implementation experience

## 🔧 Technical Improvements Implemented

### TypeScript Integration
- **Type Safety**: Added comprehensive TypeScript interfaces in `/src/types/index.ts`
- **Proper Imports**: Updated JSON imports with proper typing using dynamic imports
- **Function Parameters**: Added explicit type annotations for map functions
- **Astro Props**: Implemented proper Props interfaces for component parameters

### Astro Best Practices
- **Dynamic JSON Imports**: Using `await import().then(m => m.default)` pattern
- **Static Path Generation**: Properly typed `getStaticPaths()` functions
- **Component Props**: Explicit interface definitions for component properties
- **Error Handling**: Added case not found error handling

### Data Structure
- **Clean JSON Files**: Fixed malformed JSON with duplicate content
- **Consistent Schema**: Standardized data structure across all files
- **Placeholder Content**: Ready-to-replace dummy content for incremental updates

### Performance Optimizations
- **Tree Shaking**: Dynamic imports for better bundle optimization  
- **Type Checking**: Compile-time error prevention
- **Static Generation**: Efficient static site generation with typed data

## 📋 Next Steps
1. Begin replacing placeholder content with actual story content
2. Add more case files by following the established JSON schema
3. Expand character profiles with detailed backstories
4. Implement timeline filtering and search functionality
5. Add image assets for cases and characters
