import {
  getFilterEspisodes,
  getListEpisodes,
} from "./controllers/podcastController";

import { HttpMethod } from "./utils/httpMethods";
import { Routes } from "./routes/routes";
import http from "http";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  //queryString
  //http://localhost:3636/api/episode?p=flow
  const baseUrl = request.url?.split("?")[0] ?? "";

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEspisodes(request, response);
  }
};
