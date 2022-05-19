import { useQuery } from "react-query";
import {
  ResumeCommentSearchApi,
  ResumeCommentSearchApiResult,
} from "util/api/comment";

const getComment = async (
  userId: string,
  resumeId: string
): Promise<ResumeCommentSearchApiResult> => {
  const { data } = await ResumeCommentSearchApi(userId, resumeId);
  return data;
};

export const useComment = (userId: string, resumeId: string) => {
  return useQuery(["Postcomment", userId, resumeId], () =>
    getComment(userId, resumeId)
  );
};
