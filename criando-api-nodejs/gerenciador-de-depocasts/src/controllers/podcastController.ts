import { IncomingMessage, ServerResponse } from "http";

import { ContentType } from "../utils/contentType";
import { serviceFilterEpisodes } from "../services/filterEpisodesService";
import { serviceListEpisodes } from "../services/listEpisodesService";

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodes();

  response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  response.write(JSON.stringify(content.body));
  response.end();
};

export const getFilterEspisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceFilterEpisodes(request);

  response.writeHead(content.statusCode, {
    "Content-Type": "application/json",
  });
  response.write(JSON.stringify(content.body));
  response.end();
};
