import { cls } from 'service/utils';
import SelectBox, { SelectBoxProps } from '.';

const buttonValue = {
  main: 'py-3 px-8 text-center text-xl text-white bg-lightPurple border border-lightPurple',
  subMain:
    'py-3 px-8 text-center text-xl text-lightPurple border border-lightPurple',
};

interface Props extends SelectBoxProps {
  buttonStyle?: 'main' | 'subMain';
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
    <label className={elem.className}>
      <div className={cls('cursor-pointer', buttonValue[buttonStyle!])}>
        {children}
      </div>
      <SelectBox {...elem} className="hidden" />
    </label>
  );
}
