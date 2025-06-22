import { PlayerData } from '@/models/player';

export interface PlayerService {
  getPlayer(steamId: string): Promise<PlayerData>;
}

export interface PlayerApiService extends PlayerService {}