import React, { useState } from "react";
import logoServices from "../../assets/logo_services.png";
import "./Signin.scss";

function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUserSignup({ ...userSignup, [event.target.name]: event.target.value });
  };

  const createAccount = (event) => {
    event.preventDefault();
    console.info(userSignup);
  };

  return (
    <div className="signin">
      <img
        className="logo-services"
        src={logoServices}
        alt="Insigne des services de la ville."
      />

      <form onSubmit={createAccount} className="signin-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={userSignup.email}
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
            value={userSignup.password}
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

export default Signup;
