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

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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
    }
  };

  const searchTodos = (searchTerm: string) => {
    if (!searchTerm) {
      fetchTodos();
    }
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTodos(filtered);
  };

  const addTodo = async (newTodo: Omit<ITodo, "id">) => {
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
  };

  const updateTodo = async (todo: ITodo) => {
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
  };

  const toggleCompletedTodo = async (todo: ITodo) => {
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
  };

  const getTodoById = async (id: string) => {
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
  };

  const deleteTodo = async (id: string) => {
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
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        getTodoById,
        toggleCompletedTodo,
        searchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;