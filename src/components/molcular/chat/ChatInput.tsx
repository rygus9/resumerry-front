import NormalButton from "components/atom/button/NormalButton";
import LabelCheckBox from "components/atom/selectBox/LabelSeleckBox";
import TextArea from "components/atom/textArea";
import { useForm } from "react-hook-form";
import { CommentWriteApiInput } from "util/api/comment";
import { cls } from "util/utils";
import useCommentRegist from "./hooks/useCommentRegist";

interface Props {
  label?: string | null;
  depth: number;
  group: number;
  size: "sm" | "md";
}

ChatInput.defaultProps = {
  label: null,
  size: "md",
};

export default function ChatInput({ label, depth, group, size }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentWriteApiInput>({ mode: "onSubmit" });

  setValue("commentDepth", depth);
  setValue("commentGroup", group);

  const { isLoading: isCommentLoading, mutate: commentMutate } =
    useCommentRegist();

  const onValid = async (data: CommentWriteApiInput) => {
    commentMutate(data);
    setValue("contents", "");
  };

  return (
    <form
      className={cls("space-y-1 pt-2", "sm:space-y-2")}
      onSubmit={handleSubmit(onValid)}
      onClick={(e) => {
        e.stopPropagation();
      }}
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
          "flex justify-end items-center space-x-2",
          "sm:space-x-4"
        )}
      >
        <LabelCheckBox label="익명 여부" register={register("isAnonymous")} />
        <NormalButton type="submit" color="normalColor" size={size}>
          댓글 작성
        </NormalButton>
      </div>
    </form>
  );
}
