import { type ComponentPropsWithoutRef } from "react";

export default function Form({
  children,
  ...props
}: ComponentPropsWithoutRef<"form">) {
  return <form {...props}>{children}</form>;
}
