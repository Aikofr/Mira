import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import CitizenBox from "../../components/CitizenBox/CitizenBox";
import "./CitizensPage.scss";

function CitizensPage() {
  const [citizens, setCitizens] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const getCitizens = async () => {
    const data = await connexion.get("/profils");
    try {
      if (data) {
        setCitizens(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCitizens();
  }, []);

  return (
    <div className="CitizensContainers">
      <h2>Fichiers nationaux</h2>
      <input
        type="text"
        className="form-control citizenInput"
        placeholder="Citizen Firstname"
        onChange={handleSearchTerm}
      />

      <ul className="list-group">
        {citizens
          .filter((citizen) =>
            citizen.firstname.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((citizen) => (
            <CitizenBox key={citizen.id} citizen={citizen} />
          ))}
      </ul>
    </div>
  );
}

export default CitizensPage;
