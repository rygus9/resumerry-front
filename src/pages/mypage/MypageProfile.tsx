import { cls } from "util/utils";
import { useMypageProfileQuery } from "./hooks/useMypageProfile";
import { useParams } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import useProfileRegist from "./hooks/useProfileUpdate";

export default function ProfileUpdate() {
  const params = useParams();
  const { data } = useMypageProfileQuery(params.userId!);
  return (
    <>
      <div className={cls("flex justify-evenly mb-4 align-bottom", "lg: mb-8")}>
        <div
          className={cls(
            "text-center text-[1.2rem]",
            "sm:text-[1.7rem]",
            "md:text-[1.7rem]",
            "lg:text-[2.2rem]"
          )}
        >
          <div className="text-center">{data?.nickname.toUpperCase()}</div>
          <div
            className={cls(
              "flex justify-between items-center text-lightBlack",
              "sm:text-[1.0rem]",
              "md:text-[1.0rem]",
              "lg:text-[1.5rem]"
            )}
          >
            <div className="flex items-center ml-4">
              <img
                src="/img/icons/token.png"
                alt=""
                className={cls(
                  "rounded-full w-[0.5rem] h-[0.5rem] mb-8 mt-8",
                  "sm:w-4 sm:h-4",
                  "md:w-[8rem] md:h-[8rem] md:mb-12 md:mt:12",
                  "lg:w-[2rem] lg:h-[2rem] lg:mb-0 lg:mt-0"
                )}
              />
              <div>{data?.token}</div>
            </div>
            <div className="flex items-center ml-4 ">
              <img
                src="/img/icons/stack.png"
                alt=""
                className={cls(
                  "rounded-full w-[7rem] h-[7rem] mb-8 mt-8",
                  "sm:w-40 sm:h-40",
                  "md:w-[8rem] md:h-[8rem] md:mb-12 md:mt:12",
                  "lg:w-[2rem] lg:h-[2rem] lg:mb-0 lg:mt-0"
                )}
              />
              <div>{data?.stack}</div>
            </div>
          </div>
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
