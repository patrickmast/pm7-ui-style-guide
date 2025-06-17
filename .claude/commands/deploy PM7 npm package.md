# Deploy PM7 npm Package

Deploy the PM7 UI Style Guide npm package to the npm registry.

## What this command does:
1. Changes to the PM7 UI Style Guide project directory
2. Runs linting and TypeScript checking to ensure code quality
3. Builds the library for distribution
4. Bumps the package version (patch, minor, or major)
5. Publishes the package to npm registry with public access
6. Pushes version tag to GitHub

## Usage:
```
/deploy PM7 npm package
```

## Commands to run:
```bash
# Navigate to PM7 UI Style Guide project directory
cd /Users/patrickmast/Dev/pm7/pm7-ui-style-guide

# Run linting to ensure code quality
npm run lint

# Build the library for distribution
npm run build

# Bump version (choose appropriate level: patch for bug fixes, minor for new features, major for breaking changes)
npm version patch

# Publish to npm registry with public access
npm publish --access public

# Push the version tag to GitHub
git push --tags
```

## Prerequisites:
- Must be logged in to npm: `npm login`
- Must have publish permissions for pm7-ui-style-guide package
- All changes must be committed to git before versioning
- Package must build successfully without errors

## Version Bumping Guidelines:
- **patch** (1.3.21 → 1.3.22): Bug fixes, small improvements, no breaking changes
- **minor** (1.3.21 → 1.4.0): New features, new components, backwards compatible
- **major** (1.3.21 → 2.0.0): Breaking changes, API changes, major restructuring

## Expected output:
- Updated version in package.json
- Built library in `dist/` directory
- Package published to npm registry
- New git tag created and pushed to GitHub
- Package available for installation: `npm install pm7-ui-style-guide@latest`

## Verification:
After publishing, verify the package is available:
```bash
npm view pm7-ui-style-guide version
```