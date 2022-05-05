import { cls } from 'util/utils';
import SelectBox, { SelectBoxProps } from '.';

const buttonValue = {
  main: 'py-3 px-8 text-xl text-white bg-lightPurple border border-lightPurple',
  subMain: 'py-3 px-8 text-xl text-lightPurple border border-lightPurple',
  normal:
    'min-w-[4rem] py-1 rounded-sm text-sm px-2 border border-deepGray text-lightBlack',
  normalColor:
    'min-w-[4rem] py-1 rounded-sm text-sm px-2 border border-deepPurple text-deepPurple',
};

interface Props extends SelectBoxProps {
  buttonStyle?: 'main' | 'subMain' | 'normal' | 'normalColor';
  children: string | JSX.Element;
}

ButtonSelectBox.defaultProps = {
  buttonStyle: 'main',
};

export default function ButtonSelectBox({
  buttonStyle,
  children,
  ...elem
}: Props) {
  return (
    <label>
      <div
        className={cls('cursor-pointer text-center', buttonValue[buttonStyle!])}
      >
        {children}
      </div>
      <SelectBox {...elem} className="hidden" />
    </label>
  );
}
