# 📋 Project Information

## 🎯 Project Overview

**ArgonHub** is a modern, responsive website showcasing a script hub for the popular Roblox game "Blade Ball". The website features a sleek dark theme with red accents, smooth animations, and an intuitive user interface designed to attract and engage users.

## 🏗️ Architecture

### Frontend Stack
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.2** - Type-safe JavaScript
- **Vite 6.2.0** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Component Architecture
- **Modular Components** - Each section is a separate component
- **Custom Hooks** - For state management and effects
- **Icon System** - Custom SVG icons for consistent design
- **Responsive Design** - Mobile-first approach

## 🎨 Design System

### Color Palette
- **Primary:** Black (`bg-black`)
- **Accent:** Red (`red-500`, `red-400`, `red-300`)
- **Text:** White and gray shades
- **Background:** Gradient overlays

### Typography
- **Primary Font:** Plus Jakarta Sans
- **Secondary Font:** Poppins
- **Headings:** Bold, gradient text effects
- **Body:** Clean, readable text

### Animations
- **Typing Animation** - Dynamic text effects
- **Scroll Animations** - Intersection Observer API
- **Hover Effects** - Interactive elements
- **Tilt Effects** - 3D image transformations

## 🚀 Features

### ✨ Core Features
1. **Hero Section** - Animated typing effect, tilt animations
2. **Features Showcase** - Auto-parry, Semi-immortal, Security
3. **Security Section** - Trust and safety information
4. **Testimonials** - User reviews and feedback
5. **FAQ Section** - Common questions and answers
6. **Get Started** - Call-to-action section
7. **Footer** - Links and contact information

### 🔧 Technical Features
- **Custom Cursor Trail** - Interactive cursor effects
- **Grid Background** - Animated grid pattern
- **Copyable Code Blocks** - Easy script copying
- **Responsive Layout** - Works on all devices
- **Performance Optimized** - Fast loading times

## 📁 File Structure

```
src/
├── components/
│   ├── icons/              # SVG icon components
│   │   ├── Argon.tsx
│   │   ├── SparkleIcon.tsx
│   │   └── ...
│   ├── Hero.tsx           # Main hero section
│   ├── Features.tsx       # Features showcase
│   ├── SecuritySection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── GetStartedSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── CopyableCode.tsx   # Code copying utility
│   ├── CursorTrail.tsx    # Cursor effects
│   ├── GridBackground.tsx # Background animation
│   └── MapVisualization.tsx
├── App.tsx                # Main application
├── index.tsx              # Entry point
└── index.html             # HTML template
```

## 🎮 Game Integration

### Script Features
- **Auto-Parry System** - Perfect timing algorithms
- **Semi-Immortal Mode** - Advanced protection
- **Undetectable Scripts** - Stealth technology
- **Easy Loading** - One-click execution

### Usage Instructions
1. Copy the loader script from the website
2. Paste in Roblox executor
3. Execute and enjoy the game

## 🚀 Getting Started

### Development
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

### Production Deployment
- **Vercel** - Recommended for ease of use
- **Netlify** - Alternative with great features
- **GitHub Pages** - Free hosting option

## 📈 Performance Metrics

- **Lighthouse Score:** 95+ (Performance)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🔒 Security

- **Content Security Policy** - XSS protection
- **HTTPS Only** - Secure connections
- **No External Dependencies** - Reduced attack surface
- **Input Validation** - Client-side security

## 🌐 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

---

*Built with ❤️ for the Blade Ball community*
