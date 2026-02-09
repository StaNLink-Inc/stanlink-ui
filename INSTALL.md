# Installation Guide

## Setup (One-time)

1. **Create GitHub Personal Access Token**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `read:packages`
   - Copy the token

2. **In your app, create `.npmrc` file:**
   ```
   @stanlink:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

## Install

```bash
npm install @stanlink/ui
```

## Usage

```tsx
import { Button, AuthPage, Logo, theme } from '@stanlink/ui';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Logo width={80} />
      <Button variant="contained">Click Me</Button>
    </ThemeProvider>
  );
}
```

## Publishing New Version

1. **Update version in package.json**
   ```json
   "version": "0.1.1"
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "v0.1.1"
   git push
   ```

3. **Create GitHub Release**
   - Go to: https://github.com/stanlink/stanlink-ui/releases/new
   - Tag: `v0.1.1`
   - Title: `v0.1.1`
   - Click "Publish release"

The workflow will automatically build and publish to GitHub Packages.
