// server.js

import express from 'express'; // Use import instead of require
import cors from 'cors'; // Use import instead of require

const app = express();
const PORT = 5000; // Use port 5000 to avoid conflicts with React (which uses 3000)

app.use(cors()); // Enable CORS to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON

// Basic API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from Orchid Travels API!',
    hotels: [
      {
        hotels: [
          {
            name: "Laguna Pearl Retreat",
            description: [
              "Nearest beach 100m",
              "16 pools and spa",
              "All-inclusive restaurant that offers dietary restrictions options",
              "Airport Pick-up and Drop-off",
              "Adapted accommodation for all types of families"
            ],
            price_per_person: "21 491kr",
            family: "Kids friendly",
            location: "Phuket",
            image: "https://cdn.pixabay.com/photo/2021/02/02/12/34/resort-5973816_1280.jpg"
          },
          {
            name: "Phuket Horizon Suites",
            description: [
              "Nearest beach 300m",
              "3 pools",
              "WiFi is included throughout the hotel",
              "All-Inclusive at an additional cost"
            ],
            price_per_person: "22 150kr/person",
            location: "Phuket",
            image: "https://pixnio.com/free-images/2017/06/23/2017-06-23-07-15-38-1152x766.jpg"
          },
          {
            name: "Azure Sands Resort & Spa",
            description: [
              "Nearest beach 250m",
              "5 pools and spa",
              "WiFi is included throughout the hotel",
              "Gym",
              "Environmentally friendly"
            ],
            price_per_person: "21 100kr",
            location: "Phuket",
            image: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937_1280.jpg"
          }
        ]
      });
    });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
