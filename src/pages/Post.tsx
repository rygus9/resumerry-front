import Chat from 'components/molcular/chat/Chat';
import SideInfo from 'components/molcular/common/SideInfo';
import UserInfo from 'components/molcular/common/UserInfo';

const postData = {
  category: 'developer',
  title: '프론트엔드 AWS 배포하는 법',
  contents: `여기는 이력서 소개를 공개하는 공간입니다. \n간략한 피드백 방향을 소개할 수 있지만 질문은 아닙니다.`,
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
      <article className="flex-auto px-8">
        <h1 className="mt-4 text-4xl text-deepBlack">{postData.title}</h1>
        <div className="pb-3 pt-8">
          <UserInfo
            isAnonymous={postData.isAnonymous}
            modifiedDate={postData.modifiedDate}
            nickname={postData.nickname}
            imageSrc={postData.imageSrc}
          />
        </div>
        <pre className="pt-10 text-lg text-black">{postData.contents}</pre>

        <Chat commentCnt={postData.commentCnt} />
      </article>
      <SideInfo
        category={postData.category}
        commentCnt={postData.commentCnt}
        viewCnt={postData.viewCnt}
      />
    </div>
  );
}
