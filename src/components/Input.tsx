import { type ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  lable: string;
  action?: () => void;
  required?: boolean;
  optional?: boolean;
  style?: string;
};

export default function Input({
  placeholder,
  name,
  action,
  lable,
  required,
  optional,
  style,
}: InputProps) {
  const capLable = lable.charAt(0).toUpperCase() + lable.slice(1);

  return (
    <div className={`${style ? style : ""} flex flex-col gap-0.5`}>
      {lable && (
        <p className="text-gray-800">
          {required && <span className="text-red-600 mr-0.5">*</span>}{" "}
          {capLable}
          {optional && <span className="text-gray-400 ml-0.5">(optional)</span>}
        </p>
      )}

      <input
        className="w-full medium-size default focus:outline focus:border-blue-100 focus:outline-blue-200 focus:bg-blue-50"
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={action}
      />
    </div>
  );
}
