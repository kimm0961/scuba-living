import React, { useState } from 'react';
import Rejse from './Rejse';

const Rejser = () => {
     // State
  const [rejser] = useState([
    {destination: 'Malta', resume: 'Oplev skønne Malta og det helt fantastiske dyreliv og sammenhold. Vi arrangerer dykkerejser til Malta hele året rundt.', img: 'malta.jpg', id: 1},
    {destination: 'Norge', resume: 'Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klarest vand i hele verden!', img: 'norge.JPG', id: 2},
  ]);



  return (
    <div className="Rejser">
        <div className="container">
      <div className="Heading">
        <div className="row mx-auto">
          <div className=" col-12 col-sm-6 bg-black my-4"><h2 className="text-white text-uppercase pt-1 ml-4 font-weight-bold">Dyk ud i verden</h2></div>
          <div className=" col-6 bg-grey my-sm-4"></div>
        </div>
      </div>
      <Rejse alleRejserProp={rejser}/>
      </div>
    </div>
  );
};

export default Rejser;
