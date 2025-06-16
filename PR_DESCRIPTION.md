# Integrate NativeWind for Universal Styling

This PR addresses issue #2 by integrating NativeWind for universal styling across platforms.

## Changes

- Added NativeWind and required dependencies
- Created configuration files:
  - tailwind.config.js: Configured with the project's color scheme
  - global.css: Added Tailwind directives
  - babel.config.js: Added NativeWind preset
  - metro.config.js: Set up for NativeWind integration
  - nativewind-env.d.ts: Added TypeScript integration

- Implemented a demo component (NativeWindExample) that showcases NativeWind styling
- Added the example component to the home screen

## Benefits

- Consistent styling across all platforms (iOS, Android, Web) using Tailwind CSS utility classes
- Better developer experience with utility-first CSS approach
- Support for responsive design, dark mode, and other Tailwind features
- Improved maintainability with reusable styling patterns

## Testing

The component has been tested in development mode. Please test on different platforms to ensure consistent styling.