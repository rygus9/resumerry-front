import { useQuery } from "react-query";
import { PostListSearchApi } from "util/api/post";
import { PostListSearchApiResult } from "./../../../util/api/post";

const getPostList = async (elem: string): Promise<PostListSearchApiResult> => {
  const { data } = await PostListSearchApi(elem);
  return data;
};

export const usePostList = (elem: string) => {
  return useQuery(["posts", elem], () => getPostList(elem));
};
