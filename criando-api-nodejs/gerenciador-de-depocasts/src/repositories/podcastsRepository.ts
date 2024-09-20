import { PodcastModel } from "../model/podcastsModel";
import fs from "fs";
import path from "path";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawData = fs.readFileSync(pathData, language);
  let jsonFile: PodcastModel[] = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter((value) => value.podcastName === podcastName);
  }

  return jsonFile;
};
 