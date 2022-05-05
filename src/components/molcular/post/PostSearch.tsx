import NormalButton from 'components/atom/button/NormalButton';
import AlignIcon from 'components/atom/icons/AlignIcon';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { openState } from 'recoil/openState';
import SearchSelect from '../category/SearchSelect';

export default function PostSearch(): JSX.Element {
  const [open, setOpen] = useRecoilState(openState);

  const onClick = useCallback(() => {
    setOpen({ ...open, postFilterOpen: !open.postFilterOpen });
  }, []);

  return (
    <div className="py-4 mt-10 flex flex-row">
      <SearchSelect />
      <NormalButton size="md" onClick={onClick}>
        <>
          <AlignIcon />
          &nbsp;필터 및 정렬
        </>
      </NormalButton>
    </div>
  );
}
