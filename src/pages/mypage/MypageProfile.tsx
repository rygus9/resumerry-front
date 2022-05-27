import { cls } from "util/utils";
import { useMypageProfileQuery } from "./hooks/useMypageProfile";
import { useParams } from "react-router-dom";
export default function () {
  const params = useParams();
  const { data } = useMypageProfileQuery(params.userId!);
  return (
    <>
      <div className={cls("flex justify-evenly mb-4 align-bottom", "lg: mb-8")}>
        <div
          className={cls(
            "text-center text-[1.0rem]",
            "sm:text-[1.5rem]",
            "md:text-[1.5rem]",
            "lg:text-[2.0rem]"
          )}
        >
          {data?.nickname}
        </div>
      </div>
      <div
        className={cls(
          "hidden",
          "sm:text-[gray] sm:mb-6 sm:ml-40 sm:pr-8 sm:text-[1.0rem] sm:block",
          "md:text-[0.7rem] md:ml-8",
          "lg:text-[1.0rem] lg:ml-8"
        )}
      >
        <div>연차: {data?.years} 년</div>
        <div>관심분야: {data?.category}</div>
        <div>이메일: {data?.email}</div>
      </div>
      <div
        className={cls(
          "text-[gray] pl-8 mb-6 pr-8 text-[0.5rem]",
          "sm:text-[0.8rem]",
          "md:text-[0.8rem]",
          "lg:text-[1.0rem]"
        )}
      >
        <div
          className={cls(
            "text-[1.0rem] text-black mb-4",
            "sm:text-[1.3rem]",
            "md:text-[1.3rem]",
            "lg:text-[1.5rem]"
          )}
        >
          소개글
        </div>
        <div>{data?.introduce}</div>
      </div>
    </>
  );
}
