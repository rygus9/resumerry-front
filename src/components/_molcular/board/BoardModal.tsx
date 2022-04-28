import Button from 'components/_atom/Button';
import MainButton from 'components/_atom/MainButton';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { cls } from 'service/utils';

type Props = {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BoardModal({ setOpenFilter }: Props) {
  const { register, handleSubmit } = useForm<any>({ mode: 'onBlur' });

  const filterToggle = useCallback(() => {
    setOpenFilter((elem) => !elem);
  }, []);

  const toggleByBack = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLElement).closest('.inner');
    if (clicked) return;
    setOpenFilter((elem) => !elem);
  }, []);

  return (
    <div
      className="absolute w-screen h-screen left-0 top-0 bg-opacity-30 bg-black z-40 overflow-hidden"
      onClick={toggleByBack}
    >
      <div className="inner relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1/3 bg-white rounded-lg">
        <h3 className="text-center py-5 text-2xl">필터 및 정렬</h3>
        <form>
          {/* selection area */}
          <div className="w-4/5 m-auto space-y-2 pt-3 py-5">
            <label className="block w-full space-y-2">
              <div>제목</div>
              <input
                type="text"
                placeholder="제목을 입력하세요."
                className={cls(
                  'w-full border-lightBlack rounded-lg h-8',
                  'focus:ring-lightBlack focus:border-lightBlack',
                )}
                {...register('title')}
              />
            </label>
            <label className="block w-full space-y-2">
              <div>정렬</div>
              <select
                className={cls(
                  'h-8 py-0 w-full border border-lightBlack appearance-none rounded-md',
                  'focus:ring-lightBlack focus:border-lightBlack',
                )}
                {...register('ordered')}
              >
                <option value="최신순">최신순</option>
                <option value="조회순">조회순</option>
                <option value="추천순">추천순</option>
              </select>
            </label>
          </div>
          {/* button */}
          <div className="flex justify-center space-x-3 pt-3 pb-5">
            <Button color="purple" onClick={filterToggle}>
              취소하기
            </Button>
            <MainButton type="submit">적용하기</MainButton>
          </div>
        </form>
      </div>
    </div>
  );
}
