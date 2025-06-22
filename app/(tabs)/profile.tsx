import { usePlayerProfile } from '@/hooks/usePlayerProfile';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const getTier = (rankTier: number): string => {
  if (rankTier < 20) return 'Herald';
  if (rankTier < 30) return 'Guardian';
  if (rankTier < 40) return 'Crusader';
  if (rankTier < 50) return 'Archon';
  if (rankTier < 60) return 'Legend';
  if (rankTier < 70) return 'Ancient';
  if (rankTier < 80) return 'Divine';
  return 'Immortal';
};

const getRankTierLabel = (rankTier: number | null): string => {
  if (rankTier === null || rankTier <= 0) return 'Unranked';
  const tier = getTier(rankTier);

  return `${tier} ${rankTier % 10}`;
};

export default function ProfileScreen() {
  // Using a well-known public Steam ID for testing (Dendi)
  const testSteamId = '76561198070541799';
  const { playerData, loading, error, refetch } = usePlayerProfile(testSteamId);
  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-safe">
      <View className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">
          Profile
        </Text>
        <Text className="text-gray-600 dark:text-gray-300">
          User information and settings
        </Text>
      </View>

      <View className="flex-1 justify-center items-center p-6">
        {loading && (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" className="mb-4" />
            <Text className="text-gray-600 dark:text-gray-300">
              Loading player profile...
            </Text>
          </View>
        )}

        {error && (
          <View className="flex-1 justify-center items-center">
            <Text className="text-red-500 text-center mb-4">
              Error: {error}
            </Text>
            <TouchableOpacity
              onPress={refetch}
              className="bg-blue-500 px-4 py-2 rounded-lg"
            >
              <Text className="text-white font-medium">Retry</Text>
            </TouchableOpacity>
          </View>
        )}

        {playerData && !loading && !error && (
          <>
            <View className="items-center mb-6">
              {playerData.profile?.avatarfull ? (
                <Image
                  source={{ uri: playerData.profile.avatarfull }}
                  className="w-24 h-24 rounded-full mb-4"
                />
              ) : (
                <View className="bg-gray-100 dark:bg-gray-800 w-24 h-24 rounded-full mb-4 justify-center items-center">
                  <Text className="text-2xl">👤</Text>
                </View>
              )}
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {playerData.profile?.personaname || 'Unknown Player'}
              </Text>
              <Text className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Steam ID: {testSteamId}
              </Text>
            </View>

            <View className="w-full max-w-sm space-y-4">
              <View className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <Text className="text-gray-900 dark:text-white font-medium">
                  MMR Information
                </Text>
                <Text className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Solo: {playerData.solo_competitive_rank || 'Unranked'}
                </Text>
                <Text className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Party: {playerData.competitive_rank || 'Unranked'}
                </Text>
              </View>

              <View className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <Text className="text-gray-900 dark:text-white font-medium">
                  Rank Information
                </Text>
                <Text className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Rank Tier: {getRankTierLabel(playerData.rank_tier)}
                </Text>
              </View>

              <TouchableOpacity
                onPress={refetch}
                className="bg-blue-500 p-4 rounded-lg items-center"
              >
                <Text className="text-white font-medium">Refresh Profile</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
