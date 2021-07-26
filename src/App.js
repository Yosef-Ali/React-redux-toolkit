import React from "react";
//import logo from "./logo.svg";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          My Todo List
        </h1>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </div>
  );
}

export default App;
