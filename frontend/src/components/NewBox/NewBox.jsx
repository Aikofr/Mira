import React from "react";
import "./NewBox.scss";

function NewBox({ article }) {
  return (
    <div className="Newbox">
      <h2>{article.titre}</h2>
      <p>{article.article}</p>
    </div>
  );
}

export default NewBox;
