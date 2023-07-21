import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/UserContext";
import connexion from "../../services/connexion";
import "./AddFine.scss";

function AddFine({ getFines }) {
  const { user } = useCurrentUser();
  const params = useParams();

  const [newfineData, setNewFineData] = useState({
    titre: "",
    description: "",
    tarif: 150,
    profil_id: parseInt(params.id, 10),
    auth_id: user.auth_id,
  });

  const handleNewFine = (event) => {
    setNewFineData({ ...newfineData, [event.target.name]: event.target.value });
  };

  const AddNewFine = async () => {
    try {
      await connexion.post(`/fines`, newfineData);
      getFines();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Addfine">
      <button
        type="button"
        className="btn btn-primary addfinebtn"
        data-bs-toggle="modal"
        data-bs-target="#AddFineModal"
      >
        Ajouter
      </button>

      <div
        className="modal fade"
        id="AddFineModal"
        tabIndex="-1"
        aria-labelledby="AddFineModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">Amendes</h5>
            </div>

            <label htmlFor="titre" className="label-title">
              Titre
            </label>
            <input
              type="text"
              value={newfineData.titre}
              onChange={handleNewFine}
              placeholder='"Excès de beauté"'
              name="titre"
            />

            <label htmlFor="description" className="label-title">
              Description
            </label>
            <input
              type="text"
              value={newfineData.description}
              onChange={handleNewFine}
              placeholder="description de la situation"
              name="description"
            />

            <label htmlFor="tarif" className="label-title">
              Tarif
            </label>
            <input
              type="number"
              step="any"
              value={newfineData.tarif}
              onChange={handleNewFine}
              name="tarif"
            />

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AddNewFine}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFine;
