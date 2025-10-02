# 🤝 Contributing to ArgonHub

Thank you for your interest in contributing to ArgonHub! We welcome contributions from the community.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/yourusername/argonhub.git
   cd argonhub
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 🛠️ Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add comments for complex logic

### Component Structure

When creating new components:

```typescript
import React from 'react';

interface ComponentProps {
  // Define props interface
}

export const ComponentName: React.FC<ComponentProps> = ({ /* props */ }) => {
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};
```

### Styling

- Use Tailwind CSS classes
- Follow the existing color scheme (red theme)
- Maintain responsive design principles
- Use the custom font families defined in `index.html`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Commit Guidelines

Follow conventional commit format:

```
feat: add new auto-parry feature
fix: resolve cursor trail bug
docs: update README with new screenshots
style: improve button hover effects
refactor: optimize component performance
```

## 🐛 Reporting Issues

1. Check existing issues to avoid duplicates
2. Create a new issue with detailed description
3. Include screenshots if applicable
4. Provide steps to reproduce the issue

## ✅ Pull Request Process

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes** and test thoroughly

3. **Commit your changes:**
   ```bash
   git commit -m 'feat: add amazing new feature'
   ```

4. **Push to your fork:**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Create a Pull Request** on GitHub

## 🎨 Design Guidelines

- Maintain the dark theme with red accents
- Use smooth animations and transitions
- Ensure responsive design for all screen sizes
- Follow the existing typography hierarchy

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

Thank you for contributing to ArgonHub! 🚀
