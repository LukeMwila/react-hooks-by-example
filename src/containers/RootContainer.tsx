import * as React from "react";

/** Context */
import { authContext } from "../contexts/AuthContext";

import Login from "./Login";
import ToDo from "./ToDo";

const RootContainer: React.FC<{}> = () => {
  const { auth } = React.useContext(authContext);
  console.log("Auth:", auth);
  return (
    <div>
      {auth.id && <ToDo />}
      {!auth.id && <Login />}
    </div>
  );
};

export default RootContainer;
