const TravelDetailsData = () => {
  return (
    <div className="travel-details-container">
      <div className="top-options">
        <div className="option">
          <label className="option-label">Date of departure:</label>
          <span className="details-value">10/07/2024</span> 
        </div>
        <div className="option">
          <label className="option-label">Point of departure:</label>
          <span className="details-value">Göteborg-Landvetter</span> 
        </div>
      </div>

      <div className="bottom-options">
        <div className="option">
          <label className="option-label">Length of stay:</label>
          <span className="details-value">2 weeks</span> 
        </div>
        <div className="option">
          <label className="option-label">Destination:</label>
          <span className="details-value">Phuket</span> 
        </div>
      </div>
    </div>
  );
};

export default TravelDetailsData;