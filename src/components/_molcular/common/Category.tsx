import ArrowButton from 'components/_atom/ArrowButton';
import Button from 'components/_atom/Button';
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
      <ArrowButton />
      {/* case */}
      <div className="flex-auto mx-3 overflow-hidden">
        {/* inner */}
        <div className="flex space-x-2 w-fit">
          {elemList.map((elem, index) => (
            <span key={index}>
              <Button
                color={
                  searchParams.get('category') === elem ? 'purple' : 'black'
                }
                onClick={() => onSearchChange(elem)}
              >
                {elem}
              </Button>
            </span>
          ))}
        </div>
      </div>
      <ArrowButton direction="right" />
    </div>
  );
}
