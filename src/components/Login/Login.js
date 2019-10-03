import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../ScubaLiving_logo.svg";
import "./Login.css";

const Login = () => {
        // State Bruger
        const [bruger, setBruger] = useState({
          email: "",
          Kodeord: ""
        });
      
        // Email
        const handleEmail = e => {
          setBruger({ ...bruger, email: e.target.value });
        };

        // Kordord
  const handleKodeord = e => {
    setBruger({ ...bruger, Kodeord: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(bruger);
    setBruger({
      email: "",
      Kodeord: ""
    });
  };

  return (
    <div className="Login">
      <form className="form-signin" onSubmit={handleSubmit}>
        <div className="container py-5">
          <div className="bg-light px-5">
            <div className="text-center mb-4">
              <img className="mb-4" src={Logo} alt="" width="250" />
              <h1 className="h3 mb-3 font-weight-bold">
                <i className="far fa-user"></i> Log ind
              </h1>
            </div>

            <div className="form-label-group ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
              value={bruger.email}
              onChange={handleEmail}
                className="form-control"
                required
                autoFocus
              />
            </div>

            <div className="form-label-group ">
              <label htmlFor="Kodeord">Kodeord</label>
              <input
                type="password"
                id="Kodeord"
              value={bruger.Kodeord}
              onChange={handleKodeord}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Skal indeholde mindst 8 tegn og mindst et nummer, et stort bogstav og et lille bogstav."
                className="form-control"
                required
              />
              <p className="text-danger">
              <small>
                <em>
                  Skal indeholde mindst 8 tegn og mindst et nummer, et stort
                  bogstav og et lille bogstav.
                </em>
              </small>
            </p>
            </div>

            <div className="checkbox mb-3 ">
              <label>
                <input type="checkbox" value="remember-me" /> Husk mig
              </label>
            </div>
            <button
              className="btn btn-lg btn-secondary btn-block "
              type="submit"
            >
              Sign in
            </button>
            <Link to="/" className="text-center text-body"><em>
              Har du glemt dit kodeord?</em>
            </Link>
            <br />
            <br />
            <p className="text-center text-uppercase font-weight-bold">
              Er du ny kunde?
            </p>
            <div className="text-center pb-4">
              <Link
                className="btn btn-outline-dark text-uppercase font-weight-bold"
                to="/opret"
                role="button"
              >
                Opret dig nu
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
