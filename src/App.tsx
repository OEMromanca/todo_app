import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import TodoProvider from "./contextApi/todoContext";
import PaginationProvider from "./contextApi/paginationContext";
import AppProvider from "./contextApi/appContext";
import ContextContainer from "./contextApi/contextContainer";

const providers = [TodoProvider, PaginationProvider, AppProvider];

function App() {
  return (
    <Router>
      <ContextContainer components={providers}>
        <div className="App">
          <Layout />
        </div>
      </ContextContainer>
    </Router>
  );
}

export default App;
