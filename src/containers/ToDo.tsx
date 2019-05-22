import * as React from "react";

/** Styles */
import { Header } from "../components/Styles";

/** Components */
import AddToDo from "./AddToDo";
import RandomJoke from "./RandomJoke";
import ToDoList from "./ToDoList";
/** Presentation/UI */
import { ToDoContainer } from "../components/Styles";

function ToDo() {
  return (
    <ToDoContainer>
      <Header>My to do list</Header>
      <RandomJoke />
      <AddToDo />
      <ToDoList />
    </ToDoContainer>
  );
}

export default ToDo;
