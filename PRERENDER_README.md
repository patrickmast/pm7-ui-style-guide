# PM7 UI Style Guide - Pre-rendering Documentation

This document explains the pre-rendering solution for generating static HTML versions of the PM7 UI Style Guide documentation.

## Overview

The pre-rendering system creates static HTML versions of all documentation pages that can be accessed by tools like WebFetch, crawlers, and other automated systems without needing JavaScript execution.

## Features

- **Full Documentation Pre-rendering**: Generates static HTML for all components and tabs
- **WebFetch-Friendly**: Clean, accessible HTML with proper styling
- **Dark/Light Theme Support**: Generates versions for both themes
- **Simple Dialog TL;DR**: Quick generation of the most important documentation
- **Automated Build Process**: Integrates with existing build pipeline

## Available Scripts

### Quick Start - Dialog TL;DR

For immediate access to the Dialog component documentation:

```bash
npm run build:dialog-tldr
```

This creates: `static/dialog-tldr.html` - A clean, WebFetch-friendly version of the Dialog TL;DR documentation.

### Full Pre-rendering

For complete documentation pre-rendering:

```bash
# Build examples app and pre-render all routes
npm run build:static

# Or run pre-rendering separately (after examples are built)
npm run prerender
```

This generates static HTML files for all:
- Components: menu, button, input, dialog, tabselector, card, themetoggle
- Documentation tabs: demo, overview, usage, documentation, tldr
- Themes: light and dark versions

## Generated Files

### Quick Dialog TL;DR
- `static/dialog-tldr.html` - Complete Dialog integration guide

### Full Pre-rendering
- `static/{component}-{tab}.html` - Light theme versions
- `static/{component}-{tab}-dark.html` - Dark theme versions
- `static/index.html` - Index of all generated pages

Example files:
```
static/
├── dialog-tldr.html          # Quick Dialog guide
├── dialog-demo.html          # Dialog demo (light)
├── dialog-demo-dark.html     # Dialog demo (dark)
├── dialog-usage.html         # Dialog usage guide
├── button-tldr.html          # Button TL;DR
├── menu-overview.html        # Menu overview
└── index.html               # Index of all pages
```

## Technical Implementation

### Architecture

1. **Playwright Browser Automation**: Uses headless Chromium to render pages
2. **Content Extraction**: Cheerio-based HTML parsing and cleaning
3. **Template System**: Custom HTML templates with embedded CSS
4. **Build Integration**: Integrates with Vite build process

### Pre-rendering Process

1. Build the examples app (`npm run build:examples`)
2. Start a preview server for the built app
3. Launch headless browser
4. Navigate to each documentation route
5. Extract and clean the rendered content
6. Generate static HTML using custom templates
7. Save files to the `static/` directory

### Content Cleaning

The pre-rendering process:
- Removes navigation and interactive elements
- Cleans up React-specific classes and attributes
- Preserves documentation content and code examples
- Applies clean, accessible styling
- Ensures WebFetch compatibility

## Usage Examples

### WebFetch Integration

The generated static files can be accessed directly by WebFetch:

```javascript
// In your AI agent or automation script
const dialogDocs = await webFetch('https://your-domain.com/static/dialog-tldr.html');
```

### Local Development

1. Generate static files:
   ```bash
   npm run build:dialog-tldr
   ```

2. Serve the static directory:
   ```bash
   # Using Python
   python -m http.server 8000 --directory static

   # Using Node.js serve
   npx serve static

   # Using any static file server
   ```

3. Access at: `http://localhost:8000/dialog-tldr.html`

### Production Deployment

Add the static files to your web server or CDN:

```nginx
# Nginx example
location /static/ {
    alias /path/to/pm7-ui-style-guide/static/;
    expires 1h;
    add_header Cache-Control "public, no-transform";
}
```

## Configuration

### Prerender Script Configuration

Edit `scripts/prerender.js` to customize:

```javascript
const CONFIG = {
  examplesDir: path.join(__dirname, '../examples/dist'),
  staticDir: path.join(__dirname, '../static'),
  baseUrl: 'http://localhost:4173',
  port: 4173,
  timeout: 30000
};
```

### Components and Tabs

To add new components or tabs, update the arrays in `scripts/prerender.js`:

```javascript
const PM7_COMPONENTS = [
  'menu', 'button', 'input', 'dialog', 'tabselector', 'card', 'themetoggle'
  // Add new components here
];

const TABS = [
  'demo', 'overview', 'usage', 'documentation', 'tldr'
  // Add new tabs here
];
```

## Troubleshooting

### Build Issues

**Error: "Examples app not built"**
```bash
npm run build:examples
```

**Error: "Playwright browsers not installed"**
```bash
npx playwright install
```

### Port Conflicts

If port 4173 is in use, the preview server will automatically find an available port. The pre-rendering script will detect the correct URL from the server output.

### Memory Issues

For large documentation sets, you may need to increase Node.js memory:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build:static
```

### Network Timeouts

Increase timeout in the configuration if pages take longer to load:
```javascript
const CONFIG = {
  timeout: 60000  // 60 seconds
};
```

## Integration with CI/CD

### GitHub Actions Example

```yaml
name: Build Documentation
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install
      - run: npm run build:static
      - name: Upload static files
        uses: actions/upload-artifact@v3
        with:
          name: static-docs
          path: static/
```

### Netlify Build

Add to `netlify.toml`:
```toml
[build]
  command = "npm run build:static"
  publish = "static"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

## Benefits

1. **AI/Agent Accessibility**: Tools like WebFetch can access documentation without JavaScript
2. **SEO Friendly**: Search engines can index the documentation content
3. **Fast Loading**: Static HTML loads faster than React applications
4. **Offline Access**: Documentation available without the full application
5. **Bandwidth Efficient**: Smaller payload for documentation consumers

## Maintenance

### Regular Updates

Re-run pre-rendering when documentation changes:
```bash
npm run build:static
```

### Automated Updates

Set up a webhook or scheduled job to regenerate static files:
```bash
#!/bin/bash
cd /path/to/pm7-ui-style-guide
git pull
npm install
npm run build:static
# Deploy static files to your web server
```

## Related Files

- `scripts/prerender.js` - Main pre-rendering script
- `scripts/generate-dialog-tldr.js` - Quick Dialog TL;DR generator
- `vite.config.examples.js` - Examples app build configuration
- `package.json` - Build scripts and dependencies

## Support

For issues with pre-rendering:
1. Check that examples app builds successfully
2. Verify Playwright browsers are installed
3. Ensure no port conflicts
4. Check browser console for JavaScript errors
5. Review the generated static files for content accuracy