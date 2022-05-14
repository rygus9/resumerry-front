import client from "./client";
import { CommentSearchResult, CommentDepthResult } from "./typeinterface";

export interface ResumeCommentSearchResult extends CommentSearchResult {
  resumeCommentGroup: number;
  resumeCommentDepth: CommentDepthResult[];
}

export interface ResumeCommentWriteApiInput {
  userToken: string;
  contents: string;
  resumeCommentDepth: number;
  resumeCommentGroup: number;
  isAnonymous: boolean;
}

export interface ResumeCommentWriteApiResult {
  result: boolean;
}
export const ResumeCommentWriteApi = (
  {
    userToken,
    contents,
    resumeCommentDepth,
    resumeCommentGroup,
    isAnonymous,
  }: ResumeCommentWriteApiInput,
  userId: string,
  resumeId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/comment`, {
    userToken,
    contents,
    resumeCommentDepth,
    resumeCommentGroup,
    isAnonymous,
  });
export interface ResumeCommentDeleteApiInput {
  userToken: string;
}

export interface ResumeCommentDeleteApiResult {
  result: boolean;
}

export const ResumeCommentDeleteApi = (
  { userToken }: ResumeCommentDeleteApiInput,
  userId: string,
  resumeId: string,
  commentId: string
) =>
  client.put(`/resume/${userId}/${resumeId}/comment/${commentId}`, {
    userToken,
  });

export interface ResumeCommentSearchApiInput {
  userToken: string;
}

export interface ResumeCommentSearchApiResult {
  comments: ResumeCommentSearchResult[];
}

export const ResumeCommentSearchApi = (userId: string, resumeId: string) => {
  client.get(`/resume/${userId}/${resumeId}/comment`);
};

export interface ResumeCommentRecommendApiInput {
  userToken: string;
}
export interface ResumeCommentRecommendApiResult {
  result: boolean;
}
export const ResumeCommentRecommendApi = (
  { userToken }: ResumeCommentRecommendApiInput,
  userId: string,
  resumeId: string,
  commentId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/comment/${commentId}/recommend`, {
    userToken,
  });

export interface ResumeCommentReportApiInput {
  userToken: string;
}
export interface ResumeCommentReportApiResult {
  result: boolean;
}

export const ResumeCommentReportApi = (
  { userToken }: ResumeCommentReportApiInput,
  userId: string,
  resumeId: string,
  commentId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/comment/${commentId}/ban`, {
    userToken,
  });
