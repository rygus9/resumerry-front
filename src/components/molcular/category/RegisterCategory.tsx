import ButtonSelectBox from 'components/atom/selectBox/ButtonSelectBox';
import { UseFormRegisterReturn } from 'react-hook-form';
import categoryValue from './categoryValue';

interface Props {
  register: UseFormRegisterReturn;
  value:
    | 'all'
    | 'it'
    | 'business'
    | 'marketing'
    | 'design'
    | 'media'
    | 'engineering'
    | 'edu';
}

export default function RegisterCategory({ register, value }: Props) {
  return (
    <>
      <h3 className="text-sm">관심 직무 카테고리</h3>
      <div className="flex w-full max-w-[30rem] flex-wrap">
        {categoryValue.map((elem, index) => (
          <span key={index} className="mr-2 mb-2">
            {value && value === elem.kind ? (
              <ButtonSelectBox
                type="radio"
                register={register}
                value={elem.kind}
                buttonStyle="normalColor"
              >
                {elem.value}
              </ButtonSelectBox>
            ) : (
              <ButtonSelectBox
                type="radio"
                register={register}
                value={elem.kind}
                buttonStyle="normal"
              >
                {elem.value}
              </ButtonSelectBox>
            )}
          </span>
        ))}
      </div>
    </>
  );
}
