import MainButton from "components/atom/button/MainButton";
import NormalButton from "components/atom/button/NormalButton";
import Input from "components/atom/input";
import LabelInput from "components/atom/input/LabelInput";
import SelectGroup from "components/atom/selectBox/SelectGroup";
import ModalFrame from "pages/common/ModalFrame";
import qs from "qs";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { ResumeListSearchApiInput } from "util/api/resume";
import { cls } from "util/utils";

type ResumeFilterForm = ResumeListSearchApiInput;

export default function ResumeModal() {
  const [open, setOpen] = useRecoilState(openState);
  const location = useLocation();
  const navigate = useNavigate();

  const { register, setValue, handleSubmit, watch } =
    useForm<ResumeFilterForm>();

  useEffect(() => {
    setValue("sort", "recent");
  }, []);

  const orderedPair = {
    recent: "최신순",
    view: "조회순",
    aged: "연차순",
    recommand: "추천순",
  };

  const onClose = useCallback(() => {
    setOpen({ ...open, resumeFilterOpen: false });
  }, []);

  const onSubmit = (data: ResumeFilterForm) => {
    const { title, sort, startYear, endYear } = data;
    const nowQuery = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    nowQuery.title = title;
    nowQuery.sort = sort;
    if (startYear > 0 && endYear > 0 && startYear < endYear) {
      nowQuery.startYear = startYear.toString();
      nowQuery.endYear = endYear.toString();
    }

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
            <h5 className="lightBlack">정렬</h5>
            <SelectGroup
              pairs={orderedPair}
              now={watch().sort}
              setValue={(value: "recent" | "view") => {
                setValue("sort", value);
              }}
            />
            <fieldset>
              <h5 className="lightBlack">연차</h5>
              <div className="flex justify-start items-center">
                <div className="w-16">
                  <Input
                    inputSize="sm"
                    type="number"
                    color="black"
                    register={register("startYear")}
                    placeholder="시작"
                  />
                </div>
                <span className="lightBlack">&nbsp;부터&nbsp;&nbsp;&nbsp;</span>
                <div className="w-16">
                  <Input
                    inputSize="sm"
                    type="number"
                    color="black"
                    register={register("endYear")}
                    placeholder="종료"
                  />
                </div>
                <span className="lightBlack">&nbsp;까지&nbsp;&nbsp;&nbsp;</span>
              </div>
            </fieldset>
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
