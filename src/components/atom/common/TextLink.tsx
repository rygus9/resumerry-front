import React from "react";
import { Link } from "react-router-dom";
import { cls } from "util/utils";

const sizeValue = {
  sm: "text-sm px-1 cursor-pointer hover:font-bold",
  md: "text-md px-3 cursor-pointer hover:font-bold",
  lg: "text-2xl px-5 cursor-pointer",
};

const colorValue = {
  black: "text-deepblack",
  purple: "text-deepPurple",
};

interface Props {
  size?: "sm" | "md" | "lg";
  color?: "black" | "purple";
  to: string;
  children: string | JSX.Element;
  className?: string;
  type?: "li" | "span";
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void | null;
}

TextLink.defaultProps = {
  size: "md",
  color: "purple",
  type: "li",
  className: "",
  onClick: null,
};

export default function TextLink({
  size,
  color,
  to,
  children,
  type,
  className,
  onClick,
}: Props) {
  return (
    <Link to={to}>
      {type === "span" ? (
        <span
          className={cls(sizeValue[size!], colorValue[color!], className)}
          onClick={onClick}
        >
          {children}
        </span>
      ) : (
        <li
          className={cls(
            sizeValue[size!],
            colorValue[color!],
            "list-none",
            className
          )}
          onClick={onClick}
        >
          {children}
        </li>
      )}
    </Link>
  );
}
