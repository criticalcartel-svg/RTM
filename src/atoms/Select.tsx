import { type ComponentPropsWithoutRef } from "react";

export default function Select({
  name,
  id,
  children,
  ...props
}: ComponentPropsWithoutRef<"select">) {
  return (
    <select name={name} id={id} {...props}>
      {children}
    </select>
  );
}
