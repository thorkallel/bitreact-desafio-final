import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useUserContext();

  if (!user || !user.username) {
    return <Navigate to="/" replace />;
  }

  return children;
};
