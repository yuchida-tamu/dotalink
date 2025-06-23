import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

// MatchSummary type based on OpenDota API structure
export type MatchSummary = {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  duration: number;
  game_mode: number;
  lobby_type: number;
  hero_id: number;
  start_time: number;
  version: number;
  kills: number;
  deaths: number;
  assists: number;
  skill?: number;
  party_size?: number;
  hero_name?: string; // For display purposes
  hero_image?: string; // For hero icon
};

export type RecentMatchListProps = {
  matches: MatchSummary[];
  loading?: boolean;
  onMatchPress?: (match: MatchSummary) => void;
};

const formatDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const getMatchResult = (match: MatchSummary): { won: boolean; text: string } => {
  // Player slot 0-4 are Radiant, 128+ are Dire
  const isRadiant = match.player_slot < 128;
  const won = isRadiant ? match.radiant_win : !match.radiant_win;
  return { won, text: won ? 'Victory' : 'Defeat' };
};

const MatchItem = ({
  match,
  onPress,
}: {
  match: MatchSummary;
  onPress?: (match: MatchSummary) => void;
}) => {
  const { won, text } = getMatchResult(match);
  const kda = `${match.kills}/${match.deaths}/${match.assists}`;
  const duration = formatDuration(match.duration);

  return (
    <TouchableOpacity
      onPress={() => onPress?.(match)}
      className="bg-gray-50 dark:bg-gray-800 p-4 mb-3 rounded-lg border border-gray-200 dark:border-gray-700 active:bg-gray-100 dark:active:bg-gray-700"
    >
      <View className="flex-row items-center justify-between">
        {/* Hero Icon Placeholder - In a real app, this would show the actual hero image */}
        <View className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-lg mr-3 items-center justify-center">
          <Text className="text-gray-600 dark:text-gray-300 text-xs font-semibold">
            {match.hero_name ? match.hero_name.substring(0, 3).toUpperCase() : 'H' + match.hero_id}
          </Text>
        </View>

        {/* Match Info */}
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-1">
            <Text
              className={`font-semibold ${
                won
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {text}
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 text-sm">
              {duration}
            </Text>
          </View>
          
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-900 dark:text-white font-medium">
              KDA: {kda}
            </Text>
            <Text className="text-gray-500 dark:text-gray-400 text-xs">
              Match #{match.match_id.toString().slice(-6)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const EmptyState = () => (
  <View className="flex-1 justify-center items-center p-8">
    <Text className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
      No Recent Matches
    </Text>
    <Text className="text-gray-400 dark:text-gray-500 text-center">
      Play some matches to see your recent game history here.
    </Text>
  </View>
);

const LoadingState = () => (
  <View className="flex-1 justify-center items-center p-8">
    <ActivityIndicator size="large" className="mb-4" />
    <Text className="text-gray-600 dark:text-gray-300">
      Loading recent matches...
    </Text>
  </View>
);

export const RecentMatchList = ({
  matches,
  loading = false,
  onMatchPress,
}: RecentMatchListProps) => {
  if (loading) {
    return <LoadingState />;
  }

  if (matches.length === 0) {
    return <EmptyState />;
  }

  return (
    <View className="flex-1">
      <FlatList
        data={matches}
        keyExtractor={(item) => item.match_id.toString()}
        renderItem={({ item }) => (
          <MatchItem match={item} onPress={onMatchPress} />
        )}
        showsVerticalScrollIndicator={false}
        className="flex-1 p-4"
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

// Export default for easier imports
export default RecentMatchList;

// Helper function to generate dummy data for testing
export const generateDummyMatches = (count: number = 5): MatchSummary[] => {
  const heroNames = ['Pudge', 'Invoker', 'Phantom Assassin', 'Crystal Maiden', 'Axe', 'Shadow Fiend', 'Drow Ranger'];
  
  return Array.from({ length: count }, (_, index) => ({
    match_id: 7000000000 + index,
    player_slot: Math.random() > 0.5 ? index : 128 + index, // Random Radiant/Dire
    radiant_win: Math.random() > 0.5,
    duration: Math.floor(Math.random() * 1800) + 1200, // 20-50 minutes
    game_mode: 1, // All Pick
    lobby_type: 0, // Normal
    hero_id: index + 1,
    start_time: Date.now() / 1000 - (index * 3600), // Hours ago
    version: 135,
    kills: Math.floor(Math.random() * 15),
    deaths: Math.floor(Math.random() * 10),
    assists: Math.floor(Math.random() * 20),
    hero_name: heroNames[index % heroNames.length],
  }));
};