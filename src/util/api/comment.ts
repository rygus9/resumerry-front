import { CommonCUDResult } from "./common";
import client from "./client";

// Common Section
export interface CommentElemResult {
  memberId: string;
  commentId: number;
  imageSrc: string;
  nickname: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  isAnonymous: boolean;
  isDelete: boolean;
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
  commentId: string
) => client.put(`/post/${userId}/${postId}/comment/${commentId}`, {});

export type PostCommentRecommendApiResult = CommonCUDResult;

export const PostCommentRecommendApi = (
  userId: string,
  postId: string,
  commentId: string
) => client.post(`/post/${userId}/${postId}/comment/${commentId}/recommend`);

export type PostCommentReportApiResult = CommonCUDResult;

export const PostCommentReportApi = (
  userId: string,
  postId: string,
  commentId: string
) => client.post(`/post/${userId}/${postId}/comment/${commentId}/ban`);

// Resume
export type ResumeCommentWriteApiResult = CommonCUDResult;

export const ResumeCommentWriteApi = (
  { contents, commentDepth, commentGroup, isAnonymous }: CommentWriteApiInput,
  userId: string,
  resumeId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/comment`, {
    contents,
    commentDepth,
    commentGroup,
    isAnonymous,
  });

export type ResumeCommentDeleteApiResult = CommonCUDResult;

export const ResumeCommentDeleteApi = (
  userId: string,
  resumeId: string,
  commentId: string
) => client.put(`/resume/${userId}/${resumeId}/comment/${commentId}`);

export type ResumeCommentSearchApiResult = MainCommentElemResult[];

export const ResumeCommentSearchApi = (userId: string, resumeId: string) =>
  client.get(`/resume/${userId}/${resumeId}/comment`);

export type ResumeCommentRecommendApiResult = CommonCUDResult;

export const ResumeCommentRecommendApi = (
  userId: string,
  resumeId: string,
  commentId: string
) =>
  client.post(`/resume/${userId}/${resumeId}/comment/${commentId}/recommend`);

export type ResumeCommentReportApiResult = CommonCUDResult;

export const ResumeCommentReportApi = (
  userId: string,
  resumeId: string,
  commentId: string
) => client.post(`/resume/${userId}/${resumeId}/comment/${commentId}/ban`);
