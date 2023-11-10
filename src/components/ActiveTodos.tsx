import React from "react";
import { TodoContext } from "../context/todoContext";
import {
  AppContextType,
  ITodo,
  TodoContextType,
} from "../interfaces/interfaces";
import Todo from "./Todo";
import { AcademicCapIcon } from "@heroicons/react/solid";
import LoadingSpinner from "./LoadingSpinner";
import { AppContext } from "../context/appContext";

const ActiveTodos: React.FC = () => {
  const { activeTodos } = React.useContext(TodoContext) as TodoContextType;

  const { loading } = React.useContext(AppContext) as AppContextType;

  return (
    <div className="w-full h-full">
      {loading ? (
        <LoadingSpinner />
      ) : activeTodos.length ? (
        activeTodos.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <div className="w-full h-40 flex flex-col items-center justify-center">
          <div className="font-bold">You have no active todos yet.</div>
          <AcademicCapIcon className="h-12 w-12" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default ActiveTodos;
