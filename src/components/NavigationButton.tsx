import React from "react";
import { Link } from "react-router-dom";
import { NavigationButtonProps } from "../interfaces/interfaces";

const NavigationButton: React.FC<NavigationButtonProps> = ({
  to,
  text,
  selected,
  onClick,
}) => {
  return (
    <li className="bg-black">
      <Link
        to={to}
        className={`block w-full py-4 px-4 text-gray-200 hover:text-white hover:bg-gray-500 ${
          selected ? "bg-gray-500 hover:bg-gray-500" : ""
        }`}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavigationButton;
