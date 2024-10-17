import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './Header';
import Footer from './Footer';
import menuPDF from './assets/menu.pdf';  // Assuming you are importing from assets

Modal.setAppElement('#root');

const HotelRestaurantSaffronBreezeCafé = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Custom styles for the modal to make it full-width
  const customStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      width: '100%',
      height: '100%',
      padding: '0',  // Remove default padding
      border: 'none',  // Remove default border if you prefer
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Optional: make the overlay a bit darker
    },
  };

  return (
    <div className="restaurant-page">
      <Header />
      <h1>Saffron Breeze Café</h1>
      <p>
        Welcome to Saffron Breeze Café! Enjoy a delightful dining experience with authentic Thai cuisine and international favorites.
      </p>

      {/* Menu Button */}
      <p>
        <button onClick={openModal}>View Our Menu</button>
      </p>

      {/* Modal Popup with PDF */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Menu PDF" style={customStyles}>
        <button onClick={closeModal} style={{ position: 'absolute', top: '2px', right: '10px' }}>
          Close
        </button>
        <iframe src={menuPDF} width="100%" height="100%" title="Restaurant Menu"></iframe>
      </Modal>

      <Footer />
    </div>
  );
};

export default HotelRestaurantSaffronBreezeCafé;
