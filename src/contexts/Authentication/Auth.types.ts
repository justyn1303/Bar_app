import React from "react";

export interface ContextType {
  children: React.ReactNode;
}

export interface UseAuthManager {
  token: boolean;
  login: (rememberMe: boolean) => void;
  logout: () => void;
  tryAutoLogin: () => void;
}
