import NormalButton from 'components/atom/button/NormalButton';
import AlignIcon from 'components/atom/icons/AlignIcon';
import { cls } from 'util/utils';
import SearchSelect from '../category/SearchSelect';

interface Props {
  onClick: () => void;
}

export default function Search({ onClick }: Props) {
  return (
    <div className={cls('py-4 mt-5 flex flex-row', 'sm:mt-10')}>
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
