import { PodcastModel } from "./podcastsModel";

export interface PordcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}
