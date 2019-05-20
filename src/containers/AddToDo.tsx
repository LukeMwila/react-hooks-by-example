import * as React from "react";
import { Button, Form } from "reactstrap";
import uuid from "uuid";

/** Context */
import { toDoContext } from "../contexts/ToDoContext";
/** Presentation */
import ErrorMessage from "../components/ErrorMessage";
/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";
/** Utils */
import { ActionType } from "../custom-types";

const ToDo: React.FC<{}> = () => {
  const { updateToDoList } = React.useContext(toDoContext);
  const { error, showError } = useErrorHandler(null);
  const textInput = React.useRef<HTMLInputElement>(null);

  const addNewToDoItem = () => {
    if (textInput.current) {
      const toDo = textInput.current.value;
      updateToDoList({ type: ActionType.add, payload: { id: uuid(), toDo } });
      textInput.current.value = "";
    } else {
      showError("Please type an item before clicking add.");
    }
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        addNewToDoItem();
      }}
    >
      <input type="text" ref={textInput} placeholder="Add to do item" />
      <Button type="submit" block={true}>
        Add
      </Button>
      <br />
      {error && <ErrorMessage errorMessage={error} />}
    </Form>
  );
};

export default ToDo;
