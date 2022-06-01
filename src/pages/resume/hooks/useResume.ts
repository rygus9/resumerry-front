import { ResumeType } from "./../../../util/api/resume";
import { useQuery } from "react-query";
import { ResumeSearchApi } from "util/api/resume";

const getResume = async (
  userId: string,
  resumeId: string
): Promise<ResumeType> => {
  // Fixed Please
  const { data } = await ResumeSearchApi(userId, resumeId);
  return data;
};

export const useResume = (userId: string, resumeId: string) => {
  return useQuery(
    ["resume", userId, resumeId],
    () => getResume(userId, resumeId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 10000,
    }
  );
};
