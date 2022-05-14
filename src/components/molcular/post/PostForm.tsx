import MainButton from "components/atom/button/MainButton";
import NormalButton from "components/atom/button/NormalButton";
import Input from "components/atom/input";
import LabelCheckBox from "components/atom/selectBox/LabelSeleckBox";
import TextArea from "components/atom/textArea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PostSearchApiResult, PostWriteApiInput } from "util/api/post";
import useGoBack from "util/hooks/goBack";
import { cls } from "util/utils";
import { CategoryKindType } from "../category/categoryValue";
import RegisterCategory from "../category/RegisterCategory";

type PostForm = PostWriteApiInput;

export default function PostForm({
  isLoading,
  submitFunc,
  post,
}: {
  isLoading: boolean;
  submitFunc: any;
  post?: PostSearchApiResult;
}) {
  const goBack = useGoBack();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PostForm>({ mode: "onSubmit" });

  useEffect(() => {
    setValue("category", "ALL");
    setValue("fileLink", "ddd/temp");

    if (post) {
      setValue("title", post.title);
      setValue("category", post.category as CategoryKindType);
      setValue("contents", post.contents);
      setValue("isAnonymous", post.isAnonymous);
    }
  }, []);

  const onValid = (data: PostForm) => {
    submitFunc(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };

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
          <header className={cls("sm:flex sm:items-center")}>
            <div className="w-full">
              <Input
                color="main"
                inputSize="lg"
                placeholder="게시글 제목"
                register={register("title", { required: "제목은 필수입니다." })}
                error={errors.title}
              />
            </div>
            <div
              className={cls(
                "flex items-center justify-start mt-3",
                "sm:basis-1/5 sm:min-w-[140px] sm:mt-0 sm:justify-center"
              )}
            >
              <LabelCheckBox
                label="익명 여부"
                register={register("isAnonymous")}
              />
            </div>
          </header>
          <section className="mt-5 space-y-2">
            <RegisterCategory
              value={watch().category}
              register={register("category")}
              format="write"
            />
            <div>
              <TextArea
                register={register("contents", {
                  required: "내용 입력은 필수입니다.",
                })}
                label="질문 내용"
                placeholder="게시글 질문 내용을 입력하세요"
                error={errors.contents}
              />
            </div>
          </section>
          {/* Button Group */}
          <div className="flex justify-center space-x-5 mt-5">
            <NormalButton size="lg" color="normalColor" onClick={goBack}>
              취소하기
            </NormalButton>
            <MainButton
              size="lg"
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="border-2 border-lightGray border-t-deepPurple  my-10 w-6 h-6 rounded-full animate-spin"></div>
                    <span className="text-white">진행 중</span>
                  </div>
                </>
              ) : (
                "등록하기"
              )}
            </MainButton>
          </div>
        </form>
      </section>
    </div>
  );
}
