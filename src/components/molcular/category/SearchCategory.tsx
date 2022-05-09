import NormalButton from 'components/atom/button/NormalButton';
import { useSearchParams } from 'react-router-dom';
import { cls } from 'util/utils';
import categoryValue from './categoryValue';

export default function SearchCategory(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const setColor = (value: string) => {
    const nowCategory = searchParams.get('category');
    if (!nowCategory) {
      return value === 'all' ? 'normalColor' : 'normal';
    }
    return nowCategory === value ? 'normalColor' : 'normal';
  };

  const onClick = (input: string) => {
    setSearchParams({ category: input });
  };

  return (
    <div>
      <h1 className="text-xl text-black pb-2">직무별 카테고리 선택</h1>
      <div className={cls('flex w-full flex-wrap justify-start')}>
        {categoryValue.map((elem, index) => (
          <span key={index} className="mt-2 mr-2">
            <NormalButton
              color={setColor(elem.kind)}
              onClick={() => onClick(elem.kind)}
            >
              {elem.value}
            </NormalButton>
          </span>
        ))}
      </div>
    </div>
  );
}
