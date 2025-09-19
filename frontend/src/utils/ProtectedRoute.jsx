import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if JWT token exists

  if (!token) {
    return <Navigate to="/login" />; // Redirect to login if no token
  }

  return children; // Render the protected content if the token exists
};

export default ProtectedRoute;
