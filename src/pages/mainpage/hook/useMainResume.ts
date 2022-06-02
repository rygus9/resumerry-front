import { useQuery } from "react-query";
import { ResumeListSearchApi } from "util/api/resume";

const getResume = async () => {
  const { data } = await ResumeListSearchApi("?pageNo=0&sort=recommand");
  return data.contents.filter((elem: any, index: number) => index < 3);
};

export const useMainResume = () => {
  return useQuery(["mainResume"], () => getResume(), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 10000,
  });
};
