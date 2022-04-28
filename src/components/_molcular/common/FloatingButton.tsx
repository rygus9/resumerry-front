import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
};

export default function FloatingButton({ to }: Props): JSX.Element {
  return (
    <Link to={to}>
      <button
        type="button"
        className="fixed z-30 bottom-16 right-24 w-14 h-14 rounded-full flex justify-center items-center bg-deepPurple text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </Link>
  );
}
