import NormalButton from 'components/atom/button/NormalButton';
import LabelCheckBox from 'components/atom/selectBox/LabelSeleckBox';
import TextArea from 'components/atom/textArea';
import { cls } from 'util/utils';

interface Props {
  label?: string | null;
}

ChatInput.defaultProps = {
  label: null,
};

export default function ChatInput({ label }: Props) {
  return (
    <div className={cls('space-y-1', 'sm:space-y-2')}>
      <TextArea
        label={label}
        textAreaHeight="sm"
        placeholder="댓글을 입력하세요."
      />
      <div
        className={cls(
          'flex justify-end items-start space-x-2',
          'sm:space-x-4',
        )}
      >
        <LabelCheckBox label="익명 여부" />
        <NormalButton color="normalColor">댓글 작성</NormalButton>
      </div>
    </div>
  );
}
