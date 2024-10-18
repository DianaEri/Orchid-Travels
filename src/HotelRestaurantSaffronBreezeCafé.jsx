// Diana started this element by creating the route, path, and 
// implemented the modal to display the PDF menu.
// The rest of the functionality and code was developed by Madelene.

import React, { useState } from 'react'; // Import React and the useState hook
import Modal from 'react-modal'; // Import the react-modal library for the modal popup
import Header from './Header'; // Import the Header component for the top of the page
import Footer from './Footer'; // Import the Footer component for the bottom of the page
import menuPDF from './assets/menu.pdf'; // Import the PDF file that contains the restaurant menu
import YellowFlower from './YellowFlower'; // Import the Flower component to separate sections visually
import YellowLine from './YellowLine'; 
import BlackLine from './BlackLine';
import TextBlock from './TextBlock';
import HeadingBlock from './HeadingBlock';
import SubHeading from './SubHeading';
import ImageComponent from './ImageComponent';
import Gallery from './Gallery'; // Import the Gallery component. Displaying a gallery of images. 
import imageOneHotelRestaurant  from './assets/imageOneHotelRestaurant .svg';
import imageTwoHotelRestaurant  from './assets/imageTwoHotelRestaurant .svg';
import imageThreeHotelRestaurant  from './assets/imageThreeHotelRestaurant .svg';
import imageFourHotelRestaurant  from './assets/imageFourHotelRestaurant .svg';
import imageFiveHotelRestaurant  from './assets/imageFiveHotelRestaurant .svg';


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

      <ImageComponent src={imageOneHotelRestaurant } alt="imageOneHotelRRestaurant" />


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

      {/* Main title and description of the restaurant */}
      <HeadingBlock
        text="Hotel Resturant Saffron Breeze Café"
      />

      <YellowLine />


      <SubHeading
        text="Welcome to Saffron Breeze Café! Enjoy a delightful dining experience with authentic Thai cuisine and international favorites."
       />

      <TextBlock 
        text="Located within the luxurious Laguna Pearl Retreat in Phuket,
         Saffron Breeze Café invites you to experience the true essence of 
         Thai cuisine in a stunning beachfront setting. With its vibrant 
         atmosphere and exceptional culinary offerings, our restaurant is 
         the perfect spot to savor the exotic tastes of Thailand, while 
         enjoying breathtaking views of the Andaman Sea." 
      />

      <ImageComponent src={imageTwoHotelRestaurant } alt="imageTwoHotelRestaurant" />

      <BlackLine/>

      <SubHeading
        text="A Menu Crafted to Delight Every Palate"
      />


       <TextBlock 
        text="At Saffron Breeze Café, we celebrate Thailand’s rich culinary heritage by combining 
        traditional recipes with a contemporary twist. Our all-inclusive menu features a diverse 
        selection of authentic Thai dishes, prepared with the freshest local ingredients and bursting 
        with bold, aromatic flavors. From spicy curries to delicate stir-fries and refreshing salads, 
        there’s something to satisfy every craving. Our talented chefs are also happy to accommodate 
        any dietary restrictions, offering a variety of vegetarian, vegan, gluten-free, and allergen-friendly 
        options without compromising on flavor." 
      />

      <ImageComponent src={imageThreeHotelRestaurant } alt="imageThreeHotelRestaurant" />

      <BlackLine/>

      <SubHeading
        text="Dine in Paradise"
      />

      <TextBlock 
        text="Set against the backdrop of Phuket’s stunning coastline, Saffron Breeze Café offers both indoor and
         outdoor dining experiences. Enjoy your meal on our sun-kissed terrace, with gentle ocean breezes and the 
         sound of the waves creating the perfect atmosphere for a relaxing meal. Whether you’re starting your day 
         with a fresh Thai breakfast, indulging in a leisurely lunch, or enjoying a romantic dinner under the stars,
          every moment at Saffron Breeze Café is designed to delight the senses." 
      />

      <ImageComponent src={imageFourHotelRestaurant } alt="imageFourHotelRestaurant" />


      <BlackLine/>

      <SubHeading
        text="An Unforgettable Dining Experience"
      />


       <TextBlock 
        text="With its welcoming ambiance, exceptional service, and a menu that showcases the best of 
        Thai cuisine, Saffron Breeze Café is a must-visit culinary destination in Phuket. Whether 
        you’re a food enthusiast or simply looking for a relaxed yet refined dining experience, our 
        restaurant promises a memorable meal in the heart of paradise." 
      />

      <ImageComponent src={imageFiveHotelRestaurant } alt="imageFiveHotelRestaurant" />

      <BlackLine/>

      <TextBlock 
        text="Come discover the flavors of Thailand at Saffron Breeze Café—where every bite is a breeze 
        of pure indulgence." 
      />

      <YellowFlower /> 

      <Gallery />








      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default HotelRestaurantSaffronBreezeCafé; // Export the component for use in the application
