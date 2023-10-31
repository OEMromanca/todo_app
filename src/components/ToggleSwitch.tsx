import React from "react";
import { Switch } from "@headlessui/react";
import { IToggleSwitchProps } from "../interfaces/interfaces";

const CustomSwitch: React.FC<IToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? "bg-blue-500" : "bg-gray-300"
      } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none transition-colors ease-in-out duration-200 mr-2`}
    >
      <span
        className={`${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform ease-in-out duration-200`}
      />
    </Switch>
  );
};

export default CustomSwitch;
