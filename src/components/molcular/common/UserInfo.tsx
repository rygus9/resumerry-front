interface Props {
  isAnonymous: boolean;
  modifiedDate?: string;
  nickname: string | null;
  imageSrc: string | null;
}

UserInfo.defaultProps = {
  modifiedDate: '',
};

export default function UserInfo({
  isAnonymous,
  modifiedDate,
  nickname,
  imageSrc,
}: Props) {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {isAnonymous ? (
          <>
            <div className="bg-slate-300 rounded-full w-10 h-10" />
            <span className="text-lg px-3">익명</span>
          </>
        ) : (
          <>
            <img
              className="rounded-full w-10 h-10"
              src={imageSrc!}
              alt="프로필"
            />
            <span className="text-lg px-3">{nickname}</span>
          </>
        )}
        <span className="text-md px-3">{modifiedDate}</span>
      </div>
    </div>
  );
}
