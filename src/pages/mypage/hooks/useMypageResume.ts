import { ResumeListMypageSearchApiResult } from "util/api/resume";
import { useQuery } from "react-query";
import { ResumeListMypageSearchApi } from "util/api/resume";

const getResumeMypageList = async (
  userId: string
): Promise<ResumeListMypageSearchApiResult> => {
  const { data } = await ResumeListMypageSearchApi(userId);
  return data;
};

export const useMypageResumeQuery = (userId: string) => {
  return useQuery(["Mypagescraps", userId], () => getResumeMypageList(userId));
};
