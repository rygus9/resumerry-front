import Button from 'components/atom/button';
import Close from 'components/atom/icons/Close';
import Plus from 'components/atom/icons/Plus';
import React, { useCallback, useState } from 'react';
import { cls } from 'util/utils';

interface Props {
  hashtagList: string[];
  setValue: (
    name: 'hashtag',
    value: string[],
    options?:
      | Partial<{
          shouldValidate: boolean;
          shouldDirty: boolean;
          shouldTouch: boolean;
        }>
      | undefined,
  ) => void;
}

export default function HashTag({ hashtagList, setValue }: Props) {
  const [hashInput, setHashInput] = useState('');
  const onHashChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHashInput(e.target.value);
  }, []);
  const onHashRegist = useCallback(() => {
    const nowHashList = hashtagList;
    setValue('hashtag', nowHashList.concat(hashInput));
    setHashInput('');
  }, [hashInput]);
  const onHashDelete = useCallback((hashtag: string) => {
    const nowHashList = hashtagList;
    setValue(
      'hashtag',
      nowHashList.filter((elem: string) => elem !== hashtag),
    );
  }, []);
  return (
    <>
      <h5 className="lightBlack">해시태그</h5>
      <div className="flex items-center space-x-2 py-2">
        <input
          type="text"
          value={hashInput}
          onChange={onHashChange}
          placeholder="newHash"
          className={cls(
            'py-[2px] px-2 border-deepGray rounded-md max-w-[8rem]',
            'focus:ring-lightBlack focus:border-lightBlack',
            'placeholder:text-deepGray',
          )}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (e.currentTarget.value !== '') onHashRegist();
            }
          }}
        />
        <Button size="md" className="min-w-0" onClick={onHashRegist}>
          <Plus />
        </Button>
      </div>
      <div className="flex flex-wrap items-start">
        {hashtagList &&
          hashtagList.map((elem: string) => (
            <Button
              key={elem}
              size="md"
              className="min-w-0 mb-2 mr-2"
              onClick={() => onHashDelete(elem)}
            >
              <>
                {elem} <Close />
              </>
            </Button>
          ))}
      </div>
    </>
  );
}
