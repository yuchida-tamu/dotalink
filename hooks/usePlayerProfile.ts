import { HttpError } from '@/api';
import { PlayerData } from '@/models/player';
import { openDotaPlayerApiService } from '@/services';
import { useCallback, useEffect, useState } from 'react';

export interface UsePlayerProfileState {
  playerData: PlayerData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const usePlayerProfile = (steamId: string): UsePlayerProfileState => {
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPlayerProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await openDotaPlayerApiService.getPlayer(steamId);
      console.warn(data);
      setPlayerData(data);
    } catch (err) {
      const errorMessage =
        err instanceof HttpError
          ? err.message
          : err instanceof Error
            ? err.message
            : 'Failed to fetch player profile';
      setError(errorMessage);
      console.error('Error fetching player profile:', err);
    } finally {
      setLoading(false);
    }
  }, [steamId]);

  useEffect(() => {
    if (steamId) {
      fetchPlayerProfile();
    }
  }, [fetchPlayerProfile, steamId]);

  return {
    playerData,
    loading,
    error,
    refetch: fetchPlayerProfile,
  };
};
