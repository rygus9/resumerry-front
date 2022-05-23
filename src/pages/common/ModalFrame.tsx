import { useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { openDefaultValue, openState } from "recoil/openState";

export default function ModalFrame({
  children,
  onClose,
}: {
  children: JSX.Element | string;
  onClose: () => void;
}) {
  const [open, setOpen] = useRecoilState(openState);

  useEffect(() => {
    const preventGoBack = () => {
      setOpen(openDefaultValue);
    };
    window.addEventListener("popstate", preventGoBack);

    return () => window.removeEventListener("popstate", preventGoBack);
  }, []);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLElement).closest(".inner");
    if (clicked) return;
    onClose();
  }, []);

  return (
    <div
      className="fixed w-screen h-screen top-0 left-0 bg-opacity-30 bg-black z-40"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
