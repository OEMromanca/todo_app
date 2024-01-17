import React from "react";
import { AppContextType, ITodo } from "../interfaces/interfaces";
import { getItem, setItem } from "../utils/utils";
import { navigationButtons } from "../mocks/mockData";
import {
  getAllTodosAPI,
  getPaginatedActiveTodosAPI,
  getPaginatedCompletedTodosAPI,
  getPaginatedTodosAPI,
} from "../api/api";

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [paginatedTodos, setPaginatedTodos] = React.useState<ITodo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const initialSelectedButton =
    getItem("selectedButton") || navigationButtons[0].to;
  const [selectedButton, setSelectedButton] = React.useState(
    initialSelectedButton
  );

  const [currentPage, setCurrentPage] = React.useState(1);
  const limitPaginationNumber = 2;
  let todosLength = 0;

  if (selectedButton === "/") {
    todosLength = todos.length;
  } else if (selectedButton === "/active") {
    todosLength = todos.filter((todo) => !todo.completed).length;
  } else if (selectedButton === "/completed") {
    todosLength = todos.filter((todo) => todo.completed).length;
  }

  const totalPagesNumber = Math.ceil(todosLength / limitPaginationNumber);

  const paginationArray: number[] = [];
  for (let i = 1; i <= totalPagesNumber; i++) {
    paginationArray.push(i);
  }

  const fetchAllTodos = React.useCallback(async () => {
    try {
      const response = await getAllTodosAPI();
      if (response.status === 200) {
        setLoading(false);
        const allTodos = response.data as ITodo[];
        setTodos([...allTodos]);
      } else {
        throw new Error("Failed to fetch data from the API.");
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  }, [setLoading, setTodos]);

  const fetchPaginatedTodos = React.useCallback(
    async (page: number, limit: number, route: string) => {
      try {
        setLoading(true);

        let response;

        switch (route) {
          case "/":
            response = await getPaginatedTodosAPI(page, limit);
            break;
          case "/active":
            response = await getPaginatedActiveTodosAPI(page, limit);
            break;
          case "/completed":
            response = await getPaginatedCompletedTodosAPI(page, limit);
            break;
          default:
            throw new Error("Invalid route");
        }

        if (response.status === 200) {
          setLoading(false);
          const paginatedTodos = response.data as ITodo[];
          setPaginatedTodos([...paginatedTodos]);
        } else {
          throw new Error("Failed to fetch data from the API.");
        }
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    },
    [setLoading, setPaginatedTodos]
  );

  const getSelectedButton = React.useCallback(
    (value: string) => {
      const storedRoute = getItem(value);
      if (storedRoute) {
        setSelectedButton(storedRoute);
      }
    },
    [setSelectedButton]
  );

  React.useEffect(() => {
    getSelectedButton(selectedButton);
    fetchPaginatedTodos(currentPage, limitPaginationNumber, selectedButton);
    fetchAllTodos();
  }, [
    currentPage,
    limitPaginationNumber,
    selectedButton,
    fetchAllTodos,
    fetchPaginatedTodos,
    getSelectedButton,
  ]);

  const handleButtonClick = React.useCallback(
    (route: string) => {
      setSelectedButton(route);
      setItem("selectedButton", route);
      setCurrentPage(1);
    },
    [setSelectedButton, setCurrentPage]
  );

  return (
    <AppContext.Provider
      value={{
        paginatedTodos,
        todos,
        loading,
        fetchAllTodos,
        fetchPaginatedTodos,
        currentPage,
        limitPaginationNumber,
        setCurrentPage,
        setPaginatedTodos,
        handleButtonClick,
        getSelectedButton,
        paginationArray,
        selectedButton,
        todosLength,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
