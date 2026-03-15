import { type ComponentPropsWithRef } from "react";

export default function Input({
  lable,
  message,
  ...props
}: ComponentPropsWithRef<"input"> & { lable?: string; message?: string }) {
  return (
    <>
      <span className="flex flex-col gap-1">
        {lable ? <p className="text-xs items-start w-full">{lable}</p> : ""}
        <input className="input" {...props} />
        {message && <p>{message}</p>}
      </span>
    </>
  );
}
