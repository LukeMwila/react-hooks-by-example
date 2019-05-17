import * as React from "react";

import Login from "./containers/Login";

/** Context API */
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );
}

export default App;
