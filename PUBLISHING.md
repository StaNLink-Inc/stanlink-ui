# Publishing Guide

## Install from GitHub Packages

### Setup (One-time)

1. **Create GitHub Personal Access Token**
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scope: `read:packages`
   - Copy the token

2. **Create `.npmrc` in your project:**
   ```
   @stanlink-inc:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

### Install

```bash
npm install @stanlink-inc/ui
```

### Usage

```tsx
import { Button, theme } from '@stanlink-inc/ui';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Hello</Button>
    </ThemeProvider>
  );
}
```

## Update to Latest

```bash
npm update @stanlink-inc/ui
```

## Install Specific Version

```bash
npm install @stanlink-inc/ui@0.1.2
```
