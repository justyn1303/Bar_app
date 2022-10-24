import React, { useContext } from "react";
import { ContextType, UseRecipeManager } from "./Recipes.types";
import useRecipesProvider from "./useRecipesProvider";

export const RecipesContext = React.createContext({} as UseRecipeManager);

export function RecipesProvider({ children }: ContextType) {
  const hook = useRecipesProvider();

  return (
    <RecipesContext.Provider value={hook}>{children}</RecipesContext.Provider>
  );
}

export const useRecipeContext = () => useContext(RecipesContext);
