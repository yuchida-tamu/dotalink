export type PlayerProfile = {
  account_id: number;
  personaname: string;
  name: string | null;
  plus: boolean;
  cheese: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: string | null;
  loccountrycode: string | null;
  is_contributor: boolean;
  is_subscriber: boolean;
};

export type PlayerData = {
  solo_competitive_rank: number | null;
  competitive_rank: number | null;
  rank_tier: number | null;
  leaderboard_rank: number | null;
  profile: PlayerProfile;
};