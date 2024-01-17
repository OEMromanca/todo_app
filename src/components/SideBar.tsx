import React from "react";
import { AppContextType } from "../interfaces/interfaces";
import { navigationButtons } from "../mocks/mockData";
import NavigationButton from "./NavigationButton";
import { AppContext } from "../contextApi/appContext";

const SideBar: React.FC = () => {
  const { selectedButton, handleButtonClick } = React.useContext(
    AppContext
  ) as AppContextType;

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
