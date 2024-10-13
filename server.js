// server.js

import express from 'express'; // Use import instead of require
import cors from 'cors'; // Use import instead of require

const app = express();
const PORT = 5000; // Use port 5000 to avoid conflicts with React (which uses 3000)

app.use(cors({
  origin: 'https://orchidtravels-yymu--5173--134daa3c.local-corp.webcontainer.io' // Allow requests from your frontend URL
})); 
app.use(express.json()); // Middleware to parse JSON

// Basic API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from Orchid Travels API!',
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
        price_per_person: 21491,
        family: "Kids friendly",
        location: "Phuket",
        image: "https://images.unsplash.com/photo-1651376318405-f1055f37a511?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Phuket Horizon Suites",
        description: [
          "Nearest beach 300m",
          "3 pools",
          "WiFi is included throughout the hotel",
          "All-Inclusive at an additional cost"
        ],
        price_per_person: 22150,
        location: "Phuket",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        price_per_person: 21100,
        location: "Phuket",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
