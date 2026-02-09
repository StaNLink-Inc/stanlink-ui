# @stanlink/ui

StaNLink Design System - Professional UI components built with Material-UI and React.

## Installation

```bash
npm install @stanlink/ui
```

### Peer Dependencies

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Usage

```tsx
import { Button, Card, AppBar, Footer, Logo } from '@stanlink/ui';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@stanlink/ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Click Me</Button>
      <Logo width={80} />
    </ThemeProvider>
  );
}
```

## Components

### Basic Components
- Button, Card, Chip, Avatar, Badge, Divider
- TextField, Select, Checkbox, Radio, Switch
- AppBar, Drawer, BottomNavigation, Tabs
- Dialog, Snackbar, Backdrop, Alert
- Table, DataGrid, Pagination
- DatePicker, TimePicker, FileUpload
- SearchBar, MegaMenu, Footer, Logo
- OrbitalLoader, StaNLinkGraphic

### Templates
- AuthPage - Sign in/up with animated gradient panel
- OnboardingPage - Multi-step onboarding with stepper
- LandingPage - Hero, features, pricing, testimonials
- ErrorPage - 404, 500, 403, 503 error pages
- LoadingPage - Full-screen loading with orbital loader

## Build

```bash
npm run build
```

## Storybook

```bash
npm run storybook
```

## License

MIT
