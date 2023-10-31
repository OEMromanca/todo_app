import React from "react";
import { Field } from "formik";
import { IInputProps } from "../interfaces/interfaces";

export const inputClassNames = {
  title: `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2`,
  description: `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2`,
};

const CustomInput: React.FC<IInputProps> = ({
  className,
  name,
  autoFocus,
  placeholder,
  type,
  as,
  style,
}) => {
  return (
    <div>
      <Field
        type={type}
        name={name}
        autoFocus={autoFocus}
        placeholder={placeholder}
        className={inputClassNames[className]}
        as={as}
        style={style}
      />
    </div>
  );
};

export default CustomInput;
