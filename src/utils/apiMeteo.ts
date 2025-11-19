import axios from "axios";

export interface TUnit {
  temparature: string;
  speed: string;
  precipitation: string;
  setSpeed(newValue: string): void;
  setPrecipitation(newValue: string): void;
  setTemperature(newValue: string): void;
  swicthToImperial(): void;
  swicthToMetric(): void;
}

export type TForcast = {
  time?: string;
  temperature_2m?: number;
  relative_humidity_2m?: number;
  apparent_temperature?: number;
  weather_code?: number;
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
  weather_code: Array<number>;
};

export type THorlyForcast = {
  time?: Array<string>;
  temperature_2m: Array<number>;
  weather_code: Array<number>;
};

export const findIcon = (code: number) => {
  if (code === 0 || code === 1) {
    return "icon-sunny.webp";
  } else if (code === 2) {
    return "icon-partly-cloudy.webp";
  } else if (code === 3) {
    return "icon-overcast.webp";
  } else if (code === 45 || code === 48) {
    return "icon-fog.webp";
  } else if (code >= 50 && code < 60) {
    return "icon-drizzle.webp";
  } else if (code >= 60 || code < 70) {
    return "icon-rain.webp";
  } else if (code >= 70 || code < 80) {
    return "icon-snow.webp";
  } else if (code >= 80 || code < 85) {
    return "icon-drizzle.webp";
  } else if (code >= 85 || code < 90) {
    return "icon-snow.webp";
  } else if (code >= 90 || code < 100) {
    return "icon-storm.webp";
  } else {
    return "icon-partly-cloudy.webp";
  }
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
    `/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation&wind_speed_unit=${unit.speed}&temperature_unit=${unit.temparature}&precipitation_unit=${unit.precipitation}`
  );

export const dailyForcastData = (lat: number, long: number, unit: TUnit) =>
  api.get(
    `/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,weather_code,showers_sum,snowfall_sum,precipitation_sum,precipitation_hours,precipitation_probability_max,weather_code&timezone=auto&wind_speed_unit=${unit.speed}&temperature_unit=${unit.temparature}&precipitation_unit=${unit.precipitation}`
  );

export const horlyForcastData = (lat: number, long: number, unit: TUnit) =>
  api.get(
    `/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code&timezone=auto&wind_speed_unit=${unit.speed}&temperature_unit=${unit.temparature}&precipitation_unit=${unit.precipitation}`
  );
