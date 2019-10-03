import React from 'react';
import './Rejse.css';


const Rejse = (props) => {
    let RejseListe = props.alleRejserProp.map(rejse => {
        return (
          <div className="card shadow rounded-0 border-0 mb-4" key={rejse.id}>
            <img
              src={"/Images/Rejser/" + rejse.img}
              className="card-img-top bg-white"
              alt="Produkt"
            />
            <div className="card-body bg-black">
              <h5 className="card-title text-uppercase text-white font-weight-bold">{rejse.destination}</h5>
              <p className="card-text text-white font-weight-light"><small>{rejse.resume}</small></p>
            </div>
          </div>
        );
      });
    
      return (
        <div className="Rejse">
          <div className="card-deck">{RejseListe}</div>
        </div>
      );
    };
 
export default Rejse;