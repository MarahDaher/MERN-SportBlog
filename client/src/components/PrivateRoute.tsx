import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  children: React.ReactNode; // Adding children prop type definition
}

// Updating the function to accept props of type PrivateRouteProps
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = useSelector((state: any) => state.user);

  // Render children if currentUser exists, otherwise navigate to sign-in
  return currentUser ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
