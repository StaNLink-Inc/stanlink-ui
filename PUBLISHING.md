# Publishing Guide

## Install from NPM

> [!WARNING]
> **DEPRECATION NOTICE**: The GitHub Packages registry (`@stanlink-inc/ui`) is deprecated. Please install from the official NPM registry using `@stanlink/ui`.

### Install

```bash
npm install @stanlink/ui
```

### Usage

```tsx
import { Button, theme } from '@stanlink/ui';
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
npm update @stanlink/ui
```

## Install Specific Version

```bash
npm install @stanlink/ui@0.1.2
```
