import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeEnum from "../types/routeEnum";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import CocktailsPage from "../pages/Cocktails/CocktailsPage";
import Register from "../pages/Registration/RegisterPage";
import { useAuthContext } from "../contexts/Authentication/Auth.provider";
import { useEffect } from "react";
import UserCard from "../components/UsersAccounts/UserCard";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login/LoginPage";
import SearchPage from "../pages/Search/SearchPage";

const RootNavigation = () => {
  const { tryAutoLogin } = useAuthContext();

  useEffect(() => {
    tryAutoLogin();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={routeEnum.Home} element={<Home />} />
          <Route path={routeEnum.CocktailsPage} element={<CocktailsPage />} />
          <Route path={routeEnum.SearchPage} element={<SearchPage />} />
          <Route path={routeEnum.Login} element={<LoginPage />} />
          <Route
            path={routeEnum.Login}
            element={
              <PrivateRoute>
                <UserCard />
              </PrivateRoute>
            }
          />
          <Route path={routeEnum.Register} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RootNavigation;
