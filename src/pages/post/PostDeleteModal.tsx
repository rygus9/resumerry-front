import NormalButton from "components/atom/button/NormalButton";
import ModalFrame from "pages/common/ModalFrame";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { cls } from "util/utils";
import usePostDelete from "./hooks/usePostDelete";

export default function PostDeleteModal() {
  const [open, setOpen] = useRecoilState(openState);
  const { mutate } = usePostDelete();

  const onClose = useCallback(() => {
    setOpen({ ...open, postDeleteOpen: !open.postDeleteOpen });
  }, []);

  const onDelete = useCallback(() => {
    mutate();
  }, []);

  return (
    <ModalFrame onClose={onClose}>
      <div
        className={cls(
          "inner relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[21rem] pb-8 bg-white rounded-xl",
          "sm:w-[24rem]"
        )}
      >
        <div className="w-4/5 m-auto">
          <h4 className="text-center pt-4 pb-2 text-deepBlack text-xl">
            해당 게시글을 삭제하겠습니까?
          </h4>
          <p className="text-center text-sm text-red-600">
            다시 되돌릴 수 없습니다.
          </p>
          <div className="w-full flex items-center justify-center space-x-2 mt-10">
            <NormalButton type="button" onClick={onClose}>
              취소하기
            </NormalButton>
            <NormalButton type="button" color="normalColor" onClick={onDelete}>
              삭제하기
            </NormalButton>
          </div>
        </div>
      </div>
    </ModalFrame>
  );
}
