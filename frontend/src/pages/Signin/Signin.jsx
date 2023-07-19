import React, { useState } from "react";
import logoServices from "../../assets/logo_services.png";
import "./Signin.scss";

function Signin() {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const login = (event) => {
    event.preventDefault();
    console.info(userSignin);
  };

  return (
    <div className="signin">
      <img
        className="logo-services"
        src={logoServices}
        alt="Insigne des services de la ville."
      />

      <form onSubmit={login} className="signin-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={userSignin.email}
            onChange={(event) => handleUser(event)}
            name="email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            value={userSignin.password}
            onChange={(event) => handleUser(event)}
            name="password"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Rester connecté
          </label>
        </div>

        <div className="mb_btn">
          <button type="submit" className="btn-login">
            SE CONNECTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
