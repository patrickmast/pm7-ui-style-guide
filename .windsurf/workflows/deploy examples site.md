---
description: Deploy examples site to Vercel
---
## Deployment Workflow

### 1. Build the examples site
```bash
npm run build:examples
```
This builds the examples site using the Vite configuration in vite.config.examples.js.

### 2. Verify the build output
```bash
ls -la examples/dist
```
Ensure that the build generated the necessary files in the examples/dist directory.

### 3. Deploy to Vercel
```bash
cd examples && vercel --prod --yes
```
This deploys the examples site to Vercel using the production environment. The `--yes` flag automatically confirms all prompts.

### 4. Verify deployment
Once deployed, the site will be available at both the Vercel-generated URL and our custom domain.

### 5. URL
After deployment, ONLY mention the custom domain URL: https://ui-style-guide.pm7.tools

Do NOT mention or display the Vercel-generated URL in the response, even if it appears in the deployment output.

### Notes
- Do not push or commit anything to git during this process
- If the deployment fails, check the Vercel logs for errors
- The examples site should reflect the latest components from the npm package
