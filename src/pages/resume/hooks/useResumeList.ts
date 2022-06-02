import { useInfiniteQuery } from "react-query";
import {
  ResumeListSearchApi,
  ResumeListSearchApiResult,
} from "util/api/resume";

interface ResumePromiseReturn {
  return: ResumeListSearchApiResult;
  nextPage: number | undefined;
  isLast: boolean;
}

const getResumeList = async (
  elem: string,
  pageParams: number
): Promise<ResumePromiseReturn> => {
  const queryString = elem
    ? elem + "&pageNo=" + pageParams
    : "?pageNo=" + pageParams;
  const { data } = await ResumeListSearchApi(queryString);
  const nextPage = data.totalPages > pageParams ? pageParams + 1 : undefined;

  return { return: data, nextPage, isLast: !nextPage };
};

export const useResumeList = (elem: string) => {
  return useInfiniteQuery(
    [`resumes`, elem],
    ({ pageParam = 0 }) => getResumeList(elem, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 1,
    }
  );
};
