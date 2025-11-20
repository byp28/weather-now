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

export const checkApiAccessGeo = async () => {
  try {
    const check = await api.get("/search?name=test&count=5");
    if (!check) {
      console.log("error");
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const findLocation = (name: string) =>
  api.get(`/search?name=${name}&count=5`);
