import { HttpStatusCode } from "../utils/httpStatusCode";
import { PordcastTransferModel } from "../model/podcastTransferModel";
import { repositoryPodcast } from "../repositories/podcastsRepository";

export const serviceListEpisodes = async (): Promise<PordcastTransferModel> => {
  let responseFormat: PordcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();
  if (data.length > 0) {
    responseFormat.statusCode = HttpStatusCode.OK;
  } else {
    responseFormat.statusCode = HttpStatusCode.NotFound;
  }
  responseFormat.body = data;
  return responseFormat;
};
