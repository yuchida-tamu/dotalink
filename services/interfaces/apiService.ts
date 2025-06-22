import { Hero } from '@/services/models/hero';

export interface HeroesService {
  getHeroes(): Promise<Hero[]>;
}

export interface StatsService {
  getHeroStats(): Promise<any>;
}

export interface ApiService extends HeroesService, StatsService {}
