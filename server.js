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
    ],
    events: [
      {
        date: "12 July",
        name: "Ramayana Festival",
        duration: "Event duration: 12 July - 15 July",
        description: "Embark on an enchanting journey through one of Thailand's most revered cultural festivals, the Ramayana Festival. Immerse yourself in mesmerizing performances where the epic tale of Ramayana comes to life through captivating dance, vibrant costumes, and traditional music. This celebration of ancient mythology and art offers a vivid display of Thailand’s rich heritage and theatrical traditions.",
        image: "https://images.unsplash.com/photo-1578167635630-a74f0e723dd7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        date: "∞ July",
        name: "Chiang Mai Sunday Night Market",
        duration: "Event duration: All-year-round event on Sundays",
        description: "Chiang Mai Sunday Night Market, a vibrant evening bazaar where you can leisurely stroll through streets lined with stalls offering a wide array of local handicrafts, delicious street food, and captivating performances by local artists. The lively atmosphere, combined with traditional Northern Thai flavors and arts, creates an immersive cultural experience for visitors.",
        image: "https://images.unsplash.com/photo-1594269341793-31c1e5f16e40?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        date: "5 July",
        name: "Thai Cooking Class",
        duration: "Event duration: 8 July - 22 July",
        description: "Immerse yourself in Thai culture by visiting bustling local markets to handpick fresh ingredients, then learn to cook authentic Thai dishes under the guidance of expert chefs. This hands-on experience offers a deeper connection to Thailand’s rich culinary traditions.",
        image: "https://drive.google.com/uc?export=view&id=1D8sS71wLWqEcsAGY-cPMNHS8qEvgot9S"
      },
      {
        date: "8 July",
        name: "Fruit Buffet",
        duration: "Event duration: 5 July - 19 July",
        description: "Indulge in all-you-can-eat fruit buffets at local orchards, where you can savor an array of exotic fruits freshly picked from the trees. From the king of fruits, durian, to sweet mangosteen and rambutan, this delicious experience offers a true taste of Thailand’s tropical harvest.",
        image: "https://images.unsplash.com/photo-1630960411440-10f7b59717ba?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        date: "2 July",
        name: "Monkey Temple",
        duration: "Event duration: 2 July - 23 July",
        description: "Explore the ancient Khmer temple ruins of Phra Prang Sam Yot, where hundreds of mischievous monkeys roam freely among the stone structures. You can feed them (with caution!) while soaking in the rich history of the site. Afterwards, continue your adventure by visiting other fascinating historical landmarks in Lopburi, a town known for its unique blend of culture and wildlife.",
        image: "https://drive.google.com/uc?export=view&id=11icC3BujsCZp9sz3FStGH3XPyrVE9Fk4"
      }
    ]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
