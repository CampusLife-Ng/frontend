import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";

const RequireAuth = ({allowedRoles}) => {
  const getUser = useSelector(selectUser);
  const location = useLocation();
  // console.log(getUser)

  // console.log(location);

  return allowedRoles.includes(getUser.role) 
  ? (
    <Outlet />
  ) : Object.keys(getUser).length > 0 ? (<Navigate to="/unauthorized" state={{ destination: location }} replace />) : (
    <Navigate to="/auth" state={{ destination: location }} replace />
  );
};

export default RequireAuth;
