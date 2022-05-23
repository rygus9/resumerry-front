import { useState } from "react";
import Normalbutton from "components/atom/button/NormalButton";
import { cls } from "util/utils";

export default function MypageNav() {
  const [searchParams, setSearchParams] = useState("게시글");
  return (
    <>
      <div
        className={cls(
          "grid grid-cols-4 font-bold text-[0.7rem] text-center items-stretch bg-stone-100",
          "sm:text-[0.95rem]"
        )}
      >
        <button
          className="bg-purple-300 rounded-tl-3xl text-white hover:bg-white hover:text-stone-400 hover:cursor-pointer focus:bg-white focus:text-stone-400 pt-4 pb-4"
          onClick={() => setSearchParams("게시글")}
        >
          MyPost
        </button>
        <button
          className="bg-purple-300 text-white hover:bg-white hover:text-stone-400 focus:bg-white focus:text-stone-400 hover:cursor-pointer pt-4 pb-4"
          onClick={() => setSearchParams("이력서")}
        >
          MyResume
        </button>
        <button
          className="bg-purple-300 text-white hover:bg-white hover:text-stone-400 focus:bg-white focus:text-stone-400 hover:cursor-pointer pt-4 pb-4"
          onClick={() => setSearchParams("스크랩")}
        >
          MyScrap
        </button>
        <button
          className="bg-purple-300 rounded-tr-3xl text-white hover:bg-white focus:bg-white focus:text-stone-400 hover:text-stone-400 hover:cursor-pointer pt-4 pb-4"
          onClick={() => setSearchParams("토큰")}
        >
          MyToken
        </button>
      </div>
      <div className="bg-white">
        <div className="flex justify-between items-center">
          <div
            className={cls(
              "pt-8 text-[1.0rem] ml-[10%] pr-[10%] border-b-2 border-stone-300",
              "sm:text-[1.5rem]",
              "md:text-[2.0rem]"
            )}
          >
            Noej's {searchParams}
          </div>
          <div className="pr-[10%] pt-8">
            <Normalbutton
              size="md"
              color="normalColor"
              children={searchParams + "추가"}
            ></Normalbutton>
          </div>
        </div>
      </div>
    </>
  );
}
