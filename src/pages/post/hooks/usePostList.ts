import { useInfiniteQuery } from "react-query";
import { PostListSearchApi } from "util/api/post";
import { PostListSearchApiResult } from "./../../../util/api/post";

interface PostPromiseReturn {
  return: PostListSearchApiResult;
  nextPage: number | undefined;
  isLast: boolean;
}

const getPostList = async (
  elem: string,
  pageParams: number
): Promise<PostPromiseReturn> => {
  const queryString = elem
    ? elem + "&pageNo=" + pageParams
    : "?pageNo=" + pageParams;
  const { data } = await PostListSearchApi(queryString);

  const nextPage = data.totalPages > pageParams ? pageParams + 1 : undefined;

  return { return: data, nextPage, isLast: !nextPage };
};

export const usePostList = (elem: string) => {
  return useInfiniteQuery(
    [`posts`, elem],
    ({ pageParam = 0 }) => getPostList(elem, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
    }
  );
};
