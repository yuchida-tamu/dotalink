# Hooks

This directory contains custom React hooks used throughout the application.

## useAppConfig

The `useAppConfig` hook provides easy access to application configuration and environment information using expo-constants. This centralizes access to app metadata and environment variables.

### Usage

```tsx
import { useAppConfig } from '@/hooks/useAppConfig';

function MyComponent() {
  const appConfig = useAppConfig();
  
  return (
    <View>
      <Text>App Name: {appConfig.appName}</Text>
      <Text>Version: {appConfig.version}</Text>
      <Text>
        Environment: {appConfig.isProduction ? 'Production' : 'Development'}
      </Text>
      {appConfig.deviceName && (
        <Text>Device: {appConfig.deviceName}</Text>
      )}
    </View>
  );
}
```

### Available Properties

- `appName`: Name of the application from the Expo config
- `version`: Current app version 
- `buildNumber`: Build number (iOS) or version code (Android)
- `isProduction`: Boolean indicating if app is running in production environment
- `isDevelopment`: Boolean indicating if app is running in development environment
- `deviceName`: Name of the current device (if available)
- `deviceYearClass`: Device year class for performance optimization
- `manifest`: Complete Expo manifest/config
- `constants`: Complete Constants object from expo-constants

## Environment Variables

To configure environment variables, you can add them to your app.config.js or app.json:

```js
// app.config.js
export default {
  expo: {
    // other config
    extra: {
      env: {
        ENVIRONMENT: process.env.NODE_ENV || 'development',
        API_URL: process.env.API_URL || 'https://api.example.com',
        // Add other environment variables here
      },
    },
  },
};
```

These variables will be accessible through `useAppConfig()`.