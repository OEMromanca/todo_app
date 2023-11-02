import React from "react";
import { TodoContextType } from "../interfaces/interfaces";
import { TodoContext } from "../context/todoContext";
import { navigationButtons } from "../mocks/mockData";
import NavigationButton from "./NavigationButton";

const SideBar: React.FC = () => {
  const { selectedButton, handleButtonClick } = React.useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <div className="sidebar bg-gray-900">
      <nav>
        <ul className="space-y-1 mt-20">
          {navigationButtons.map((button) => (
            <NavigationButton
              key={button.to}
              to={button.to}
              text={button.text}
              selected={selectedButton === button.to}
              onClick={() => handleButtonClick(button.to)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
