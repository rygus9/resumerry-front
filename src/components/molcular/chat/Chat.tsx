import { cls } from 'util/utils';
import ChatInput from './ChatInput';
import ChatItem from './ChatItem';

const commentData = [
  {
    memberId: '유저1',
    imageSrc: 'file:image:src',
    nickname: 'Cuzz',
    contents: '댓글 내용',
    recommendCnt: 10,
    banCnt: 3,
    isAnonymous: true,
    modifiedDate: '2022-04-02',
    postCommentGroup: 3,
    postCommentDepth: [
      {
        memberId: '유저2',
        imageSrc: 'file:image:src',
        nickname: 'Cuzz',
        contents: '댓글 내용',
        recommendCnt: 10,
        banCnt: 3,
        isAnonymous: true,
        modifiedDate: '2022-04-02',
      },
      {
        memberId: '유저3',
        imageSrc: 'file:image:src',
        nickname: 'Cuzz',
        contents: '댓글 내용',
        recommendCnt: 10,
        banCnt: 3,
        isAnonymous: true,
        modifiedDate: '2022-04-02',
      },
    ],
  },
  {
    memberId: '유저3',
    imageSrc: 'file:image:src',
    nickname: 'Cuzz',
    contents: '댓글 내용',
    recommendCnt: 10,
    banCnt: 3,
    isAnonymous: true,
    modifiedDate: '2022-04-02',
    postCommentGroup: 3,
    postCommentDepth: [],
  },
];

interface Props {
  commentCnt: number;
}

export default function Chat({ commentCnt }: Props) {
  return (
    <>
      <ChatInput label={`${commentCnt}개의 댓글`} />
      <div className="divide-y divide-lightGray">
        {commentData.map((elem) => (
          <ChatItem
            key={elem.memberId}
            memberId={elem.memberId}
            isAnonymous={elem.isAnonymous!}
            modifiedDate={elem.modifiedDate}
            nickname={elem.nickname}
            imageSrc={elem.imageSrc}
            contents={elem.contents}
            recommendCnt={elem.recommendCnt}
            banCnt={elem.banCnt}
            postCommentDepth={elem.postCommentDepth}
          />
        ))}
      </div>
    </>
  );
}
