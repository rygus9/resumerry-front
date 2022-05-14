import { atom } from "recoil";

export interface OpenStateTypes {
  loginOpen: boolean;
  postFilterOpen: boolean;
  resumeFilterOpen: boolean;
  postDeleteOpen: boolean;
}

export const openState = atom<OpenStateTypes>({
  key: "toggleState",
  default: {
    loginOpen: false,
    postFilterOpen: false,
    resumeFilterOpen: false,
    postDeleteOpen: false,
  },
});
