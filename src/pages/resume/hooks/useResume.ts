import { useQuery } from "react-query";
import { ResumeSearchApi, ResumeSearchApiResult } from "util/api/resume";

const getResume = async (
  userId: string,
  resumeId: string
): Promise<ResumeSearchApiResult> => {
  const { data } = await ResumeSearchApi(userId, resumeId);
  return data;
};

export const useResume = (userId: string, resumeId: string) => {
  return useQuery(["resume", userId, resumeId], () =>
    getResume(userId, resumeId)
  );
};
