import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Todos = lazy(() => import("./Todos"));
const CompletedTodos = lazy(() => import("./CompletedTodos"));
const ActiveTodos = lazy(() => import("./ActiveTodos"));
const SubmitTodo = lazy(() => import("./AddTodo"));

const Content: React.FC = () => {
  return (
    <div className="content">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Todos />
            </Suspense>
          }
        />
        <Route
          path="/completed"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CompletedTodos />
            </Suspense>
          }
        />
        <Route
          path="/active"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ActiveTodos />
            </Suspense>
          }
        />
        <Route
          path="/submit"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SubmitTodo />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default Content;
