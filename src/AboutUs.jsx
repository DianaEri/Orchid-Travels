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
import imageOneAboutUs from './assets/imageOneAboutUs.svg';
import imageTwoAboutUs from './assets/imageTwoAboutUs.svg';


const AboutUs = () => {
  return (
    <div>
      <Header /> 
      {/* Heading for the page */}
      <HeadingBlock
        text="About Us - Orchid Travels"
      />
      <YellowLine />

      <ImageComponent src={imageOneAboutUs} alt="imageOneAboutUs" />

      <SubHeading
        text="Who We Are"
      />

      <TextBlock 
        text="Founded in the heart of Bangkok, Orchid Travels has been dedicated 
        to curating exceptional travel experiences for both local and international
         visitors. We specialize in providing personalized itineraries, seamless 
         travel arrangements, and world-class accommodations at our hotels located 
         in three of Thailand’s most breathtaking destinations:" 
      />

      <TextBlock 
        text="•
        Phuket – Known for its stunning beaches, lively nightlife, and crystal-clear waters." 
      />

      <TextBlock 
        text="•
        Krabi – A paradise of limestone cliffs, serene islands, and picturesque 
        sunsets." 
      />

      <TextBlock 
        text="•
        Bangkok – The vibrant capital city, rich in culture, history, and modern 
        wonders." 
      />

      <TextBlock 
        text="Our team of travel experts works tirelessly to ensure that every 
        journey is unique, offering something for every type of traveler—from 
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

       <TextBlock 
        text="• 
        Orchid Beachfront Resort in Phuket – Perfectly positioned on the island’s
         stunning western coast, this resort offers breathtaking ocean views and a 
         peaceful escape from the bustling city life." 
      />

       <TextBlock 
        text="• 
        Orchid Hideaway in Krabi – Nestled among Krabi’s iconic limestone cliffs,
         this tranquil haven is ideal for those seeking natural beauty and adventure." 
      />


       <TextBlock 
        text="• 
        Orchid City Suites in Bangkok: Situated in the heart of the city, our Bangkok hotel 
        offers modern comfort with easy access to the city’s top attractions, shopping, and dining." 
      />

    

     
      <Footer />
    </div>
  );
};

export default AboutUs;