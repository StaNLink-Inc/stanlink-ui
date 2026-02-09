# Installation Guide

## Setup GitHub Packages (One-time)

### 1. Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scope: `read:packages`
4. Copy the token

### 2. Configure npm in Your Project

Create `.npmrc` file in your project root:

```
@stanlink-inc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Replace `YOUR_GITHUB_TOKEN` with your actual token.

## Install Package

```bash
npm install @stanlink-inc/ui
```

## Install Peer Dependencies

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Usage

```tsx
import { Button, AuthPage, Logo, theme } from '@stanlink-inc/ui';
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
