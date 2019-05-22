import * as React from "react";

/** Context */
import { authContext } from "../contexts/AuthContext";
/** Presentation */
import { Wrapper } from "../components/Styles";

import Login from "./Login";
import ToDo from "./ToDo";

const RootContainer: React.FC<{}> = () => {
  const { auth } = React.useContext(authContext);
  return (
    <Wrapper>
      {auth.id ? <ToDo /> : null}
      {!auth.id && <Login />}
    </Wrapper>
  );
};

export default RootContainer;
