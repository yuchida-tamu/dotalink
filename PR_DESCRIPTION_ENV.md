# Configure Environment Variables for API Keys

This PR addresses issue #4 by implementing a secure system for managing API keys and other sensitive configuration through environment variables.

## Changes

- Added `.env.example` template file with sample API keys configuration
- Updated `.gitignore` to ensure `.env` files with actual keys are not committed
- Created `app.config.js` to load environment variables into the Expo configuration
- Created `constants/Config.ts` utility for accessing environment variables with proper typing and error handling
- Added documentation in `docs/ENV_VARIABLES.md` explaining how to use environment variables
- Created a simple demo component `ApiConfigDemo.tsx` showing how to access the environment variables

## Benefits

- Secure handling of API keys and sensitive data without exposing them in the codebase
- Type-safe access to environment variables through a centralized utility
- Clear documentation for developers on how to set up and use environment variables
- Support for different environments (development, staging, production)
- Helpful warnings in development mode when environment variables are missing

## Testing

To test this PR:
1. Copy `.env.example` to `.env`
2. Add your test API keys to the `.env` file
3. Build and run the app
4. Verify that the API keys are accessible in the code as expected