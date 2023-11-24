import React from "react";
import {
  AppContextType,
  ITodo,
  TodoContextType,
} from "../interfaces/interfaces";
import {
  addTodoAPI,
  deleteTodoAPI,
  getTodoByIdAPI,
  toggleCompletedTodoAPI,
  updateTodoAPI,
} from "../api/api";
import { AppContext } from "./appContext";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    paginatedTodos,
    fetchPaginatedTodos,
    currentPage,
    limitPaginationNumber,
    setPaginatedTodos,
    selectedButton,
    fetchAllTodos,
  } = React.useContext(AppContext) as AppContextType;
  const [searchTodo, setSearchTodo] = React.useState("");

  const completedTodos = React.useMemo(
    () => paginatedTodos.filter((todo) => todo.completed),
    [paginatedTodos]
  );
  const activeTodos = React.useMemo(
    () => paginatedTodos.filter((todo) => !todo.completed),
    [paginatedTodos]
  );

  const searchTodos = React.useCallback(
    (searchTerm: string) => {
      if (!searchTerm) {
        fetchPaginatedTodos(currentPage, limitPaginationNumber, selectedButton);
      }
      const filtered = paginatedTodos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPaginatedTodos(filtered);
    },
    [fetchPaginatedTodos, paginatedTodos]
  );

  const handleSearchTodos = React.useCallback(
    (newSearchTodo: string) => {
      setSearchTodo(newSearchTodo);
      searchTodos(newSearchTodo);
    },
    [searchTodos]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchTodos(e.target.value);
  };

  const addTodo = React.useCallback(
    async (newTodo: Omit<ITodo, "id">) => {
      try {
        const todo: Omit<ITodo, "id"> = {
          title: newTodo.title,
          description: newTodo.description,
          deadline: newTodo.deadline,
          completed: false,
        };
        const saveTodo = await addTodoAPI(todo);
        fetchPaginatedTodos(currentPage, limitPaginationNumber, selectedButton);
        fetchAllTodos();
        return saveTodo.data;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [addTodoAPI, fetchPaginatedTodos, fetchAllTodos]
  );

  const updateTodo = React.useCallback(
    async (todo: ITodo) => {
      try {
        const updatedTodo = await updateTodoAPI(todo);
        fetchPaginatedTodos(currentPage, limitPaginationNumber, selectedButton);
        return updatedTodo;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [fetchPaginatedTodos, updateTodoAPI]
  );

  const toggleCompletedTodo = React.useCallback(
    async (todo: ITodo) => {
      try {
        const completedTodo = await toggleCompletedTodoAPI(todo);
        fetchPaginatedTodos(currentPage, limitPaginationNumber, selectedButton);
        fetchAllTodos();
        return completedTodo;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [
      fetchPaginatedTodos,
      toggleCompletedTodoAPI,
      fetchAllTodos,
      currentPage,
      limitPaginationNumber,
    ]
  );

  const getTodoById = React.useCallback(
    async (id: string) => {
      try {
        const response = await getTodoByIdAPI(id);
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("Failed to fetch data for the specified ID.");
        }
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [getTodoByIdAPI]
  );

  const deleteTodo = React.useCallback(
    async (id: string) => {
      try {
        const deletedTodo = await deleteTodoAPI(id);
        fetchPaginatedTodos(currentPage, limitPaginationNumber, selectedButton);
        fetchAllTodos();
        return deletedTodo;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [fetchPaginatedTodos, deleteTodoAPI, fetchAllTodos]
  );

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        activeTodos,
        searchTodo,
        addTodo,
        updateTodo,
        deleteTodo,
        getTodoById,
        toggleCompletedTodo,
        searchTodos,
        handleSearchChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
