import * as React from "react";
import { Button, Form } from "reactstrap";
import uuid from "uuid";

/** Presentation */
import ErrorMessage from "../components/ErrorMessage";

/** Custom Hooks */
import useErrorHandler from "../utils/custom-hooks/ErrorHandler";

enum ActionType {
  add = "ADD",
  delete = "DELETE"
}

interface IState {
  toDoList: Array<{ id: string; toDo?: string }>;
}

interface IAction {
  type: ActionType;
  payload: {
    id: string;
    toDo?: string;
  };
}

const initialState: IState = { toDoList: [] };

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.add:
      return {
        toDoList: [...state.toDoList, action.payload]
      };
    case ActionType.delete:
      return {
        toDoList: state.toDoList.filter(toDo => toDo.id !== action.payload.id)
      };
    default:
      throw new Error();
  }
};

const ToDo: React.FC<{}> = () => {
  const [toDoList, dispatch] = React.useReducer(reducer, initialState);
  const { error, showError } = useErrorHandler(null);
  const textInput = React.useRef<HTMLInputElement>(null);

  const addNewToDoItem = () => {
    if (textInput.current) {
      const toDo = textInput.current.value;
      dispatch({ type: ActionType.add, payload: { id: uuid(), toDo } });
      textInput.current.value = "";
    } else {
      showError("Please type an item before clicking add.");
    }
  };

  console.log("To do list:", toDoList);

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
