import { httpGet } from '@/lib/http';
import { ApiService } from '@/services/interfaces/apiService';
import { Hero } from '@/services/models/hero';

export class OpenDotaService implements ApiService {
  async getHeroes(): Promise<Hero[]> {
    return await httpGet<Hero[]>('/heroes');
  }

  async getHeroStats(): Promise<any> {
    return await httpGet<any>('/heroStats');
  }
}

export const openDotaApiService = new OpenDotaService();
