import { atom } from "recoil";

export const naviState = atom({
  key: "naviState",
  default: {
    top: false,
    bottom: false,
    path: "/",
  },
});
