import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Todos from "./Todos";
import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";
import SubmitTodo from "./AddTodo";

const Content: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/completed" element={<CompletedTodos />} />
        <Route path="/active" element={<ActiveTodos />} />
        <Route path="/submit" element={<SubmitTodo />} />
      </Routes>
    </div>
  );
};

export default Content;
