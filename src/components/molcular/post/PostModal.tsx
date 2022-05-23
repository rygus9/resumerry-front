import MainButton from "components/atom/button/MainButton";
import NormalButton from "components/atom/button/NormalButton";
import LabelInput from "components/atom/input/LabelInput";
import SelectGroup from "components/atom/selectBox/SelectGroup";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { openState } from "recoil/openState";
import { useRecoilState } from "recoil";
import ModalFrame from "pages/common/ModalFrame";
import { cls } from "util/utils";

interface PostFilterForm {
  title: string;
  sort: "recent" | "view";
}

export default function PostModal() {
  const [open, setOpen] = useRecoilState(openState);
  const location = useLocation();
  const navigate = useNavigate();

  const { register, setValue, handleSubmit, watch } = useForm<PostFilterForm>();

  useEffect(() => {
    setValue("sort", "recent");
  }, []);

  const orderedPair = {
    recent: "최신순",
    view: "조회순",
  };

  const onClose = useCallback(() => {
    setOpen({ ...open, postFilterOpen: !open.postFilterOpen });
  }, [open, setOpen]);

  const onSubmit = (data: PostFilterForm) => {
    const { title, sort } = data;
    const nowQuery = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    nowQuery.title = title;
    nowQuery.sort = sort;

    const nextQuery = qs.stringify(nowQuery);
    location.search = nextQuery;
    navigate(location, { replace: true });
    onClose();
  };

  return (
    <ModalFrame onClose={onClose}>
      <div
        className={cls(
          "inner relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[20rem] bg-white rounded-lg",
          "sm:w-[24rem]"
        )}
      >
        <h3 className="text-center py-5 text-2xl">필터 및 정렬</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* selection area */}
          <div
            className={cls(
              "w-full m-auto space-y-2 px-5 pt-3 pb-5",
              "sm:w-4/5 sm:px-0"
            )}
          >
            <LabelInput
              label="제목"
              labelSize="md"
              inputSize="sm"
              color="black"
              placeholder="제목"
              register={register("title")}
            />
            <div className="text-lightBlack">정렬</div>
            <SelectGroup
              pairs={orderedPair}
              now={watch().sort}
              setValue={(value: "recent" | "view") => {
                setValue("sort", value);
              }}
            />
          </div>
          {/* button */}
          <div className="flex justify-center space-x-3 pt-3 pb-5">
            <NormalButton color="normalColor" onClick={onClose}>
              취소하기
            </NormalButton>
            <MainButton type="submit">적용하기</MainButton>
          </div>
        </form>
      </div>
    </ModalFrame>
  );
}
