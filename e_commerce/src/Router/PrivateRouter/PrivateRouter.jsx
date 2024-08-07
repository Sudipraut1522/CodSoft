import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const username = localStorage.getItem("usernawme");

  const isAuthenticated = Boolean(username);

  return (
    <div>
      {isAuthenticated ? <Outlet /> : <Navigate to="/login"></Navigate>}
    </div>
  );
};

export default PrivateRouter;
