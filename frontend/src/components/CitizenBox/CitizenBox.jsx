import React from "react";
import "./CitizenBox.scss";

function CitizenBox({ citizen }) {
  return (
    <div className="CitizenBox">
      <li className="list-group-item">
        <img
          className="pictureprofil"
          src={citizen.picture}
          alt="profil de l'utilisateur"
        />
        {citizen.firstname} {citizen.lastname}
      </li>
    </div>
  );
}

export default CitizenBox;
