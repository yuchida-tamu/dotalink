import { HttpError } from '@/lib/http';
import { Hero, openDotaApiService as apiService } from '@/services';
import { useEffect, useState } from 'react';

export interface UseHeroesState {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useHeroes = (): UseHeroesState => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHeroes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getHeroes();
      setHeroes(data);
    } catch (err) {
      const errorMessage =
        err instanceof HttpError
          ? err.message
          : err instanceof Error
            ? err.message
            : 'Failed to fetch heroes';
      setError(errorMessage);
      console.error('Error fetching heroes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return {
    heroes,
    loading,
    error,
    refetch: fetchHeroes,
  };
};
