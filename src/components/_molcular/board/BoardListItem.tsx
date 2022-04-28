import IconNumber from 'components/_atom/IconNumber';
import React from 'react';

export default function BoardListItem(): JSX.Element {
  return (
    <div className="px-3 py-5 cursor-pointer">
      {/* profile */}
      <div className="flex items-center">
        <div className="bg-slate-300 rounded-full w-10 h-10" />
        <span className="text-lg px-3">Cuzz</span>
        <span className="text-md px-3">1 시간 전</span>
      </div>
      {/* body */}
      <div className="py-4">
        <h3 className="py-3 text-xl">경력 부분 작성 팁 부탁드립니다!</h3>
        <p className="max-w-xl">
          제가 살면서 방황을 많이 해가지고 이런 저런 경험이 많습니다. 이런
          부분은 어떻게 이력서에 반영하면 되는지 여쭤보고 싶습니다.
        </p>
      </div>
      {/* icons */}
      <div className="flex justify-end mr-10">
        <IconNumber src="/img/icons/chat.svg" number={10} />
        <IconNumber src="/img/icons/good.svg" number={10} />
        <IconNumber src="/img/icons/view.svg" number={10} />
      </div>
    </div>
  );
}
