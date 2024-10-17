import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './Header';
import Footer from './Footer';
import menuPDF from './assets/menu.pdf'; // Import the PDF file

Modal.setAppElement('#root');

const HotelRestaurantSaffronBreezeCafé = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // The PDF file is now accessible through the imported `menuPDF` variable
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

      {/* Modal with PDF */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Menu PDF">
        <button onClick={closeModal}>Close</button>
        <iframe src={menuPDF} width="100%" height="600px" title="Restaurant Menu"></iframe>
      </Modal>

      <Footer />
    </div>
  );
};

export default HotelRestaurantSaffronBreezeCafé;
