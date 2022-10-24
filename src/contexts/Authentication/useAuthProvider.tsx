import React, { useEffect, useState, useCallback } from "react";
import { UseAuthManager } from "./Auth.types";

export enum LocalStorageKeys {
  Token = "token",
}

export const useAuthProvider = (): UseAuthManager => {
  const [token, setToken] = useState<boolean>(false);

  const logout = useCallback(() => {
    localStorage.removeItem(LocalStorageKeys.Token);
    setToken(false);
  }, [token]);

  const login = (rememberMe: boolean) => {
    rememberMe && localStorage.setItem(LocalStorageKeys.Token, "dummy_token");
    setToken(true);
  };

  const tryAutoLogin = () => {
    //check if exists in local storage
    // if exists set token true
    // else return / set token false
    // call this fun in root navigator
    const _token = !!localStorage.getItem("dummy_token");
    setToken(_token);
  };

  return {
    token: token,
    login,
    logout,
    tryAutoLogin,
  };
};

export default useAuthProvider;
