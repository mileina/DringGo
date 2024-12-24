import dotenv from 'dotenv';
import app from './app';
import initializeDatabase from './config/initializeDatabase';

dotenv.config(); // Charger les variables d'environnement
initializeDatabase(); // Initialiser la base de données
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
