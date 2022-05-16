import { ResumeScrapApi } from "./../../../util/api/resume";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
export const useResumeScrap = (
  setScrap: React.Dispatch<React.SetStateAction<boolean | null>>
) => {
  const params = useParams();

  const { isLoading, mutate } = useMutation(
    () => ResumeScrapApi(params.userId!, params.resumeId!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생 : ", err);
      },
      onSuccess: () => {
        setScrap((elem) => !elem);
      },
    }
  );

  return { isLoading, mutate };
};
