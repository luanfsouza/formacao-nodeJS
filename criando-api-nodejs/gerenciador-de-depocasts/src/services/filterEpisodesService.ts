import { HttpStatusCode } from "../utils/httpStatusCode";
import { IncomingMessage } from "http";
import { PordcastTransferModel } from "../model/podcastTransferModel";
import { repositoryPodcast } from "../repositories/podcastsRepository";

export const serviceFilterEpisodes = async (
  podcastName: IncomingMessage
): Promise<PordcastTransferModel> => {
  //define a interface de retorno
  let responseFormat: PordcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  //busca os dados
  const queryString = podcastName.url?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);
  //verifica se tem conteudo
  if (data.length > 0) {
    responseFormat.statusCode = HttpStatusCode.OK;
  } else {
    responseFormat.statusCode = HttpStatusCode.NoContent;
  }
  responseFormat.body = data;
  return responseFormat;
};
