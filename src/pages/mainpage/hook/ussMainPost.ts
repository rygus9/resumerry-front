import { PostListSearchApi } from "./../../../util/api/post";
import { useQuery } from "react-query";

const getPost = async () => {
  const { data } = await PostListSearchApi("?pageNo=0&sort=recent");
  return data.contents.filter((elem: any, index: number) => index < 3);
};

export const useMainPost = () => {
  return useQuery(["mainPosts"], () => getPost(), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 10000,
  });
};
