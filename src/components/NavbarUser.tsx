import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
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
                  Strona Główna
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/search"
                >
                  Przepisy na drinki
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fa fa-user-circle me-2"></i>Witaj xxx
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">
                  Link 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 2
                </Link>
                <Link className="dropdown-item" to="#">
                  Link 3
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Another link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
