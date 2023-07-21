import React from "react";
import { Link } from "react-router-dom";
import "./CitizenBox.scss";

function CitizenBox({ citizen }) {
  return (
    <div className="CitizenBox">
      <Link to={`/citizens/${citizen.id}`} className="citizenLink">
        <li className="list-group-item">
          <img
            className="pictureprofil"
            src={citizen.picture}
            alt="profil de l'utilisateur"
          />
          {citizen.firstname} {citizen.lastname}
        </li>
      </Link>
    </div>
  );
}

export default CitizenBox;
