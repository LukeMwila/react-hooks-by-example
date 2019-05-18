import * as React from "react";
import { Button, Form } from "reactstrap";

/** Presentation */
import ErrorMessage from "../components/ErrorMessage";

/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

const ToDo: React.FC<{}> = () => {
  const { error, showError } = useErrorHandler(null);
  const textInput = React.useRef<HTMLInputElement>(null);

  const addNewToDoItem = () => {
    if (textInput.current) {
      const todo = textInput.current.value;
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
