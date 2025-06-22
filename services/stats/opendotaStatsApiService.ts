import { httpGet } from '@/api';
import { Hero } from '@/models/hero';
import { ApiService } from '@/services/stats/statsApiService';

export class OpenDotaStatsApiService implements ApiService {
  async getHeroes(): Promise<Hero[]> {
    return await httpGet<Hero[]>('/heroes');
  }

  async getHeroStats(): Promise<any> {
    return await httpGet<any>('/heroStats');
  }
}

export const openDotaStatsApiService = new OpenDotaStatsApiService();
