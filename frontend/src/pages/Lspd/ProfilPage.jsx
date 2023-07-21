import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import connexion from "../../services/connexion";
import FineBox from "../../components/FineBox/FineBox";
import AddFine from "../../components/AddFine/AddFine";

import "./ProfilPage.scss";

function ProfilPage() {
  const params = useParams();
  const [profil, setProfil] = useState([]);
  const [fines, setFines] = useState([]);

  const getProfil = async () => {
    try {
      const profilsData = await connexion.get(`/profils/${params.id}`);
      if (profilsData) {
        setProfil(profilsData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getFines = async () => {
    try {
      const finesData = await connexion.get(`/fines/${params.id}`);
      if (finesData) {
        setFines(finesData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProfil();
    getFines();
  }, []);

  return (
    <div className="ProfilContainer">
      <img
        src={profil.picture}
        alt="visage de la personne"
        className="profilPicture"
      />

      <table className="profilTable table-striped">
        <tbody>
          <tr>
            <th scope="row">Prénom:</th>
            <td>{profil.firstname}</td>
          </tr>
          <tr>
            <th scope="row">Nom:</th>
            <td>{profil.lastname}</td>
          </tr>
          <tr>
            <th scope="row">DOB:</th>
            <td>{profil.dob}</td>
          </tr>
          <tr>
            <th scope="row">Place:</th>
            <td>{profil.place}</td>
          </tr>
          <tr>
            <th scope="row">Service:</th>
            <td>{profil.role}</td>
          </tr>
        </tbody>
      </table>

      <h3>Amendes</h3>
      {fines.length === 0 ? (
        <p>Aucune Amendes</p>
      ) : (
        fines.map((fine) => (
          <FineBox key={fine.id} fine={fine} getFines={getFines} />
        ))
      )}

      <AddFine getFines={getFines} />
    </div>
  );
}

export default ProfilPage;
