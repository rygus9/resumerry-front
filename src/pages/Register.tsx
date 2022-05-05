import MainButton from 'components/atom/button/MainButton';
import LabelSelectBox from 'components/atom/selectBox/LabelSeleckBox';
import LabelInput from 'components/atom/input/LabelInput';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ButtonSelectBox from 'components/atom/selectBox/ButtonSelectBox';
import {
  accountExistApi,
  emailSendApi,
  joinApi,
  JoinApiInput,
} from 'util/api/auth';
import { AxiosError } from 'axios';
import RegisterCategory from 'components/molcular/category/RegisterCategory';
import NormalButton from 'components/atom/button/NormalButton';
import { useNavigate } from 'react-router-dom';
import {
  axiosErrorHandling,
  cls,
  ErrorObjectFromServer,
  regExpression,
} from '../util/utils';

interface RegisterForm extends JoinApiInput {
  passwordValid: string;
}

function Register(): JSX.Element {
  const navigate = useNavigate();

  // 카테고리와 회원가입 토글은 따로 관리하겠습니다.
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    setError,
    clearErrors,
  } = useForm<RegisterForm>({
    mode: 'onChange',
  });

  useEffect(() => {
    setValue('role', 'NORMAL');
    setValue('category', 'all');
  }, []);

  const onSubmit = async (data: RegisterForm) => {
    if (data.password !== data.passwordValid) {
      setError('passwordValid', { message: '비밀번호와 일치하지 않습니다.' });
      setValue('passwordValid', '');
      setFocus('passwordValid');
      return;
    }

    try {
      const sendData = Object.fromEntries(
        Object.entries(data).filter(([key]) => key !== 'passwordValid'),
      ) as JoinApiInput;
      await joinApi(sendData);
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      axiosErrorHandling(error, console.log);
    }

    console.log('hello');
  };
  const onError = (error: any) => {
    console.log(error);
  };

  const onAccountExist = useCallback(async () => {
    if (errors.accountName) return;

    try {
      const result = await accountExistApi({
        accountName: watch().accountName,
      });
      if (result.data.result) {
        setError('accountName', { message: '이미 존재하는 아이디입니다.' });
      } else {
        clearErrors('accountName');
      }
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      axiosErrorHandling(error, console.log);
    }
  }, []);

  const onEmailSend = useCallback(async () => {
    if (errors.email) return;

    try {
      const result = await emailSendApi({ receiverEmail: watch().email });
      console.log(result.data.result);
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      axiosErrorHandling(error, (errorResult: ErrorObjectFromServer[]) => {
        const errorString = errorResult[0].message;
        setError('email', { message: errorString });
      });
    }
  }, []);

  return (
    <div className="m-auto w-fit min-w-[550px] p-10 flex flex-col items-center">
      <nav className="flex justify-center items-center">
        <ButtonSelectBox
          register={register('role')}
          type="radio"
          value="NORMAL"
          buttonStyle={
            cls(watch().role === 'NORMAL' ? 'main' : 'subMain') as 'main'
          }
        >
          일반회원가입
        </ButtonSelectBox>
        <ButtonSelectBox
          register={register('role')}
          type="radio"
          value="HR"
          buttonStyle={
            cls(watch().role === 'NORMAL' ? 'subMain' : 'main') as 'main'
          }
        >
          HR 회원가입
        </ButtonSelectBox>
      </nav>
      <div className="mt-5 px-5 py-5 w-full">
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-2">
          <LabelInput
            label="아이디"
            placeholder="exampleID"
            register={register('accountName', {
              required: '아이디는 필수 입력 값입니다.',
              pattern: {
                value: regExpression('regAccount'),
                message:
                  '아이디는 공백없이 영어 대소문자, 숫자로만 이루어지며 4~12 글자 사이입니다.',
              },
            })}
            error={errors.accountName}
            onBlur={onAccountExist}
          />
          <LabelInput
            label="닉네임"
            placeholder="Cuzz"
            register={register('nickname', {
              required: '닉네임은 필수 입력 값입니다.',
              pattern: {
                value: regExpression('regNickname'),
                message: '닉네임은 2~16사이 글자입니다.',
              },
            })}
            error={errors.nickname}
          />
          <div className="space-y-2">
            <LabelInput
              label="이메일"
              placeholder="example@ajou.ac.kr"
              register={register('email', {
                required: '이메일은 필수 입력 값입니다.',
              })}
              error={errors.email}
            />
            <div className="flex space-x-2">
              <NormalButton onClick={onEmailSend}>이메일 전송</NormalButton>
              <NormalButton>검증 확인</NormalButton>
            </div>
          </div>
          <LabelInput
            type="password"
            label="비밀번호"
            placeholder="********"
            register={register('password', {
              required: '비밀번호는 필수 입력 값입니다.',
              pattern: {
                value: regExpression('regPassword'),
                message:
                  '비밀번호는 8~20 사이 숫자, 영문, 특수문자를 포함하는 문자열입니다.',
              },
            })}
            error={errors.password}
          />
          <LabelInput
            type="password"
            label="비밀번호 확인"
            placeholder="passwordValid"
            register={register('passwordValid', {
              required: '비밀번호 검증은 필수 입력 값입니다.',
              pattern: {
                value: regExpression('regPassword'),
                message:
                  '비밀번호는 8~20 사이 숫자, 영문, 특수문자를 포함하는 문자열입니다.',
              },
            })}
            error={errors.passwordValid}
          />
          <RegisterCategory
            register={register('category')}
            value={watch().category}
          />
          <div className="flex justify-between">
            <LabelInput
              type="number"
              label="연차"
              block={false}
              placeholder="years"
              register={register('years', {
                required: '연차는 필수 입력 값입니다.',
              })}
            />
            <LabelSelectBox
              label="재직 여부"
              register={register('isWorking')}
              className="mr-1"
            />
          </div>
          <div className="flex justify-center pt-4">
            <MainButton type="submit" size="lg">
              제출
            </MainButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
