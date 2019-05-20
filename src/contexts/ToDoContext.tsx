import * as React from "react";

/** Custom types */
import { ActionType } from "../custom-types";

interface IState {
  toDoList: Array<{ id: string; toDo?: string; complete?: boolean }>;
}

interface IAction {
  type: ActionType;
  payload: {
    id: string;
    toDo?: string;
    complete?: boolean;
  };
}

interface ItoDoContextInterface {
  state: {
    toDoList: Array<{ id: string; toDo?: string; complete?: boolean }>;
  };
  updateToDoList: React.Dispatch<IAction>;
}

const initialState: IState = { toDoList: [] };

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.add:
      return {
        toDoList: [...state.toDoList, action.payload]
      };
    case ActionType.updateStatus:
      return {
        toDoList: state.toDoList.map(toDo => {
          if (toDo.id === action.payload.id) {
            return { ...toDo, complete: !toDo.complete };
          }
          return toDo;
        })
      };
    case ActionType.delete:
      return {
        toDoList: state.toDoList.filter(toDo => toDo.id !== action.payload.id)
      };
    default:
      throw new Error();
  }
};

export const toDoContext = React.createContext<ItoDoContextInterface>({
  state: {
    toDoList: []
  },
  updateToDoList: () => {}
});

const { Provider } = toDoContext;

const ToDoProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [toDoList, updateToDoList] = React.useReducer(reducer, initialState);

  return (
    <Provider value={{ state: toDoList, updateToDoList }}>{children}</Provider>
  );
};

export default ToDoProvider;
