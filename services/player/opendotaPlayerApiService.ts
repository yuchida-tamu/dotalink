import { httpGet } from '@/api';
import { PlayerData } from '@/models/player';
import { PlayerApiService } from '@/services/player/PlayerService';

export class OpenDotaPlayerApiService implements PlayerApiService {
  async getPlayer(steamId: string): Promise<PlayerData> {
    // OpenDota API expects account ID, not Steam ID
    // For now, assuming steamId is actually account ID or we need conversion
    const accountId = this.steamIdToAccountId(steamId);
    
    console.log(`Fetching player data for account ID: ${accountId}`);
    
    const data = await httpGet<PlayerData>(`/players/${accountId}`);
    
    // Log the response for testing as specified in requirements
    console.log('Player data response:', {
      mmr: data.solo_competitive_rank || data.competitive_rank || 'Unranked',
      profile: data.profile?.personaname || 'Unknown',
      rank_tier: data.rank_tier || 'Unranked'
    });
    
    return data;
  }

  /**
   * Convert Steam ID to Account ID for OpenDota API
   * Steam ID format: 76561198XXXXXXXXX
   * Account ID is the last part minus 76561197960265728
   */
  private steamIdToAccountId(steamId: string): string {
    // If already looks like account ID (numeric and reasonable length), return as is
    if (/^\d{6,10}$/.test(steamId)) {
      return steamId;
    }
    
    // If it's a full Steam ID, convert it
    if (steamId.length === 17 && steamId.startsWith('76561198')) {
      const accountId = (BigInt(steamId) - BigInt('76561197960265728')).toString();
      return accountId;
    }
    
    // Otherwise, assume it's already an account ID or return as is
    return steamId;
  }
}

export const openDotaPlayerApiService = new OpenDotaPlayerApiService();