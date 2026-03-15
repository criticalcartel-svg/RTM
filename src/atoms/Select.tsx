import { type ComponentPropsWithoutRef } from "react";

export default function Select({
  name,
  id,
  lable,
  children,
  ...props
}: ComponentPropsWithoutRef<"select"> & { lable?: string }) {
  return (
    <span>
      {lable && <p className="text-xs items-start">{lable}</p>}
      <select name={name} id={id} {...props}>
        {children}
      </select>
    </span>
  );
}
