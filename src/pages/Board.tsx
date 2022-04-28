import BoardListItem from 'components/_molcular/board/BoardListItem';
import BoardModal from 'components/_molcular/board/BoardModal';
import BoardSearch from 'components/_molcular/board/BoardSearch';
import Category from 'components/_molcular/common/Category';
import FloatingButton from 'components/_molcular/common/FloatingButton';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cls } from 'service/utils';

export default function Board(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    if (!searchParams.get('category')) {
      setSearchParams({ category: 'all' });
    }
  }, []);

  const filterToggle = useCallback(() => {
    setOpenFilter((elem) => !elem);
  }, []);

  return (
    <div
      className={cls(
        'w-full px-40 pt-20',
        openFilter ? 'h-screen overflow-hidden' : '',
      )}
    >
      {/* title */}
      <h2 className="text-4xl mt-2 mb-5 select-none">질문 게시판</h2>
      <Category elemList={['all', 'programmer']} />
      {/* filter */}
      <BoardSearch filterToggle={filterToggle} />
      {/* board list */}
      <article className=" divide-y divide-lightGray">
        <BoardListItem />
        <BoardListItem />
        <BoardListItem />
      </article>
      <FloatingButton to="./create" />
      {openFilter && <BoardModal setOpenFilter={setOpenFilter} />}
    </div>
  );
}
