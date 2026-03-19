import type { MapKeys, Period } from "./";

type QuickBuilderWinsPerPeriod = MapKeys<Period, "wins_">;

type QuickBuilderXPPerPeriod = MapKeys<Period, "xp_">;

type QuickBuilderWinstreakPerPeriod = MapKeys<Period, "winstreak_">;

type QuickBuilderPerfectBuildsStreakPerPeriod = MapKeys<
  Period,
  "perfect_builds_streak"
>;

type QuickBuilderStatsPerPeriod = QuickBuilderWinsPerPeriod &
  QuickBuilderXPPerPeriod &
  QuickBuilderWinstreakPerPeriod &
  QuickBuilderPerfectBuildsStreakPerPeriod;

export interface APIPlayerQuickBuildersStats
  extends QuickBuilderStatsPerPeriod {
  builds: number;
  level: number;
  losses: number;
  max_perfect_build_streak: number;
  max_winstreak: number;
  perfect_build_streak: number;
  perfect_builds: number;
  played: number;
  wins: number;
  winstreak: number;
  xp: number;
}
