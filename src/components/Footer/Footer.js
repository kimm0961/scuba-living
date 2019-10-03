import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';



const Footer = () => {
    return ( 
        <footer className="py-5 bg-black">
            <div className="container">
    <div className="row py-5">
      <div className="col-12 col-sm-6 col-md-4 my-sm-4 my-md-0 my-4 text-center">
        <h5 className="text-white text-uppercase">Praktiske oplysninger</h5>
        <ul className="list-unstyled text-small">
          <li><Link to="/" className="text-white-50">Om Scuba Living</Link></li>
          <li><Link to="/" className="text-white-50">Kontakt</Link></li>
          <li><Link to="/" className="text-white-50">Handelsetingelser</Link></li>
          <li><Link to="/" className="text-white-50">Persondatapolitik</Link></li>
          <li><Link to="/" className="text-white-50">Åbningstider</Link></li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-4 my-sm-4 my-md-0 my-4 text-center">
      <h5 className="text-white text-uppercase">Praktiske oplysninger</h5>
        <ul className="list-unstyled text-small">
          <li><Link to="/" className="text-white-50">Hovedkategorier</Link></li>
          <li><Link to="/" className="text-white-50">Dykkerudstyr</Link></li>
          <li><Link to="/" className="text-white-50">Dykkerrejser</Link></li>
          <li><Link to="/" className="text-white-50">Dykkerkurser</Link></li>
          <li><Link to="/" className="text-white-50">Service</Link></li>
          </ul>
      </div>
      <div className="col-12 col-md-4 my-sm-4 my-md-0 my-4 text-center">
      <h5 className="text-white text-uppercase">Sociale medier - følg os her:</h5>
        <ul className="list-unstyled text-small">
          <li><Link to="/" className="text-white-50">LinkedIn <i className="fab fa-linkedin"></i></Link></li>
          <li><Link to="/" className="text-white-50">Facebook <i className="fab fa-facebook-square"></i></Link></li>
          <li><Link to="/" className="text-white-50">Instagram <i className="fab fa-instagram"></i></Link></li>
          </ul>
      </div>
    </div>
    </div>
  </footer>
     );
}

 
export default Footer;