import React from 'react';
import { cls } from 'service/utils';

type Props = {
  children: JSX.Element | string;
  className?: string;
  size?: 'big' | 'middle' | 'small';
  color?: 'black' | 'purple';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

Button.defaultProps = {
  size: 'middle',
  color: 'black',
  className: '',
  onClick: null,
};

export default function Button({
  children,
  className,
  size,
  color,
  onClick,
}: Props): JSX.Element {
  let sizeVal = 'w-24 h-8 text-md';

  switch (size) {
    case 'big':
      sizeVal = 'w-36 h-10 text-lg';
      break;
    case 'small':
      sizeVal = 'w-17 h-6 text-sm';
      break;
    default:
  }

  return (
    <button
      type="button"
      className={cls(
        'rounded-md flex items-center justify-center px-5 min-w-fit',
        className,
        color === 'black'
          ? 'text-black border border-deepGray'
          : 'text-deepPurple border border-deepPurple',
        sizeVal,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
