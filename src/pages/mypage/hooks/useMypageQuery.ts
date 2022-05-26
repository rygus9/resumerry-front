import { useMypagePostQuery } from "./useMypagePost";
import { useMypageResumeQuery } from "./useMypageResume";
import { useQueries, useQuery } from "react-query";
import { useMypageScrapQuery } from "./useMypageScrap";
import { useMypageTokenQuery } from "./useMypageToken";

const getMypageInfo = (userId: string) =>
  useQueries([
    {
      queryKey: ["post"],
      queryFn: () => useMypagePostQuery(userId),
    },
    {
      queryKey: ["resume"],
      queryFn: () => useMypageResumeQuery(userId),
    },
    {
      queryKey: ["scrap"],
      queryFn: () => useMypageScrapQuery(userId),
    },
    {
      queryKey: ["token"],
      queryFn: () => useMypageTokenQuery(userId),
    },
  ]);

export const useMypageQuery = (userId: string) => {
  return useQuery(["Mypageresumes", userId], () => getMypageInfo(userId));
};
