import Button, { ButtonProps } from './index';

interface Props extends ButtonProps {
  type?: 'button' | 'submit';
  size?: 'md' | 'lg';
}

MainButton.defaultProps = {
  type: 'button',
  size: 'md',
};

export default function MainButton({ children, type, size, className }: Props) {
  return (
    <Button type={type} size={size} color="main" className={className}>
      {children}
    </Button>
  );
}
