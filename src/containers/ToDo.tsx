import * as React from "react";

/** Styles */
import { Header } from "../components/Styles";

/** Components */
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

function ToDo() {
  return (
    <div>
      <Header>My to do list</Header>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default ToDo;
