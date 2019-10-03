import React, { useState } from "react";
import LogoSmall from "../../ScubaLiving_logo_small.svg";

const Opretbruger = () => {
  // State Bruger
  const [bruger, setBruger] = useState({
    Fornavn: "",
    Efternavn: "",
    Brugernavn: "",
    email: "",
    Kodeord: ""
  });

  // Email
  const handleEmail = e => {
    setBruger({ ...bruger, email: e.target.value });
  };

  // Fornavn
  const handleFirstName = e => {
    setBruger({ ...bruger, Fornavn: e.target.value });
  };
  // Efternavn
  const handleLastName = e => {
    setBruger({ ...bruger, Efternavn: e.target.value });
  };

  // Brugernavn
  const handleBrugernavn = e => {
    setBruger({ ...bruger, Brugernavn: e.target.value });
  };

  // Kordord
  const handleKodeord = e => {
    setBruger({ ...bruger, Kodeord: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(bruger);
    setBruger({
      Fornavn: "",
      Efternavn: "",
      Brugernavn: "",
      email: "",
      Kodeord: ""
    });
  };
  return (
    <div className="Opretbruger container my-5 py-5">
      <h1 className="text-center mb-5">
        <img src={LogoSmall} width="200" alt="Scuba-Living Logo" />
        <br />
        Velkommen
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="Fornavn">Fornavn</label>
            <input
              type="text"
              className="form-control"
              id="Fornavn"
              placeholder="Fornavn"
              value={bruger.Fornavn}
              onChange={handleFirstName}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="Efternavn">Efternavn</label>
            <input
              type="text"
              className="form-control"
              id="Efternavn"
              value={bruger.Efternavn}
              onChange={handleLastName}
              placeholder="Efternavn"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="Brugernavn">Brugernavn <span className="text-danger">
              <small>
                <em>
                  - Maks. 10 tegn.
                </em>
              </small>
            </span></label>
            
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="far fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                value={bruger.Brugernavn}
                onChange={handleBrugernavn}
                placeholder="Brugernavn"
                id="Brugernavn" maxLength="10"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-3 mb-3">
            <label htmlFor="Vælg-køn">Køn</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="Vælg-køn"
                >
                  <i className="fas fa-venus-mars"></i>
                </label>
              </div>
              <select className="custom-select" id="Vælg-køn">
                <option>Vælg...</option>
                <option value="1">Mand</option>
                <option value="2">Kvinde</option>
                <option value="3">Andet</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={bruger.email}
              onChange={handleEmail}
              placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="Kodeord">Kodeord</label>
            <input
              type="password"
              id="Kodeord"
              value={bruger.Kodeord}
              onChange={handleKodeord}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Skal indeholde mindst 8 tegn og mindst et nummer, et stort bogstav og et lille bogstav."
              className="form-control"
              placeholder="Kodeord"
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
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="Betingelser"
              required
            />
            <label className="form-check-label" htmlFor="Betingelser">
              Accepterer du Scuba Livings Handelsbetingelser og regler om
              Databeskyttelse.
            </label>
          </div>
        </div>
        <button className="btn btn-secondary" type="submit">
          Registrér dig
        </button>
      </form>
    </div>
  );
};

export default Opretbruger;
