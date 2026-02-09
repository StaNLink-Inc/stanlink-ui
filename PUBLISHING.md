# Publishing Guide

## Install from GitHub (Private Repo)

In your app's package.json:

```json
{
  "dependencies": {
    "@stanlink/ui": "github:your-username/stanlink-ui#main"
  }
}
```

Or install directly:

```bash
npm install github:your-username/stanlink-ui#main
```

## Usage

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

## Install Specific Version/Branch/Commit

```bash
npm install github:your-username/stanlink-ui#v0.1.0
npm install github:your-username/stanlink-ui#develop
npm install github:your-username/stanlink-ui#abc1234
```
