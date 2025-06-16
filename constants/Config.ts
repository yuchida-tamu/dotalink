/**
 * Configuration utilities for API keys and environment variables
 * Access all environment variables through this file to ensure proper error handling
 */

// Import Constants using require to avoid TypeScript errors
// @ts-ignore
const Constants = require('expo-constants');

// Define the shape of our environment configuration
interface AppConfig {
  API_URL: string;
  API_KEY: string;
}

// Get an environment variable from Constants
const getEnvVar = (name: string): string => {
  let value = '';
  
  try {
    // Try to access the configuration value
    // @ts-ignore
    value = Constants?.expoConfig?.extra?.[name] || '';
  } catch (error) {
    console.warn(`Error accessing environment variable: ${name}`);
  }
  
  // In development, provide helpful warnings if variables are missing
  if (value === '') {
    console.warn(`Missing environment variable: ${name}`);
    console.warn('Make sure you have created a .env file based on .env.example');
  }
  
  return value;
};

// Export configuration object with all API keys/URLs
export const Config: AppConfig = {
  API_URL: getEnvVar('API_URL'),
  API_KEY: getEnvVar('API_KEY'),
};

// Helper to check if all required API keys are set
export const isConfigValid = (): boolean => {
  // Check if any value is an empty string
  return !Object.keys(Config).some(key => Config[key as keyof AppConfig] === '');
};