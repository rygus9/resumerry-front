import qs from 'qs';
import client from './client';

export interface ListSearchResult {
  title: string;
  contents: string;
  commentCnt: number;
  viewCnt: number;
  modifiedDate: string;
  memberId: string;
  imageSrc: string;
  nickname: string;
}

export interface ResumeListSearchResult extends ListSearchResult {
  resumeId: string;
  recommendCnt: number;
  hashtag: string[];
  isScrap: boolean;
  years: number;
}

export interface PostListSearchResult extends ListSearchResult {
  postId: string;
  isAnnonymous: boolean;
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

export interface PostMypageSearchResult {
  postId: string;
  title: string;
  contents: string;
  commentCnt: number;
  viewCnt: number;
  isAnnonymous: boolean;
  memberId: string;
  imageSrc: string;
  nickname: string;
}

export interface CommentSearchResult {
  memberId: string;
  imageSrc: string;
  nickname: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  isAnnonymous: boolean;
  modifiedDate: string;
}

export interface CommentDepthResult {
  memberId: string;
  imageSrc: string;
  nickname: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  isAnnonymous: boolean;
  modifiedDate: string;
}

export interface ResumeCommentSearchResult extends CommentSearchResult {
  resumeCommentGroup: number;
  resumeCommentDepth: CommentDepthResult[];
}

export interface PostCommentSearchResult extends CommentSearchResult {
  postCommentGroup: number;
  postCommentDepth: CommentDepthResult[];
}

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
  resumeId: string,
) =>
  client.post(`/resume/${userId}/${resumeId}/recommend`, {
    userToken,
  });

export interface ResumeCommentWriteApiInput {
  userToken: string;
  contents: string;
  resumeCommentDepth: number;
  resumeCommentGroup: number;
  isAnnonymouns: boolean;
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
    isAnnonymouns,
  }: ResumeCommentWriteApiInput,
  userId: string,
  resumeId: string,
) =>
  client.post(`/resume/${userId}/${resumeId}/comment`, {
    userToken,
    contents,
    resumeCommentDepth,
    resumeCommentGroup,
    isAnnonymouns,
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
  commentId: string,
) =>
  client.put(`/resume/${userId}/${resumeId}/comment/${commentId}`, {
    userToken,
  });

export interface ResumeCommentSearchApiInput {
  userToken: string;
}

export interface ResumeCommentSearchApiResult {
  resumes: ResumeCommentSearchResult[];
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
  commentId: string,
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
  commentId: string,
) =>
  client.post(`/resume/${userId}/${resumeId}/comment/${commentId}/ban`, {
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
  resumeId: string,
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
  resumeId: string,
) =>
  client.post(`/resume/${userId}/${resumeId}/unlock`, {
    userToken,
  });

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
  isAnnonymous: boolean;
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
    isAnnonymous,
  }: PostWriteApiInput,
  userId: string,
) =>
  client.post(`/post/${userId}`, {
    userToken,
    title,
    category,
    contents,
    fileLink,
    isAnnonymous,
  });
export interface PostMypageSearchApi {
  userToken: string;
}

export interface PostMypageSearchApiResult {
  resumes: PostMypageSearchResult[];
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
  isAnnonymous: boolean;
  fileLink: string;
  memberId: string;
  imageSrc: string;
  nickname: string;
}

export const PostSearchApi = (userId: string, postId: string) => {
  client.get(`/post/${userId}/${postId}`);
};
export interface PostFixApiInput {
  userToken: boolean;
  category: string;
  title: string;
  contents: string;
  fileLink: string;
  isAnnonymous: boolean;
}

export interface PostFixApiResult {
  result: boolean;
}

export const PostFixApi = (
  {
    userToken,
    category,
    title,
    contents,
    fileLink,
    isAnnonymous,
  }: PostFixApiInput,
  userId: string,
  postId: string,
) =>
  client.put(`/post/${userId}/${postId}`, {
    userToken,
    category,
    title,
    contents,
    fileLink,
    isAnnonymous,
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

export interface PostCommentWriteApiInput {
  userToken: string;
  contents: string;
  resumeCommentDepth: number;
  resumeCommentGroup: number;
  isAnnonymouns: boolean;
}
export interface PostCommentWriteApiResult {
  result: boolean;
}

export const PostCommentWriteApi = (
  {
    userToken,
    contents,
    resumeCommentDepth,
    resumeCommentGroup,
    isAnnonymouns,
  }: PostCommentWriteApiInput,
  userId: string,
  postId: string,
) =>
  client.post(`/post/${userId}/${postId}/comment`, {
    userToken,
    contents,
    resumeCommentDepth,
    resumeCommentGroup,
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
  commentId: string,
) =>
  client.put(`/post/${userId}/${postId}/comment/${commentId}`, {
    userToken,
  });

export interface PostCommentSearchApiInput {
  userToken: string;
}

export interface PostCommentSearchApiResult {
  resumes: PostCommentSearchResult[];
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
  commentId: string,
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
  commentId: string,
) =>
  client.post(`/post/${userId}/${postId}/comment/${commentId}/ban`, {
    userToken,
  });
