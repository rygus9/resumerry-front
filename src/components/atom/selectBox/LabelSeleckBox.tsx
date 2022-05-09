import { cls } from 'util/utils';
import SelectBox, { SelectBoxProps } from '.';

interface Props extends SelectBoxProps {
  label: string;
}

export default function LabelCheckBox({ label, className, ...elem }: Props) {
  return (
    <div className={className}>
      <label>
        <span className="text-black pr-2 text-sm align-middle">{label}</span>
        <SelectBox
          className={cls('focus:ring-0 checked:text-lightPurple')}
          {...elem}
        />
      </label>
    </div>
  );
}
