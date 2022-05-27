import { ScrapListMypageSearchApi } from "util/api/mypage";
import { ScrapListMypageSearchApiResult } from "util/api/mypage";
import { useQuery } from "react-query";

const getScrapMypageList = async (
  userId: string
): Promise<ScrapListMypageSearchApiResult> => {
  const { data } = await ScrapListMypageSearchApi(userId);
  return data;
};

export const useMypageScrapQuery = (userId: string) => {
  return useQuery(["Mypagescraps", userId], () => getScrapMypageList(userId));
};
