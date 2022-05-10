import Chat from 'components/molcular/chat/Chat';
import UserInfo from 'components/molcular/common/UserInfo';
import { ResumeSearchApiResult } from 'util/api/resume';
import { cls } from 'util/utils';

const resumeData: ResumeSearchApiResult = {
  category: 'developer',
  title: '프론트엔드 AWS 배포하는 법',
  contents: `여기는 이력서 소개를 공개하는 공간입니다. \n간략한 피드백 방향을 소개할 수 있지만 질문은 아닙니다.`,
  fileLink: 'https://ggg',
  modifiedDate: '3일전',
  memberId: '유저1',
  imageLink: 'file:image:src',
  nickname: 'Cuzz',
  commentCnt: 10,
  viewCnt: 20,
  hashtag: [],
  years: 0,
  recommendCnt: 0,
  isScrap: false,
};

export default function Resume() {
  return (
    <div className="flex flex-col">
      <div
        className={cls(
          'flex-auto w-full',
          'sm:px-8 sm:mt-16',
          'lg:w-[50rem] lg:ml-[3rem]',
          'xl:ml-[9%]',
        )}
      >
        <article className={cls('px-7 pt-10', 'lg:w-3/5', 'xl:w-full')}>
          <h1
            className={cls(
              'mt-2 text-3xl text-deepBlack',
              'sm:text-4xl sm:mt-4',
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
          <p className="pt-10 text-lg text-black">{resumeData.contents}</p>
        </article>
      </div>
      <div
        className={cls(
          'block w-full overflow-scroll px-10 pt-10',
          'lg:fixed lg:right-0 lg:h-screen lg:w-[26rem] lg:shadow-md',
        )}
      >
        <div className="pb-20">
          <Chat commentCnt={resumeData.commentCnt} />
        </div>
      </div>
    </div>
  );
}
