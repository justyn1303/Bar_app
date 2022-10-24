import { useQuery, useQueryClient } from "@tanstack/react-query";
import recipeApis from "../../api/recipes.api";
import { UseRecipeManager } from "./Recipes.types";
import { CocktailID, CocktailProps } from "../../types/cocktails";

export const useRecipesProvider = (): UseRecipeManager => {
  const queryClient = useQueryClient();

  const {
    data: dataDetail,
    isLoading,
    isError,
    refetch,
  } = useQuery(["drinkRandom"], recipeApis.getRecipes);

  const getById = async (id: string): Promise<CocktailID | undefined> => {
    return await queryClient.fetchQuery(["detailDrink"], () =>
      recipeApis.getRecipeByID(id)
    );
  };

  const getChar = async (
    letter: string
  ): Promise<CocktailProps[] | undefined> => {
    return await queryClient.fetchQuery(["charDrink"], () =>
      recipeApis.getCocktailChar(letter)
    );
  };

  return {
    cocktails: dataDetail,
    isLoading,
    isError,
    getById,
    getChar,
  };
};

export default useRecipesProvider;
