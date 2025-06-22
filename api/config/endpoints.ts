import Constants from 'expo-constants';

const getApiConfig = () => {
  const baseUrl =
    Constants.expoConfig?.extra?.EXPO_PUBLIC_STATZ_API_URL ||
    process.env.EXPO_PUBLIC_STATZ_API_URL;
  const token =
    Constants.expoConfig?.extra?.EXPO_PUBLIC_STATZ_API_TOKEN ||
    process.env.EXPO_PUBLIC_STATZ_API_TOKEN;

  if (!baseUrl) {
    throw new Error('API base URL is not configured');
  }

  return { baseUrl, token };
};

export const apiConfig = getApiConfig();
