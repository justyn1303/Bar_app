import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../contexts/Recipes/Recipes.provider";
import { CocktailProps } from "../types/cocktails";
import DetailCocktail from "./DetailCoctail/DetailCocktail";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";

const SearchCocktail = () => {
  const { isLoading, isError, getChar } = useRecipeContext();
  //const [cocktail, setCocktail] = useState<CocktailProps>();
  // @ts-ignore
  const { t } = useTranslation();

  const fetchByChar = async () => {
    if (!letter) {
      return;
    }
    const fetchedDrink = await getChar(letter);
    setCocktail(fetchedDrink);
  };

  useEffect(() => {
    fetchByChar();
  }, [letter]);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {t("navbar:test")}
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? (
            <Loading />
          ) : isError || !cocktail ? (
            <ErrorBoundary />
          ) : (
            <>
              {cocktail.map((cocktails) => (
                <DetailCocktail {...cocktails} key={cocktails.idDrink} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCocktail;
