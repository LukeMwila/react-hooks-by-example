import * as React from "react";

/** Custom Hooks */
import useAuthHandler from "../utils/custom-hooks/AuthHandler";

interface IAppContextInterface {
  authenticated: boolean;
  signIn: (authenticated: boolean) => void;
  signOut: (authenticated: boolean) => void;
}

const AuthContext = React.createContext<IAppContextInterface>({
  authenticated: false,
  signIn: () => {},
  signOut: () => {}
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { authenticated, signIn, signOut } = useAuthHandler(false);

  return (
    <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
