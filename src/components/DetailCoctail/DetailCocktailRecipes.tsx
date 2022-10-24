import { CocktailID } from "../../types/cocktails";

const ingredients = [];

const DetailCocktail = ({
  idDrink,
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
  strIngredient11,
  strIngredient12,
  strIngredient13,
  strIngredient14,
  strIngredient15,
  strInstructions,
  strGlass,
}: CocktailID) => {
  const ingredientFunction = (num: number) => {
    if (`strIngredient${num}` !== null) {
      <li>
        {`strMeasure${num}`}
        {`strIngredient${num}`}
      </li>;
      num++;
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="col-md-6" key={idDrink}>
        <img src={strDrinkThumb} alt={strDrink} height="400px" width="400px" />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{strAlcoholic}</h4>
        <h1 className="display-5 fw-bold py-3">{strDrink}</h1>
        <div className="py-3">skladniki do uzupelnienia</div>
        <p className="lead fw-semibold py-3">{strInstructions}</p>
        <p className="lead fw-semibold text-uppercase text-black-50 py-3">
          sugerowane szkło: {strGlass}
        </p>
      </div>
    </>
  );
};

export default DetailCocktail;

{
  /* <div className="py-3">
          <li>
            {strMeasure1}
            {strIngredient1}
          </li>
          <li>
            {strMeasure2}
            {strIngredient2}
          </li>
          <li>
            {strMeasure3}
            {strIngredient3}
          </li>
          <li>
            {strMeasure4}
            {strIngredient4}
          </li>
          <li>
            {strMeasure5}
            {strIngredient5}
          </li>
          <li>
            {strMeasure6}
            {strIngredient6}
          </li>
          <li>{strIngredient7}</li>
          <li>{strIngredient8}</li>
          <li>{strIngredient9}</li>
          <li>{strIngredient10}</li>
          <li>{strIngredient11}</li>
          <li>{strIngredient12}</li>
        </div> */
}

// return (
//   <>
//     <div className="col-md-6" key={idDrink}>
//       <img src={strDrinkThumb} alt={strDrink} height="400px" width="400px" />
//     </div>
//     <div className="col-md-6">
//       <h4 className="text-uppercase text-black-50">{strAlcoholic}</h4>
//       <h1 className="display-5 fw-bold py-3">{strDrink}</h1>
//       <div className="py-3">
//         <li>
//           {strMeasure1}
//           {strIngredient1}
//         </li>
//         <li>
//           {strMeasure2}
//           {strIngredient2}
//         </li>
//         <li>
//           {strMeasure3}
//           {strIngredient3}
//         </li>
//         <li>
//           {strMeasure4}
//           {strIngredient4}
//         </li>
//         <li>
//           {strMeasure5}
//           {strIngredient5}
//         </li>
//         <li>
//           {strMeasure6}
//           {strIngredient6}
//         </li>
//         <li>{strIngredient7}</li>
//         <li>{strIngredient8}</li>
//         <li>{strIngredient9}</li>
//         <li>{strIngredient10}</li>
//         <li>{strIngredient11}</li>
//         <li>{strIngredient12}</li>
//       </div>
//       <p className="lead fw-semibold py-3">{strInstructions}</p>
//       <p className="lead fw-semibold text-uppercase text-black-50 py-3">
//         sugerowane szkło: {strGlass}
//       </p>
//     </div>
//   </>
// );
