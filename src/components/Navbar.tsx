import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../i18n/LanguageSwitch";

const Navbar = () => {
  // @ts-ignore
  const { t } = useTranslation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <i className="fa fa-glass ms-2 me-2"></i>MINI BAR
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  {t("navbar:mainPage")}
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/search"
                >
                  {t("navbar:cocktailRecipes")}
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-2"></i>{" "}
                {t("navbar:buttonSignIn")}
              </Link>
              <Link to="/register" className="btn btn-outline-dark ms-3 me-4">
                <i className="fa fa-user-plus me-2"></i>{" "}
                {t("navbar:buttonRegister")}
              </Link>
            </div>
          </div>
        </div>
        <LanguageSwitch />
      </nav>
    </>
  );
};

export default Navbar;
