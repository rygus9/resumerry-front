import { TrueLiteral } from "typescript";
import client from "./client";
import { ScrapMypageSearchResult } from "./resume";

export interface TokenSearchApiResult {
  id: number;
  tokenCnt: number;
  reason: string;
  createdDate: string;
}

export interface ProfileApiResult {
  memberId: number;
  nickname: string;
  years: number;
  category: string;
  email: string;
  role: string;
  introduce: string;
  stack: number;
  token: number;
}
export interface ProfileFixApiInput {
  nickname: string;
  years: number;
  category: string;
  email: string;
  isWorking: boolean;
  introduce: string;
  imageFile: string;
}
export const ResumeFixApi = (data: ProfileFixApiInput, userId: string) => {
  const formData = new FormData();
  formData.append("nickname", data.nickname);
  formData.append("years", data.years.toString());
  formData.append("title", data.category);
  formData.append("contents", data.imageFile);
  formData.append("category", data.category);
  // formData.append("hashtag", data.hashtag.toString());

  return client.put(`/resume/${userId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const ProfileMypageApi = (userId: string) =>
  client.get(`/my-page/${userId}`);

export type TokenListSearchApiResult = TokenSearchApiResult[];
export const TokenListSearchApi = (userId: string) =>
  client.get(`/my-page/token/${userId}`);

export type ScrapListMypageSearchApiResult = ScrapMypageSearchResult[];
export const ScrapListMypageSearchApi = (userId: string) =>
  client.get(`/my-page/${userId}/clip`);
