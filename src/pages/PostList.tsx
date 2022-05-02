import PostListItem from 'components/molcular/post/PostListItem';
import PostModal from 'components/molcular/post/PostModal';
import PostSearch from 'components/molcular/post/PostSearch';
import Category from 'components/molcular/common/Category';
import FloatingButton from 'components/molcular/common/FloatingButton';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cls } from 'service/utils';

const data = [
  {
    postId: '게시글ID',
    title: '경력 부분 작성 팁 부탁드립니다!',
    contents:
      ' 제가 살면서 방황을 많이 해가지고 이런 저런 경험이 많습니다. 이런 부분은 어떻게 이력서에 반영하면 되는지 여쭤보고 싶습니다.',
    commentCnt: 10,
    viewCnt: 20,
    isAnnonymous: false,
    imageSrc: null,
    nickname: 'Cuzz',
    modifiedDate: '2022-02-02',
  },
  {
    postId: '게시글ID',
    title: '경력 부분 작성 팁 부탁드립니다!',
    contents:
      ' 제가 살면서 방황을 많이 해가지고 이런 저런 경험이 많습니다. 이런 부분은 어떻게 이력서에 반영하면 되는지 여쭤보고 싶습니다.',
    commentCnt: 10,
    viewCnt: 20,
    isAnnonymous: false,
    imageSrc: null,
    nickname: 'Cuzz',
    modifiedDate: '2022-02-02',
  },
  {
    postId: '게시글ID',
    title: '경력 부분 작성 팁 부탁드립니다!',
    contents:
      ' 제가 살면서 방황을 많이 해가지고 이런 저런 경험이 많습니다. 이런 부분은 어떻게 이력서에 반영하면 되는지 여쭤보고 싶습니다.',
    commentCnt: 10,
    viewCnt: 20,
    isAnnonymous: false,
    imageSrc: null,
    nickname: 'Cuzz',
    modifiedDate: '2022-02-02',
  },
];

export default function PostList(): JSX.Element {
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
      <h2 className="text-title mt-2 mb-5">질문 게시판</h2>
      <Category elemList={['all', 'programmer', 'designer']} />
      {/* filter */}
      <PostSearch filterToggle={filterToggle} />
      {/* board list */}
      <article className=" divide-y divide-lightGray">
        {data.map((elem) => (
          <PostListItem key={elem.postId} {...elem} />
        ))}
      </article>
      <FloatingButton to="./create" />
      {openFilter && <PostModal setOpenFilter={setOpenFilter} />}
    </div>
  );
}
