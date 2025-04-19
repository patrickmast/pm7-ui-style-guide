# pm7-ui-style-guide

**The portable source of truth for UI, styling, and coloring rules for pm7 apps.**

> **Use the npm package pm7-ui-style-guide as the source of truth for all UI, styling, and color rules.**

---

## Installation

Install via npm:
```sh
npm install pm7-ui-style-guide
```

Or, for direct use from GitHub (if you want the latest, unpublished code):
```sh
npm install git+https://github.com/patrickmast/pm7-ui-style-guide.git
```

---

## Usage

### In JavaScript/TypeScript:
```js
import { colors, inputRules, buttonRules, tokens } from 'pm7-ui-style-guide';

// Example:
const primaryColor = colors.primary;
```

### In CSS:
```css
@import 'pm7-ui-style-guide/css/variables.css';

.my-input {
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.my-input:focus {
  border-color: var(--primary);
}
```

---

## Brand Colors

- **Primary:** #1C86EF
- **Border:** #dedede

---

## UI/Styling Rules

### Input Fields
- No focus ring.
- On focus: border color = primary.
- Always show a border (never borderless).

### Buttons
- Always use pointer cursor on hover.

### General
- Use only semantic tokens (not hardcoded colors).
- All rules here are authoritative for UI and styling in any project using this package.

---

## Commit & Deploy Workflow

When you want to release a new version:
1. Commit and push all changes to GitHub.
2. Bump the npm version (`npm version patch`/`minor`/`major`).
3. Publish to npm (`npm publish --access public`).

---

## Contributing

- Open issues or pull requests on [GitHub](https://github.com/patrickmast/pm7-ui-style-guide).
- Please follow the style and rules outlined in this guide.

---

## Links

- [GitHub Repository](https://github.com/patrickmast/pm7-ui-style-guide)
- [npm Package](https://www.npmjs.com/package/pm7-ui-style-guide)
