import ChatInput from "./ChatInput";
import ChatItem, { MainChatItemProps } from "./ChatItem";

const commentData: MainChatItemProps[] = [
  {
    memberId: "유저1",
    imageSrc: "file:image:src",
    nickname: "Cuzz",
    contents: "댓글 내용",
    recommendCnt: 10,
    banCnt: 3,
    isAnonymous: true,
    modifiedDate: "2022-04-02",
    commentId: "댓글1",
    postCommentDepth: [
      {
        memberId: "유저2",
        imageSrc: "file:image:src",
        nickname: "Cuzz",
        contents: "댓글 내용",
        recommendCnt: 10,
        banCnt: 3,
        isAnonymous: true,
        modifiedDate: "2022-04-02",
        commentId: "댓글1",
      },
      {
        memberId: "유저3",
        imageSrc: "file:image:src",
        nickname: "Cuzz",
        contents: "댓글 내용",
        recommendCnt: 10,
        banCnt: 3,
        isAnonymous: true,
        modifiedDate: "2022-04-02",
        commentId: "댓글1",
      },
    ],
  },
  {
    memberId: "유저3",
    imageSrc: "file:image:src",
    nickname: "Cuzz",
    contents: "댓글 내용",
    recommendCnt: 10,
    banCnt: 3,
    isAnonymous: true,
    modifiedDate: "2022-04-02",
    commentId: "댓글2",
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
        {commentData.map((elem, index) => (
          <ChatItem key={index} {...elem} />
        ))}
      </div>
    </>
  );
}
