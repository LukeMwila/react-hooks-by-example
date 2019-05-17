import * as React from "react";

const useAuthHandler = (initialState: boolean) => {
  const [authenticated, setAuthenticated] = React.useState(initialState);

  const signIn = (authStatus: boolean) => {
    window.localStorage.setItem("Authenticated", authStatus.toString());
    setAuthenticated(authStatus);
  };

  const signOut = (authStatus: boolean) => {
    window.localStorage.clear();
    setAuthenticated(authStatus);
  };

  return {
    authenticated,
    signIn,
    signOut
  };
};

export default useAuthHandler;
