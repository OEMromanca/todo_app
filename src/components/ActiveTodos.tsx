import React from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../interfaces/interfaces";
import Todo from "./Todo";
import { AcademicCapIcon } from "@heroicons/react/solid";

const ActiveTodos: React.FC = () => {
  const { todos } = React.useContext(TodoContext) as TodoContextType;

  return (
    <>
      {todos.length ? (
        todos
          .filter((todo: ITodo) => !todo.completed)
          .map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <div className="w-full h-40 flex flex-col items-center justify-center">
          <div className="font-bold text-20">You have no active todos.</div>
          <AcademicCapIcon className="h-12 w-12" aria-hidden="true" />
        </div>
      )}
    </>
  );
};

export default ActiveTodos;
