import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Todo Project using React Redux
      </h1>
      <AddTodo />
      <Todo />
      <EditTodo />
    </>
  );
}

export default App;
