import React from "react";
import { TodoContext } from "../context/todoContext";
import Todo from "./Todo";
import { ITodo, TodoContextType } from "../interfaces/interfaces";
import { AcademicCapIcon } from "@heroicons/react/solid";
import LoadingSpinner from "./LoadingSpinner";

const Todos: React.FC = () => {
  const { todos, loading } = React.useContext(TodoContext) as TodoContextType;

  return (
    <div className="w-full h-full">
      {loading ? (
        <LoadingSpinner />
      ) : todos.length ? (
        todos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <div className="w-full h-40 flex flex-col items-center justify-center">
          <div className="font-bold">You have no todos yet.</div>
          <AcademicCapIcon className="h-12 w-12" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default Todos;
