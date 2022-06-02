//이거 이번에 만들었음
import { CommonCUDResult } from "./common";
import client from "./client";

export interface RecommendSearchApiResult {
  id: number;
  viewCnt: Number;
  title: string;
  fileLink: FileList;
  contents: string;
  createdDate: string;
}

export type RecommendListSearchApiResult = RecommendSearchApiResult[];

export const RecommendListSearchAPi = (userId: String, resumeId: string) =>
  client.get(`/recommend/${userId}/${resumeId}`);
