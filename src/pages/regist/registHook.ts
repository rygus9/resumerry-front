import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  accountExistApi,
  emailCheckApi,
  joinApi,
  JoinApiInput,
  nicknameExistApi,
} from "util/api/auth";
import { axiosErrorHandling, ErrorObjectFromServer } from "util/utils";

interface RegisterForm extends JoinApiInput {
  passwordValid: string;
}

export default function useMyRegister() {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    setError,
    clearErrors,
  } = useForm<RegisterForm>({
    mode: "onChange",
  });

  useEffect(() => {
    setValue("role", "NORMAL");
    setValue("category", "ALL");
  }, []);

  const onSubmit = async (data: RegisterForm) => {
    if (data.password !== data.passwordValid) {
      setError("passwordValid", { message: "비밀번호와 일치하지 않습니다." });
      setValue("passwordValid", "");
      setFocus("passwordValid");
      return;
    }

    try {
      const sendData = Object.fromEntries(
        Object.entries(data).filter(([key]) => key !== "passwordValid")
      ) as JoinApiInput;
      await joinApi(sendData);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      axiosErrorHandling(error, (errorList: ErrorObjectFromServer[]) => {
        errorList.forEach((elem) => {
          setError(elem.field as "email", { message: elem.message });
        });
      });
    }
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const [emailCheck, setEmailCheck] = useState(false);
  const onEmailCheck = useCallback(async () => {
    if (errors.email) clearErrors("email");

    try {
      const result = await emailCheckApi({ receiverEmail: watch().email });
      if (result.data.result) {
        setEmailCheck(true);
      } else {
        setEmailCheck(false);
        setError("email", { message: "메일을 확인해주세요." });
      }
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      axiosErrorHandling(error, (errorResult: ErrorObjectFromServer[]) => {
        const errorString = errorResult[0].message;
        setError("email", { message: errorString });
      });
    }
  }, []);

  const onAccountExist = useCallback(async () => {
    if (errors.accountName) return;

    try {
      const result = await accountExistApi({
        accountName: watch().accountName,
      });
      if (!result.data.result) {
        setError("accountName", { message: "이미 존재하는 아이디입니다." });
      } else {
        clearErrors("accountName");
      }
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      axiosErrorHandling(error, console.log);
    }
  }, []);

  const onNicknameExist = useCallback(async () => {
    if (errors.nickname) return;

    try {
      const result = await nicknameExistApi({
        nickname: watch().nickname,
      });
      if (!result.data.result) {
        setError("nickname", { message: "이미 존재하는 닉네임입니다." });
      } else {
        clearErrors("nickname");
      }
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      axiosErrorHandling(error, console.log);
    }
  }, []);

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    setError,
    onEmailCheck,
    emailCheck,
    onAccountExist,
    onNicknameExist,
    watch,
    errors,
  };
}
