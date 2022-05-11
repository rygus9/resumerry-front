import { cls } from "util/utils";

export default function WrapContent({ children }: { children: JSX.Element }) {
  return (
    <div
      className={cls(
        "max-w-[900px] m-auto mt-5 w-full px-5 pb-10",
        "sm:w-4/5 sm:px-0 sm:mt-8"
      )}
    >
      {children}
    </div>
  );
}
