import { Api } from "./document";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("Api Url must be defined as Environment Variable");
}

export const api = new Api({ baseUrl: API_URL });
