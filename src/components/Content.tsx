import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "./Todos";
import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";
import SubmitTodo from "./AddTodo";
import Pagination from "./Pagination";

const Content: React.FC = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/completed" element={<CompletedTodos />} />
        <Route path="/active" element={<ActiveTodos />} />
        <Route path="/submit" element={<SubmitTodo />} />
      </Routes>
      <Pagination />
    </div>
  );
};

export default Content;
