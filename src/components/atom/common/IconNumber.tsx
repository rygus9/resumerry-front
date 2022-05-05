type Props = {
  src: string;
  number: number;
  iconSize?: 'sm' | 'md' | 'lg';
};

IconNumber.defaultProps = {
  iconSize: 'md',
};

export default function IconNumber({
  src,
  number,
  iconSize,
}: Props): JSX.Element {
  return (
    <div className="flex items-center space-x-2">
      <img src={src} alt="" className={sizeValue[iconSize!]} />
      <span className="text-lightBlack">{number}</span>
    </div>
  );
}

const sizeValue = {
  sm: 'w-5 h-5',
  md: 'w-7 h-6',
  lg: 'w-10 h-10',
};
