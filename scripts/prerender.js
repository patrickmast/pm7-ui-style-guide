#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

const PM7_COMPONENTS = [
  'menu',
  'button', 
  'input',
  'dialog',
  'tabselector',
  'card',
  'themetoggle'
];

const TABS = [
  'demo',
  'overview', 
  'usage',
  'documentation'
];

// Configuration
const CONFIG = {
  // Build directory for the examples app
  examplesDir: path.join(__dirname, '../examples/dist'),
  // Output directory for static HTML files
  staticDir: path.join(__dirname, '../static'),
  // Base URL for the running examples app
  baseUrl: 'http://localhost:4173',
  // Port for preview server
  port: 4173,
  // Timeout for page loads
  timeout: 30000
};

/**
 * Clean and prepare the static directory
 */
async function setupStaticDirectory() {
  console.log('📁 Setting up static directory...');
  await fs.ensureDir(CONFIG.staticDir);
  await fs.emptyDir(CONFIG.staticDir);
  
  // Copy some essential assets
  const assetsDir = path.join(CONFIG.staticDir, 'assets');
  await fs.ensureDir(assetsDir);
  
  console.log('✅ Static directory prepared');
}

/**
 * Create a clean HTML template for pre-rendered content
 */
function createCleanTemplate(title, content, theme = 'light') {
  return `<!DOCTYPE html>
<html lang="en" class="${theme === 'dark' ? 'dark' : ''}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - PM7 UI Style Guide</title>
    <meta name="description" content="PM7 UI Style Guide documentation for ${title}">
    
    <!-- PM7 UI Style Guide CSS -->
    <style>
        /* Basic CSS Reset and Typography */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .dark body {
            color: #e5e5e5;
            background: #1a1a1a;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin: 1.5rem 0 1rem 0;
            line-height: 1.3;
        }
        
        h1 { font-size: 2.5rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.5rem; }
        h4 { font-size: 1.25rem; }
        
        p {
            margin: 1rem 0;
        }
        
        ul, ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        li {
            margin: 0.5rem 0;
        }
        
        code {
            background: #f5f5f5;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-family: Monaco, 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        .dark code {
            background: #2a2a2a;
            color: #e5e5e5;
        }
        
        pre {
            background: #f5f5f5;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1rem 0;
        }
        
        .dark pre {
            background: #2a2a2a;
            color: #e5e5e5;
        }
        
        pre code {
            background: none;
            padding: 0;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        
        th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .dark th, .dark td {
            border-bottom-color: #444;
        }
        
        th {
            font-weight: 600;
            background: #f9f9f9;
        }
        
        .dark th {
            background: #2a2a2a;
        }
        
        a {
            color: #1C86EF;
            text-decoration: underline;
        }
        
        .dark a {
            color: #3b9eff;
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 2px solid #f0f0f0;
        }
        
        .dark .header {
            border-bottom-color: #333;
        }
        
        .content {
            max-width: none;
        }
        
        .highlight-box {
            background: #fff3cd;
            border: 2px solid #ffc107;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .dark .highlight-box {
            background: #3a2a2a;
            border-color: #ffc107;
        }
        
        .success-box {
            background: #e8f5e8;
            border: 1px solid #c3e6c3;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .dark .success-box {
            background: #1a3a1a;
            border-color: #4a8a4a;
        }
        
        .error-box {
            background: #ffeaea;
            border: 1px solid #ffcaca;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .dark .error-box {
            background: #3a1a1a;
            border-color: #8a4a4a;
        }
        
        .footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #666;
        }
        
        .dark .footer {
            border-top-color: #444;
            color: #999;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
            
            h1 { font-size: 2rem; }
            h2 { font-size: 1.5rem; }
            
            table {
                font-size: 0.9rem;
            }
            
            th, td {
                padding: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>PM7 UI Style Guide</h1>
        <p>Documentation for ${title}</p>
    </div>
    
    <div class="content">
        ${content}
    </div>
    
    <div class="footer">
        <p>PM7 UI Style Guide - Generated on ${new Date().toISOString().split('T')[0]}</p>
        <p><a href="https://github.com/patrickmast/pm7-ui-style-guide">View on GitHub</a></p>
    </div>
</body>
</html>`;
}

/**
 * Extract clean content from the rendered page
 */
function extractCleanContent(html) {
  const $ = cheerio.load(html);
  
  // Remove navigation elements
  $('.app-container header').remove();
  $('.app-container footer').remove();
  $('.sidebar').remove();
  
  // Find the main content area
  const mainContent = $('main').html() || $('[data-theme]').html() || $('body').html();
  
  if (!mainContent) {
    return '<p>No content found</p>';
  }
  
  // Clean up the content
  const contentHtml = cheerio.load(mainContent);
  
  // Remove any script tags
  contentHtml('script').remove();
  
  // Remove any style tags that might interfere
  contentHtml('style').remove();
  
  // Remove any PM7 specific class attributes that might cause issues
  contentHtml('*').each(function() {
    const element = contentHtml(this);
    const classAttr = element.attr('class');
    if (classAttr) {
      // Keep only essential classes, remove PM7 component classes
      const cleanClasses = classAttr
        .split(' ')
        .filter(cls => !cls.startsWith('pm7-') && !cls.includes('data-'))
        .join(' ');
      
      if (cleanClasses) {
        element.attr('class', cleanClasses);
      } else {
        element.removeAttr('class');
      }
    }
  });
  
  return contentHtml.html();
}

/**
 * Start a preview server for the examples app
 */
