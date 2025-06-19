# 🚨 CRITICAL: Documentation Workflow Enforcement

## For Claude Code: MANDATORY CHECKLIST

When making ANY component changes, you MUST follow this exact workflow:

### 1. ⚠️ BEFORE Starting Component Changes
```bash
# Check current documentation state
npm run check-docs [component-name]
```

### 2. 🔄 DURING Component Development
Make changes in this EXACT order:

1. **Component Interface** (`src/components/[component]/pm7-[component].tsx`)
2. **README.md** (`src/components/[component]/README.md`)
3. **Overview Page** (`examples/example-[component]-overview.tsx`)
4. **Usage Page** (`examples/example-[component]-usage.tsx`)
5. **FAQ Page** (`examples/example-faq.tsx`) - if relevant

### 3. ✅ AFTER Each Change
```bash
# Verify documentation sync
npm run check-docs [component-name]
```

### 4. 🎯 BEFORE Finishing
```bash
# Final verification - this MUST pass
npm run build
```

## 🚫 BUILD WILL FAIL IF:
- Any prop exists in component but not in usage documentation
- Documentation references non-existent props
- Required documentation files are missing
- Props table doesn't match component interface

## 💡 Quick Commands
```bash
# Check single component
npm run check-docs button

# Check all components
npm run check-docs

# Force build (includes doc check)
npm run build
```

## 🎯 ZERO TOLERANCE POLICY
- No exceptions to the 4-location rule
- Build process enforces this automatically
- Documentation sync is NOT optional
- System will catch and prevent inconsistencies

**This workflow is designed to prevent the exact problem you experienced. The build system now enforces what CLAUDE.md describes.**