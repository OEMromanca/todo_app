import React from "react";
import { PaginationContext } from "../contextApi/paginationContext";
import {
  AppContextType,
  PaginationContextType,
} from "../interfaces/interfaces";
import { AppContext } from "../contextApi/appContext";
import CustomButton from "./CustomButton";

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

  const firstPaginationButton = () => {
    if (paginationArray.length === 0) {
      return (
        <CustomButton
          type={"button"}
          text="1"
          key={1}
          id={"1"}
          style={{ backgroundColor: "#512bdb" }}
          className="paginationButton"
        />
      );
    }
  };

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
            <CustomButton
              type={"button"}
              onClick={handlePreviousClick}
              className="paginationArrowButton"
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
            </CustomButton>
            {leftSideHorizontalDots}

            {firstPaginationButton()}

            {paginationArray.map((pageButton: number) => {
              console.log(pageButton, "BUTTON");

              if (
                pageButton < maxPageNumberLimit + 1 &&
                pageButton > minPageNumberLimit
              ) {
                return (
                  <CustomButton
                    type={"button"}
                    key={pageButton}
                    id={String(pageButton)}
                    text={String(pageButton)}
                    onClick={handleClickPage}
                    style={
                      currentPage === pageButton
                        ? { backgroundColor: "#512bdb" }
                        : { backgroundColor: "#c3dafe" }
                    }
                    className="paginationButton"
                  />
                );
              }
            })}
            {rightSideHorizontalDots}
            <CustomButton
              type={"button"}
              onClick={handleNextClick}
              className="paginationArrowButton"
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
            </CustomButton>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
