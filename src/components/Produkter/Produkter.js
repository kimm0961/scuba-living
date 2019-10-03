import React, { useState } from 'react';
import Produkt from './Produkt';

const Produkter = () => {
    // State
  const [produkter] = useState([
    {navn: 'Regulator med  resist', pris: 'kr. 899,-', img: 'reg.jpg', id: 1},
    {navn: 'Rejsefinne', pris: 'kr. 999,-', img: 'fine.jpg', id: 2},
    {navn: 'Rejsefinne', pris: 'kr. 999,-', img: 'fine.jpg', id: 3},
    {navn: 'Coldwater Gloves', pris: 'kr. 1499,-', img: 'hanske.jpg', id: 4},
  ]);

  return (
    <div className="Produkter">
        <div className="container">
      <div className="Heading">
        <div className="row mx-auto">
          <div className=" col-12 col-md-6 bg-black my-4"><h2 className="text-white text-uppercase pt-1 ml-4 font-weight-bold">Mest populære dykkerudstyr</h2></div>
          <div className=" col-6 bg-grey my-md-4"></div>
        </div>
      </div>
      <Produkt alleProdukterProp={produkter}/>
      </div>
    </div>
  );
};

export default Produkter;
