import React from 'react';
import TextBlock from './TextBlock';
import HeadingBlock from './HeadingBlock';
import SubHeading from './SubHeading';
import ImageComponent from './ImageComponent';
import statue from './assets/statue.jpg'
import Divider from './Divider'; // Import the Divider component
import Footer from './Footer'; // Import the footer component
import YellowLine from './YellowLine'; // Import the YellowLine component
import beach from './assets/beach.jpg'

const OurDestinations = () => {
  return (
    <div>
      {/* Heading for the page */}
      <HeadingBlock
        text="Our Travel Destinations: Explore Thailand with Orchid Travels"
      />
      <YellowLine/>
      <ImageComponent src={statue} alt="Statue in front of a temple" />
      {/* Description for each destination */}
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
      <SubHeading 
        text="Phuket: Paradise Island Escape" 
      />
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
      <ImageComponent src={beach} alt="Boats along the beach" />
      <TextBlock 
        text="Explore Phuket's vibrant nightlife, where the 
        streets of Patong Beach come alive with entertainment 
        and dining options. For a more serene experience, 
        visit the island’s cultural landmarks, like the Big 
        Buddha or the historic Old Town. From luxury resorts 
        to beachfront bungalows, Orchid Travels will ensure 
        your stay in Phuket is both relaxing and exhilarating." 
      />

      <SubHeading 
        text="Krabi: Nature’s Hidden Gem" 
      />

      <TextBlock 
        text="For travelers looking to escape into nature, Krabi is 
        the perfect destination. Known for its dramatic limestone 
        cliffs, crystal-clear waters, and mangrove forests, Krabi 
        offers a mix of adventure and serenity. Famous landmarks 
        like Railay Beach, the Phi Phi Islands, and the Emerald 
        Pool are ideal for those who love outdoor activities such 
        as rock climbing, snorkeling, and kayaking."
      />

      <TextBlock 
        text="Krabi’s charm lies in its ability to blend luxury with 
        untouched natural beauty. Whether you prefer a peaceful boat 
        ride through its islands or exploring the vibrant coral reefs, 
        Krabi is a destination where nature takes center stage. With 
        Orchid Travels, your journey to this beautiful province will 
        be nothing short of spectacular, offering a peaceful retreat 
        from the everyday."
      />

      <SubHeading 
        text="Bangkok: The City that Never Sleeps" 
      />

      <TextBlock 
        text="A trip to Thailand wouldn’t be complete without 
        experiencing the vibrant capital city, Bangkok. This bustling 
        metropolis is where ancient culture meets modern luxury. 
        From the majestic Grand Palace and the intricate Wat Arun 
        to the bustling markets and street food stalls, Bangkok is 
        a sensory feast."
      />

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

      <TextBlock 
       text="At Orchid Travels, we believe every journey is unique. 
       Whether you are dreaming of Phuket’s sunny beaches, Krabi’s 
       natural wonders, or Bangkok’s cityscape, our travel experts 
       are here to make your dream holiday a reality. Join us, and 
       discover the beauty of Thailand like never before."
      />
      
      <Divider />
      <Footer />
    </div>
  );
};

export default OurDestinations;