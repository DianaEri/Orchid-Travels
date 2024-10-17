import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './Header';
import Footer from './Footer';

// Setting the app element for accessibility
Modal.setAppElement('#root');

const HotelRestaurantSaffronBreezeCafé = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // The menu PDF file path in the public folder
  const menuLink = '/menu.pdf'; // Make sure 'menu.pdf' is in the public folder

  return (
    <div className="restaurant-page">
      <Header />
      <h1>Saffron Breeze Café</h1>
      <p>
        Welcome to Saffron Breeze Café! Here, you can enjoy a delightful dining experience with authentic Thai cuisine and international favorites. Our restaurant offers a wide range of dishes to cater to all dietary preferences, ensuring a satisfying meal for every guest.
      </p>

      {/* Button to open the modal */}
      <p>
        <button onClick={openModal}>View Our Menu</button>
      </p>

      {/* Modal Popup with the PDF */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Menu PDF">
        <button onClick={closeModal}>Close</button>
        <iframe src={menuLink} width="100%" height="600px" title="Restaurant Menu"></iframe>
      </Modal>

      <Footer />
    </div>
  );
};

export default HotelRestaurantSaffronBreezeCafé;
