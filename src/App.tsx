import "./App.css";
import TodoProvider from "./context/todoContext";
import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";

const LazyLayout = lazy(() => import("./components/Layout"));

function App() {
  return (
    <>
      <Router>
        <TodoProvider>
          <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLayout />
            </Suspense>
          </div>
        </TodoProvider>
      </Router>
    </>
  );
}

export default App;
