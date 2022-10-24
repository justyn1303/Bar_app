import CocktailsPage from "../pages/Cocktails/CocktailsPage";
import { useTranslation } from "react-i18next";

const Home = () => {
  // @ts-ignore
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Backgroung"
          height="570px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              {t("home:h5Home")}
            </h5>
            <p className="card-text lead fs-2">{t("home:pHome")}</p>
          </div>
        </div>
      </div>
      <CocktailsPage />
    </div>
  );
};

export default Home;
