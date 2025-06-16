# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start Development Server:**
```bash
npx expo start
```

**Platform-Specific Development:**
```bash
npm run android    # Android emulator
npm run ios        # iOS simulator  
npm run web        # Web browser
```

**Code Quality:**
```bash
npm run lint       # Run ESLint
```

**Project Reset:**
```bash
npm run reset-project  # Move current code to app-example/ and create blank app/
```

## Architecture Overview

This is a **React Native Expo application** with universal platform support (iOS, Android, Web) using:

- **Expo Router** for file-based navigation in the `app/` directory
- **NativeWind (Tailwind CSS)** alongside traditional StyleSheet API for styling
- **TypeScript** with strict mode and path aliases (`@/*` maps to root)
- **Tab-based navigation** using `(tabs)` directory grouping
- **Theming system** with light/dark mode support via custom hooks

## Key Directories

- `app/` - File-based routing with Expo Router
- `app/(tabs)/` - Tab navigation group with index and explore screens
- `components/` - Reusable UI components, including themed components
- `components/ui/` - Platform-specific UI components
- `constants/` - App-wide constants (Colors, theme definitions)
- `hooks/` - Custom React hooks for theme and state management

## Styling Architecture

The project uses a **dual styling approach**:

1. **NativeWind (Tailwind CSS)** - Utility-first classes configured in `tailwind.config.js`
2. **StyleSheet API** - Traditional React Native styling for complex layouts

**Theming:**
- Themed components (`ThemedText`, `ThemedView`) automatically adapt to light/dark mode
- Custom color schemes defined in `constants/Colors.ts`
- Use `useColorScheme()` and `useThemeColor()` hooks for theme-aware styling

## Build Configuration

- **EAS Build** configured with development, preview, and production profiles
- **Metro bundler** configured for NativeWind integration
- **Babel** configured with NativeWind preset for CSS-in-JS transformation
- **Auto-increment build numbers** for production builds

## Platform-Specific Components

Use `.ios.tsx` and `.android.tsx` suffixes for platform-specific implementations. The project includes platform-aware components in `components/ui/`.

## Navigation Patterns

- File-based routing: `app/` directory structure defines navigation
- Tab navigation: Use `(tabs)` directory for tab-based screens
- Modal screens: Place outside tab groups in `app/` directory
- Use `expo-router` hooks for navigation (`useRouter`, `useLocalSearchParams`)

## No Testing Framework

Currently no formal testing setup. Development testing is done through Expo development builds across multiple platforms.