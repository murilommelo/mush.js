import type { MapKeys, Period } from "./";

type MurderRole =
  | "detective"
  | "innocent"
  | "medic"
  | "murderer"
  | "scout"
  | "bodyguard"
  | "engineer";

type MurderRoleDeaths = MapKeys<MurderRole, "", "_deaths">;

type MurderRoleKilledMurderer = MapKeys<MurderRole, "", "_killed_murderer">;

type MurderRoleKills = MapKeys<MurderRole, "", "_kills">;

type MurderRoleLastPlayedBits = MapKeys<MurderRole, "", "_last_played_bits">;

type MurderRoleLosses = MapKeys<MurderRole, "", "_losses">;

type MurderRolePlayed = MapKeys<MurderRole, "", "_played">;

type MurderRoleWins = MapKeys<MurderRole, "", "_wins">;

type MurderRoleWinstreak = MapKeys<MurderRole, "", "_winstreak">;

type MurderStatsPerRole = MurderRoleDeaths &
  MurderRoleKilledMurderer &
  MurderRoleKills &
  MurderRoleLastPlayedBits &
  MurderRoleLosses &
  MurderRolePlayed &
  MurderRoleWins &
  MurderRoleWinstreak;

type MurderRolePeriodWins = MapKeys<MurderRole, "", `_wins_${Period}`>;

type MurderRolePeriodWinstreak = MapKeys<
  MurderRole,
  "",
  `_winstreak_${Period}`
>;

type MurderRolePeriodKilledMurderer = MapKeys<
  MurderRole,
  "",
  `_killed_murderer_${Period}`
>;

type MurderRoleStatsPerPeriod = MurderRolePeriodWins &
  MurderRolePeriodWinstreak &
  MurderRolePeriodKilledMurderer;

type MurderPeriodWins = MapKeys<Period, "wins_">;

type MurderPeriodWinstreak = MapKeys<Period, "winstreak_">;

type MurderPeriodKilledMurderer = MapKeys<Period, "killed_murderer_">;

type MurderStatsPerPeriod = MurderPeriodWins &
  MurderPeriodWinstreak &
  MurderPeriodKilledMurderer;

export interface APIPlayerMurderStats
  extends MurderStatsPerRole,
    MurderRoleStatsPerPeriod,
    MurderStatsPerPeriod {
  coins_picked_up: number;
  deaths: number;
  killed_murderer: number;
  kills: number;
  losses: number;
  played: number;
  wins: number;
  winstreak: number;
}
