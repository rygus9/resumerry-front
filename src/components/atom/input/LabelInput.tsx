import React from 'react';
import { cls } from 'service/utils';
import Input, { InputProps } from '.';

const labelSizeValue = {
  sm: 'text-sm text-black pb-1',
  md: 'text-md text-deepBlack pb-2',
};

interface Props extends InputProps {
  label: string;
  block?: boolean;
  labelSize?: 'sm' | 'md';
}

LabelInput.defaultProps = {
  block: true,
  labelSize: 'sm',
};

export default function LabelInput({
  label,
  block,
  labelSize,
  ...elem
}: Props) {
  return (
    <div>
      <label className={cls(block ? 'block' : 'flex items-center')}>
        <div
          className={cls(
            labelSizeValue[labelSize!],
            block ? '' : 'min-w-fit mr-3',
          )}
        >
          {label}
        </div>
        <Input {...elem} />
      </label>
    </div>
  );
}
