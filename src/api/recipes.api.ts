import axios from "axios";
import { CocktailID, CocktailProps } from "../types/cocktails";

const recipeApis = {
  getRecipes: async (): Promise<CocktailProps[]> => {
    const response = await axios.get<GetRecipeDetailsResponse<CocktailProps>>(
      "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );

    return response.data.drinks;
  },
  getRecipeByID: async (id: string): Promise<CocktailID | undefined> => {
    try {
      const response = await axios.get<GetRecipeDetailsResponse<CocktailID>>(
        `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      return response.data.drinks[0];
    } catch (error) {}
  },

  getCocktailChar: async (
    letter: string
  ): Promise<CocktailProps[] | undefined> => {
    try {
      const response = await axios.get<GetRecipeDetailsResponse<CocktailProps>>(
        `https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );

      return response.data.drinks;
    } catch (error) {}
  },
};

interface GetRecipeDetailsResponse<T> {
  drinks: T[];
}

export default recipeApis;
