import MainButton from 'components/atom/button/MainButton';
import NormalButton from 'components/atom/button/NormalButton';
import LabelInput from 'components/atom/input/LabelInput';
import SelectGroup from 'components/atom/selectBox/SelectGroup';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { openState } from 'recoil/openState';
import { useRecoilState } from 'recoil';

interface BoardFilterForm {
  title: string;
  ordered: 'recent' | 'view';
}

export default function PostModal() {
  const [open, setOpen] = useRecoilState(openState);
  const location = useLocation();
  const navigate = useNavigate();

  const { register, setValue, handleSubmit, watch } =
    useForm<BoardFilterForm>();

  useEffect(() => {
    setValue('ordered', 'recent');
  }, []);

  const orderedPair = {
    recent: '최신순',
    view: '조회순',
  };

  const filterToggle = useCallback(() => {
    setOpen({ ...open, postFilterOpen: !open.postFilterOpen });
  }, []);

  const toggleByBack = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLElement).closest('.inner');
    if (clicked) return;
    filterToggle();
  }, []);

  const onSubmit = (data: BoardFilterForm) => {
    const { title, ordered } = data;
    const nowQuery = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    nowQuery.title = title;
    nowQuery.ordered = ordered;

    const nextQuery = qs.stringify(nowQuery);
    location.search = nextQuery;
    navigate(location, { replace: true });
    filterToggle();
  };

  return (
    <div
      className="absolute w-screen h-screen left-0 top-0 bg-opacity-30 bg-black z-40 overflow-hidden"
      onClick={toggleByBack}
    >
      <div className="inner relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[24rem] bg-white rounded-lg">
        <h3 className="text-center py-5 text-2xl">필터 및 정렬</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* selection area */}
          <div className="w-4/5 m-auto space-y-2 pt-3 py-5">
            <LabelInput
              label="제목"
              labelSize="md"
              inputSize="sm"
              color="black"
              register={register('title')}
            />
            <div>정렬</div>
            <SelectGroup
              pairs={orderedPair}
              now={watch().ordered}
              setValue={(value: 'recent' | 'view') => {
                setValue('ordered', value);
              }}
            />
          </div>
          {/* button */}
          <div className="flex justify-center space-x-3 pt-3 pb-5">
            <NormalButton color="normalColor" onClick={filterToggle}>
              취소하기
            </NormalButton>
            <MainButton type="submit">적용하기</MainButton>
          </div>
        </form>
      </div>
    </div>
  );
}
