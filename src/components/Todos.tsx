import React from "react";
import Todo from "./Todo";
import { AppContextType, ITodo } from "../interfaces/interfaces";
import { AcademicCapIcon } from "@heroicons/react/solid";
import LoadingSpinner from "./LoadingSpinner";
import { AppContext } from "../context/appContext";

const Todos: React.FC = () => {
  const { paginatedTodos, loading } = React.useContext(
    AppContext
  ) as AppContextType;

  return (
    <div className="w-full h-full">
      {loading ? (
        <LoadingSpinner />
      ) : paginatedTodos.length ? (
        paginatedTodos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
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
