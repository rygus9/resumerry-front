import ChatInput from './ChatInput';
import ChatItem from './ChatItem';

interface Props {
  commentCnt: number;
}

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

export default function Chat({ commentCnt }: Props) {
  return (
    <div className="mt-20">
      <div className="py-2 text-xl text-Black">{commentCnt}개의 댓글</div>
      <ChatInput />
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
    </div>
  );
}
