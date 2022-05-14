import ButtonSelectBox from "components/atom/selectBox/ButtonSelectBox";
import { UseFormRegisterReturn } from "react-hook-form";
import { cls } from "util/utils";
import categoryValue, { CategoryKindType } from "./categoryValue";

const LabelStyleValue = {
  regist: "text-sm text-black",
  write: "text-xl text-deepBlack pb-2",
};

interface Props {
  label?: string;
  register?: UseFormRegisterReturn | null;
  format?: "regist" | "write";
  value: CategoryKindType;
}

RegisterCategory.defaultProps = {
  label: "관심 직무 카테고리",
  register: null,
  format: "regist",
};

export default function RegisterCategory({
  label,
  register,
  format,
  value,
}: Props) {
  return (
    <>
      <h3 className={LabelStyleValue[format!]}>{label}</h3>
      <div
        className={cls(
          "flex w-full flex-wrap",
          format === "regist" ? "max-w-[30rem]" : ""
        )}
      >
        {categoryValue.map((elem, index) => (
          <span key={index} className="mr-2 mb-2">
            {value && value === elem.kind ? (
              <ButtonSelectBox
                type="radio"
                register={register}
                value={elem.kind}
                buttonStyle="normalColor"
                size={format === "write" ? "md" : "sm"}
              >
                {elem.value}
              </ButtonSelectBox>
            ) : (
              <ButtonSelectBox
                type="radio"
                register={register}
                value={elem.kind}
                buttonStyle="normal"
                size={format === "write" ? "md" : "sm"}
              >
                {elem.value}
              </ButtonSelectBox>
            )}
          </span>
        ))}
      </div>
    </>
  );
}
