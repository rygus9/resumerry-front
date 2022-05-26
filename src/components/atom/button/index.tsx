import React from "react";
import { cls } from "util/utils";

const sizeValue = {
  roundedSm: "w-10 h-10 rounded-full",
  roundedLg: "w-14 h-14 rounded-full",
  sm: "h-6 rounded-sm text-sm px-2 sm:min-w-[4rem]",
  md: "min-w-[4.5rem] h-8 rounded-lg text-sm px-1 sm:min-w-[6rem] sm:px-2",
  lg: "sm:min-w-[9rem] h-10 rounded-md text-xl px-4",
};

const colorValue = {
  main: "bg-lightPurple text-white hover:ring-1 hover:ring-lightPurple hover:font-bold",
  normal:
    "border border-deepGray text-lightBlack hover:ring-1 hover:ring-lightBlack hover:font-bold",
  normalColor:
    "border border-deepPurple text-deepPurple hover:ring-1 hover:ring-deepPurple hover:font-bold",
};

export interface ButtonProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => any;
  type?: "button" | "submit";
  size?: "roundedSm" | "roundedLg" | "sm" | "md" | "lg";
  color?: "main" | "normal" | "normalColor";
  className?: string;
  children: JSX.Element | string;
  disabled?: boolean;
}

Button.defaultProps = {
  onClick: null,
  type: "button",
  size: "md",
  color: "normal",
  className: "",
  disabled: false,
};

export default function Button({
  onClick,
  type,
  size,
  color,
  className,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cls(
        sizeValue[size!],
        colorValue[color!],
        "flex justify-center items-center font-sans",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
