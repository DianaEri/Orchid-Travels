// Diana started this element by creating the route, path, and 
// implemented the modal to display the PDF menu.
// The rest of the functionality and code was developed by Madelene.

import React, { useState } from 'react'; // Import React and the useState hook
import Modal from 'react-modal'; // Import the react-modal library for the modal popup
import Header from './Header'; // Import the Header component for the top of the page
import Footer from './Footer'; // Import the Footer component for the bottom of the page
import menuPDF from './assets/menu.pdf'; // Import the PDF file that contains the restaurant menu

// Set the app element for accessibility purposes (used by Modal)
Modal.setAppElement('#root');

// HotelRestaurantSaffronBreezeCafé component definition
const HotelRestaurantSaffronBreezeCafé = () => {
  // State to control whether the modal is open or closed
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setModalIsOpen(true);

  // Function to close the modal
  const closeModal = () => setModalIsOpen(false);

  // Custom styles for the modal to make it full-screen
  const customStyles = {
    content: {
      top: '0',    // Align the modal to the top of the screen
      left: '0',   // Align the modal to the left of the screen
      right: '0',  // Stretch the modal to the right edge of the screen
      bottom: '0', // Stretch the modal to the bottom edge of the screen
      width: '100%',  // Make the modal span the entire width of the viewport
      height: '100%', // Make the modal span the entire height of the viewport
      padding: '0',  // Remove any default padding inside the modal
      border: 'none', // Remove the border around the modal
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Make the overlay darker for better visibility of the modal
    },
  };

  return (
    <div className="restaurant-page">
      {/* Render the Header component at the top of the page */}
      <Header />

      {/* Main title and description of the restaurant */}
      <h1>Saffron Breeze Café</h1>
      <p>
        Welcome to Saffron Breeze Café! Enjoy a delightful dining experience with authentic Thai cuisine and international favorites.
      </p>

      {/* Button to trigger the opening of the modal */}
      <p>
        <button onClick={openModal}>View Our Menu</button>
      </p>

      {/* Modal Popup that displays the PDF menu */}
      <Modal 
        isOpen={modalIsOpen}  // Controls whether the modal is open or not
        onRequestClose={closeModal} // Function to close the modal when requested
        contentLabel="Menu PDF" // Accessible label for the modal
        style={customStyles} // Apply custom styles to the modal
      >
        {/* Close button for the modal, positioned at the top right */}
        <button onClick={closeModal} style={{ position: 'absolute', top: '2px', right: '10px' }}>
          Close
        </button>

        {/* Embed the PDF menu inside the modal using an iframe */}
        <iframe src={menuPDF} width="100%" height="100%" title="Restaurant Menu"></iframe>
      </Modal>

      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default HotelRestaurantSaffronBreezeCafé; // Export the component for use in the application
