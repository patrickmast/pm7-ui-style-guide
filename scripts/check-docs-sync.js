#!/usr/bin/env node

/**
 * Documentation Synchronization Checker
 * 
 * This script enforces the CLAUDE.md documentation rule:
 * When modifying ANY component prop, interface, functionality, or documentation,
 * ALWAYS update FOUR locations simultaneously.
 * 
 * Usage: node scripts/check-docs-sync.js [component-name]
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS = ['button', 'card', 'dialog', 'input', 'menu', 'tab-selector', 'theme-toggle', 'toast'];

function checkDocumentationSync(componentName) {
  const errors = [];
  
  // Required file paths for each component
  const requiredFiles = [
    `src/components/${componentName}/README.md`,
    `examples/example-${componentName}-overview.tsx`,
    `examples/example-${componentName}-usage.tsx`,
    `examples/example-faq.tsx` // Only if component has FAQ entries
  ];
  
  console.log(`🔍 Checking documentation sync for: ${componentName}`);
  
  requiredFiles.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      errors.push(`MISSING: ${filePath}`);
    } else {
      console.log(`✅ Found: ${filePath}`);
    }
  });
  
  // Extract props from component interface
  const componentPath = `src/components/${componentName}/pm7-${componentName}.tsx`;
  if (fs.existsSync(componentPath)) {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    const interfaceMatch = componentContent.match(/interface\s+PM7\w+Props[^{]*{([^}]*)}/s);
    
    if (interfaceMatch) {
      const interfaceContent = interfaceMatch[1];
      const props = extractProps(interfaceContent);
      
      console.log(`📋 Found ${props.length} props in component interface:`, props);
      
      // Check if all props are documented in usage page
      const usagePath = `examples/example-${componentName}-usage.tsx`;
      if (fs.existsSync(usagePath)) {
        const usageContent = fs.readFileSync(usagePath, 'utf8');
        
        props.forEach(prop => {
          if (!usageContent.includes(prop) && prop !== 'children' && !prop.startsWith('...')) {
            errors.push(`UNDOCUMENTED PROP: ${prop} not found in ${usagePath}`);
          }
        });
      }
    }
  }
  
  return errors;
}

function extractProps(interfaceContent) {
  // Enhanced prop extraction - look for prop?: type patterns but exclude comments
  const lines = interfaceContent.split('\n');
  const props = [];
  
  for (const line of lines) {
    // Skip comment-only lines
    if (line.trim().startsWith('//') || line.trim().startsWith('*')) {
      continue;
    }
    
    // Look for prop?: type pattern, but exclude inline comments
    const propMatch = line.match(/^\s*(\w+)\??\s*:/);
    if (propMatch) {
      const propName = propMatch[1];
      // Skip common non-prop words that might appear
      if (!['New', 'Default', 'Note', 'Example'].includes(propName)) {
        props.push(propName);
      }
    }
  }
  
  return props;
}

function checkAllComponents() {
  let totalErrors = 0;
  
  COMPONENTS.forEach(component => {
    console.log(`\n${'='.repeat(50)}`);
    const errors = checkDocumentationSync(component);
    
    if (errors.length > 0) {
      console.log(`❌ ${component} has ${errors.length} documentation issues:`);
      errors.forEach(error => console.log(`   ${error}`));
      totalErrors += errors.length;
    } else {
      console.log(`✅ ${component} documentation is in sync`);
    }
  });
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 SUMMARY: ${totalErrors} total documentation issues found`);
  
  if (totalErrors > 0) {
    console.log(`\n🚨 CRITICAL: Documentation out of sync!`);
    console.log(`📖 See CLAUDE.md for the 4-location update rule.`);
    process.exit(1);
  } else {
    console.log(`\n🎉 All documentation is properly synchronized!`);
  }
}

// Run check
const componentArg = process.argv[2];
if (componentArg) {
  if (COMPONENTS.includes(componentArg)) {
    const errors = checkDocumentationSync(componentArg);
    if (errors.length > 0) {
      console.log(`❌ Issues found:`);
      errors.forEach(error => console.log(`   ${error}`));
      process.exit(1);
    } else {
      console.log(`✅ ${componentArg} documentation is in sync`);
    }
  } else {
    console.log(`❌ Unknown component: ${componentArg}`);
    console.log(`Available components: ${COMPONENTS.join(', ')}`);
    process.exit(1);
  }
} else {
  checkAllComponents();
}