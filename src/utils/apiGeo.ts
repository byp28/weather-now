import axios from "axios";

export type ILocation = {
  id?: number;
  name?: string;
  latitude?: number;
  longitude?: number;
  elevation?: number;
  country?: string;
};

const api = axios.create({
  baseURL: `https://geocoding-api.open-meteo.com/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 70000,
});

export const findLocation = (name: string) =>
  api.get(`/search?name=${name}&count=5`);
