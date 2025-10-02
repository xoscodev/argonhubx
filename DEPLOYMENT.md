# 🚀 Deployment Guide

## 🌐 Production Build

### Using npm

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Build Output

The `dist/` folder will contain:
- `index.html` - Main HTML file
- `assets/` - CSS, JS, and other assets
- Optimized and minified code ready for deployment

## 📦 Deployment Platforms

### 🔥 Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Automatic deployments** on every push to main branch
3. **Custom domains** available
4. **CDN distribution** for fast loading

### 🌐 Netlify

1. **Connect your GitHub repository** to Netlify
2. **Build command:** `npm run build`
3. **Publish directory:** `dist`
4. **Automatic deployments** enabled

### 🐙 GitHub Pages

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

### 🐳 Docker Deployment

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## ⚙️ Environment Variables

Create `.env` file for environment-specific configurations:

```env
VITE_API_URL=https://api.argonhub.com
VITE_APP_TITLE="ArgonHub - Ultimate Blade Ball Script Hub"
```

## 🔧 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📊 Performance Optimization

### Images
- Use WebP format for better compression
- Implement lazy loading
- Optimize image sizes

### Bundle Optimization
- Code splitting enabled by default with Vite
- Tree shaking removes unused code
- CSS minification and compression

### CDN
- Use CDN for external dependencies
- Enable gzip compression
- Cache static assets

## 🔍 SEO Optimization

- **Meta tags** configured in `index.html`
- **Open Graph** tags for social sharing
- **Structured data** for better search visibility
- **Sitemap** generation for search engines

## 🛡️ Security Headers

Configure security headers in your deployment platform:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📈 Monitoring

### Analytics
- Google Analytics 4
- Custom event tracking
- Performance monitoring

### Error Tracking
- Sentry for error monitoring
- Console error logging
- User feedback collection

---

🎉 **Your ArgonHub website is now ready for the world!**
