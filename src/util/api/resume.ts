import { CommonCUDResult } from "./common";
import { CategoryKindType } from "../../components/molcular/category/categoryValue";
import client from "./client";

export interface ResumeListType {
  memberId: string;
  resumeId: string;
  imageSrc: string;
  nickname: string;
  title: string;
  contents: string;
  commentCnt: number;
  viewCnt: number;
  recommendCnt: number;
  modifiedDate: string;
  hashtag: string[];
  years: number;
}

export interface ResumeListSearchApiInput {
  category: string;
  title: string;
  startYear: number;
  endYear: number;
  sort: "recommend" | "view" | "years" | "recent";
}

export type ResumeListSearchApiResult = ResumeListType[];

export const ResumeListSearchApi = (data: string) =>
  client.get("/resume" + data);

export interface ResumeWriteApiInput {
  title: string;
  contents: string;
  category: CategoryKindType;
  years: number;
  hashtag: string[];
  file: FileList;
}

export type ResumeWriteApiResult = CommonCUDResult;

export const ResumeWriteApi = (data: ResumeWriteApiInput) => {
  const formData = new FormData();
  formData.append("file", data.file[0]);
  formData.append("title", data.title);
  formData.append("contents", data.contents);
  formData.append("category", data.category);
  formData.append("years", data.years.toString());
  // formData.append("hashtag", data.hashtag.toString());

  return client.post("/resume", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export interface ResumeMypageSearchApiResult {
  resumes: ResumeListType[];
}

export const ResumeMypageSearchApi = (userId: string) =>
  client.get(`/resume/${userId}`);

export interface ResumeType {
  imageLink: string;
  nickname: string;
  title: string;
  category: string;
  contents: string;
  hashtag: string[];
  years: number;
  modifiedDate: string;
  recommendCnt: number;
  commentCnt: number;
  viewCnt: number;
  fileLink: string;
  isScrap: boolean;
  isOwner: boolean;
  isRecommend: boolean;
}

export const ResumeSearchApi = (userId: string, resumeId: string) =>
  client.get(`/resume/${userId}/${resumeId}`);

export interface ResumeFixApiInput {
  title: string;
  contents: string;
  category: string;
  hashtag: string[];
  file: FileList;
  years: number;
}

export type ResumeFixApiResult = CommonCUDResult;

export const ResumeFixApi = (
  data: ResumeFixApiInput,
  userId: string,
  resumeId: string
) => {
  const formData = new FormData();
  formData.append("file", data.file[0]);
  formData.append("title", data.title);
  formData.append("contents", data.contents);
  formData.append("category", data.category);
  formData.append("years", data.years.toString());
  // formData.append("hashtag", data.hashtag.toString());

  return client.put(`/resume/${userId}/${resumeId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export type ResumeDeleteApiResult = CommonCUDResult;

export const ResumeDeleteApi = (userId: string, resumeId: string) =>
  client.delete(`/resume/${userId}/${resumeId}`);

export type ResumeRecommendApiResult = CommonCUDResult;

export const ResumeRecommendApi = (userId: string, resumeId: string) =>
  client.post(`/resume/${userId}/${resumeId}/recommend`);

export type ResumeScrapApiResult = CommonCUDResult;

export const ResumeScrapApi = (userId: string, resumeId: string) =>
  client.post(`/resume/${userId}/${resumeId}/scrap`);

export type ResumeUnlockApiResult = CommonCUDResult;

export const ResumeUnlockApi = (userId: string, resumeId: string) =>
  client.post(`/resume/${userId}/${resumeId}/unlock`);
