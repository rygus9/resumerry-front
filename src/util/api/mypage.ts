import client from "./client";
import { ResumeMypageSearchResult } from "./resume";

export interface TokenSearchApiResult {
  id: number;
  tokenCnt: number;
  reason: string;
  createDate: string;
}

export type TokenListSearchApiResult = TokenSearchApiResult[];
export const TokenListSearchApi = (userId: string) =>
  client.get(`/my-page/token/${userId}`);

export type ScrapListMypageSearchApiResult = ResumeMypageSearchResult[];
export const ScrapListMypageSearchApi = (userId: string) =>
  client.get(`/my-page/${userId}/clip`);
