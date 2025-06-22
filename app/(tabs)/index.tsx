import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { useHeroes } from '@/hooks/useHeroes';

export default function HeroesScreen() {
  const { heroes, loading, error, refetch } = useHeroes();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-gray-900">
        <ActivityIndicator size="large" className="mb-4" />
        <Text className="text-gray-600 dark:text-gray-300">
          Loading heroes...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-gray-900 p-6">
        <Text className="text-red-500 dark:text-red-400 text-center mb-4">
          Error: {error}
        </Text>
        <Text
          className="text-blue-500 dark:text-blue-400 underline"
          onPress={refetch}
        >
          Retry
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-safe">
      <View className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">
          Dota 2 Heroes
        </Text>
        <Text className="text-gray-600 dark:text-gray-300">
          {heroes.length} heroes available
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {heroes.map((hero) => (
            <View
              key={hero.id}
              className="bg-gray-50 dark:bg-gray-800 p-4 mb-3 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {hero.localized_name}
              </Text>
              <Text className="text-gray-600 dark:text-gray-300">
                Attribute: {hero.primary_attr} • Type: {hero.attack_type}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
