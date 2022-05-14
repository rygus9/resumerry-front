import client from "./client";
import { CommentSearchResult, CommentDepthResult } from "./typeinterface";

export interface PostCommentSearchResult extends CommentSearchResult {
  postCommentGroup: number;
  postCommentDepth: CommentDepthResult[];
}

export interface PostCommentWriteApiInput {
  contents: string;
  postCommentDepth: number;
  postCommentGroup: number;
  isAnnonymouns: boolean;
}
export interface PostCommentWriteApiResult {
  result: boolean;
}

export const PostCommentWriteApi = (
  {
    contents,
    postCommentDepth,
    postCommentGroup,
    isAnnonymouns,
  }: PostCommentWriteApiInput,
  userId: string,
  postId: string
) =>
  client.post(`/post/${userId}/${postId}/comment`, {
    contents,
    postCommentDepth,
    postCommentGroup,
    isAnnonymouns,
  });

export interface PostCommentDeleteApiInput {
  userToken: string;
}

export interface PostCommentDeleteApiResult {
  result: boolean;
}

export const PostCommentDeleteApi = (
  { userToken }: PostCommentDeleteApiInput,
  userId: string,
  postId: string,
  commentId: string
) =>
  client.put(`/post/${userId}/${postId}/comment/${commentId}`, {
    userToken,
  });

export interface PostCommentSearchApiInput {
  userToken: string;
}

export interface PostCommentSearchApiResult {
  comments: PostCommentSearchResult[];
}

export const PostCommentSearchApi = (userId: string, postId: string) => {
  client.get(`/post/${userId}/${postId}/comment`);
};

export interface PostCommentRecommendApiInput {
  userToken: string;
}
export interface PostCommentRecommendApiResult {
  result: boolean;
}
export const PostCommentRecommendApi = (
  { userToken }: PostCommentRecommendApiInput,
  userId: string,
  postId: string,
  commentId: string
) =>
  client.post(`/post/${userId}/${postId}/comment/${commentId}/recommend`, {
    userToken,
  });
export interface PostCommentReportApiInput {
  userToken: string;
}
export interface PostCommentReportApiResult {
  result: boolean;
}
export const PostCommentReportApi = (
  { userToken }: PostCommentReportApiInput,
  userId: string,
  postId: string,
  commentId: string
) =>
  client.post(`/post/${userId}/${postId}/comment/${commentId}/ban`, {
    userToken,
  });