import { useRecipeContext } from "../../contexts/Recipes/Recipes.provider";
import Loading from "../../components/Loading";
import DetailCocktail from "../../components/DetailCoctail/DetailCocktail";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const CocktailsPage = () => {
  const { isLoading, isError, cocktails } = useRecipeContext();
  //const [cocktail, setCocktail] = useState<CocktailProps>();
  // @ts-ignore
  const { t } = useTranslation();

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {t("cocktailsPage:learnReact")}
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? (
            <Loading />
          ) : isError || !cocktails ? (
            <ErrorBoundary />
          ) : (
            <>
              {cocktails.map((cocktail) => (
                <DetailCocktail {...cocktail} key={cocktail.idDrink} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CocktailsPage;
