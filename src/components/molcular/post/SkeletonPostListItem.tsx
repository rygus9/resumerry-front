import { cls } from "util/utils";

export default function SkeletonPostListItem() {
  return (
    <div>
      <div className="px-3 py-5 cursor-pointer">
        {/* profile */}
        <div className="flex items-center">
          <div
            className={cls(
              "animate-pulse bg-stone-50 rounded-full h-10 w-10 mr-5"
            )}
          />
          <span className="animate-pulse bg-stone-50 h-6 w-20"></span>
        </div>
        {/* body */}
        <div className="pt-2 pb-2">
          <h3 className={cls("py-2 text-xl text-deepBlack", "sm:py-3")}>
            <div className="animate-pulse max-w-[30rem] h-8 bg-stone-50"></div>
          </h3>
          <div className="min-h-[2.5rem] text-black sm:min-h-[3.5rem]">
            <div className="animate-pulse h-14 bg-stone-50"></div>
          </div>
        </div>
        {/* icons */}
        <div
          className={cls("flex justify-between mr-3 mt-1", "sm:mr-10 sm:mt-0")}
        >
          <span className="animate-pulse bg-stone-50 h-6 w-20"></span>
          <div className={cls("flex space-x-3", "sm:space-x-5")}></div>
        </div>
      </div>
    </div>
  );
}
