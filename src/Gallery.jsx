// This component, created by (Madelene), displays a gallery of images. 
// It renders a grid of images where each image links to the website's Instagram page. 
// The component makes it easy to add, organize, and display multiple images while allowing users to view more images through external links.

// Importing React library
import React from 'react';
// Importing the CSS file for styling
import './index.css'; 
// Importing image svg files that will be displayed in the gallery
import imageOneGallery from './assets/imageOneGallery.svg'; 
import imageTwoGallery from './assets/imageTwoGallery.svg'; 
import imageThreeGallery from './assets/imageThreeGallery.svg'; 
import imageFourGallery from './assets/imageFourGallery.svg'; 
import imageFiveGallery from './assets/imageFiveGallery.svg'; 
import imageSixGallery from './assets/imageSixGallery.svg'; 
import imageSevenGallery from './assets/imageSevenGallery.svg'; 
import imageEightGallery from './assets/imageEightGallery.svg'; 
import imageNineGallery from './assets/imageNineGallery.svg'; 
import imageTenGallery from './assets/imageTenGallery.svg'; 
import imageElevenGallery from './assets/imageElevenGallery.svg'; 
import imageTwelveGallery from './assets/imageTwelveGallery.svg'; 
import imageThirteenGallery from './assets/imageThirteenGallery.svg'; 
import imageFourteenGallery from './assets/imageFourteenGallery.svg'; 
import imageFifteenGallery from './assets/imageFifteenGallery.svg'; 
import imageSixteenGallery from './assets/imageSixteenGallery.svg'; 
import imageSeventeenGallery from './assets/imageSeventeenGallery.svg'; 
import imageEighteenGallery from './assets/imageEighteenGallery.svg'; 
import imageNineteenGallery from './assets/imageNineteenGallery.svg'; 
import imageTwentyGallery from './assets/imageTwentyGallery.svg'; 
import imageTwentyOneGallery from './assets/imageTwentyOneGallery.svg'; 
import imageTwentyTwoGallery from './assets/imageTwentyTwoGallery.svg'; 
import imageTwentyThreeGallery from './assets/imageTwentyThreeGallery.svg'; 
import imageTwentyFourGallery from './assets/imageTwentyFourGallery.svg'; 
import imageTwentyFiveGallery from './assets/imageTwentyFiveGallery.svg'; 
import imageTwentySixGallery from './assets/imageTwentySixGallery.svg'; 
import imageTwentySevenGallery from './assets/imageTwentySevenGallery.svg';

// The Gallery component function
const Gallery = () => {
  // Array of image objects with their source (src) and alternate text (alt)
  const images = [
    { src: imageOneGallery, alt: 'ImageOne' },
    { src: imageTwoGallery, alt: 'ImageTwo' },
    { src: imageThreeGallery, alt: 'ImageThree' },
    { src: imageFourGallery, alt: 'ImageFour' },
    { src: imageFiveGallery, alt: 'ImageFive' },
    { src: imageSixGallery, alt: 'ImageSix' },
    { src: imageSevenGallery, alt: 'ImageSeven' },
    { src: imageEightGallery, alt: 'ImageEight' },
    { src: imageNineGallery, alt: 'ImageNine' },
    { src: imageTenGallery, alt: 'ImageTen' },
    { src: imageElevenGallery, alt: 'ImageEleven' },
    { src: imageTwelveGallery, alt: 'ImageTwelve' },
    { src: imageThirteenGallery, alt: 'ImageThirteen' },
    { src: imageFourteenGallery, alt: 'ImageFourteen' },
    { src: imageFifteenGallery, alt: 'ImageFifteen' },
    { src: imageSixteenGallery, alt: 'ImageSixteen' },
    { src: imageSeventeenGallery, alt: 'ImageSeventeen' },
    { src: imageEighteenGallery, alt: 'ImageEighteen' },
    { src: imageNineteenGallery, alt: 'ImageNineteen' },
    { src: imageTwentyGallery, alt: 'ImageTwenty' },
    { src: imageTwentyOneGallery, alt: 'ImageTwentyOne' },
    { src: imageTwentyTwoGallery, alt: 'ImageTwentyTwo' },
    { src: imageTwentyThreeGallery, alt: 'ImageTwentyThree' },
    { src: imageTwentyFourGallery, alt: 'ImageTwentyFour' },
    { src: imageTwentyFiveGallery, alt: 'ImageTwentyFive' },
    { src: imageTwentySixGallery, alt: 'ImageTwentySix' },
    { src: imageTwentySevenGallery, alt: 'ImageTwentySeven' },
  ];

  return (
    <div className="gallery-container">
      {/* Displaying a grid of images */}
      <div className="gallery-grid">
        {/* Looping through the array of images and displaying each one */}
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            {/* Each image links to Instagram when clicked */}
            <a target="_blank" href="https://www.instagram.com/" rel="noreferrer">
              {/* Displaying the image */}
              <img src={image.src} alt={`${image.alt} ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the component to be used in other parts of the project
export default Gallery;