// (Diana) started this element by creating the route, path, and 
// implemented the modal to display the PDF menu. Diana made 
// SubHeading, Footer, Divider, Button, ImageComponent component. 

// The rest of the components, like HeadingBlock, Header,
// YellowLine, YellowFlower and BlackLine, ScrollToTopButton, TextBlock, HeadingBlock, Header, Gallery, Socials are
// made by (Madelene).

// This component presents detailed information about the hotel's restaurant using images, body text, main headings, and
// section dividers. It includes a modal to display the restaurant's menu in PDF format and features a gallery function as 
// well as social media links.

import React, { useState } from 'react'; // Import React and the useState hook
import Modal from 'react-modal'; // Import the react-modal library for the modal popup
import Header from './Header'; // Import the Header component for the top of the page
import Footer from './Footer'; // Import the Footer component for the bottom of the page
import menuPDF from './assets/menu.pdf'; // Import the PDF file that contains the restaurant menu
import YellowFlower from './YellowFlower'; // Import the Flower component to separate sections visually
import YellowLine from './YellowLine';  // This component displays a yellow line
import BlackLine from './BlackLine'; // This component displays a black divider to separate different sections of the website.
import TextBlock from './TextBlock'; // This component displays a block of text with customizable styles.
import HeadingBlock from './HeadingBlock'; // This component displays a styled heading block for the website.
import SubHeading from './SubHeading'; // This component displays a styled heading block for the website. Lower-level heading.
import ImageComponent from './ImageComponent'; // Import reusable ImageComponent for displaying images
import Gallery from './Gallery'; // Import the Gallery component. Displaying a gallery of images. 
import ScrollToTopButton from './ScrollToTopButton'; // Displays a button that allows users to quickly return to 
                                                     // the top of the page after scrolling down.
import Socials from './Socials'; // This component directs users to check the social media of the website.
import imageOneHotelRestaurant  from './assets/imageOneHotelRestaurant .svg'; // Importing svg image
import imageTwoHotelRestaurant  from './assets/imageTwoHotelRestaurant .svg'; // Importing svg image
import imageThreeHotelRestaurant  from './assets/imageThreeHotelRestaurant .svg'; // Importing svg image
import imageFourHotelRestaurant  from './assets/imageFourHotelRestaurant .svg'; // Importing svg image
import imageFiveHotelRestaurant  from './assets/imageFiveHotelRestaurant .svg'; // Importing svg image


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
       
      {/*  This component displays a yellow line */}
      <YellowLine />

       {/* This component displays a styled heading block for the website. Lower-level heading. */}
      <SubHeading
        text="Welcome to Saffron Breeze Café! Enjoy a delightful dining experience with authentic Thai cuisine and international favorites."
       />
       {/*  This component displays a block of text with customizable styles. */}
      <TextBlock 
        text="Located within the luxurious Laguna Pearl Retreat in Phuket,
         Saffron Breeze Café invites you to experience the true essence of 
         Thai cuisine in a stunning beachfront setting. With its vibrant 
         atmosphere and exceptional culinary offerings, our restaurant is 
         the perfect spot to savor the exotic tastes of Thailand, while 
         enjoying breathtaking views of the Andaman Sea." 
      />
       {/* Import reusable ImageComponent for displaying images */}
      <ImageComponent src={imageTwoHotelRestaurant } alt="imageTwoHotelRestaurant" />

       {/* This component displays a black divider to separate different sections of the website. */}
      <BlackLine/>

       {/* This component displays a styled heading block for the website. Lower-level heading. */}
      <SubHeading
        text="A Menu Crafted to Delight Every Palate"
      />

      {/*  This component displays a block of text with customizable styles. */}
       <TextBlock 
        text="At Saffron Breeze Café, we celebrate Thailand’s rich culinary heritage by combining 
        traditional recipes with a contemporary twist. Our all-inclusive menu features a diverse 
        selection of authentic Thai dishes, prepared with the freshest local ingredients and bursting 
        with bold, aromatic flavors. From spicy curries to delicate stir-fries and refreshing salads, 
        there’s something to satisfy every craving. Our talented chefs are also happy to accommodate 
        any dietary restrictions, offering a variety of vegetarian, vegan, gluten-free, and allergen-friendly 
        options without compromising on flavor." 
      />

      {/* Import reusable ImageComponent for displaying images */}
      <ImageComponent src={imageThreeHotelRestaurant } alt="imageThreeHotelRestaurant" />

      {/* This component displays a black divider to separate different sections of the website. */}
      <BlackLine/>

       {/* This component displays a styled heading block for the website. Lower-level heading. */}
      <SubHeading
        text="Dine in Paradise"
      />

       {/*  This component displays a block of text with customizable styles. */}
      <TextBlock 
        text="Set against the backdrop of Phuket’s stunning coastline, Saffron Breeze Café offers both indoor and
         outdoor dining experiences. Enjoy your meal on our sun-kissed terrace, with gentle ocean breezes and the 
         sound of the waves creating the perfect atmosphere for a relaxing meal. Whether you’re starting your day 
         with a fresh Thai breakfast, indulging in a leisurely lunch, or enjoying a romantic dinner under the stars,
          every moment at Saffron Breeze Café is designed to delight the senses." 
      />

      {/* Import reusable ImageComponent for displaying images */}
      <ImageComponent src={imageFourHotelRestaurant } alt="imageFourHotelRestaurant" />

       {/* This component displays a black divider to separate different sections of the website. */}
      <BlackLine/>

      {/* This component displays a styled heading block for the website. Lower-level heading. */}
      <SubHeading
        text="An Unforgettable Dining Experience"
      />

      {/*  This component displays a block of text with customizable styles. */}
       <TextBlock 
        text="With its welcoming ambiance, exceptional service, and a menu that showcases the best of 
        Thai cuisine, Saffron Breeze Café is a must-visit culinary destination in Phuket. Whether 
        you’re a food enthusiast or simply looking for a relaxed yet refined dining experience, our 
        restaurant promises a memorable meal in the heart of paradise." 
      />

      {/* Import reusable ImageComponent for displaying images */}
      <ImageComponent src={imageFiveHotelRestaurant } alt="imageFiveHotelRestaurant" />

      {/* This component displays a black divider to separate different sections of the website. */}
      <BlackLine/>

      {/*  This component displays a block of text with customizable styles. */}
      <TextBlock 
        text="Come discover the flavors of Thailand at Saffron Breeze Café—where every bite is a breeze 
        of pure indulgence." 
      />

       {/*Displays a yellow flower, which will be used as a section divider on the website 
      to separate different content sections */}
      <YellowFlower /> 

      {/* Import the Gallery component. Displaying a gallery of images. */}
      <Gallery />

      {/* This component directs users to check the social media of the website. */}
      <Socials />

      {/*Displays a button that allows users to quickly return to the top of the page after
      scrolling down.*/}
      <ScrollToTopButton />
      
      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default HotelRestaurantSaffronBreezeCafé; // Export the component for use in the application
