import * as React from "react";

/** Context */
import { toDoContext } from "../contexts/ToDoContext";
/** Styles */
import { ToDoItem } from "../components/Styles";
/** Utils */
import { ActionType, ToDoItemType } from "../custom-types";

const ToDoList: React.FC<{}> = () => {
  const { state, updateToDoList } = React.useContext(toDoContext);

  return (
    <React.Fragment>
      {state.toDoList.map(({ id, toDo, complete }: ToDoItemType, i: number) => {
        return (
          <ToDoItem
            key={id}
            onClick={() =>
              updateToDoList({
                type: ActionType.updateStatus,
                payload: { id }
              })
            }
            complete={complete}
          >
            {i + 1}. {toDo}
          </ToDoItem>
        );
      })}
    </React.Fragment>
  );
};

export default ToDoList;
