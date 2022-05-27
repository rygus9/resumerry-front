import { ProfileApiResult } from "../../../util/api/mypage";
import { ProfileMypageApi } from "util/api/mypage";
import { useQuery } from "react-query";

const getProfileMypage = async (userId: string): Promise<ProfileApiResult> => {
  const { data } = await ProfileMypageApi(userId);
  return data;
};

export const useMypageProfileQuery = (userId: string) => {
  return useQuery(["MypageProfile", userId], () => getProfileMypage(userId));
};
