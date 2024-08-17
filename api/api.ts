import { getEnvVar } from "@/utils";

import { Api } from "./document";

export const API_URL = getEnvVar("NEXT_PUBLIC_API_URL");

export const api = new Api({ baseUrl: API_URL });
