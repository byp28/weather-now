import axios from "axios";

export type TUnit = {
  temparature: string;
  speed: string;
  precipitation: string;
};

export type TForcast = {
  time?: string;
  temperature_2m?: number;
  relative_humidity_2m?: number;
  apparent_temperature?: number;
  is_day?: number;
  precipitation?: number;
  rain?: number;
  showers?: number;
  snowfall?: number;
  wind_speed_10m?: number;
};

export type TDailyForcast = {
  time?: Array<string>;
  temperature_2m_max: Array<number>;
  temperature_2m_min: Array<number>;
  rain_sum?: Array<number>;
  showers_sum?: Array<number>;
  snowfall_sum?: Array<number>;
};

export type THorlyForcast = {
  time?: Array<string>;
  temperature_2m: Array<number>;
  precipitation: Array<number>;
};

const api = axios.create({
  baseURL: `https://api.open-meteo.com/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 70000,
});

export const nowForcastData = (lat: number, long: number, unit: TUnit) =>
  api.get(
    `/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,wind_speed_10m&wind_speed_unit=${unit.speed}&temperature_unit=${unit.temparature}&precipitation_unit=${unit.precipitation}`
  );

export const dailyForcastData = (lat: number, long: number, unit: TUnit) =>
  api.get(
    `/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,showers_sum,snowfall_sum,precipitation_sum,precipitation_hours,precipitation_probability_max,weather_code&timezone=auto&wind_speed_unit=${unit.speed}&temperature_unit=${unit.temparature}&precipitation_unit=${unit.precipitation}`
  );

export const horlyForcastData = (lat: number, long: number, unit: TUnit) =>
  api.get(
    `/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation&timezone=auto&wind_speed_unit=${unit.speed}&temperature_unit=${unit.temparature}&precipitation_unit=${unit.precipitation}`
  );
