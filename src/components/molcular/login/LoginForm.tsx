import MainButton from 'components/atom/button/MainButton';
import TextLink from 'components/atom/common/TextLink';
import LabelInput from 'components/atom/input/LabelInput';

interface Props {
  onClose: () => void;
}

export default function LoginForm({ onClose }: Props) {
  return (
    <form className="space-y-3">
      <LabelInput label="아이디" />
      <LabelInput label="비밀번호" type="password" />
      <div className="flex justify-center pt-3">
        <MainButton type="submit" size="lg">
          로그인
        </MainButton>
      </div>
      <div className="text-sm text-center">
        아직 회원이 아니신가요?
        <TextLink to="/signup" size="sm" type="span" onClick={onClose}>
          회원가입
        </TextLink>
      </div>
    </form>
  );
}
