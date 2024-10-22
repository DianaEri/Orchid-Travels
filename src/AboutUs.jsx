import React from 'react';
import TextBlock from './TextBlock';
import HeadingBlock from './HeadingBlock';
import SubHeading from './SubHeading';
import Header from './Header'; 
import ImageComponent from './ImageComponent';
import Divider from './Divider'; 
import Footer from './Footer'; 
import YellowLine from './YellowLine'; 
import BlackLine from './BlackLine';
import UnOrderedList from './UnOrderedList';
import ScrollToTopButton from './ScrollToTopButton'; // Displays a button that allows users to quickly return to 
                                                     // the top of the page after scrolling down.  
import imageOneAboutUs from './assets/imageOneAboutUs.svg';
import imageTwoAboutUs from './assets/imageTwoAboutUs.svg';
import imageThreeAboutUs from './assets/imageThreeAboutUs.svg';
import imageFourAboutUs from './assets/imageFourAboutUs.svg';
import imageFiveAboutUs from './assets/imageFiveAboutUs.svg';

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

      <HeadingBlock
        text="Who We Are"
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

       {/*Displays a button that allows users to quickly return to the top of the page after
      scrolling down.*/}
      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default AboutUs;
