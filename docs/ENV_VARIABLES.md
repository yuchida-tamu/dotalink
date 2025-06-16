# Environment Variables in Dotalink

This document explains how to set up and use environment variables for API keys and other configuration in the Dotalink app.

## Setting Up Environment Variables

1. Copy the `.env.example` file to create your own `.env` file:

   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file with your actual API keys and configuration values:

   ```
   EXPO_PUBLIC_API_URL=https://your-real-api-url.com
   EXPO_PUBLIC_API_KEY=your_actual_api_key_here
   ```

3. The values will be automatically loaded into the app when you start it.

> **Note**: All environment variables must be prefixed with `EXPO_PUBLIC_` for them to be accessible in the client-side code.

## Accessing Environment Variables in Code

There are two ways to access environment variables in your code:

### Option 1: Using the Config Utility (Recommended)

```typescript
import { Config } from '@/constants/Config';

// Use the configuration values
const apiUrl = Config.API_URL;
const apiKey = Config.API_KEY;
```

This approach provides type safety and centralized error handling.

### Option 2: Directly from Constants

```typescript
import Constants from 'expo-constants';

// Access values directly
const apiUrl = Constants.expoConfig?.extra?.API_URL;
const apiKey = Constants.expoConfig?.extra?.API_KEY;
```

## Adding New Environment Variables

To add a new environment variable:

1. Add it to the `.env.example` file to document it
2. Add it to the `extra` section in `app.config.js`
3. Add it to the `AppConfig` interface in `constants/Config.ts`
4. Use it in your code through the `Config` utility

## Environment Variables in Different Environments

For different environments (development, staging, production), you can use different `.env` files:

- `.env.development` - For development environment
- `.env.staging` - For staging environment
- `.env.production` - For production environment

To use these files, run the app with the corresponding environment:

```bash
EXPO_ENV=production npx expo start
```

## Security Considerations

- Never commit `.env` files with actual values to the repository
- Use appropriate access controls for API keys
- Consider using a secrets management system for production environments