import React from 'react';
import { cls } from 'service/utils';

type Props = {
  direction?: string;
  className?: string;
};

ArrowButton.defaultProps = {
  direction: 'left',
  className: '',
};

export default function ArrowButton({
  direction,
  className,
}: Props): JSX.Element {
  return (
    <button
      className={cls(
        'w-10 h-10 flex justify-center items-center text-deepPurple border-2 border-lightPurple rounded-full',
        className,
      )}
      type="button"
    >
      {direction === 'left' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}
