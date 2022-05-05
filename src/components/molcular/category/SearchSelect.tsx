import { useSearchParams } from 'react-router-dom';
import categoryValue from './categoryValue';

export default function SearchSelect() {
  const [searchParams] = useSearchParams();
  const nowCategory = searchParams.get('category');

  return (
    <h3 className="text-subTitle flex-auto">
      {nowCategory
        ? categoryValue.filter((elem) => elem.kind === nowCategory)[0].value
        : '전체'}
    </h3>
  );
}
