import { atom } from "recoil";

export interface OpenStateTypes {
  loginOpen: boolean;
  postFilterOpen: boolean;
  resumeFilterOpen: boolean;
  postDeleteOpen: boolean;
  resumeDeleteOpen: boolean;
}

export const openDefaultValue = {
  loginOpen: false,
  postFilterOpen: false,
  resumeFilterOpen: false,
  postDeleteOpen: false,
  resumeDeleteOpen: false,
};

export const openState = atom<OpenStateTypes>({
  key: "toggleState",
  default: openDefaultValue,
});
