import React from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../interfaces/interfaces";
import { SearchIcon } from "@heroicons/react/solid";

const SearchTodo: React.FC = () => {
  const { searchTodo, handleSearchChange } = React.useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-white border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
        value={searchTodo}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchTodo;
