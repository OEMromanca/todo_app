import React from "react";

import {
  AppContextType,
  PaginationContextType,
} from "../interfaces/interfaces";
import { AppContext } from "./appContext";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

export const PaginationContext =
  React.createContext<PaginationContextType | null>(null);

const PaginationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { paginationArray, currentPage, setCurrentPage, todos } =
    React.useContext(AppContext) as AppContextType;

  const pageNumberLimit = 5;

  const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = React.useState(0);

  React.useEffect(() => {
    if (todos.length > 0) {
      let updatedCurrentPage = currentPage;
      if (currentPage > paginationArray.length) {
        updatedCurrentPage = paginationArray.length;
      }
      setCurrentPage(updatedCurrentPage);
      setMaxPageNumberLimit(pageNumberLimit);
      setMinPageNumberLimit(0);
    }
  }, [
    todos,
    currentPage,
    setCurrentPage,
    setMaxPageNumberLimit,
    setMinPageNumberLimit,
    pageNumberLimit,
    paginationArray,
  ]);

  const handleClickPage = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setCurrentPage(Number(e.currentTarget.id));
    },
    [setCurrentPage]
  );

  const handleNextClick = React.useCallback(() => {
    if (currentPage < paginationArray.length) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit((prev) => prev + pageNumberLimit);
      setMinPageNumberLimit((prev) => prev + pageNumberLimit);
    }
  }, [
    currentPage,
    setMaxPageNumberLimit,
    setMinPageNumberLimit,
    maxPageNumberLimit,
    paginationArray,
    pageNumberLimit,
    setCurrentPage,
  ]);

  const handlePreviousClick = React.useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit((prev) => prev - pageNumberLimit);
        setMinPageNumberLimit((prev) => prev - pageNumberLimit);
      }
    }
  }, [
    currentPage,
    pageNumberLimit,
    setCurrentPage,
    setMaxPageNumberLimit,
    setMinPageNumberLimit,
  ]);

  const rightSideHorizontalDots = paginationArray.length >
    maxPageNumberLimit && (
    <div className="flex items-end px-2">
      <DotsHorizontalIcon className="w-4 h-4" />
    </div>
  );

  const leftSideHorizontalDots = minPageNumberLimit >= 1 && (
    <div className="flex items-end px-2">
      <DotsHorizontalIcon className="w-4 h-4" />
    </div>
  );

  return (
    <PaginationContext.Provider
      value={{
        handleClickPage,
        handlePreviousClick,
        handleNextClick,
        maxPageNumberLimit,
        minPageNumberLimit,
        rightSideHorizontalDots,
        leftSideHorizontalDots,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
