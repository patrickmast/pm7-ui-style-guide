#!/bin/sh

# release.sh - Automates version bump, build, commit, tag, push, and npm publish for pm7-ui-style-guide
# Usage: ./release.sh [patch|minor|major]
# Default is patch if no argument is given.

set -e

# 1. Bump version (patch/minor/major)
npm version "${1:-patch}"

# 2. Build the package
npm run build

# 3. Add all changes (including version bump and build output)
git add .

# 4. Commit with version in message
VERSION=$(node -p "require('./package.json').version")
git commit -m "chore: release v$VERSION"

# 5. Tag the commit
git tag "v$VERSION"

# 6. Push commit and tag
git push && git push --tags

# 7. Publish to npm
npm publish
