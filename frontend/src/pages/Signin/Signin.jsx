import React, { useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import { useCurrentUser } from "../../contexts/UserContext";
import logoServices from "../../assets/logo_services.png";
import "./Signin.scss";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const notify = (signin) => {
    if (signin.status === 200) {
      toast.success(signin.data.msg);
    } else if (signin.status === 400) {
      toast.warning(signin.data.msg);
    } else if (signin.status === 401) {
      toast.error("Les informations de connexion sont incorrectes");
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const signin = await connexion.post("/signin", userSignin);
      notify(signin);

      if (signin.status === 200) {
        const { msg, ...onlyUserData } = signin.data;
        setUser(onlyUserData);

        if (onlyUserData.role === "lspd") {
          setTimeout(() => {
            navigate("/lspd");
          }, 2000);
        }
      }
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez réessayer dans quelques instants"
      );
    }
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
            value={userSignin.password}
            onChange={(event) => handleUser(event)}
            name="password"
            placeholder="*********"
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

export default Signin;
