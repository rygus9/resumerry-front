import { CategoryKindType } from "../../components/molcular/category/categoryValue";
import client from "./client";
import axios from "axios";
import { ListSearchResult } from "./typeinterface";

export interface ResumeListSearchResult extends ListSearchResult {
  resumeId: string;
  recommendCnt: number;
  hashtag: string[];
  isScrap: boolean;
  years: number;
}
export interface ResumeListSearchApiInput {
  category: string;
  title: string;
  aged: number[];
  hashtag: string[];
  sort: "recommand" | "view" | "aged";
}
export interface ResumeMypageSearchResult {
  userToken: string;
  title: string;
  contents: string;
  category: string;
  years: number;
  hashtag: string[];
  fileLink: string;
}

export interface ResumeListSearchApiResult {
  resumes: ResumeListSearchResult[];
}

export const ResumeListSearchApi = () => {
  client.get("/resume");
};

export interface ResumeWriteApiInput {
  title: string;
  contents: string;
  category: CategoryKindType;
  years: number;
  hashtag: string[];
  file: FileList;
}

export interface ResumeWriteApiResult {
  result: boolean;
}

export const ResumeWriteApi = (data: ResumeWriteApiInput) => {
  const formData = new FormData();
  formData.append("file", data.file[0]);
  formData.append("title", data.title);
  formData.append("contents", data.contents);
  formData.append("category", data.category);
  formData.append("years", data.years.toString());
  formData.append("hashtag", data.hashtag.toString());
  //memberID
  formData.append("memberId", "3");

  return axios.post(
    `https://qlyrjvzj80.execute-api.ap-northeast-2.amazonaws.com/api/resume`,
    formData,
    {}
  );
};

export interface ResumeMypageSearchApiInput {
  userToken: string;
}

export interface ResumeMypageSearchApiResult {
  resumes: ResumeMypageSearchResult[];
}

export const ResumeMypageSearchApi = (userId: string) => {
  client.get(`/resume/${userId}`);
};

export interface ResumeSearchApiInput {
  userToken: string;
}

export interface ResumeSearchApiResult {
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
  memberId: string;
  imageLink: string;
  nickname: string;
  isScrap: false;
}

export const ResumeSearchApi = (userId: string, resumeId: string) => {
  client.get(`/resume/${userId}/${resumeId}`);
};

export interface ResumeFixApiInput {
  userToken: string;
  title: string;
  contents: string;
  category: string;
  hashtag: string[];
  link: string;
  years: number;
}

export interface ResumeFixApiResult {
  result: boolean;
}

export const ResumeFixApi = (
  { userToken, category, title, contents, link, years }: ResumeFixApiInput,
  userId: string,
  resumeId: string
) =>
  client.put(`/resume/${userId}/${resumeId}`, {
    userToken,
    category,
    title,
    contents,
    link,
    years,
  });

export interface ResumeDeleteApiInput {
  userToken: string;
}
export interface ResumeDeleteApiResult {
  result: boolean;
}

export const ResumeDeleteApi = (userId: string, resumeId: string) =>
  client.delete(`/resume/${userId}/${resumeId}`);

export interface ResumeRecommendApiInput {
  userToken: string;
}

export interface ResumeRecommendApiResult {
  result: boolean;
}

export const ResumeRecommendApi = (
  { userToken }: ResumeRecommendApiInput,
  userId: string,
  resumeId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/recommend`, {
    userToken,
  });

export interface ResumeScrapApiInput {
  userToken: string;
}
export interface ResumeScrapApiResult {
  result: boolean;
}

export const ResumeScrapApi = (
  { userToken }: ResumeScrapApiInput,
  userId: string,
  resumeId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/scrap`, {
    userToken,
  });

export interface ResumeUnlockApiInput {
  userToken: string;
}

export interface ResumeUnlockApiResult {
  result: boolean;
}

export const ResumeUnlockApi = (
  { userToken }: ResumeUnlockApiInput,
  userId: string,
  resumeId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/unlock`, {
    userToken,
  });
