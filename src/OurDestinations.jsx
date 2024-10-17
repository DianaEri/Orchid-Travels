// Diana made this element, which displays the travel destinations 
// with images and detailed information. 
// It uses several components, and the ones made by Diana are: 
// ImageComponent, SubHeading, and Footer. 
// The rest of the components, like HeadingBlock, 
// YellowLine, and BlackLine, are made by Madelene.

import React from 'react'; // Import React for building components
import TextBlock from './TextBlock'; // Import TextBlock for rendering text sections
import HeadingBlock from './HeadingBlock'; // Import HeadingBlock for section headings
import SubHeading from './SubHeading'; // Import SubHeading for subheadings
import Header from './Header'; // Import Header for the top of the page
import ImageComponent from './ImageComponent'; // Import ImageComponent for displaying images
import statue from './assets/statue.jpg'; // Import image assets
import Divider from './Divider'; // Import Divider to visually separate sections
import Footer from './Footer'; // Import Footer for the bottom of the page
import YellowLine from './YellowLine'; // Import YellowLine, a styled horizontal line separator
import beach from './assets/beach.jpg'; // Import additional image assets
import getaway from './assets/getaway.jpg';
import bangkok from './assets/bangkok.jpg';
import BlackLine from './BlackLine'; // Import BlackLine, another horizontal line separator

// Main component definition
const OurDestinations = () => {
  return (
    <div>
      {/* Render the Header component */}
      <Header /> 

      {/* Main heading for the page */}
      <HeadingBlock
        text="Our Travel Destinations: Explore Thailand with Orchid Travels"
      />
      <YellowLine /> {/* Styled yellow line separator */}

      {/* Display the first image (statue in front of a temple) */}
      <ImageComponent src={statue} alt="Statue in front of a temple" />

      {/* Description for the travel destinations */}
      <TextBlock 
        text="At Orchid Travels, we take pride in offering you the 
        finest travel experiences to the stunning and diverse 
        destinations of Thailand. Whether you're seeking the 
        vibrant energy of city life, the tranquility of pristine 
        beaches, or the wonders of nature, our handpicked destinations 
        promise unforgettable memories. Let us guide you through 
        three of Thailand’s most iconic locations: Phuket, Krabi, 
        and Bangkok." 
      />
      <BlackLine /> {/* Styled black line separator */}

      {/* Subheading for Phuket section */}
      <SubHeading 
        text="Phuket: Paradise Island Escape" 
      />

      {/* Description for Phuket */}
      <TextBlock 
        text="Phuket is Thailand's largest island and one of 
        the most sought-after beach destinations in the world. 
        Surrounded by the turquoise waters of the Andaman Sea, 
        Phuket is a haven for sun-seekers, water sports 
        enthusiasts, and those looking to immerse themselves 
        in a tropical paradise. Famous for its golden sandy 
        beaches, such as Patong, Kata, and Karon, this island 
        offers more than just stunning coastlines." 
      />

      {/* Display an image of Phuket's beach */}
      <ImageComponent src={beach} alt="Beach surrounded by cliffs" />

      {/* More information about Phuket */}
      <TextBlock 
        text="Explore Phuket's vibrant nightlife, where the 
        streets of Patong Beach come alive with entertainment 
        and dining options. For a more serene experience, 
        visit the island’s cultural landmarks, like the Big 
        Buddha or the historic Old Town. From luxury resorts 
        to beachfront bungalows, Orchid Travels will ensure 
        your stay in Phuket is both relaxing and exhilarating." 
      />
      <BlackLine />

      {/* Subheading for Krabi section */}
      <SubHeading 
        text="Krabi: Nature’s Hidden Gem" 
      />

      {/* Description for Krabi */}
      <TextBlock 
        text="For travelers looking to escape into nature, Krabi is 
        the perfect destination. Known for its dramatic limestone 
        cliffs, crystal-clear waters, and mangrove forests, Krabi 
        offers a mix of adventure and serenity. Famous landmarks 
        like Railay Beach, the Phi Phi Islands, and the Emerald 
        Pool are ideal for those who love outdoor activities such 
        as rock climbing, snorkeling, and kayaking."
      />

      {/* Display an image of Krabi */}
      <ImageComponent src={getaway} alt="Statue with flowers" />

      {/* More information about Krabi */}
      <TextBlock 
        text="Krabi’s charm lies in its ability to blend luxury with 
        untouched natural beauty. Whether you prefer a peaceful boat 
        ride through its islands or exploring the vibrant coral reefs, 
        Krabi is a destination where nature takes center stage. With 
        Orchid Travels, your journey to this beautiful province will 
        be nothing short of spectacular, offering a peaceful retreat 
        from the everyday."
      />
      <BlackLine />

      {/* Subheading for Bangkok section */}
      <SubHeading 
        text="Bangkok: The City that Never Sleeps" 
      />

      {/* Description for Bangkok */}
      <TextBlock 
        text="A trip to Thailand wouldn’t be complete without 
        experiencing the vibrant capital city, Bangkok. This bustling 
        metropolis is where ancient culture meets modern luxury. 
        From the majestic Grand Palace and the intricate Wat Arun 
        to the bustling markets and street food stalls, Bangkok is 
        a sensory feast."
      />

      {/* Display an image of Bangkok */}
      <ImageComponent src={bangkok} alt="Bangkok during the night" />

      {/* More information about Bangkok */}
      <TextBlock 
        text="Bangkok's lively streets offer something for every 
        traveler. Whether you’re navigating the colorful markets 
        of Chatuchak, dining at world-class restaurants, or shopping 
        at high-end malls, the city is a hub of activity day and 
        night. Known for its floating markets and a rich history 
        of temples, Bangkok promises a mix of traditional Thai 
        culture with the modern conveniences of a global city. 
        Orchid Travels provides tailored itineraries to explore 
        the best that Bangkok has to offer, ensuring your trip 
        is a seamless blend of adventure and relaxation."
      />
      <BlackLine />

      {/* Closing paragraph */}
      <TextBlock 
       text="At Orchid Travels, we believe every journey is unique. 
       Whether you are dreaming of Phuket’s sunny beaches, Krabi’s 
       natural wonders, or Bangkok’s cityscape, our travel experts 
       are here to make your dream holiday a reality. Join us, and 
       discover the beauty of Thailand like never before."
      />
      
      <Divider /> {/* Final divider before the footer */}
      
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default OurDestinations; // Export the component for use in the application