async function startPreviewServer() {
  const { spawn } = require('child_process');
  
  console.log('🚀 Starting preview server...');
  
  // Start the preview server
  const serverProcess = spawn('npm', ['run', 'preview'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'pipe'
  });
  
  // Wait for server to be ready
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Server start timeout'));
    }, 15000);
    
    serverProcess.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('http://localhost')) {
        clearTimeout(timeout);
        resolve();
      }
    });
    
    serverProcess.stderr.on('data', (data) => {
      console.error('Server error:', data.toString());
    });
  });
  
  console.log('✅ Preview server started');
  return serverProcess;
}

/**
 * Pre-render a specific route
 */
async function prerenderRoute(page, component, tab, theme = 'light') {
  const url = \`\${CONFIG.baseUrl}/\${component}/\${tab}\`;
  const filename = \`\${component}-\${tab}\${theme === 'dark' ? '-dark' : ''}.html\`;
  const outputPath = path.join(CONFIG.staticDir, filename);
  
  console.log(\`📄 Pre-rendering: \${url}\`);
  
  try {
    // Navigate to the page
    await page.goto(url, { waitUntil: 'networkidle', timeout: CONFIG.timeout });
    
    // Wait for the content to load
    await page.waitForSelector('main', { timeout: 5000 });
    
    // Wait a bit more for any dynamic content
    await page.waitForTimeout(2000);
    
    // Get the page content
    const html = await page.content();
    
    // Extract clean content
    const cleanContent = extractCleanContent(html);
    
    // Create the static HTML
    const staticHtml = createCleanTemplate(\`\${component.charAt(0).toUpperCase() + component.slice(1)} - \${tab.toUpperCase()}\`, cleanContent, theme);
    
    // Write to file
    await fs.writeFile(outputPath, staticHtml, 'utf8');
    
    console.log(\`✅ Generated: \${filename}\`);
    
    return {
      success: true,
      component,
      tab,
      theme,
      filename,
      url
    };
    
  } catch (error) {
    console.error(\`❌ Failed to pre-render \${url}:\`, error.message);
    
    return {
      success: false,
      component,
      tab,
      theme,
      filename,
      url,
      error: error.message
    };
  }
}

/**
 * Main pre-rendering function
 */
async function prerender() {
  console.log('🎬 Starting pre-rendering process...');
  
  let serverProcess = null;
  let browser = null;
  
  try {
    // Setup static directory
    await setupStaticDirectory();
    
    // Build the examples app first
    console.log('🔨 Building examples app...');
    const { spawn } = require('child_process');
    
    await new Promise((resolve, reject) => {
      const buildProcess = spawn('npm', ['run', 'build:examples'], {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit'
      });
      
      buildProcess.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Examples app built successfully');
          resolve();
        } else {
          reject(new Error(\`Build failed with code \${code}\`));
        }
      });
    });
    
    // Start preview server
    serverProcess = await startPreviewServer();
    
    // Start browser
    console.log('🌐 Starting browser...');
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Pre-render all routes
    const results = [];
    
    for (const component of PM7_COMPONENTS) {
      for (const tab of TABS) {
        // Pre-render light theme
        const lightResult = await prerenderRoute(page, component, tab, 'light');
        results.push(lightResult);
        
        // Pre-render dark theme
        const darkResult = await prerenderRoute(page, component, tab, 'dark');
        results.push(darkResult);
        
        // Small delay between requests
        await page.waitForTimeout(500);
      }
    }
    
    // Generate summary
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    console.log(\`\n📊 Pre-rendering Summary:\`);
    console.log(\`✅ Successful: \${successful.length}\`);
    console.log(\`❌ Failed: \${failed.length}\`);
    
    if (failed.length > 0) {
      console.log(\`\n❌ Failed routes:\`);
      failed.forEach(result => {
        console.log(\`  - \${result.filename}: \${result.error}\`);
      });
    }
    
    // Create index file
    await createIndexFile(successful);
    
    console.log(\`\n🎉 Pre-rendering complete! Files saved to: \${CONFIG.staticDir}\`);
    
  } catch (error) {
    console.error('💥 Pre-rendering failed:', error);
    process.exit(1);
  } finally {
    // Cleanup
    if (browser) {
      await browser.close();
    }
    
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

/**
 * Create an index file listing all pre-rendered pages
 */
async function createIndexFile(results) {
  const indexPath = path.join(CONFIG.staticDir, 'index.html');
  
  const componentGroups = {};
  results.forEach(result => {
    if (!componentGroups[result.component]) {
      componentGroups[result.component] = [];
    }
    componentGroups[result.component].push(result);
  });
  
  let indexContent = \`
    <h1>PM7 UI Style Guide - Static Documentation</h1>
    <p>Pre-rendered documentation pages for all PM7 UI components.</p>
    
    <h2>Available Components</h2>
  \`;
  
  Object.keys(componentGroups).forEach(component => {
    indexContent += \`<h3>\${component.charAt(0).toUpperCase() + component.slice(1)}</h3><ul>\`;
    
    const tabs = {};
    componentGroups[component].forEach(result => {
      if (!tabs[result.tab]) {
        tabs[result.tab] = [];
      }
      tabs[result.tab].push(result);
    });
    
    Object.keys(tabs).forEach(tab => {
      indexContent += \`<li><strong>\${tab.toUpperCase()}</strong>: \`;
      const themes = tabs[tab];
      themes.forEach((result, index) => {
        indexContent += \`<a href="\${result.filename}">\${result.theme}</a>\`;
        if (index < themes.length - 1) {
          indexContent += ', ';
        }
      });
      indexContent += \`</li>\`;
    });
    
    indexContent += \`</ul>\`;
  });
  
  const indexHtml = createCleanTemplate('Index', indexContent);
  await fs.writeFile(indexPath, indexHtml, 'utf8');
  
  console.log('✅ Created index.html');
}

// Run the pre-rendering if this script is executed directly
if (require.main === module) {
  prerender().catch(console.error);
}

module.exports = { prerender, CONFIG };