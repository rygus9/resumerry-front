import { useCallback, useState } from 'react';
import { cls } from 'util/utils';
import Down from '../icons/Down';

interface SelectGroupProps {
  now: string;
  pairs: { [value: string]: string };
  setValue: (value: any) => void;
}

export default function SelectGroup({
  now,
  pairs,
  setValue,
}: SelectGroupProps) {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen((elem) => !elem);
  }, []);

  const onLabelClick = useCallback((value: any) => {
    setValue(value);
    setOpen((elem) => !elem);
  }, []);

  return (
    <div className="w-full">
      <div
        className="border border-deepGray rounded-md h-8 w-full px-3 flex items-center justify-between text-lightBlack select-none cursor-pointer"
        onClick={onClick}
      >
        {pairs[now]} {!open && <Down />}
      </div>
      {open && (
        <ul className="text-center text-lightBlack bg-lightGray rounded-md">
          {Object.entries(pairs).map((elem) => (
            <span
              key={elem[1]}
              className={cls(
                'block py-[2px] text-deepBlack cursor-pointer',
                elem[0] === now ? 'font-bold' : '',
              )}
              onClick={() => {
                onLabelClick(elem[0]);
              }}
            >
              {elem[1]}
            </span>
          ))}
        </ul>
      )}
    </div>
  );
}
