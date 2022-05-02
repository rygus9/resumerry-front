import MainButton from 'components/atom/button/MainButton';
import NormalButton from 'components/atom/button/NormalButton';
import Plus from 'components/atom/icons/Plus';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cls } from 'service/utils';

export default function PostTemplate() {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <section className="w-full px-40 pt-10">
      <form action="">
        {/* title */}
        <section className="flex items-center">
          <input
            type="text"
            placeholder="제목"
            className={cls(
              'block border-deepPurple rounded-xl w-1/2 text-2xl',
              'focus:ring-1 focus:ring-deepPurple focus:border-deepPurple',
            )}
          />
          <div className="flex items-center">
            <label
              htmlFor="annoymous"
              className="pointer select-none ml-10 mr-2"
            >
              {' '}
              익명 여부{' '}
            </label>
            <input
              id="annoymous"
              type="checkbox"
              className={cls(
                'w-6 h-6 border-1 border-deepGray rounded-md text-deepGray',
                'focus:ring-0',
              )}
            />
          </div>
        </section>
        {/* content */}
        <div className="space-y-3 mt-7">
          <div className="flex items-center">
            <span className="text-lg mr-8">직무별 카테고리</span>
            <NormalButton color="normal" size="lg">
              프론트엔드
            </NormalButton>
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-8">내 이력서 첨부</span>
            <button
              type="button"
              className="w-8 h-8 border border-deepGray rounded-md flex items-center justify-center text-3xl text-deepGray"
            >
              <Plus />
            </button>
          </div>
          <div>
            <h4 className="text-2xl py-2">질문 내용</h4>
            <textarea
              className={cls(
                'border-deepGray rounded-xl w-full min-h-[150px] resize-none text-md',
                'focus:ring-deepGray focus:border-deepGray',
              )}
            />
          </div>
        </div>
        {/* Button Group */}
        <div className="flex justify-center space-x-5 mt-5">
          <NormalButton size="lg" color="normalColor" onClick={goBack}>
            취소하기
          </NormalButton>
          <MainButton size="lg">등록하기</MainButton>
        </div>
      </form>
    </section>
  );
}
