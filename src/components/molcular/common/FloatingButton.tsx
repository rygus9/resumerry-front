import RoundedButton from 'components/atom/button/RoundedButton';
import Plus from 'components/atom/icons/Plus';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
};

export default function FloatingButton({ to }: Props): JSX.Element {
  return (
    <Link to={to}>
      <RoundedButton
        color="main"
        size="roundedLg"
        className="fixed z-30 bottom-16 right-24"
      >
        <Plus />
      </RoundedButton>
    </Link>
  );
}
