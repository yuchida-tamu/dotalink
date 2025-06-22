import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5 bg-white dark:bg-gray-900">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          This screen does not exist.
        </Text>
        <Link href="/" className="mt-4 py-4">
          <Text className="text-blue-500 dark:text-blue-400 underline">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}
