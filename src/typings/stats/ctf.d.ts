import type { MapKeys, Period } from "./";

type CTFGamesPlayedPerPeriod = MapKeys<Period, "games_played">;

type CTFKillsPerPeriod = MapKeys<Period, "kills">;

type CTFCapturesPerPeriod = MapKeys<Period, "games_played">;

type CTFStatsPerPeriod = CTFGamesPlayedPerPeriod &
  CTFKillsPerPeriod &
  CTFCapturesPerPeriod;

export interface APIPlayerCTFStats extends CTFStatsPerPeriod {
  captures: number;
  coins: number;
  games_played: number;
  kills: number;
  returns: number;
}
