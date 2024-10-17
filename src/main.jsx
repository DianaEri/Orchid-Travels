// Import StrictMode from React to highlight potential issues in the app during development
import { StrictMode } from 'react'; 

// Import createRoot from React DOM to render the React app
import { createRoot } from 'react-dom/client';

// Import BrowserRouter, Routes, and Route from react-router-dom for handling client-side routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the main app component (the homepage or starting point of the app)
import App from './App.jsx'; 

// Import the SearchResult component that displays hotel search results
import SearchResult from './SearchResult.jsx';  

// Import the global CSS file for applying styles
import './index.css';

// Import the OurDestinations component, which shows travel destinations
import OurDestinations from './OurDestinations.jsx'; 

// Import the HotelList component for displaying a list of hotels
import HotelList from './HotelList';

// Import LagunaPearlRetreat component for the specific hotel page
import LagunaPearlRetreat from './LagunaPearlRetreat'; 

// Import AboutUs component to display the "About Us" page
import AboutUs from './AboutUs'; 

// Import HotelRestaurantSaffronBreezeCafé component to display a specific hotel restaurant's details
import HotelRestaurantSaffronBreezeCafé from './HotelRestaurantSaffronBreezeCafé.jsx'; 

// Create the root for React rendering, targeting the 'root' element in the HTML document
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Set up routing for the application using BrowserRouter */}
    <BrowserRouter>
      {/* Define the different routes in the application using Routes and Route components */}
      <Routes>
        {/* Home Route, which renders the App component when visiting the base URL ("/") */}
        <Route path="/" element={<App />} />

        {/* Route for displaying the search results page */}
        <Route path="/search-result" element={<SearchResult />} />  

        {/* Route for showing the travel destinations */}
        <Route path="/our-travel-destinations" element={<OurDestinations />} />

        {/* A Route placeholder, rendering HotelList if visited on base path */}
        <Route path="/" element={<HotelList />} /> 

        {/* Route for displaying the Laguna Pearl Retreat hotel page */}
        <Route path="/laguna-pearl-retreat" element={<LagunaPearlRetreat />} />

        {/* Route for displaying the About Us page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Route for displaying the specific hotel's restaurant page (Saffron Breeze Café) */}
        <Route path="/hotel-restaurant-saffron-breeze-café" element={<HotelRestaurantSaffronBreezeCafé />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
