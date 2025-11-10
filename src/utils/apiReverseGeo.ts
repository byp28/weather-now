import axios from "axios";

export type IReverseLocation = {
  address?: {
    city: string;
    country: string;
  };
};

const api = axios.create({
  baseURL: `https://nominatim.openstreetmap.org`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 70000,
});

export const reverseLocation = (latitude: string, longitude: string) =>
  api.get(
    `/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=2`
  );
