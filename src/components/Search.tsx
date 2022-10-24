import { useState } from "react";
import { useTranslation } from "react-i18next";

const Search = () => {
  const [letter, setLetter] = useState("a");
  // @ts-ignore
  const { t } = useTranslation();

  const searchDrinks = (letter) => {};
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="/assets/bg3.jpg"
            className="card-img"
            alt="Backgroung"
            height="570px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container d-flex justify-content-center">
              <form className="d-flex w-25 pt-5 " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder={t("search:labelSearch")}
                  aria-label="Search"
                />
                <button
                  onClick={() => searchDrinks(letter)}
                  className="btn btn-outline-light"
                  type="submit"
                >
                  {t("search:buttonSearch")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

{
  /* <form className="d-flex w-25 pt-5 ms-5 " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Wyszukaj"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Wyszukaj
              </button>
            </form> */
}
