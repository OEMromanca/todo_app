import React from "react";
import { PaginationContext } from "../context/paginationContext";
import {
  AppContextType,
  PaginationContextType,
} from "../interfaces/interfaces";
import { AppContext } from "../context/appContext";

const Pagination: React.FC = () => {
  const {
    handlePreviousClick,
    handleNextClick,
    handleClickPage,
    maxPageNumberLimit,
    minPageNumberLimit,
    rightSideHorizontalDots,
    leftSideHorizontalDots,
  } = React.useContext(PaginationContext) as PaginationContextType;
  const { currentPage, paginationArray, todosLength, paginatedTodos } =
    React.useContext(AppContext) as AppContextType;

  return (
    <div className="flex items-center  border-t border-gray-200 bg-white px-4 py-3 w-2/4">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="flex items-center justify-between text-sm text-gray-700   w-1/2 mr-2">
          <div>Showing</div>
          <div className="font-bold">{currentPage}</div>
          to
          <span className="font-bold">{paginatedTodos.length}</span>
          of
          <span className="font-bold">{todosLength}</span>
          <div>results</div>
        </div>

        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm w-full"
            aria-label="Pagination"
          >
            <button
              onClick={handlePreviousClick}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                />
              </svg>
            </button>

            {leftSideHorizontalDots}

            {paginationArray.map((pageButton: number) => {
              if (
                pageButton < maxPageNumberLimit + 1 &&
                pageButton > minPageNumberLimit
              ) {
                return (
                  <button
                    key={pageButton}
                    id={String(pageButton)}
                    aria-current="page"
                    onClick={handleClickPage}
                    className={`${
                      currentPage === pageButton
                        ? "bg-indigo-600"
                        : "bg-indigo-200"
                    } relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600}`}
                  >
                    {pageButton}
                  </button>
                );
              }
            })}

            {rightSideHorizontalDots}

            <button
              onClick={handleNextClick}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
