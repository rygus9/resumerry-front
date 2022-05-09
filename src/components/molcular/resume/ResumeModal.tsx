import MainButton from 'components/atom/button/MainButton';
import NormalButton from 'components/atom/button/NormalButton';
import Input from 'components/atom/input';
import LabelInput from 'components/atom/input/LabelInput';
import SelectGroup from 'components/atom/selectBox/SelectGroup';
import qs from 'qs';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { openState } from 'recoil/openState';
import Hashtag from './Hashtag';

interface ResumeFilterForm {
  title: string;
  sort: 'recent' | 'view' | 'aged' | 'recommand';
  startAged: number;
  endAged: number;
  hashtag: string[];
}

export default function ResumeModal() {
  const [open, setOpen] = useRecoilState(openState);
  const location = useLocation();
  const navigate = useNavigate();

  const { register, setValue, handleSubmit, watch } =
    useForm<ResumeFilterForm>();

  useEffect(() => {
    setValue('hashtag', []);
    setValue('sort', 'recent');
  }, []);

  const orderedPair = {
    recent: '최신순',
    view: '조회순',
    aged: '연차순',
    recommand: '추천순',
  };

  const filterToggle = useCallback(() => {
    setOpen({ ...open, resumeFilterOpen: !open.resumeFilterOpen });
  }, []);

  const toggleByBack = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLElement).closest('.inner');
    if (clicked) return;
    filterToggle();
  }, []);

  const onSubmit = (data: ResumeFilterForm) => {
    const { title, sort, hashtag, startAged, endAged } = data;
    const nowQuery = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    nowQuery.title = title;
    nowQuery.sort = sort;
    nowQuery.hash = hashtag.join('|');
    if (startAged > 0 && endAged > 0 && startAged < endAged) {
      nowQuery.aged = `${startAged}to${endAged}`;
    }

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
              placeholder="제목"
              register={register('title')}
            />
            <h5 className="lightBlack">정렬</h5>
            <SelectGroup
              pairs={orderedPair}
              now={watch().sort}
              setValue={(value: 'recent' | 'view') => {
                setValue('sort', value);
              }}
            />
            <fieldset>
              <h5 className="lightBlack">연차</h5>
              <div className="flex justify-start items-center">
                <div className="w-16">
                  <Input
                    inputSize="sm"
                    type="number"
                    color="black"
                    register={register('startAged')}
                    placeholder="시작"
                  />
                </div>
                <span className="lightBlack">&nbsp;부터&nbsp;&nbsp;&nbsp;</span>
                <div className="w-16">
                  <Input
                    inputSize="sm"
                    type="number"
                    color="black"
                    register={register('endAged')}
                    placeholder="종료"
                  />
                </div>
                <span className="lightBlack">&nbsp;까지&nbsp;&nbsp;&nbsp;</span>
              </div>
            </fieldset>
            <fieldset>
              <Hashtag hashtagList={watch().hashtag} setValue={setValue} />
            </fieldset>
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
