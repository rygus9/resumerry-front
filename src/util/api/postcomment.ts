import client from "./client";

export interface CommentElemResult {
  memberId: string;
  commentId: number;
  imageSrc: string;
  nickname: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  isAnonymous: boolean; //나중에 변경하자.
  isDelete: boolean;
  modifiedDate: string;
  isOwner: boolean;
  commentGroup: number;
  commentDepth: number;
}

export interface MainCommentElemResult extends CommentElemResult {
  childComments: CommentElemResult[];
}

export type PostCommentSearchApiResult = MainCommentElemResult[];

export interface PostCommentWriteApiInput {
  contents: string;
  postCommentDepth: number;
  postCommentGroup: number;
  isAnonymouns: boolean;
}
export interface PostCommentWriteApiResult {
  result: boolean;
}

export const PostCommentWriteApi = (
  {
    contents,
    postCommentDepth,
    postCommentGroup,
    isAnonymouns,
  }: PostCommentWriteApiInput,
  userId: string,
  postId: string
) =>
  client.post(
    `/post/${userId}/${postId}/comment`,
    {
      contents,
      isAnonymouns,
      postCommentDepth,
      postCommentGroup,
    },
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );

export interface PostCommentDeleteApiResult {
  result: boolean;
}

export const PostCommentDeleteApi = (
  userId: string,
  postId: string,
  commentId: string
) => client.put(`/post/${userId}/${postId}/comment/${commentId}`, {});

export const PostCommentSearchApi = (userId: string, postId: string) =>
  client.get(`/post/${userId}/${postId}/comment`);

export interface PostCommentRecommendApiResult {
  result: boolean;
}
export const PostCommentRecommendApi = (
  userId: string,
  postId: string,
  commentId: string
) => client.post(`/post/${userId}/${postId}/comment/${commentId}/recommend`);

export interface PostCommentReportApiResult {
  result: boolean;
}
export const PostCommentReportApi = (
  userId: string,
  postId: string,
  commentId: string
) => client.post(`/post/${userId}/${postId}/comment/${commentId}/ban`);
