import React from 'react';
import './Kursus.css';

const Kursus = () => {
  return (
    <div className="Kursus">
        <div className="container">
      <div className="Heading">
        <div className="row mx-auto">
          <div className=" col-12 col-sm-6 bg-black my-4"><h2 className="text-white text-uppercase pt-1 ml-4 font-weight-bold">PADI - dykkercertificat</h2></div>
          <div className=" col-6 bg-grey my-sm-4"></div>
        </div>
      </div>
      <div className="row border border-kursus shadow p-5 mx-auto mb-4">
          
          <div className="col-12 col-lg-8">
              <h4 className="font-weight-light text-uppercase">Tag et internationalt anerkendt dykkercertificat</h4>
              <p><small className="font-weight-bold">Her finder du et stort udvalg af dykkerkurser lige fra begyndelser til professionel. Vi er et af Danmarks førende dykkercentre, som uddanner fra PADI organisationen. når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedet bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top.</small></p>
              <p><small className="font-weight-bold">Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et stort hold af kompetente instruktører.</small></p>
          </div>
          <div className="col-12 col-lg-4 text-center">
              <img src="Images/Kurser/PADI-logo.png" alt="PADI" className="img-fluid"/>
          </div>
      </div>
      </div>
      
    </div>
  );
};

export default Kursus;
