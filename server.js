// Diana created the server.js file and implemented the first three hotels 
// for the web API. Madelene filled in the last two hotels. Then Diana 
// filled in all the data for the events.

import express from 'express'; // Import Express to create the server
import cors from 'cors'; // Import CORS to enable cross-origin requests

const app = express(); // Initialize the Express application
const PORT = 5000; // Set the port to 5000 to avoid conflicts with React (which typically runs on 3000)

// Use CORS middleware to allow requests from the frontend, ensuring that the client can interact with the server
app.use(cors({
  origin: 'https://orchidtravels-yymu--5173--134daa3c.local-corp.webcontainer.io' // Allow requests from this specific frontend URL
}));

// Middleware to parse incoming JSON requests, making it easier to handle POST or PUT requests
app.use(express.json()); 

// Basic API endpoint that returns hotel and event data
app.get('/api/data', (req, res) => {
  // Send a JSON response containing hotel and event data
  res.json({
    message: 'Hello from Orchid Travels API!', // A simple welcome message for the API

    // Array of hotel data
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
        price_per_person: 21491, // Price per person in currency
        family: "Kids friendly", // Family-friendly indicator
        location: "Phuket", // Location of the hotel
        image: "https://images.unsplash.com/photo-1651376318405-f1055f37a511?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image URL for display
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
    ],

    // Array of event data
    events: [
      {
        date: "12 Nov",
        name: "Ramayana Festival",
        duration: "Event duration: 12 November - 15 November",
        description: "Embark on an enchanting journey through one of Thailand's most revered cultural festivals, the Ramayana Festival...",
        image: "https://images.unsplash.com/photo-1578167635630-a74f0e723dd7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        date: "∞ Nov",
        name: "Chiang Mai Sunday Night Market",
        duration: "Event duration: All-year-round event on Sundays",
        description: "Chiang Mai Sunday Night Market, a vibrant evening bazaar where you can leisurely stroll through streets lined with stalls...",
        image: "https://images.unsplash.com/photo-1594269341793-31c1e5f16e40?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        date: "5 Nov",
        name: "Thai Cooking Class",
        duration: "Event duration: 8 November - 22 November",
        description: "Immerse yourself in Thai culture by visiting bustling local markets to handpick fresh ingredients, then learn to cook authentic Thai dishes...",
        image: "https://images.unsplash.com/photo-1653233797467-1a528819fd4f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        date: "8 Nov",
        name: "Fruit Buffet",
        duration: "Event duration: 5 November - 19 November",
        description: "Indulge in all-you-can-eat fruit buffets at local orchards, where you can savor an array of exotic fruits freshly picked from the trees...",
        image: "https://images.unsplash.com/photo-1665589048355-579bc80169d1?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        date: "2 Nov",
        name: "Monkey Temple",
        duration: "Event duration: 2 November - 23 November",
        description: "Explore the ancient Khmer temple ruins of Phra Prang Sam Yot, where hundreds of mischievous monkeys roam freely among the stone structures...",
        image: "https://images.unsplash.com/photo-1603649637473-1aaeff93d311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxtb25rZXklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D"
      }
    ]
  });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message to the console when the server is running
});
