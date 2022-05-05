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
export interface ResumeListSearchApiInput {
  category: string;
  title: string;
  aged: number[];
  hashtag: string[];
  sort: 'recommand' | 'view' | 'aged';
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
export interface ResumeListSearchApiResult {
  resumes: ResumeListSearchResult[];
}

export const ResumeListSearchApi = () => {
  client.get('/resume');
};

export interface ResumeWriteApiInput {
  userToken: string;
  title: string;
  contents: string;
  category: string;
  years: number;
  hashtag: string[];
  fileLink: string;
}
export interface ResumeWriteApiResult {
  result: boolean;
}

export const ResumeWriteApi = (
  {
    userToken,
    title,
    contents,
    category,
    years,
    hashtag,
    fileLink,
  }: ResumeWriteApiInput,
  userId: string,
) =>
  client.post(`/resume/${userId}`, {
    userToken,
    title,
    contents,
    category,
    years,
    hashtag,
    fileLink,
  });

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
  resumeId: string,
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
