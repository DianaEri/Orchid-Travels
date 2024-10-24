const TravelDetailsData = () => {
  // Get values from localStorage for "Date of departure", "Point of departure", "Length of stay", and "Destination"
  const city = localStorage.getItem('selectedCity') || 'Not selected';
  const day = localStorage.getItem('selectedDay') || 'DD';
  const month = localStorage.getItem('selectedMonth') || 'MM';
  const year = localStorage.getItem('selectedYear') || 'YYYY';
  const lengthOfStay = parseInt(localStorage.getItem('selectedLengthOfStay')) || 'Not selected';
  const destination = localStorage.getItem('selectedDestination') || 'Not selected';

  const lengthOfStayText = lengthOfStay === 1 ? 'Week' : 'Weeks';
  return (
    <div className="travel-details-container">
      <div className="top-options">
        <div className="option">
          <label className="option-label">Date of departure:</label>
          <span className="details-value">{day}/{month}/{year}</span> 
        </div>
        <div className="option">
          <label className="option-label">Point of departure:</label>
          <span className="details-value">{city}</span> 
        </div>
      </div>

      <div className="bottom-options">
        <div className="option">
          <label className="option-label">Length of stay:</label>
          <span className="details-value">{lengthOfStay} {lengthOfStayText}</span> 
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