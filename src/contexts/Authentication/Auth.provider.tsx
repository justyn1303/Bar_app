import React, { useContext } from "react";
import { ContextType, UseAuthManager } from "./Auth.types";
import useAuthProvider from "./useAuthProvider";

export const AuthContext = React.createContext({} as UseAuthManager);

export function AuthProvider({ children }: ContextType) {
  const hook = useAuthProvider();

  return <AuthContext.Provider value={hook}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
