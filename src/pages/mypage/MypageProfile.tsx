import { cls } from "util/utils";
import { useMypageProfileQuery } from "./hooks/useMypageProfile";
import { useParams } from "react-router-dom";

export default function ProfileUpdate() {
  const params = useParams();
  const { data } = useMypageProfileQuery(params.userId!);

  const imgpath = `https://resumerry-user-profile-image.s3.ap-northeast-2.amazonaws.com${data?.imageSrc}`;
  return (
    <>
      <div className="justify-center flex">
        <img
          src={imgpath}
          alt=""
          className={cls(
            "rounded-full w-40 h-40 mb-6 mt-6 border-2 border-stone-200",
            "md:w-[8rem] md:h-[8rem] md:mb-6 md:mt:12",
            "lg:w-40 lg:h-40"
          )}
        />
      </div>
      <div className={cls("flex justify-evenly mb-4 align-bottom", "lg: mb-8")}>
        <div
          className={cls(
            "text-center text-[1.2rem]",
            "sm:text-[1.7rem]",
            "md:text-[1.7rem]",
            "lg:text-[2.2rem]"
          )}
        >
          <div className="text-center mb-4">{data?.nickname.toUpperCase()}</div>
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
                className={cls("w-8 h-8", "lg:w-12 lg:h-12")}
              />
              <div>{data?.token}</div>
            </div>
            <div className="flex items-center ml-4 ">
              <img
                src="/img/icons/stack.png"
                alt=""
                className={cls("w-10 h-10", "lg:w-14 lg:h-14")}
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
