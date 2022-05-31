import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { ProfileFixApi, ProfileFixApiInput } from "util/api/mypage";

export default function useProfileUpdate(goProfile: () => void) {
  const params = useParams();
  const navigate = useNavigate();

  const resomeUpgrade = (newProfile: ProfileFixApiInput) =>
    ProfileFixApi(newProfile, params.userId!);

  const { isLoading, mutate } = useMutation(
    (newProfile: ProfileFixApiInput) => resomeUpgrade(newProfile),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        if (result) {
          alert("프로필 수정이 완료되었습니다.");
          goProfile();
        } else {
          alert("등록에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
