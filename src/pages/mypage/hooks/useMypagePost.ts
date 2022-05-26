import { PostListMypageSearchApiResult } from "../../../util/api/post";
import { PostListMypageSearchApi } from "util/api/post";
import { useQuery } from "react-query";

const getPostMypageList = async (
  userId: string
): Promise<PostListMypageSearchApiResult> => {
  const { data } = await PostListMypageSearchApi(userId);
  return data;
};

export const useMypagePostQuery = (userId: string) => {
  return useQuery(["Mypageposts", userId], () => getPostMypageList(userId));
};
