import { type ComponentPropsWithoutRef } from "react";

export default function Options({
  value,
  ...props
}: ComponentPropsWithoutRef<"option"> & { value: string }) {
  const lable = value.charAt(0).toUpperCase() + value.slice(1);
  return (
    <option value={value} {...props}>
      {lable}
    </option>
  );
}
