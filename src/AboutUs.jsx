// (Madelene) made this component, which displays the about us page.
// This component presents information about Orchid Travels. It includes text blocks with the company’s background, 
// information about their hotels, the benefits of choosing them, and contact information. The component's layout uses
// headings, images, lines, and lists to structure the content.

// It uses several components, and the ones made by (Madelene) are: 
// YellowLine, and BlackLine, ScrollToTopButton, TextBlock, Header, HeadingBlock

// The rest of the components, like HeadingBlock, Header,
// ImageComponent,  SubHeading,  Footer, UnOrderedList, ImageComponent, Divider are made by (Diana).


import React from 'react'; // Import React 
import TextBlock from './TextBlock'; // This component displays a block of text with customizable styles.
import HeadingBlock from './HeadingBlock'; // This component displays a styled heading block for the website.
import SubHeading from './SubHeading'; // This component displays a styled heading block for the website. Lower-level heading.
import Header from './Header'; // Displays a header with hamburger menu component 
import ImageComponent from './ImageComponent';  // Import reusable ImageComponent for displaying images
import Divider from './Divider'; // Import Divider component to separate sections visually
import Footer from './Footer'; // Import Footer component
import YellowLine from './YellowLine';  // This component displays a yellow line
import BlackLine from './BlackLine'; // This component displays a black divider to separate different sections of the website.
import UnOrderedList from './UnOrderedList'; //// Component made  to store and display unordered lists.
import ScrollToTopButton from './ScrollToTopButton'; // Displays a button that allows users to quickly return to 
                                                     // the top of the page after scrolling down.  
import imageOneAboutUs from './assets/imageOneAboutUs.svg';  // Importing svg image
import imageTwoAboutUs from './assets/imageTwoAboutUs.svg';  // Importing svg image
import imageThreeAboutUs from './assets/imageThreeAboutUs.svg';  // Importing svg image
import imageFourAboutUs from './assets/imageFourAboutUs.svg';  // Importing svg image
import imageFiveAboutUs from './assets/imageFiveAboutUs.svg';  // Importing svg image

const AboutUs = () => {
  const destinations = [
    "Phuket – Known for its stunning beaches, lively nightlife, and crystal-clear waters.",
    "Krabi – A paradise of limestone cliffs, serene islands, and picturesque sunsets.",
    "Bangkok – The vibrant capital city, rich in culture, history, and modern wonders."
  ];


  const hotels = [
    "Orchid Beachfront Resort in Phuket – Perfectly positioned on the island’s stunning western coast, this resort offers breathtaking ocean views and a peaceful escape from the bustling city life.",
    "Orchid Hideaway in Krabi – Nestled among Krabi’s iconic limestone cliffs, this tranquil haven is ideal for those seeking natural beauty and adventure.",
    "Orchid City Suites in Bangkok – Situated in the heart of the city, our Bangkok hotel offers modern comfort with easy access to the city’s top attractions, shopping, and dining."
  ];

  const merits = [
    "Local Expertise – Our team is based in Bangkok and knows Thailand like no one else. We bring you hidden gems and exclusive experiences you won't find elsewhere.",
    "Personalized Service – From the moment you contact us, we tailor every aspect of your trip to fit your preferences, ensuring a hassle-free and enjoyable journey.",
    "World Class Accommodations – Our handpicked hotels are designed to reflect the unique character of each destination, offering both comfort and authenticity."
  ];

  return (
    <div>
      <Header /> 
   
      <HeadingBlock
        text="About Us - Orchid Travels"
      />
      <YellowLine />

      <ImageComponent src={imageOneAboutUs} alt="imageOneAboutUs" />

      <SubHeading
        text="Who we are"
       />

      <TextBlock 
        text="Founded in the heart of Bangkok, Orchid Travels has been dedicated 
        to curating exceptional travel experiences for both local and international
         visitors. We specialize in providing personalized itineraries, seamless 
         travel arrangements, and world class accommodations at our hotels located 
         in three of Thailand’s most breathtaking destinations:" 
      />

      <UnOrderedList items={destinations} className="destinations-list" />

      <TextBlock 
        text="Our team of travel experts works tirelessly to ensure that every 
        journey is unique, offering something for every type of traveler from 
        sunseekers and adventure enthusiasts to those looking for relaxation and 
        cultural immersion." 
      />

        <ImageComponent src={imageTwoAboutUs} alt="imageTwoAboutUs" />

        <BlackLine/>

        <SubHeading
        text="Our Hotels"
       />

        <TextBlock 
        text="At Orchid Travels, we are proud to own and operate a collection of 
        handpicked hotels that promise comfort, luxury, and unforgettable
        hospitality:" 
      />

       <UnOrderedList items={hotels} className="destinations-list" />


     <ImageComponent src={imageThreeAboutUs} alt="imageThreeAboutUs" />

     <BlackLine/>

     <SubHeading
        text="Our Promise"
      />

      <TextBlock 
        text="At Orchid Travels, our mission is simple. To make your travel dreams come true. 
        Whether you're here for a short getaway, a family vacation, or a romantic escape, we 
        take care of every detail so that you can focus on creating memories. Our hotels in 
        Phuket, Krabi, and Bangkok are designed with you in mind, offering the perfect balance
        of luxury, comfort, and local charm." 
      /> 

     <ImageComponent src={imageFourAboutUs} alt="imageFourAboutUs" />

     <BlackLine/>

     <SubHeading
        text="Why Choose Orchid Travels?"
      />

     <UnOrderedList items={merits} className="destinations-list" />

     <ImageComponent src={imageFiveAboutUs} alt="imageFiveAboutUs" />

     <BlackLine/>

     <TextBlock 
        text="
        Email: info@orchidtravels.com" 
      />


     <TextBlock 
        text="
        Phone: +66 1234 5678" 
      />


     <TextBlock 
        text="
        Adress: The Beachfront Condo, Unit 102 Sukhumvit Soi 25 Klong Toey, Watthana Bangkok 10110" 
      />


     <TextBlock 
        text="Feel free to contact us for more information or to start 
        planning your dream vacation to Thailand today!" 
      />

      <Divider />


       {/*Displays a button that allows users to quickly return to the top of the page after
      scrolling down.*/}
      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default AboutUs;
