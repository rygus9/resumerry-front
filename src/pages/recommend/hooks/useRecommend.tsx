//이것도 이번에 만든거 전부
import { RecommendListSearchApiResult } from "util/api/recommend";
import { useQuery } from "react-query";
import { RecommendListSearchAPi } from "util/api/recommend";

const getRecommendList = async (
  userId: string,
  resumeId: string
): Promise<RecommendListSearchApiResult> => {
  const { data } = await RecommendListSearchAPi(userId, resumeId);
  return data;
};

export const useRecommendQuery = (userId: string, resumeId: string) => {
  return useQuery(
    ["recommends", userId, resumeId],
    () => getRecommendList(userId, resumeId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 10000,
    }
  );
};
