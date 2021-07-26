import React from "react";
//import logo from "./logo.svg";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-6 text-center">
          <h1>My Todo List</h1>
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
      </div>
    </div>
  );
}

export default App;
