# Installation Guide

> [!WARNING]
> **DEPRECATION NOTICE**: The GitHub Packages registry (`@stanlink-inc/ui`) is deprecated. Please install from the official NPM registry using `@stanlink/ui`.

## Install Package

```bash
npm install @stanlink/ui
```

## Install Peer Dependencies

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Usage

```tsx
import { Button, AuthPage, Logo, theme } from '@stanlink/ui';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Logo width={80} />
      <Button variant="contained">Get Started</Button>
    </ThemeProvider>
  );
}
```

## Publishing New Version (Maintainers Only)

1. **Update version in package.json**
   ```json
   "version": "0.1.3"
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "v0.1.3"
   git push
   ```

3. **Create GitHub Release**
   - Go to: https://github.com/StaNLink-Inc/stanlink-ui/releases/new
   - Tag: `v0.1.3`
   - Title: `v0.1.3`
   - Click "Publish release"

The GitHub Actions workflow will automatically build and publish to GitHub Packages.
