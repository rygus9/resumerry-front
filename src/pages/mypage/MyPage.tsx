import PostListItem from "components/molcular/post/PostMypageListItem";
import IconNumber from "components/atom/common/IconNumber";
import Normalbutton from "components/atom/button/NormalButton";

import ResumeListItem from "components/molcular/resume/ResumeListItem";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useMypagePostQuery } from "./hooks/useMypagePost";
import { useMypageQuery } from "./hooks/useMypageQuery";
import { useMypageScrapQuery } from "./hooks/useMypageScrap";
import MypageNav from "./MypageNav";
import { cls } from "util/utils";
import { useMypageResumeQuery } from "./hooks/useMypageResume";
import ResumeMypageListItem from "components/molcular/mypage/MypageResume";
import MypageResume from "components/molcular/mypage/MypageResume";
import ChatIcon from "components/atom/icons/chatIcon/ChatIcon";

export default function Mypage(): JSX.Element {
  const params = useParams();
  //const { data } = useMypageQuery(params.userId!);
  //const { data } = useMypageResumeQuery(params.userId!);
  //const { data } = useMypagePostQuery(params.userId!);
  const { data } = useMypageScrapQuery(params.userId!);
  console.log(data);
  return (
    <div
      className={cls(
        "flex flex-col bg-stone-100 pt-20 px-10",
        "md:flex-row md:px-8",
        "xl:px-20 xl:justify-center"
      )}
    >
      <div
        className={cls(
          "w-full h-[fit-content] bg-white  rounded-3xl",
          "md:w-[12rem] md:ml-[0%]",
          "lg:w-[20rem]",
          "xl:w-[22rem]"
        )}
      >
        <div className="justify-center flex">
          <img
            src="/img/background/question.png"
            alt=""
            className={cls(
              "rounded-full w-[7rem] h-[7rem] mb-8 mt-8",
              "sm:w-40 sm:h-40",
              "md:w-[8rem] md:h-[8rem] md:mb-12 md:mt:12",
              "lg:w-40 lg:h-40"
            )}
          />
        </div>
        <div
          className={cls("flex justify-evenly mb-4 align-bottom", "lg: mb-8")}
        >
          <div
            className={cls(
              "text-center text-[1.0rem]",
              "sm:text-[1.5rem]",
              "md:text-[1.5rem]",
              "lg:text-[2.0rem]"
            )}
          >
            이름
          </div>
          <IconNumber icon={<ChatIcon />} number={0} />
        </div>
        <div
          className={cls(
            "hidden",
            "sm:text-[gray] sm:mb-6 sm:ml-40 sm:pr-8 sm:text-[1.0rem] sm:block",
            "md:text-[0.7rem] md:ml-8",
            "lg:text-[1.0rem] lg:ml-8"
          )}
        >
          <div>연차: 12년차</div>
          <div>관심분야: 아무거나</div>
          <div>이메일: happyeugene@ajou.ac.kr</div>
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
          <div>
            잘지내고있습니다 잘지내고 계신가요? 잘지내길 진심으로 바랍니다. 정말
            진심으로요 어떻게 살고 계십니까 어떻게 사시고 계시나요? 어떻게든
            사시길 바랍니다. 정말 진심으로요
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <Normalbutton
            size="md"
            color="normal"
            children={"수정하기"}
          ></Normalbutton>
        </div>
      </div>
      <div
        className={cls(
          "flex-1 max-w-[60rem] mt-10 mb-8 rounded-sm",
          "md:ml-10 md:mt-0",
          "lg:ml-20"
        )}
      >
        <MypageNav />

        <main className="bg-white">
          {/* board list */}
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl">
            {data &&
              data.map((elem) => (
                <div key={elem.resumeId} className="max-w-[40rem] w-full">
                  <MypageResume {...elem} />
                </div>
              ))}
          </section>
        </main>
      </div>
    </div>
  );
}
