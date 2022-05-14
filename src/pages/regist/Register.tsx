import MainButton from "components/atom/button/MainButton";
import LabelSelectBox from "components/atom/selectBox/LabelSeleckBox";
import LabelInput from "components/atom/input/LabelInput";
import ButtonSelectBox from "components/atom/selectBox/ButtonSelectBox";
import RegisterCategory from "components/molcular/category/RegisterCategory";
import NormalButton from "components/atom/button/NormalButton";
import { emailSendApi, EmailSendApiInput } from "util/api/auth";
import { useMutation } from "react-query";
import { useState } from "react";
import useMyRegister from "./registHook";
import { cls, regExpression } from "../../util/utils";

function Register(): JSX.Element {
  const {
    register,
    watch,
    setError,
    handleSubmit,
    onSubmit,
    onError,
    onEmailCheck,
    emailCheck,
    errors,
    onAccountExist,
    onNicknameExist,
  } = useMyRegister();

  const [emailSend, setEmailSend] = useState(false);

  const useEmailSendCreator = () => {
    const mutation = useMutation(
      (newTodo: EmailSendApiInput) => emailSendApi(newTodo),
      {
        onSuccess: () => {
          setEmailSend(true);
        },
        onError: () => {
          setError("email", {
            message: "이미 존재하는 이메일이거나 형식에 맞지 않습니다.",
          });
        },
      }
    );
    return mutation;
  };

  const { mutate: emailSendmutate, isLoading: emailSendLoading } =
    useEmailSendCreator();

  return (
    <div className="bg-stone-100 py-5">
      <div
        className={cls(
          "m-auto w-fit pt-7 bg-white flex flex-col items-center rounded-3xl",
          "sm:p-10",
          "md:min-w-[550px]"
        )}
      >
        <nav className="flex justify-center items-center">
          <ButtonSelectBox
            register={register("role")}
            type="radio"
            value="NORMAL"
            buttonStyle={
              cls(watch().role === "NORMAL" ? "main" : "subMain") as "main"
            }
            size="xl"
          >
            일반회원가입
          </ButtonSelectBox>
          <ButtonSelectBox
            register={register("role")}
            type="radio"
            value="HR"
            buttonStyle={
              cls(watch().role === "NORMAL" ? "subMain" : "main") as "main"
            }
            size="xl"
          >
            HR 회원가입
          </ButtonSelectBox>
        </nav>
        <div className="mt-5 px-5 py-5 w-full">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-2"
          >
            <LabelInput
              label="아이디"
              placeholder="exampleID"
              register={register("accountName", {
                required: "아이디는 필수 입력 값입니다.",
                pattern: {
                  value: regExpression("regAccount"),
                  message:
                    "아이디는 공백없이 영어 대소문자, 숫자로만 이루어지며 4~12 글자 사이입니다.",
                },
              })}
              error={errors.accountName}
              onBlur={onAccountExist}
            />
            <LabelInput
              label="닉네임"
              placeholder="Cuzz"
              register={register("nickname", {
                required: "닉네임은 필수 입력 값입니다.",
                pattern: {
                  value: regExpression("regNickname"),
                  message: "닉네임은 2~16사이 글자입니다.",
                },
              })}
              error={errors.nickname}
              onBlur={onNicknameExist}
            />
            <div className="space-y-2">
              <LabelInput
                label="이메일"
                placeholder="example@ajou.ac.kr"
                register={register("email", {
                  required: "이메일은 필수 입력 값입니다.",
                })}
                error={errors.email}
              />
              <div className="flex space-x-2">
                {emailSendLoading ? (
                  <NormalButton>
                    <div className="flex items-center space-x-2">
                      <div className="border-2 border-lightGray border-t-deepPurple  my-10 w-6 h-6 rounded-full animate-spin"></div>
                      <span>진행 중</span>
                    </div>
                  </NormalButton>
                ) : (
                  <NormalButton
                    onClick={() => {
                      if (!errors.email) {
                        setEmailSend(false);
                        emailSendmutate({ receiverEmail: watch().email });
                      }
                    }}
                  >
                    이메일 전송
                  </NormalButton>
                )}
                <NormalButton onClick={onEmailCheck}>검증 확인</NormalButton>
              </div>
              {!emailCheck && emailSend && (
                <span className="text-green-700 text-sm">
                  이메일 전송이 완료되었습니다.
                </span>
              )}
              {emailCheck && (
                <span className="text-green-700 text-sm">
                  이메일 검증이 완료되었습니다.
                </span>
              )}
              {}
            </div>
            <LabelInput
              type="password"
              label="비밀번호"
              placeholder="********"
              register={register("password", {
                required: "비밀번호는 필수 입력 값입니다.",
                pattern: {
                  value: regExpression("regPassword"),
                  message:
                    "비밀번호는 8~20 사이 숫자, 영문, 특수문자를 포함하는 문자열입니다.",
                },
              })}
              error={errors.password}
            />
            <LabelInput
              type="password"
              label="비밀번호 확인"
              placeholder="passwordValid"
              register={register("passwordValid", {
                required: "비밀번호 검증은 필수 입력 값입니다.",
                pattern: {
                  value: regExpression("regPassword"),
                  message:
                    "비밀번호는 8~20 사이 숫자, 영문, 특수문자를 포함하는 문자열입니다.",
                },
              })}
              error={errors.passwordValid}
            />
            <RegisterCategory
              register={register("category")}
              value={watch().category}
            />
            <div
              className={cls("flex flex-col", "sm:flex-row sm:justify-between")}
            >
              <LabelInput
                type="number"
                label="연차"
                block={false}
                placeholder="years"
                register={register("years", {
                  required: "연차는 필수 입력 값입니다.",
                })}
              />
              <LabelSelectBox
                label="재직 여부"
                register={register("isWorking")}
                className="mr-1"
              />
            </div>
            <div className="flex justify-center pt-4">
              <MainButton type="submit" size="lg">
                제출
              </MainButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
