import { Profiletype } from "./../../../util/api/mypage";
import { ProfileApiResult } from "../../../util/api/mypage";
import { ProfileMypageApi } from "util/api/mypage";
import { useQuery } from "react-query";

const getProfileMypage = async (userId: string): Promise<ProfileApiResult> => {
  const { data } = await ProfileMypageApi(userId);
  return data;
};

const fixProfileMypage = async (userId: string): Promise<Profiletype> => {
  const { data } = await ProfileMypageApi(userId);
  return data;
};

export const useMypageProfileQuery = (userId: string) => {
  return useQuery(["MypageProfile", userId], () => getProfileMypage(userId));
};

export const useProfile = (userId: string) => {
  return useQuery(["profile", userId], () => fixProfileMypage(userId), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 10000,
  });
};
