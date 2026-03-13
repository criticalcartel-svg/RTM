import { type ComponentPropsWithoutRef } from "react";

export default function Button({
  buttonType,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  buttonType?: "primary" | "secondary" | "icon";
}) {
  return <button className={buttonType} {...props}></button>;
}
