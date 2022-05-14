import { PostSearchApi } from "util/api/post";
import { useQuery } from "react-query";
import { PostSearchApiResult } from "./../../../util/api/post";

const getPost = async (
  userId: string,
  postId: string
): Promise<PostSearchApiResult> => {
  const { data } = await PostSearchApi(userId, postId);
  return data;
};

export const usePost = (userId: string, postId: string) => {
  return useQuery(["posts", userId, postId], () => getPost(userId, postId));
};
