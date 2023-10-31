import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import TodoProvider from "./context/todoContext";

function App() {
  return (
    <>
      <Router>
        <TodoProvider>
          <div className="App">
            <Layout />
          </div>
        </TodoProvider>
      </Router>
    </>
  );
}

export default App;
