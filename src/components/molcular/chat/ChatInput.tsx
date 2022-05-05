import NormalButton from 'components/atom/button/NormalButton';
import { cls } from 'service/utils';

export default function ChatInput() {
  return (
    <div className="space-y-2">
      <textarea
        className={cls(
          'tracking-normal resize-none py-4 px-4 outline-none border border-deepGray rounded-lg min-h-[6.125rem] w-full text-black',
          'focus:ring-deepGray focus:border-deepGray',
          'placeholder:text-deepGray',
        )}
        placeholder="댓글을 입력하세요"
      />
      <div className="flex justify-end">
        <NormalButton color="normal">댓글 작성</NormalButton>
      </div>
    </div>
  );
}
