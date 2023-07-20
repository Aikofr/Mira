import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../contexts/UserContext";
import NavBar from "../components/NavBar/NavBar";

function LspdLayout() {
  const { user } = useCurrentUser();

  if (user.role === "lspd") {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" replace />;
}

export default LspdLayout;
