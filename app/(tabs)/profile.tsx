import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <View className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">
          Profile
        </Text>
        <Text className="text-gray-600 dark:text-gray-300">
          User information and settings
        </Text>
      </View>
      
      <View className="flex-1 justify-center items-center p-6">
        <View className="bg-gray-100 dark:bg-gray-800 w-24 h-24 rounded-full mb-4 justify-center items-center">
          <Text className="text-2xl">👤</Text>
        </View>
        <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Dota Player
        </Text>
        <Text className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Profile settings and user information will be available here.
        </Text>
        
        <View className="w-full max-w-sm space-y-4">
          <View className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <Text className="text-gray-900 dark:text-white font-medium">Settings</Text>
            <Text className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              App preferences and configuration
            </Text>
          </View>
          
          <View className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <Text className="text-gray-900 dark:text-white font-medium">Statistics</Text>
            <Text className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Your Dota 2 performance metrics
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}