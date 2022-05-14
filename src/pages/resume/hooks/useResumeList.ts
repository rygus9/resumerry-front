import { useQuery } from "react-query";
import {
  ResumeListSearchApi,
  ResumeListSearchApiResult,
} from "util/api/resume";

const getResumeList = async (
  elem: string
): Promise<ResumeListSearchApiResult> => {
  const { data } = await ResumeListSearchApi(elem);
  console.log(data);
  return data;
};

export const useResumeList = (elem: string) => {
  return useQuery(["resumes", elem], () => getResumeList(elem));
};
