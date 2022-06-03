import NormalButton from "components/atom/button/NormalButton";
import ModalFrame from "pages/common/ModalFrame";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { cls } from "util/utils";
import LoadingText from "../common/LoadingText";
import { useResumeUnlock } from "./hook/useResumeUnlock";

export default function UnLockModal() {
  const [open, setOpen] = useRecoilState(openState);

  const onClose = useCallback(() => {
    setOpen({ ...open, resumeLockOpen: false });
  }, []);

  const { isLoading, mutate } = useResumeUnlock(onClose);

  return (
    <ModalFrame onClose={onClose}>
      <div
        className={cls(
          "inner relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[20rem] bg-white rounded-lg",
          "sm:w-[24rem]"
        )}
      >
        <h2 className="text-center py-5 text-2xl">이력서를 구매하겠습니까?</h2>
        <nav className="py-6 flex items-center justify-center space-x-4">
          <NormalButton onClick={onClose}>취소하기</NormalButton>
          <NormalButton color="normalColor" onClick={() => mutate()}>
            <>{isLoading ? <LoadingText></LoadingText> : "구매하기"}</>
          </NormalButton>
        </nav>
      </div>
    </ModalFrame>
  );
}
