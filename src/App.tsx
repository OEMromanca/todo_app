import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import TodoProvider from "./context/todoContext";
import PaginationProvider from "./context/paginationContext";
import AppProvider from "./context/appContext";

function App() {
  return (
    <>
      <Router>
        <AppProvider>
          {" "}
          <TodoProvider>
            <div className="App">
              <PaginationProvider>
                <Layout />
              </PaginationProvider>
            </div>
          </TodoProvider>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;
