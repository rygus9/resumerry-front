import UserInfo from "components/molcular/common/UserInfo";
import { cls } from "util/utils";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useResume } from "./hooks/useResume";
import LoadingUI from "components/molcular/common/LoadingUI";
import NormalButton from "components/atom/button/NormalButton";
import ResumeDeleteModal from "./ResumeDeleteModal";
import { useResumeScrap } from "./hooks/useResumeScrap";
import { useResumeComment } from "./hooks/useResumeComment";
import ResumeInfo from "components/molcular/resume/ResumeInfo";
import LoadingText from "components/molcular/common/LoadingText";
import ResumeChat from "components/molcular/chat/ResumeChat";
import Lock from "components/atom/icons/Lock";
import UnLockModal from "components/molcular/resume/UnLockModal";

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

  const onUnLock = useCallback(() => {
    setOpen({ ...open, resumeLockOpen: true });
  }, []);

  const { isLoading: isScrapLoading, mutate: scrapMutate } =
    useResumeScrap(setScrap);

  const { isLoading: commentLoading, data: resumeCommentData } =
    useResumeComment(params.userId!, params.resumeId!);

  return (
    <>
      <div
        className={cls(
          "max-w-[1200px] m-auto mt-5 w-full px-5 pb-10",
          "sm:w-4/5 sm:px-0 sm:mt-8"
        )}
      >
        <div className={cls("flex-auto w-full")}>
          {isLoading && !resumeData ? (
            <div className="mt-10">
              <LoadingUI />
            </div>
          ) : (
            <>
              {resumeData && (
                <article>
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
                  <div className="pb-3 pt-8 w-fit">
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
                    <div className="flex space-x-10 items-center">
                      {scrap ? (
                        <NormalButton
                          type="button"
                          color="normalColor"
                          onClick={() => {
                            scrapMutate();
                          }}
                        >
                          {isScrapLoading ? <LoadingText /> : "스크랩취소"}
                        </NormalButton>
                      ) : (
                        <NormalButton
                          type="button"
                          onClick={() => {
                            scrapMutate();
                          }}
                        >
                          {isScrapLoading ? <LoadingText /> : "스크랩하기"}
                        </NormalButton>
                      )}
                      {resumeData.isBuyer && (
                        <span className="text-red-300 text-base">
                          Buy Done!
                        </span>
                      )}
                    </div>
                    <div className="space-x-4 flex">
                      <ResumeInfo
                        recommendDone={resumeData.isRecommend}
                        recommendCnt={resumeData.recommendCnt}
                        viewCnt={resumeData.viewCnt}
                        commentCnt={resumeData.commentCnt}
                      />
                    </div>
                  </div>
                  {resumeData.isLock === true &&
                  resumeData.isBuyer === false ? (
                    <div className="w-full mt-10 flex justify-center">
                      <NormalButton
                        color="normalColor"
                        size="lg"
                        onClick={onUnLock}
                      >
                        <>
                          <Lock />
                          &nbsp;&nbsp;잠금 해제
                        </>
                      </NormalButton>
                    </div>
                  ) : (
                    <>
                      {!commentLoading && resumeCommentData && (
                        <ResumeChat
                          path={`https://resume-file-storage.s3.ap-northeast-2.amazonaws.com${resumeData.fileLink}`}
                          inputChatData={resumeCommentData}
                        />
                      )}
                    </>
                  )}
                </article>
              )}
            </>
          )}
        </div>
      </div>
      {open.resumeDeleteOpen && <ResumeDeleteModal />}
      {open.resumeLockOpen && <UnLockModal />}
    </>
  );
}
