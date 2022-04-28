import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { regExpression } from '../service/utils';

interface RegisterForm {
  accountName: string;
  nickname: string;
  email: string;
  password: string;
  passwordValid: string;
  years: number;
  category: string[];
  isWorking: boolean;
  role: 'NORMAL' | 'MR';
}

function Register(): JSX.Element {
  // 카테고리와 회원가입 토글은 따로 관리하겠습니다.
  const [category, setCategory] = useState<string[]>([]);
  const [registerType, setRegisterType] = useState<'normal' | 'HR'>('normal');

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: 'onChange',
  });
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };
  const onError = (error: any) => {
    console.log(error);
  };
  console.log(watch());

  return (
    <div className="m-auto w-fit min-w-[550px] p-10 ">
      <nav className="flex justify-center">
        <div className="py-3 text-center text-2xl text-white bg-[#B284EC] min-w-[200px]">
          일반 회원가입
        </div>
        <div className="py-3 text-center text-2xl text-[#B284EC] border-2 border-[#B284EC] min-w-[200px]">
          HR 회원가입
        </div>
      </nav>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mt-10 border-2 border-[#D8C0F8] rounded-lg w-fit"
      >
        <div>
          <input
            type="text"
            placeholder="accountName"
            {...register('accountName', {
              required: '아이디는 필수 입력 값입니다.',
              pattern: {
                value: regExpression('regAccount'),
                message:
                  '아이디는 공백없이 영어 대소문자, 숫자로만 이루어지며 4~12 글자 사이입니다.',
              },
            })}
          />
          <ErrorMessage errors={errors} name="accountName" />
        </div>
        <div>
          <input
            type="text"
            placeholder="nickname"
            {...register('nickname', {
              required: '닉네임은 필수 입력 값입니다.',
              pattern: regExpression('regNickname'),
            })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            {...register('email', {
              required: '이메일은 필수 입력 값입니다.',
            })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            {...register('password', {
              required: '비밀번호는 필수 입력 값입니다.',
              pattern: regExpression('regPassword'),
            })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="passwordValid"
            {...register('passwordValid', {
              required: '비밀번호 검증은 필수 입력 값입니다.',
              pattern: regExpression('regPassword'),
            })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="years"
            {...register('years', { required: '연차는 필수 입력 값입니다.' })}
          />
        </div>
        <div>
          <input
            type="checkbox"
            placeholder="isWorking"
            {...register('isWorking', { required: true })}
          />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Register;
