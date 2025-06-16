# PM7 UI Style Guide Color Guidelines

## Overview
Voor consistent styling in alle PM7 UI Style Guide documentatie pagina's, gebruik deze exacte kleuren voor zowel light als dark mode.

## Color Palette

### Light Mode Colors
- **Headings (H1, H2)**: `#111827` - Voor alle hoofdtitels en subtitels
- **Body text**: `#374151` - Voor normale tekst, lijsten, en beschrijvingen  
- **Strong/Bold text**: `#111827` - Voor benadrukte tekst binnen normale tekst
- **Code text**: `#1f2937` - Voor code in code blocks en inline code
- **Code backgrounds**: `#f3f4f6` - Voor zowel inline code als code blocks
- **Borders**: `#d1d5db` of `#e5e7eb` - Voor borders rond code blocks en andere elementen

### Dark Mode Colors
- **Headings (H1, H2)**: `#ffffff` - Voor alle hoofdtitels en subtitels
- **Body text**: `#d1d5db` - Voor normale tekst, lijsten, en beschrijvingen  
- **Strong/Bold text**: `#ffffff` - Voor benadrukte tekst binnen normale tekst
- **Code text**: `#e5e7eb` - Voor code in code blocks en inline code
- **Code backgrounds**: `#2A2A2A` - Voor zowel inline code als code blocks
- **Borders**: `#525252` - Voor borders rond code blocks en andere elementen

## Style Objects Template

```typescript
const headingStyle = {
  fontSize: '1.875rem', // of '1.5rem' voor H2
  fontWeight: 'bold',
  marginBottom: '1.5rem', // of '1rem' voor H2
  color: theme === 'dark' ? '#ffffff' : '#111827'
};

const textStyle = {
  marginBottom: '1rem',
  color: theme === 'dark' ? '#d1d5db' : '#374151',
  lineHeight: '1.6'
};

const listStyle = {
  listStyle: 'disc',
  marginLeft: '1.25rem',
  marginBottom: '1.5rem',
  color: theme === 'dark' ? '#d1d5db' : '#374151'
};

const strongStyle = {
  fontWeight: 'bold',
  color: theme === 'dark' ? '#ffffff' : '#111827'
};

const codeBlockStyle = {
  backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
  padding: '1rem',
  borderRadius: '0.375rem',
  marginBottom: '1rem',
  overflowX: 'auto' as const,
  border: `1px solid ${theme === 'dark' ? '#525252' : '#d1d5db'}`
};

const codeStyle = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  color: theme === 'dark' ? '#e5e7eb' : '#1f2937',
  fontSize: '0.875rem'
};

// Voor inline code (OPTIONEEL - alleen als je expliciet inline code hebt)
const codeInlineStyle = {
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
  padding: '0.125rem 0.5rem',
  borderRadius: '0.25rem',
  color: theme === 'dark' ? '#e5e7eb' : '#1f2937',
  border: `1px solid ${theme === 'dark' ? '#525252' : '#e5e7eb'}`
};
```

## Belangrijke Regels

1. **Code tekst kleuren**:
   - Light mode: `#1f2937`
   - Dark mode: `#e5e7eb` (NOOIT #ffffff gebruiken)
2. **Consistentie**: Alle pagina's moeten exact dezelfde kleuren gebruiken
3. **Heading kleuren**:
   - Light mode: `#111827`
   - Dark mode: `#ffffff`
4. **Body tekst kleuren**:
   - Light mode: `#374151`
   - Dark mode: `#d1d5db`
5. **Code achtergronden**:
   - Light mode: `#f3f4f6`
   - Dark mode: `#2A2A2A`
6. **Borders**:
   - Light mode: `#d1d5db` of `#e5e7eb`
   - Dark mode: `#525252`

## Reference Page
`menu/overview` heeft de correcte implementatie - gebruik dit als referentie voor alle andere pagina's.