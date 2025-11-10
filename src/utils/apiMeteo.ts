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
