import * as React from "react";

import RootContainer from "./containers/RootContainer";

/** Context API */
import AuthContextProvider from "./contexts/AuthContext";
import ToDoContextProvider from "./contexts/ToDoContext";

function App() {
  return (
    <AuthContextProvider>
      <ToDoContextProvider>
        <RootContainer />
      </ToDoContextProvider>
    </AuthContextProvider>
  );
}

export default App;
