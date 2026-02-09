# StaNLink Design System - Quick Start

## 🚀 Installation (Coming Soon - NPM Package)

```bash
npm install @stanlink/ui
```

## 📦 Current Usage (Local Development)

### 1. Link the package locally:
```bash
cd D:/dev/stanlink-ui
npm link

cd your-project
npm link stanlink-ui
```

### 2. Import and use in your project:

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { Button, theme } from 'stanlink-ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </ThemeProvider>
  );
}
```

## 🎨 Available Components

### Button
```tsx
import { Button } from 'stanlink-ui';

// Variants
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Colors
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="error">Error</Button>
<Button color="success">Success</Button>

// Loading State
<Button loading>Loading...</Button>

// With Icons
import { Add, Send } from '@mui/icons-material';
<Button startIcon={<Add />}>Add Item</Button>
<Button endIcon={<Send />}>Send</Button>
```

## 🎨 Theme Tokens

### Colors
- Primary: `#1A73E8` (StaNLink Blue)
- Secondary: `#34A853` (Green)
- Error: `#EA4335`
- Warning: `#FBBC04`
- Info: `#4285F4`
- Success: `#34A853`

### Typography
- Font Family: Google Sans, Roboto, Helvetica, Arial
- Sizes: h1-h6, body1-2, button, caption

### Spacing
- Base unit: 8px
- Use: `theme.spacing(1)` = 8px, `theme.spacing(2)` = 16px, etc.

### Border Radius
- Default: 8px
- Cards: 12px

## 🔧 Development

```bash
# Run Storybook
npm run storybook

# Build
npm run build

# Lint
npm run lint
```

## 📚 View Components
Open Storybook: http://localhost:6006

## 🎯 Next Steps
1. Add more components (TextField, Card, etc.)
2. Set up Chromatic for visual testing
3. Publish to NPM
4. Create documentation site
