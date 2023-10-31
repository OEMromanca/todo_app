import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <div className="sidebar bg-gray-900">
      <nav>
        <ul className="space-y-1 mt-20">
          <li className="bg-black">
            <Link
              to="/"
              className="text-gray-300 hover:text-white hover:bg-gray-800  block w-full py-4 px-4  "
            >
              All todos
            </Link>
          </li>
          <li className="bg-black">
            <Link
              to="/active"
              className="text-gray-300 hover:text-white hover:bg-gray-800  block w-full py-4 px-4 "
            >
              Active todos
            </Link>
          </li>
          <li className="bg-black">
            <Link
              to="/completed"
              className="text-gray-300 hover:text-white hover:bg-gray-800  block w-full py-4 px-4 "
            >
              Completed todos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
