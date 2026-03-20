import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "icon";
  rounded?: boolean;
  block?: boolean;
  onclick?: () => void;
};
export default function Button({
  children,
  type = "primary",
  onclick,
  rounded = false,
  block = false,
}: ButtonProps) {
  return (
    <button
      className={`${type} ${block && "w-full"} ${rounded && "rounded-full"} flex justify-center items-center gap-1 `}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
