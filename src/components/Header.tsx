import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import SearchTodo from "./SearchTodo";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Disclosure
        as="nav"
        className="bg-gray-800 h-full flex  items-center justify-between"
      >
        <div className="flex flex-shrink-0 items-center ml-6 ">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <SearchTodo />

        <button
          type="button"
          className="h-12 w-12 mr-6 rounded-full bg-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <Link to="/submit">
            <PlusIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
        </button>
      </Disclosure>
    </div>
  );
};

export default Header;
