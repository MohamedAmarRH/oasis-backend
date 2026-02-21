require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;
// Route de test à la racine
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Oasis Backend', 
    status: 'running',
    endpoints: {
      users: '/users',
      plats: '/plats',
      // ... autres endpoints
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
