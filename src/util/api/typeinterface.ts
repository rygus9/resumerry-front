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

export interface CommentSearchResult {
  memberId: string;
  imageSrc: string;
  nickname: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  isAnonymous: boolean;
  modifiedDate: string;
}
export interface CommentDepthResult {
  memberId: string;
  imageSrc: string;
  nickname: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  isAnonymous: boolean;
  modifiedDate: string;
}
