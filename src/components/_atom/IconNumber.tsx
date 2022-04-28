import React from 'react';

type Props = {
  src: string;
  number: number;
};

export default function IconNumber({ src, number }: Props): JSX.Element {
  return (
    <div className="flex items-center space-x-2 mx-3">
      <img src={src} alt="" className="w-8 h-6" />
      <span>{number}</span>
    </div>
  );
}
