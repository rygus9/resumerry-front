import { CommonCUDResult } from "./common";
import client from "./client";

// Common Section
export interface CommentElemResult {
  memberId: number;
  commentId: number;
  imageSrc: string | null;
  nickname: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  isAnonymous: boolean;
  isDelete: "N" | "Y";
  isOwner: boolean;
  isRecommend: boolean;
  isBanned: boolean;
  modifiedDate: string;
  commentGroup: number;
  commentDepth: number;
}

export interface MainCommentElemResult extends CommentElemResult {
  childComments: CommentElemResult[];
}

export interface CommentWriteApiInput {
  contents: string;
  commentDepth: number;
  commentGroup: number;
  isAnonymous: boolean;
}

// Post
export type PostCommentSearchApiResult = MainCommentElemResult[];

export const PostCommentSearchApi = (userId: string, postId: string) =>
  client.get(`/post/${userId}/${postId}/comment`);

export type PostCommentWriteApiResult = CommonCUDResult;

export const PostCommentWriteApi = (
  { contents, commentDepth, commentGroup, isAnonymous }: CommentWriteApiInput,
  userId: string,
  postId: string
) =>
  client.post(
    `/post/${userId}/${postId}/comment`,
    {
      contents,
      isAnonymous,
      commentDepth,
      commentGroup,
    },
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );

export type PostCommentDeleteApiResult = CommonCUDResult;

export const PostCommentDeleteApi = (
  userId: string,
  postId: string,
  commentId: number
) => client.delete(`/post/${userId}/${postId}/comment/${commentId}`, {});

export type PostCommentRecommendApiResult = CommonCUDResult;

export const PostCommentRecommendApi = (
  userId: string,
  postId: string,
  commentId: number
) => client.post(`/post/${userId}/${postId}/comment/${commentId}/recommend`);

export type PostCommentReportApiResult = CommonCUDResult;

export const PostCommentReportApi = (
  userId: string,
  postId: string,
  commentId: number
) => client.post(`/post/${userId}/${postId}/comment/${commentId}/ban`);

// Resume Comment
export interface ResumeCommentWriteApiInput extends CommentWriteApiInput {
  yPath: number;
}

// Resume
export type ResumeCommentWriteApiResult = CommonCUDResult;

export const ResumeCommentWriteApi = (
  {
    contents,
    commentDepth,
    commentGroup,
    isAnonymous,
    yPath,
  }: ResumeCommentWriteApiInput,
  userId: string,
  resumeId: string
) => {
  console.log({
    contents,
    commentDepth,
    commentGroup,
    isAnonymous,
    ypath: yPath,
  });

  return client.post(`/resume/${userId}/${resumeId}/comment`, {
    contents,
    commentDepth,
    commentGroup,
    isAnonymous,
    ypath: yPath,
  });
};

export type ResumeCommentDeleteApiResult = CommonCUDResult;

export const ResumeCommentDeleteApi = (
  userId: string,
  resumeId: string,
  commentId: number
) => client.put(`/resume/${userId}/${resumeId}/comment/${commentId}`);

export interface ResumeMainCommentElemResult extends MainCommentElemResult {
  yPath: number;
}

export type ResumeCommentSearchApiResult = ResumeMainCommentElemResult[];

export const ResumeCommentSearchApi = (userId: string, resumeId: string) =>
  client.get(`/resume/${userId}/${resumeId}/comment`);

export type ResumeCommentRecommendApiResult = CommonCUDResult;

export const ResumeCommentRecommendApi = (
  userId: string,
  resumeId: string,
  commentId: number
) =>
  client.post(`/resume/${userId}/${resumeId}/comment/${commentId}/recommend`);

export type ResumeCommentReportApiResult = CommonCUDResult;

export const ResumeCommentReportApi = (
  userId: string,
  resumeId: string,
  commentId: number
) => client.post(`/resume/${userId}/${resumeId}/comment/${commentId}/bam`);
