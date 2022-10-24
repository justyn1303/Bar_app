import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/Authentication/Auth.provider";

// const PrivateRoute = ({ children }) => {

//   return (
//     <>
//       {/* <RootNavigation /> */}
//       {token ? children : redirect}
//     </>
//     // token ?  <aaa/> : redirecta na login page
//   );
// };

// export default PrivateRoute;

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { token } = useAuthContext();
  let location = useLocation();

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // const currentLocation = useLocation();

  // useEffect(() => {
  //   if (!token) {
  //     setRedirectPath(currentLocation.pathname);
  //   }
  // }, [token, setRedirectPath, currentLocation]);

  // if (token && redirectPath === currentLocation.pathname) {
  //   return outlet;
  // } else {
  //   return (
  //     <Navigate to={{ pathname: token ? redirectPath : authenticationPath }} />
  //   );
  // }
}
