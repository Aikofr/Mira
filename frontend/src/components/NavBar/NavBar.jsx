import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsCarFront, BsBook } from "react-icons/bs";
import { useCurrentUser } from "../../contexts/UserContext";
import "./NavBar.scss";

function NavBar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { setUser, user } = useCurrentUser();

  const openNav = () => {
    setIsSideNavOpen(true);
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };

  const logout = () => {
    setUser("");
  };

  return (
    <div>
      <div className={`sidenav ${isSideNavOpen ? "active" : ""}`}>
        <button type="button" className="close" onClick={closeNav}>
          X
        </button>

        <ul>
          <li>
            {user.role === "lspd" && (
              <>
                <img
                  className="img-user"
                  src={user.picture}
                  alt="Insignes de la Los Santos Police Department"
                />
                <h2 className="menu-info">
                  {user.firstname} {user.lastname}
                </h2>
                <Link to="/" className="menu-item" onClick={closeNav}>
                  <AiOutlineHome /> Home
                </Link>
                <Link to="/citizens" className="menu-item" onClick={closeNav}>
                  <AiOutlineUser /> Citoyens
                </Link>
                <Link to="/vehicles" className="menu-item" onClick={closeNav}>
                  <BsCarFront /> Véhicules
                </Link>
                <Link to="/fines" className="menu-item" onClick={closeNav}>
                  <BsBook /> Amendes
                </Link>
              </>
            )}

            <button type="button" className="deconnexion" onClick={logout}>
              Déconnexion
            </button>
          </li>
        </ul>
      </div>

      <button type="button" id="openBtn" onClick={openNav}>
        <span className="burger-icon">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}
export default NavBar;
