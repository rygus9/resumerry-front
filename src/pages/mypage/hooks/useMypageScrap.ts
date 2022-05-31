import { ScrapListMypageSearchApi } from "util/api/mypage";
import { ScrapListMypageSearchResult } from "util/api/mypage";
import { useQuery } from "react-query";

const getScrapMypageList = async (
  userId: string
): Promise<ScrapListMypageSearchResult> => {
  const { data } = await ScrapListMypageSearchApi(userId);
  return data;
};

export const useMypageScrapQuery = (userId: string) => {
  return useQuery(["Mypagescraps", userId], () => getScrapMypageList(userId));
};
