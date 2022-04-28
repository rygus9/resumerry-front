import Button from 'components/_atom/Button';
import AlignIcon from 'components/_atom/icons/AlignIcon';

type Props = {
  filterToggle: () => void;
};

export default function BoardSearch({ filterToggle }: Props): JSX.Element {
  return (
    <div className="mt-4 py-4 px-8 flex flex-row">
      <h3 className="text-2xl flex-auto select-none">카테고리 : 전체</h3>
      <Button
        size="big"
        onClick={() => {
          filterToggle();
        }}
      >
        <>
          <AlignIcon />
          필터 및 정렬
        </>
      </Button>
    </div>
  );
}
