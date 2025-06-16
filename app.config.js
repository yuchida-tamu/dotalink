const path = require('path');
require('dotenv').config();

module.exports = {
  name: 'dotalink',
  slug: 'dotalink',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'dotalink',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/images/splash-icon.png',
    imageWidth: 200,
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.yuchida.dotalink",
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    edgeToEdgeEnabled: true
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png'
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    // Load the API keys from .env file
    API_URL: process.env.EXPO_PUBLIC_API_URL,
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    eas: {
      projectId: "264763e4-6e4e-44f4-8392-dea72d5ffca4"
    },
    router: {}
  }
};