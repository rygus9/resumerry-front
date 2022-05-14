import IconNumber from "components/atom/common/IconNumber";
import Chat from "components/molcular/chat/Chat";
import UserInfo from "components/molcular/common/UserInfo";
import { ResumeSearchApiResult } from "util/api/resume";
import { cls } from "util/utils";
import { useState } from "react";
import ResumePDF from "components/molcular/resume/ResumePDF";

const resumeData: ResumeSearchApiResult = {
  category: "developer",
  title: "프론트엔드 AWS 배포하는 법",
  contents: `여기는 이력서 소개를 공개하는 공간입니다. \n간략한 피드백 방향을 소개할 수 있지만 질문은 아닙니다.`,
  fileLink: "https://ggg",
  modifiedDate: "3일전",
  memberId: "유저1",
  imageLink: "file:image:src",
  nickname: "Cuzz",
  commentCnt: 10,
  viewCnt: 20,
  hashtag: [],
  years: 0,
  recommendCnt: 5,
  isScrap: false,
};

export default function Resume() {
  return (
    <div className={cls("flex flex-col", "lg:flex-row")}>
      <div className={cls("flex-auto w-full")}>
        <article
          className={cls(
            "px-7 pt-10 w-full ml-0",
            "lg:w-4/5 lg:ml-[10%]",
            "xl:w-3/5 xl:ml-[25%]"
          )}
        >
          <h1
            className={cls(
              "mt-2 text-3xl text-deepBlack",
              "sm:text-4xl sm:mt-4"
            )}
          >
            {resumeData.title}
          </h1>
          <div className="pb-3 pt-8 w-40">
            <UserInfo
              modifiedDate={resumeData.modifiedDate}
              nickname={resumeData.nickname}
              imageSrc={resumeData.imageLink}
            />
          </div>
          <p className="pt-10 text-lg text-black min-h-[5rem]">
            {resumeData.contents}
          </p>
          <div
            className={cls("flex py-2 space-x-4 justify-end mt-8", "lg:mt-16")}
          >
            <IconNumber
              src="/img/icons/chat.svg"
              number={resumeData.commentCnt}
            />
            <IconNumber
              src="/img/icons/good.svg"
              number={resumeData.recommendCnt}
            />
            <IconNumber src="/img/icons/view.svg" number={resumeData.viewCnt} />
          </div>
          <ResumePDF />
        </article>
      </div>
      <div
        className={cls(
          "block w-full overflow-scroll px-5 pt-5",
          "lg:fixed lg:right-0 lg:h-screen lg:w-[26rem] lg:shadow-md"
        )}
      >
        <div className="pb-20">
          <Chat commentCnt={resumeData.commentCnt} />
        </div>
      </div>
      <div className={cls("hidden", "lg:block lg:basis-[40rem]")} />
    </div>
  );
}
