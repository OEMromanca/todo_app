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
  const { paginationArray, currentPage, setCurrentPage } = React.useContext(
    AppContext
  ) as AppContextType;

  const pageNumberLimit = 5;

  const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);

  const handleClickPage = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setCurrentPage(Number(e.currentTarget.id));
    },
    [setCurrentPage]
  );

  const handleNextClick = React.useCallback(() => {
    if (currentPage < paginationArray.length) {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit((prev) => prev + pageNumberLimit);
      setminPageNumberLimit((prev) => prev + pageNumberLimit);
    }
  }, [currentPage, maxPageNumberLimit, pageNumberLimit, setCurrentPage]);

  const handlePreviousClick = React.useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit((prev) => prev - pageNumberLimit);
        setminPageNumberLimit((prev) => prev - pageNumberLimit);
      }
    }
  }, [
    currentPage,
    maxPageNumberLimit,
    minPageNumberLimit,
    pageNumberLimit,
    setCurrentPage,
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