import { Link } from "react-router-dom";
import { CocktailProps } from "../../types/cocktails";

const DetailCocktailRecipes = ({
  idDrink,
  strDrink,
  strDrinkThumb,
}: CocktailProps) => {
  return (
    <>
      <div key={idDrink} className="col-md-3 mb-4">
        <Link to={`/cocktails/${idDrink}`}>
          <div className="card h-100 text-center p-4" key={idDrink}>
            <img
              src={strDrinkThumb}
              className="card-img-top"
              alt={strDrink}
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">{strDrink}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DetailCocktailRecipes;
