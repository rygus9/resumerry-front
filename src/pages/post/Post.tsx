import Chat from 'components/molcular/chat/Chat';
import SideInfo from 'components/molcular/common/SideInfo';
import UserInfo from 'components/molcular/common/UserInfo';
import { cls } from 'util/utils';

const postData = {
  category: 'developer',
  title: '프론트엔드 AWS 배포하는 법',
  contents: `여기는 이력서 소개를 공개하는 공간입니다.
  간략한 피드백 방향을 소개할 수 있지만 질문은 아닙니다.`,
  fileLink: 'https://ggg',
  modifiedDate: '3일전',
  isAnonymous: true,
  memberId: '유저1',
  imageSrc: 'file:image:src',
  nickname: 'Cuzz',
  commentCnt: 10,
  viewCnt: 20,
};

export default function Post() {
  return (
    <div className="flex">
      <article className={cls('flex-auto w-full', 'sm:px-4')}>
        <h1
          className={cls('mt-2 text-3xl text-deepBlack', 'sm:text-4xl sm:mt-4')}
        >
          {postData.title}
        </h1>
        <div className={cls('pb-3 pt-5 w-36', 'sm:pt-8 sm:w-40')}>
          <UserInfo
            isAnonymous={postData.isAnonymous}
            modifiedDate={postData.modifiedDate}
            nickname={postData.nickname}
            imageSrc={postData.imageSrc}
          />
        </div>
        <p
          className={cls(
            'pt-3 text-md text-black w-full',
            'sm:pt-10 sm:text-lg',
          )}
        >
          {postData.contents}
        </p>

        <div className={cls('mt-8', 'sm:mt-12')}>
          <Chat commentCnt={postData.commentCnt} />
        </div>
      </article>
      <SideInfo
        category={postData.category}
        commentCnt={postData.commentCnt}
        viewCnt={postData.viewCnt}
      />
    </div>
  );
}
