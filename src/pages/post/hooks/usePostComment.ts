import { useQuery } from "react-query";
import {
  PostCommentSearchApi,
  PostCommentSearchApiResult,
} from "util/api/postcomment";

const getComment = async (
  userId: string,
  postId: string
): Promise<PostCommentSearchApiResult> => {
  const { data } = await PostCommentSearchApi(userId, postId);
  return data;
};

export const useComment = (userId: string, postId: string) => {
  return useQuery(["Postcomment", userId, postId], () =>
    getComment(userId, postId)
  );
};
