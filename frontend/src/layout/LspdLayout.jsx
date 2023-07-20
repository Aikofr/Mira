import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../contexts/UserContext";

function LspdLayout() {
  const { user } = useCurrentUser();

  if (user.role === "lspd") {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" replace />;
}

export default LspdLayout;
