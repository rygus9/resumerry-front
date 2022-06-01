import { atom } from "recoil";

export const commentLenState = atom<number>({
  key: "commentLenState",
  default: 0,
});
