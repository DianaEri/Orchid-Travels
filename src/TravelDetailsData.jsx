import React from 'react';
import './index.css'; 

const TravelDetailsData = ({ dateOfDeparture, pointOfDeparture, lengthOfStay, destination }) => {
  return (
    <div className="travel-details-container">
      <div className="top-options">
        <div className="option">
          <label className="option-label">Date of departure:</label>
          <span className="details-value">{dateOfDeparture}</span> 
        </div>
        <div className="option">
          <label className="option-label">Point of departure:</label>
          <span className="details-value">{pointOfDeparture}</span> 
        </div>
      </div>

      <div className="bottom-options">
        <div className="option">
          <label className="option-label">Length of stay:</label>
          <span className="details-value">{lengthOfStay}</span> 
        </div>
        <div className="option">
          <label className="option-label">Destination:</label>
          <span className="details-value">{destination}</span> 
        </div>
      </div>
    </div>
  );
};

export default TravelDetailsData;