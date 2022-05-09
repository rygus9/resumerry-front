import { cls } from 'util/utils';
import SelectBox, { SelectBoxProps } from '.';

const buttonValue = {
  main: 'text-white bg-lightPurple border border-lightPurple',
  subMain: 'text-lightPurple border border-lightPurple',
  normal: 'border border-deepGray text-lightBlack',
  normalColor: 'border border-deepPurple text-deepPurple',
};

const sizeValue = {
  sm: 'min-w-[4rem] py-1 rounded-sm text-sm px-2',
  md: 'min-w-[4.5rem] h-8 rounded-lg text-sm px-1 sm:min-w-[6rem] sm:px-2',
  xl: 'py-3 px-5 text-md sm:py-3 sm:px-8 text-xl',
};

interface Props extends SelectBoxProps {
  buttonStyle?: 'main' | 'subMain' | 'normal' | 'normalColor';
  children: string | JSX.Element;
  size?: 'sm' | 'md' | 'xl';
}

ButtonSelectBox.defaultProps = {
  buttonStyle: 'main',
  size: 'sm',
};

export default function ButtonSelectBox({
  buttonStyle,
  children,
  size,
  ...elem
}: Props) {
  return (
    <label>
      <div
        className={cls(
          'cursor-pointer flex items-center justify-center',
          buttonValue[buttonStyle!],
          sizeValue[size!],
        )}
      >
        {children}
      </div>
      <SelectBox {...elem} className="hidden" />
    </label>
  );
}
