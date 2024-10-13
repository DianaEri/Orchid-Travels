import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import routing components
import App from './App.jsx';
import SearchResult from './searchResult.jsx';  // Import your search result page
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />  {/* Home Route */}
        <Route path="/search-result" element={<SearchResult />} />  {/* Search Result Route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);