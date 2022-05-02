import NormalButton from 'components/atom/button/NormalButton';
import RoundedButton from 'components/atom/button/RoundedButton';
import LeftMove from 'components/atom/icons/LeftMove';
import RightMove from 'components/atom/icons/RightMove';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type Props = {
  elemList: string[];
};

export default function Category({ elemList }: Props): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const onSearchChange = useCallback((input: string) => {
    setSearchParams({ category: input });
  }, []);

  return (
    <div className="py-7 w-4/5 m-auto flex items-center">
      <RoundedButton size="roundedSm">
        <LeftMove />
      </RoundedButton>
      {/* case */}
      <div className="flex-auto mx-3 overflow-hidden">
        {/* inner */}
        <div className="flex space-x-2 w-fit">
          {elemList.map((elem, index) => (
            <span key={index}>
              <NormalButton
                color={
                  searchParams.get('category') === elem
                    ? 'normalColor'
                    : 'normal'
                }
                onClick={() => onSearchChange(elem)}
              >
                {elem}
              </NormalButton>
            </span>
          ))}
        </div>
      </div>
      <RoundedButton size="roundedSm">
        <RightMove />
      </RoundedButton>
    </div>
  );
}
