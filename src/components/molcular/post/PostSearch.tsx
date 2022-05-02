import NormalButton from 'components/atom/button/NormalButton';
import AlignIcon from 'components/atom/icons/AlignIcon';

type Props = {
  filterToggle: () => void;
};

export default function PostSearch({ filterToggle }: Props): JSX.Element {
  return (
    <div className="mt-4 py-4 px-8 flex flex-row">
      <h3 className="text-subTitle flex-auto">카테고리 : 전체</h3>
      <NormalButton
        size="lg"
        onClick={() => {
          filterToggle();
        }}
      >
        <>
          <AlignIcon />
          필터 및 정렬
        </>
      </NormalButton>
    </div>
  );
}
