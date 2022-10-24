// @ts-nocheck
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../contexts/Recipes/Recipes.provider";
import { CocktailID } from "../types/cocktails";
import DetailCocktailRecipes from "./DetailCoctail/DetailCocktailRecipes";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";

const Cocktail = () => {
  const { id } = useParams();
  const { isLoading, isError, getById } = useRecipeContext();
  const [cocktail, setCocktail] = useState<CocktailID[]>([]);

  const fetchByID = async () => {
    if (!id) {
      return;
    }
    const fetchedDrink = await getById(id);
    setCocktail(fetchedDrink);
  };

  useEffect(() => {
    fetchByID();
  }, [id]);

  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          {isLoading ? (
            <Loading />
          ) : isError || !cocktail ? (
            <ErrorBoundary />
          ) : (
            <DetailCocktailRecipes {...cocktail} />
          )}
        </div>
      </div>
    </>
  );
};

export default Cocktail;
