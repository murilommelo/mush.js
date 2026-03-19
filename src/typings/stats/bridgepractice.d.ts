import type { MapKeys } from "./";

type BridgePracticeMode =
  | "extra_short"
  | "diagonal_short"
  | "diagonal"
  | "long"
  | "normal"
  | "short"
  | "infinite";

type BridgePracticeModeBestTime = MapKeys<BridgePracticeMode, "", "_best_time">;

type BridgePracticeModeTotalTime = MapKeys<
  BridgePracticeMode,
  "",
  "_total_time"
>;

type BridgePracticeModeBridgeAttempts = MapKeys<
  BridgePracticeMode,
  "",
  "_bridge_attempts"
>;

type BridgePracticeModeBridges = MapKeys<BridgePracticeMode, "", "_bridges">;

type BridgePracticeStatsPerMode = BridgePracticeModeBestTime &
  BridgePracticeModeTotalTime &
  BridgePracticeModeBridgeAttempts &
  BridgePracticeModeBridges;

export interface APIPlayerBridgePracticeStats
  extends BridgePracticeStatsPerMode {}
