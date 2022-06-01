import { TokenListSearchApiResult } from "util/api/mypage";
import { useQuery } from "react-query";
import { TokenListSearchApi } from "util/api/mypage";

const getTokenMypageList = async (
  userId: string
): Promise<TokenListSearchApiResult> => {
  const { data } = await TokenListSearchApi(userId);
  return data;
};

export const useMypageTokenQuery = (userId: string) => {
  return useQuery(["Mypagetokens", userId], () => getTokenMypageList(userId));
};
