import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Todos from "./Todos";
import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";
import SubmitTodo from "./AddTodo";

const Content: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/todo_app");
  }, []);
  return (
    <div className="content">
      <Routes>
        <Route path="/todo_app" element={<Todos />} />
        <Route path="/todo_app/completed" element={<CompletedTodos />} />
        <Route path="/todo_app/active" element={<ActiveTodos />} />
        <Route path="/todo_app/submit" element={<SubmitTodo />} />
      </Routes>
    </div>
  );
};

export default Content;
