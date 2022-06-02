import MainButton from "components/atom/button/MainButton";
import Input from "components/atom/input";
import FileIcon from "components/atom/icons/FileIcon";
import UpdateIcon from "components/atom/icons/UpdateIcon";
import ImageInput from "components/atom/input";
import LabelInput from "components/atom/input/LabelInput";
import TextArea from "components/atom/textArea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CategoryKindType } from "components/molcular/category/categoryValue";
import ProfileCategory from "components/molcular/category/ProfileCategory";
import { cls } from "util/utils";
import { ProfileFixApiInput, Profiletype } from "util/api/mypage";

type ProfileForm = ProfileFixApiInput;
export default function ProfileForm({
  submitFunc,
  profile,
}: {
  isLoading: boolean;
  submitFunc: any;
  profile?: Profiletype;
}) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProfileForm>({ mode: "onSubmit" });

  const onValid = async (data: ProfileForm) => {
    submitFunc(data);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    setValue("category", "ALL");
    if (profile) {
      setValue("nickname", profile.nickname);
      setValue("category", profile.category as CategoryKindType);
      setValue("introduce", profile.introduce);
      setValue("years", profile.years);
    }
  }, [profile]);

  return (
    <div className={cls(" lg:bg-stone-100")}>
      <section
        className={cls(
          "w-full max-w-[50rem] m-auto px-4 py-5 bg-white",
          "sm:px-8 sm:py-10",
          "lg:rounded-b-3xl"
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
              register={register("nickname", {
                required: "닉네임은 필수입니다.",
              })}
              error={errors.nickname}
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
          <label
            className={cls(
              "w-full cursor-pointer text-lightBlack flex items-center justify-center border-2 border-dashed border-lightBlack h-24 rounded-md",
              "hover:border-deepPurple hover:text-deepPurple"
            )}
          >
            {watch().imageSrc && watch().imageSrc[0] ? (
              <UpdateIcon />
            ) : (
              <FileIcon />
            )}
            <input
              type="file"
              {...register("imageSrc")}
              className="hidden"
              accept="image/*"
            />
          </label>
          <ProfileCategory
            value={watch().category as CategoryKindType}
            register={register("category")}
            format="write"
          />
          <TextArea
            label="소개글"
            register={register("introduce", {})}
            textAreaHeight="sm"
            placeholder="소개글 내용을 입력하세요"
            error={errors.introduce}
          />
          <div className="flex justify-center space-x-5 mt-5">
            <MainButton size="md" type="submit">
              등록하기
            </MainButton>
          </div>
        </form>
      </section>
    </div>
  );
}
