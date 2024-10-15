import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import routing components
import App from './App.jsx';
import SearchResult from './SearchResult.jsx';  // Import your search result page
import './index.css';
import OurDestinations from './OurDestinations.jsx'; // Adjust the path as necessary
import HotelList from './HotelList';
import HotelDetail from './Hotels/HotelDetail';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />  {/* Home Route */}
        <Route path="/search-result" element={<SearchResult />} />  {/* Search Result Route */}
        <Route path="/our-travel-destinations" element={<OurDestinations />} />
        <Route path="/" element={<HotelList />} />
        <Route path="/hotels/:hotelName" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);