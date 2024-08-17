import React from "react";

export function useClickOutsideListener(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const { target } = event;
      if (
        ref.current &&
        target instanceof Node &&
        !ref.current.contains(target)
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
}
