import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

/**
 * A component that demonstrates accessing environment variables through Constants
 */
export function ApiConfigDemo() {
  // Access API configuration directly from Constants
  const apiUrl = Constants.expoConfig?.extra?.API_URL || 'Not configured';
  const apiKey = Constants.expoConfig?.extra?.API_KEY ? 'Configured' : 'Not configured';
  
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">API Configuration</ThemedText>
      <ThemedView style={styles.item}>
        <ThemedText type="defaultSemiBold">API URL:</ThemedText>
        <ThemedText>{apiUrl}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.item}>
        <ThemedText type="defaultSemiBold">API Key Status:</ThemedText>
        <ThemedText>{apiKey}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
});