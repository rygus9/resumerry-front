import MainButton from "components/atom/button/MainButton";
import NormalButton from "components/atom/button/NormalButton";
import Input from "components/atom/input";
import LabelInput from "components/atom/input/LabelInput";
import TextArea from "components/atom/textArea";
import RegisterCategory from "components/molcular/category/RegisterCategory";
import HashTag from "components/molcular/resume/Hashtag";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ResumeWriteApiInput } from "util/api/resume";
import useGoBack from "util/hooks/goBack";
import { cls, SubPartial } from "util/utils";

type ResumeForm = SubPartial<ResumeWriteApiInput, "userToken">;

export default function ResumeTemplate() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ResumeForm>({ mode: "onSubmit" });

  const onValid = (data: ResumeForm) => {
    console.log(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    setValue("category", "all");
  }, []);

  const goBack = useGoBack();

  return (
    <div className={cls("lg:py-10 lg:bg-stone-100")}>
      <section
        className={cls(
          "w-full max-w-[50rem] m-auto px-4 py-5 bg-white",
          "sm:px-8 sm:py-10",
          "lg:rounded-3xl"
        )}
      >
        <form onSubmit={handleSubmit(onValid, onError)}>
          {/* title */}
          <header
            className={cls(
              "mb-5 flex flex-col items-start",
              "sm:flex-row sm:items-center sm:mb-10"
            )}
          >
            <Input
              color="main"
              inputSize="lg"
              placeholder="이력서 제목"
              register={register("title", { required: "제목은 필수입니다." })}
              error={errors.title}
            />
            <div className={cls("basis-25 mt-3", "sm:ml-5 sm:mt-0")}>
              <LabelInput
                type="number"
                label="연차"
                block={false}
                placeholder="years"
                labelSize="lg"
                register={register("years", {
                  required: "연차는 필수 입력 값입니다.",
                })}
              />
            </div>
          </header>
          <RegisterCategory
            value={watch().category}
            register={register("category")}
            format="write"
          />
          <TextArea
            label="이력서 소개"
            register={register("contents", {
              required: "내용 입력은 필수입니다.",
            })}
            textAreaHeight="sm"
            placeholder="이력서 소개 내용을 입력하세요"
            error={errors.contents}
          />
          <HashTag hashtagList={watch().hashtag} setValue={setValue} />
          <div className="flex justify-center space-x-5 mt-5">
            <NormalButton size="lg" color="normalColor" onClick={goBack}>
              취소하기
            </NormalButton>
            <MainButton size="lg" type="submit">
              등록하기
            </MainButton>
          </div>
        </form>
      </section>
    </div>
  );
}
