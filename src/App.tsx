import * as React from "react";

import RootContainer from "./containers/RootContainer";

/** Context API */
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <RootContainer />
    </AuthContextProvider>
  );
}

export default App;
