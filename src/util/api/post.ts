import { CategoryKindType } from "../../components/molcular/category/categoryValue";
import client from "./client";

export interface PostListSearchResult {
  postId: string;
  isAnonymous: boolean;
  title: string;
  contents: string;
  commentCnt: number;
  viewCnt: number;
  modifiedDate: string;
  memberId: string;
  imageSrc: string;
  nickname: string;
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

export type PostListSearchApiResult = PostListSearchResult[];

export const PostListSearchApi = async (queryString: string) => {
  return client.get("/posts" + queryString);
};

export interface PostWriteApiInput {
  title: string;
  category: CategoryKindType;
  contents: string;
  fileLink: string;
  isAnonymous: boolean;
}

export interface PostWriteApiResult {
  result: boolean;
}

export const PostWriteApi = (elem: PostWriteApiInput) =>
  client.post("/post", elem);

export interface PostMypageSearchApi {
  userToken: string;
}

export interface PostMypageSearchApiResult {
  posts: PostMypageSearchResult[];
}

export const PostMypageSearchApi = (userId: string) =>
  client.get(`/post/${userId}`);

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
  isOwner: boolean;
}

export const PostSearchApi = (userId: string, postId: string) =>
  client.get(`/post/${userId}/${postId}`);

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
  postId: string
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
  client.delete(`/post/${userId}/${postId}`);

export interface PostRecommendApiInput {
  userToken: string;
}
export interface PostRecommendApiIResult {
  result: boolean;
}

export const PostRecommendApi = (
  { userToken }: PostRecommendApiInput,
  userId: string,
  postId: string
) =>
  client.post(`/post/${userId}/${postId}/recommend`, {
    userToken,
  });
