import "./App.css";
import Layout from "./components/Layout";
import TodoProvider from "./context/todoContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/">
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
