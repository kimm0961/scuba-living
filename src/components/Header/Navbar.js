import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import LogoSmall from '../../ScubaLiving_logo_small.svg';

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="navbar navbar-expand-xl navbar-light bg-white">
        <Link to="/" className="navbar-brand">
          <img src={LogoSmall} width="150" alt="Scuba-Living Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-uppercase font-weight-bold text-body"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                to="/produkter"
                className="nav-link text-uppercase font-weight-bold text-body"
              >
                Dykkerudstyr
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/rejser"
                className="nav-link text-uppercase font-weight-bold text-body"
              >
                Dykkerrejser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kurser"
                className="nav-link text-uppercase font-weight-bold text-body"
              >
                Dykkerkurser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kontakt"
                className="nav-link text-uppercase font-weight-bold text-body"
              >
                Kontakt
              </NavLink>
            </li>
            <li className="nav-item text-nowrap">
              <NavLink
                to="/om"
                className="nav-link text-uppercase font-weight-bold text-body"
              >
                Om os
              </NavLink>
            </li>
          </ul>
          <div className="input-group input-group-sm mb-3 w-auto mx-auto form-inline my-2 my-md-0">
            <input
              type="text"
              className="form-control search"
              aria-label="søg"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-grey text-uppercase text-body px-3"
                type="button"
                id="button-addon2"
              >
                <small>Søg</small>
              </button>
            </div>
          </div>

          <div
            className="btn-group login"
            role="group"
            aria-label="Basic example"
          >
            <Link to="/login" className="btn p-0 bg-black" role="button">
              <img
                src="/Images/Icons/lock-icon-300x300.png"
                className="bg-black"
                width="32px"
                alt="Login"
              />
            </Link>
            <Link
              className="btn bg-grey py-0 pr-5 text-uppercase"
              to="/login"
              role="button"
            >
              <small className="font-weight-bold">Login</small>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
