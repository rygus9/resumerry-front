import MainButton from 'components/atom/button/MainButton';
import TextLink from 'components/atom/common/TextLink';
import LabelInput from 'components/atom/input/LabelInput';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { openState } from 'recoil/openState';

interface LoginForm {
  accountName: string;
  password: string;
}

export default function LoginForm() {
  const [open, setOpen] = useRecoilState(openState);

  const onClose = useCallback(() => {
    setOpen({ ...open, loginOpen: !open.loginOpen });
  }, []);

  const { register, handleSubmit } = useForm<LoginForm>();

  const onValid = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onValid)}>
      <LabelInput label="아이디" register={register('accountName')} />
      <LabelInput
        label="비밀번호"
        type="password"
        register={register('password')}
      />
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
