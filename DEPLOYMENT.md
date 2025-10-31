# GitHub Pages Deployment Guide

This guide will help you deploy your Angular application to GitHub Pages.

## Prerequisites

1. Make sure you have a GitHub repository created for this project
2. Install Git if not already installed
3. Install Node.js and npm

## Configuration Complete ✅

The following configurations have been added for GitHub Pages deployment:

- ✅ `baseHref` set to `/co-build/` in angular.json
- ✅ Deployment scripts added to package.json
- ✅ 404.html file created for client-side routing
- ✅ .nojekyll file created in public folder
- ✅ Single Page App routing script added to index.html

## Deployment Steps

### Option 1: Automatic Deployment (Using angular-cli-ghpages)

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Add your GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/co-build.git
   ```
   Replace `YOUR-USERNAME` with your actual GitHub username.

3. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build your application in production mode
   - Deploy it to the `gh-pages` branch automatically

5. **Enable GitHub Pages** (one-time setup):
   - Go to your GitHub repository
   - Navigate to Settings → Pages
   - Source: Select `gh-pages` branch
   - Click Save

6. **Access your site**:
   Your site will be available at: `https://YOUR-USERNAME.github.io/co-build/`

### Option 2: Manual Deployment

1. **Build your application**:
   ```bash
   npm run build:prod
   ```

2. **Navigate to the build output**:
   ```bash
   cd dist/co-build/browser
   ```

3. **Initialize Git in the build folder**:
   ```bash
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   ```

4. **Push to gh-pages branch**:
   ```bash
   git push -f https://github.com/YOUR-USERNAME/co-build.git main:gh-pages
   ```

5. **Enable GitHub Pages** in your repository settings (see step 5 above)

## Important Notes

### Custom Domain

If you want to use a custom domain instead of `username.github.io/co-build`:

1. **Update baseHref** in `angular.json`:
   ```json
   "baseHref": "/"
   ```

2. **Add CNAME file** in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

3. **Configure DNS** settings with your domain provider

### Repository Name Different?

If your repository name is different from `co-build`, update the `baseHref` in `angular.json`:

```json
"baseHref": "/YOUR-REPO-NAME/"
```

And update the deploy script in `package.json` if needed.

## Useful Commands

- **Local Development**:
  ```bash
  npm start
  ```
  Opens at `http://localhost:4200`

- **Production Build**:
  ```bash
  npm run build:prod
  ```

- **Deploy to GitHub Pages**:
  ```bash
  npm run deploy
  ```

## Troubleshooting

### Issue: Blank page after deployment
- Check browser console for errors
- Verify `baseHref` matches your repository name
- Clear browser cache

### Issue: 404 errors on refresh
- Ensure 404.html is included in the build output
- Verify the routing script is in index.html

### Issue: Assets not loading
- Check if assets paths are correct
- Verify `baseHref` is properly set

## GitHub Actions (Optional)

For automatic deployment on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build:prod
      
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        folder: dist/co-build/browser
        branch: gh-pages
```

## Support

If you encounter any issues, check:
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages)

