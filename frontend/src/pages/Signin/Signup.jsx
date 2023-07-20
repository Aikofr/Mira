import React, { useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import logoServices from "../../assets/logo_services.png";
import "./Signin.scss";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUserSignup({ ...userSignup, [event.target.name]: event.target.value });
  };

  const notify = (signin) => {
    if (signin.status === 201) {
      toast.success(signin.data.msg);
    } else if (signin.status === 409) {
      toast.warning(signin.data.msg);
    } else if (signin.status === 400) {
      toast.error(signin.data.msg);
    }
  };

  const createAccount = async (event) => {
    event.preventDefault();
    try {
      const signup = await connexion.post("/signup", userSignup);
      notify(signup);
    } catch (error) {
      toast.error(
        "Une erreur s'est produite. Veuillez ressayer dans quelques instants"
      );
    }
  };

  return (
    <div>
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
              placeholder="you@example.com"
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
              placeholder="**********"
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
              Signup
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        autoClose={2000}
        position="top-center"
        draggable
        transition={Flip}
        toastClassName="custom-toast"
      />
    </div>
  );
}

export default Signup;
