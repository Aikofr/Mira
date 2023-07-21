import React, { useState } from "react";
import connexion from "../../services/connexion";
import "./FineBox.scss";

function FineBox({ fine, getFines }) {
  const [fineData, setFineData] = useState(fine);

  const handleFine = (event) => {
    setFineData({
      ...fineData,
      [event.target.name]: event.target.value,
    });
  };

  const UpdateFine = async () => {
    try {
      await connexion.put(`/fines/${fineData.id}`, fineData);
      getFines();
    } catch (err) {
      console.error(err);
    }
  };

  const DeleteFine = async () => {
    try {
      await connexion.delete(`/fines/${fineData.id}`);
      getFines();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fineContainer">
      <h4>{fine.titre}</h4>
      <p>{fine.tarif} $</p>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#FineModal"
      >
        Voir
      </button>

      <div
        className="modal fade"
        id="FineModal"
        tabIndex="-1"
        aria-labelledby="FineModalLabel"
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
              value={fineData.titre}
              onChange={handleFine}
              name="titre"
            />

            <label htmlFor="description" className="label-title">
              Description
            </label>
            <input
              type="text"
              value={fineData.description}
              onChange={handleFine}
              name="description"
            />

            <label htmlFor="tarif" className="label-title">
              Tarif
            </label>
            <input
              type="text"
              value={fineData.tarif}
              onChange={handleFine}
              name="tarif"
            />

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={DeleteFine}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
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
                onClick={UpdateFine}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FineBox;
