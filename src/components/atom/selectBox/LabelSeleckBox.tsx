import { cls } from 'service/utils';
import SelectBox, { SelectBoxProps } from '.';

interface Props extends SelectBoxProps {
  label: string;
}

export default function LabelCheckBox({ label, className, ...elem }: Props) {
  return (
    <div className={className}>
      <label>
        <span className="px-2 text-black align-middle">{label}</span>
        <SelectBox
          className={cls('focus:ring-0 checked:text-lightPurple')}
          {...elem}
        />
      </label>
    </div>
  );
}
