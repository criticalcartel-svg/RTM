import { type ComponentPropsWithRef } from "react";

export default function Input({
  lable,
  message,
  ...props
}: ComponentPropsWithRef<"input"> & { lable?: string; message?: string }) {
  return (
    <>
      {lable ? <p>{lable}</p> : ""}
      <input {...props} />
      {message && <p>{message}</p>}
    </>
  );
}
