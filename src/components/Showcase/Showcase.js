import React from 'react';
import './Showcase.css';

const Showcase = () => {
  return (
    <div className="Showcase card border-0">
      <img
        src="Images/Showcase/scuba3.jpg"
        alt="Dykker"
        className="img-fluid card-img rounded-0"
      />

      <div className="card-img-overlay">
        <div className="overlay px-5 py-4">
          <h5 className="card-title text-uppercase text-center">
            The best way to observe a fish is to become a fish
          </h5>
          <p className="card-text text-uppercase text-center">Jacques Cousteau</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
