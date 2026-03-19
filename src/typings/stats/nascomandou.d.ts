import type { Year } from "../";
import type { MapKeys } from "./";

type NascoMandouYears = Exclude<Year, "2019" | "2020" | "2021" | "2022">;

type NascoMandouYearStars = MapKeys<NascoMandouYears, "stars_">;

export interface APIPlayerNascoMandouStats extends NascoMandouYearStars {
  wins: number;
  played: number;
  stars: number;
  second_place: number;
  third_place: number;
}
