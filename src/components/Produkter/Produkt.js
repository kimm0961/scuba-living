import React from 'react';
import './Produkt.css';

const Produkt = props => {
  let ProduktListe = props.alleProdukterProp.map(produkt => {
    return (
      <div className="col-12 col-md-6 col-lg-3" key={produkt.id}>
      <div className="card mb-4 shadow rounded-0 border-0">
        <img
          src={"/Images/Produkter/" + produkt.img}
          className="card-img-top"
          alt="Produkt"
        />
        <div className="card-body">
          <h5 className="card-title text-uppercase text-secondary font-weight-light text-center mb-0">{produkt.navn}</h5>
          <p className="card-text text-uppercase text-center"><small>{produkt.pris}</small></p>
        </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Produkt">
        <div className="row">
      {ProduktListe}
      </div>
    </div>
  );
};

export default Produkt;

