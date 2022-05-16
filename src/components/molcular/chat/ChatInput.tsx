import { AxiosResponse } from "axios";
import NormalButton from "components/atom/button/NormalButton";
import LabelCheckBox from "components/atom/selectBox/LabelSeleckBox";
import TextArea from "components/atom/textArea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UseMutateFunction } from "react-query/types/react/types";
import { PostCommentWriteApiInput } from "util/api/postcomment";
import { cls } from "util/utils";
import useCommentRegist from "./hooks/useCommentRegist";

interface Props {
  label?: string | null;
  depth: number;
  group: number;
}

ChatInput.defaultProps = {
  label: null,
};

export default function ChatInput({ label, depth, group }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<PostCommentWriteApiInput>({ mode: "onSubmit" });

  setValue("postCommentDepth", depth);
  setValue("postCommentGroup", group);

  const { isLoading: isCommentLoading, mutate: commentMutate } =
    useCommentRegist();

  const onValid = async (data: PostCommentWriteApiInput) => {
    commentMutate(data);
  };

  return (
    <form
      className={cls("space-y-1", "sm:space-y-2")}
      onSubmit={handleSubmit(onValid)}
    >
      <TextArea
        label={label}
        textAreaHeight="sm"
        placeholder="댓글을 입력하세요."
        register={register("contents", {
          required: "댓글 내용은 필수로 입력해야 합니다.",
        })}
        error={errors.contents}
      />
      <div
        className={cls(
          "flex justify-end items-start space-x-2",
          "sm:space-x-4"
        )}
      >
        <LabelCheckBox label="익명 여부" register={register("isAnonymouns")} />
        <NormalButton type="submit" color="normalColor">
          댓글 작성
        </NormalButton>
      </div>
    </form>
  );
}
