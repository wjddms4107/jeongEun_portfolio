import { Variants } from "framer-motion";

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export const purpleLine = "relative right-[1px] font-bold border-l-2 border-purple border-dashed pl-3";

export const greyLine = "border-l border-LightGray border-dashed"

export const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      delay: 0.24,
    },
  },
};

export const scrollUp = () => {
  window.scroll({
    top: 0,
  });
};