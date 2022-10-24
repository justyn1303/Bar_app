import React from "react";
import { CocktailProps, CocktailID } from "../../types/cocktails";

export interface ContextType {
  children: React.ReactNode;
}

export interface UseRecipeManager {
  cocktails: CocktailProps[] | undefined;
  isLoading: boolean;
  isError: boolean;
  getById: (id: string) => Promise<CocktailID | undefined>;
  getChar: (letter: string) => Promise<CocktailProps[] | undefined>;
}
