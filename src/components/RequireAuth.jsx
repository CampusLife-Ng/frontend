import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";

const RequireAuth = () => {
  const getUser = useSelector(selectUser);
  const location = useLocation();

  // console.log(location);

  return getUser ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ destination: location }} replace />
  );
};

export default RequireAuth;
