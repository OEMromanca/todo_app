import { Route, Routes } from "react-router-dom";
import Todos from "./Todos";
import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";
import SubmitTodo from "./AddTodo";

const Content: React.FC = () => {
  return (
    <div className="content">
      <Routes>
        <Route index path="/todo_app" element={<Todos />} />
        <Route path="/todo_app/completed" element={<CompletedTodos />} />
        <Route path="/todo_app/active" element={<ActiveTodos />} />
        <Route path="/todo_app/submit" element={<SubmitTodo />} />
      </Routes>
    </div>
  );
};

export default Content;
