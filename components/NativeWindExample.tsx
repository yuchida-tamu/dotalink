import React from 'react';
import { Text, View } from 'react-native';

export function NativeWindExample() {
  return (
    <View className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Text className="text-lg font-bold text-text-light dark:text-text-dark mb-2">
        NativeWind Example
      </Text>
      <Text className="text-text-light dark:text-text-dark">
        This component is styled using NativeWind, providing a consistent look across platforms.
      </Text>
      <View className="flex-row space-x-2 mt-4">
        <View className="bg-primary-light dark:bg-primary-dark p-2 rounded-md">
          <Text className="text-white dark:text-gray-900">Button 1</Text>
        </View>
        <View className="bg-gray-200 dark:bg-gray-600 p-2 rounded-md">
          <Text className="text-gray-800 dark:text-gray-100">Button 2</Text>
        </View>
      </View>
    </View>
  );
}