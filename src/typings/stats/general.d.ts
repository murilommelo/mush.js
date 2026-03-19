export interface APIPlayerGeneralStats {
  // Since this statistic changes too much, we type the unknown properties as any
  // biome-ignore lint/suspicious/noExplicitAny: above
  [key: string]: any;
  ultra_plus_days: number;
  ultra_plus_max_streak: number;
  ultra_plus_streak: number;
}
