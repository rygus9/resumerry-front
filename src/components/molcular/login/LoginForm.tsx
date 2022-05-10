import MainButton from "components/atom/button/MainButton";
import TextLink from "components/atom/common/TextLink";
import LabelInput from "components/atom/input/LabelInput";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { useMutation } from "react-query";
import { loginApi } from "util/api/auth";
import useGoHome from "util/hooks/goHome";

interface LoginForm {
  accountName: string;
  password: string;
}

export default function LoginForm() {
  const [open, setOpen] = useRecoilState(openState);

  const onClose = useCallback(() => {
    setOpen({ ...open, loginOpen: !open.loginOpen });
  }, []);

  const goHome = useGoHome();
  const [loginError, setLoginError] = useState(false);
  const useLoginCreator = () => {
    const mutation = useMutation((userInfo: LoginForm) => loginApi(userInfo), {
      onSuccess: (result) => {
        localStorage.setItem("userToken", result.data.access_token);
        setOpen({ ...open, loginOpen: !open.loginOpen });
        goHome();
        location.reload();
      },
      onError: () => {
        setLoginError(true);
      },
    });
    return mutation;
  };
  const { mutate: loginMutate, isLoading: loginLoading } = useLoginCreator();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onValid = (data: LoginForm) => {
    loginMutate(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };
  return (
    <form className="space-y-3" onSubmit={handleSubmit(onValid, onError)}>
      <LabelInput
        label="아이디"
        type="text"
        register={register("accountName", {
          required: "아이디는 필수 입력값입니다.",
        })}
        error={errors.accountName}
      />
      <LabelInput
        label="비밀번호"
        type="password"
        register={register("password", {
          required: "비밀번호는 필수 입력값입니다.",
        })}
        error={errors.password}
      />
      <div className="flex flex-col items-center pt-3 space-y-2">
        {loginLoading ? (
          <MainButton type="button" size="lg">
            로그인 중
          </MainButton>
        ) : (
          <MainButton type="submit" size="lg">
            로그인
          </MainButton>
        )}
        {loginError && (
          <div className="text-sm text-red-700">
            아이디 또는 비밀번호가 일치하지 않습니다.
          </div>
        )}
      </div>
      <div className="text-sm text-center">
        아직 회원이 아니신가요?
        <TextLink to="/signup" size="sm" type="span" onClick={onClose}>
          회원가입
        </TextLink>
      </div>
    </form>
  );
}
