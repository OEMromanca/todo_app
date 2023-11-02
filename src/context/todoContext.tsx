import React from "react";
import { ITodo, TodoContextType } from "../interfaces/interfaces";
import {
  addTodoAPI,
  deleteTodoAPI,
  getTodoByIdAPI,
  getTodosAPI,
  toggleCompletedTodoAPI,
  updateTodoAPI,
} from "../api/api";
import { setItem, getItem } from "../utils/utils";
import { navigationButtons } from "../mocks/mockData";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const initialSelectedButton =
  getItem("selectedButton") || navigationButtons[0].to;

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedButton, setSelectedButton] = React.useState<string>(
    initialSelectedButton
  );

  React.useEffect(() => {
    getSelectedButton(selectedButton);
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodosAPI();
      if (response.status === 200) {
        setLoading(false);
        const allTodos = response.data as ITodo[];
        setTodos(allTodos);
      } else {
        throw new Error("Failed to fetch data from the API.");
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const getSelectedButton = React.useCallback(
    (value: string) => {
      const storedRoute = getItem(value);
      if (storedRoute) {
        setSelectedButton(storedRoute);
      }
    },
    [getItem]
  );

  const handleButtonClick = React.useCallback(
    (route: string) => {
      setSelectedButton(route);
      setItem("selectedButton", route);
    },
    [setItem]
  );

  const completedTodos = React.useMemo(
    () => todos.filter((todo: ITodo) => todo.completed),
    [todos]
  );
  const activeTodos = React.useMemo(
    () => todos.filter((todo: ITodo) => !todo.completed),
    [todos]
  );

  const searchTodos = React.useCallback(
    (searchTerm: string) => {
      if (!searchTerm) {
        fetchTodos();
      }
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTodos(filtered);
    },
    [fetchTodos, todos]
  );

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
        fetchTodos();
        return saveTodo.data;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [addTodoAPI, fetchTodos]
  );

  const updateTodo = React.useCallback(
    async (todo: ITodo) => {
      try {
        const updatedTodo = await updateTodoAPI(todo);
        fetchTodos();
        return updatedTodo;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [fetchTodos, updateTodoAPI]
  );

  const toggleCompletedTodo = React.useCallback(
    async (todo: ITodo) => {
      try {
        const completedTodo = await toggleCompletedTodoAPI(todo);
        fetchTodos();
        return completedTodo;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [fetchTodos, toggleCompletedTodoAPI]
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
        fetchTodos();
        return deletedTodo;
      } catch (error) {
        if (typeof error === "string") {
          throw new Error(error);
        } else {
          throw new Error("An error occurred.");
        }
      }
    },
    [fetchTodos, deleteTodoAPI]
  );

  return (
    <TodoContext.Provider
      value={{
        loading,
        todos,
        completedTodos,
        activeTodos,
        selectedButton,
        addTodo,
        updateTodo,
        deleteTodo,
        getTodoById,
        toggleCompletedTodo,
        searchTodos,
        handleButtonClick,
        getSelectedButton,
        setSelectedButton,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
