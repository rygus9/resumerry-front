import IconNumber from "components/atom/common/IconNumber";
import Chat from "components/molcular/chat/Chat";
import UserInfo from "components/molcular/common/UserInfo";
import { cls } from "util/utils";
import ResumePDF from "components/molcular/resume/ResumePDF";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useResume } from "./hooks/useResume";
import LoadingUI from "components/molcular/common/LoadingUI";
import NormalButton from "components/atom/button/NormalButton";
import ResumeDeleteModal from "./ResumeDeleteModal";
import { useResumeRecommmend } from "./hooks/useResumeRecommend";
import { useResumeScrap } from "./hooks/useResumeScrap";
import { useComment } from "./hooks/useResumeComment";

export default function Resume() {
  const [open, setOpen] = useRecoilState(openState);
  const [scrap, setScrap] = useState<boolean | null>(null);

  const params = useParams();
  const navigate = useNavigate();

  const { isLoading, data: resumeData } = useResume(
    params.userId!,
    params.resumeId!
  );

  useEffect(() => {
    if (resumeData) setScrap(resumeData?.isScrap);
  }, [resumeData]);

  const onUpdate = useCallback(() => {
    navigate("./update");
  }, []);

  const onDelete = useCallback(() => {
    setOpen({ ...open, resumeDeleteOpen: true });
  }, []);

  const { isLoading: isRecommendLoading, mutate: recommendMutate } =
    useResumeRecommmend();

  const { isLoading: isRecommendScrap, mutate: scrapMutate } =
    useResumeScrap(setScrap);

  const { isLoading: CommentLoading, data: commentData } = useComment(
    params.userId!,
    params.resumeId!
  );

  return (
    <>
      <div className={cls("flex flex-col", "lg:flex-row")}>
        <div className={cls("flex-auto w-full")}>
          {isLoading && !resumeData ? (
            <LoadingUI />
          ) : (
            <>
              {resumeData && (
                <article
                  className={cls(
                    "px-7 pt-10 w-full ml-0",
                    "lg:w-4/5 lg:ml-[10%]",
                    "xl:w-3/5 xl:ml-[25%]"
                  )}
                >
                  <div className="flex items-end space-x-8">
                    <h1
                      className={cls(
                        "mt-2 text-3xl text-deepBlack",
                        "sm:text-4xl sm:mt-4"
                      )}
                    >
                      {resumeData.title}
                    </h1>
                    {scrap && (
                      <span className="text-base text-pink-600">MyPick</span>
                    )}
                  </div>
                  <div className="pb-3 pt-8 w-40">
                    <UserInfo
                      modifiedDate={resumeData.modifiedDate}
                      nickname={resumeData.nickname}
                      imageSrc={resumeData.imageLink}
                    />
                  </div>
                  {resumeData.isOwner && (
                    <div className="flex items-center space-x-2">
                      <NormalButton type="button" onClick={onUpdate}>
                        수정
                      </NormalButton>
                      <NormalButton type="button" onClick={onDelete}>
                        삭제
                      </NormalButton>
                    </div>
                  )}
                  <p className="pt-10 text-lg text-black min-h-[5rem]">
                    {resumeData.contents}
                  </p>
                  <div
                    className={cls(
                      "flex py-2 justify-between mt-8",
                      "lg:mt-16"
                    )}
                  >
                    <div className="flex space-x-2">
                      {scrap ? (
                        <NormalButton
                          type="button"
                          color="normalColor"
                          onClick={() => {
                            scrapMutate();
                          }}
                        >
                          스크랩하기
                        </NormalButton>
                      ) : (
                        <NormalButton
                          type="button"
                          onClick={() => {
                            scrapMutate();
                          }}
                        >
                          스크랩하기
                        </NormalButton>
                      )}
                      <NormalButton type="button">추천하기</NormalButton>
                    </div>
                    <div className="space-x-4 flex">
                      <IconNumber
                        src="/img/icons/chat.svg"
                        number={resumeData.commentCnt}
                      />
                      <IconNumber
                        src="/img/icons/good.svg"
                        number={resumeData.recommendCnt}
                      />
                      <IconNumber
                        src="/img/icons/view.svg"
                        number={resumeData.viewCnt}
                      />
                    </div>
                  </div>
                  <div>
                    <ResumePDF path={resumeData.fileLink} />
                  </div>
                </article>
              )}
            </>
          )}
        </div>
        <div
          className={cls(
            "block w-full overflow-scroll px-5 pt-5",
            "lg:fixed lg:right-0 lg:h-screen lg:w-[26rem] lg:shadow-md"
          )}
        >
          <div className="pb-20">
            {resumeData && (
              <Chat
                commentCnt={resumeData.commentCnt}
                commentData={commentData}
                isLoading={isLoading}
              />
            )}
          </div>
        </div>
        <div className={cls("hidden", "lg:block lg:basis-[40rem]")} />
      </div>
      {open.resumeDeleteOpen && <ResumeDeleteModal />}
    </>
  );
}
