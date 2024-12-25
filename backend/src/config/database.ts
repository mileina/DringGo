import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const db = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'dringgo',
  port: Number(process.env.DB_PORT) || 5432,
  ssl: {
    rejectUnauthorized: false, // Pour Render (optionnel, dépend de la configuration SSL)
  },
});

// Test de connexion
const testConnection = async () => {
  try {
    const client = await db.connect();
    console.log('Connected to the database successfully!');
    client.release(); // Relâcher la connexion
  } catch (error) {
    // Convertir `error` en type `Error` pour accéder à ses propriétés
    if (error instanceof Error) {
      console.error('Failed to connect to the database:', error.message);
    } else {
      console.error('Unknown error occurred while connecting to the database:', error);
    }
  }
};

testConnection();
