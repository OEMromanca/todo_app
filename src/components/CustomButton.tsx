import React from "react";
import { IButtonProps } from "../interfaces/interfaces";

export const buttonClassNames = {
  submit: `flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4`,
  remove: `bg-red-600 text-white p-2 rounded-lg hover:bg-red-400 focus:outline-none`,
  edit: `font-medium text-indigo-500 hover:text-indigo-600 p-2 focus:outline-none ml-3`,
  confirm: `bg-blue-600 text-white p-2 rounded hover:bg-blue-400 focus:outline-none`,
  cancel: `font-medium text-red-400 hover:text-red-600 p-2 focus:outline-none ml-3`,
};

const CustomButton: React.FC<IButtonProps> = ({
  type,
  onClick,
  text,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClassNames[className]}
    >
      {text}
    </button>
  );
};

export default CustomButton;
