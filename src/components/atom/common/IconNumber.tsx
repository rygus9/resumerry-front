import { cls } from "util/utils";

type Props = {
  icon: JSX.Element;
  number: number;
  isTrue?: boolean;
  iconSize?: "sm" | "md" | "lg";
};

IconNumber.defaultProps = {
  iconSize: "md",
  isTrue: false,
};

export default function IconNumber({
  icon,
  number,
  isTrue,
}: Props): JSX.Element {
  return (
    <div className="flex items-center space-x-1">
      {icon}
      <span
        className={cls("text-lg", isTrue ? "text-red-500" : "text-lightBlack")}
      >
        {number}
      </span>
    </div>
  );
}

const sizeValue = {
  sm: "w-5 h-5",
  md: "w-7 h-6",
  lg: "w-10 h-10",
};
