import qs from 'qs';
import client from './client';
import { ListSearchResult } from './typeinterface';

export interface PostListSearchResult extends ListSearchResult {
  postId: string;
  isAnonymous: boolean;
}

export interface PostMypageSearchResult {
  postId: string;
  title: string;
  contents: string;
  commentCnt: number;
  viewCnt: number;
  isAnonymous: boolean;
  memberId: string;
  imageSrc: string;
  nickname: string;
}

export interface PostListSearchApi {
  category: string;
  title: string;
  sort: string;
}

export interface PostListSearchApiResult {
  posts: PostListSearchResult[];
}

export const PostListSearchApi = () => {
  client.get('/posts');
};

export interface PostWriteApiInput {
  userToken: string;
  title: string;
  category: string;
  contents: string;
  fileLink: string;
  isAnonymous: boolean;
}

export interface PostWriteApiResult {
  result: boolean;
}

export const PostWriteApi = (
  {
    userToken,
    title,
    category,
    contents,
    fileLink,
    isAnonymous,
  }: PostWriteApiInput,
  userId: string,
) =>
  client.post(`/post/${userId}`, {
    userToken,
    title,
    category,
    contents,
    fileLink,
    isAnonymous,
  });
export interface PostMypageSearchApi {
  userToken: string;
}

export interface PostMypageSearchApiResult {
  posts: PostMypageSearchResult[];
}

export const PostMypageSearchApi = (userId: string) => {
  client.get(`/post/${userId}`);
};

export interface PostSearchApiInput {
  userToken: string;
}

export interface PostSearchApiResult {
  title: string;
  category: string;
  contents: string;
  modifiedDate: string;
  isAnonymous: boolean;
  fileLink: string;
  memberId: string;
  imageSrc: string;
  nickname: string;
  viewCnt: number;
  commentCnt: number;
}

export const PostSearchApi = (userId: string, postId: string) => {
  client.get(`/post/${userId}/${postId}`);
};
export interface PostFixApiInput {
  userToken: boolean;
  category: string;
  title: string;
  contents: string;
  isAnonymous: boolean;
}

export interface PostFixApiResult {
  result: boolean;
}

export const PostFixApi = (
  { userToken, category, title, contents, isAnonymous }: PostFixApiInput,
  userId: string,
  postId: string,
) =>
  client.put(`/post/${userId}/${postId}`, {
    userToken,
    category,
    title,
    contents,
    isAnonymous,
  });

export interface PostDeleteApiInput {
  userToken: string;
}

export interface PostDeleteApiResult {
  result: boolean;
}

export const PostDeleteApi = (userId: string, postId: string) =>
  client.delete(`/resume/${userId}/${postId}`);

export interface PostRecommendApiInput {
  userToken: string;
}
export interface PostRecommendApiIResult {
  result: boolean;
}

export const PostRecommendApi = (
  { userToken }: PostRecommendApiInput,
  userId: string,
  postId: string,
) =>
  client.post(`/post/${userId}/${postId}/recommend`, {
    userToken,
  });
