import React from 'react';
import { cls } from 'service/utils';

type Props = {
  children: string | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  size?: 'big' | 'middle' | 'small';
};

MainButton.defaultProps = {
  type: 'button',
  size: 'middel',
};

export default function MainButton({ children, type, size }: Props) {
  let sizeVal = 'w-24 h-8 text-md';

  switch (size) {
    case 'big':
      sizeVal = 'w-36 h-10 text-lg';
      break;
    case 'small':
      sizeVal = 'w-16 h-6 text-sm';
      break;
    default:
  }

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={cls('rounded-md bg-lightPurple text-white', sizeVal)}
    >
      {children}
    </button>
  );
}
