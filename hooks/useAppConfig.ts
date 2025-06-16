import Constants from 'expo-constants';

interface AppConfigInterface {
  appName: string | undefined;
  version: string | undefined;
  buildNumber: string | number | undefined;
  isProduction: boolean;
  isDevelopment: boolean;
  deviceName: string | undefined;
  deviceYearClass: number | undefined;
  manifest: any;
  constants: typeof Constants;
}

/**
 * Hook that provides access to app configuration from expo-constants
 * Helps centralize access to environment variables and app metadata
 */
export function useAppConfig(): AppConfigInterface {
  // Get the manifest data from Constants
  const manifest = Constants.expoConfig || {};
  
  // Get environment variables from the manifest.extra
  const env = (manifest.extra?.env as Record<string, string>) || {};
  
  return {
    // App identification
    appName: manifest.name,
    version: manifest.version,
    buildNumber: Constants.expoConfig?.ios?.buildNumber || Constants.expoConfig?.android?.versionCode,
    
    // App configuration
    isProduction: env.ENVIRONMENT === 'production',
    isDevelopment: env.ENVIRONMENT === 'development' || !env.ENVIRONMENT,
    
    // Device info
    deviceName: Constants.deviceName,
    deviceYearClass: Constants.deviceYearClass,
    
    // Full manifest and constants
    manifest,
    constants: Constants,
  };
}