import { db } from './database';

const initializeDatabase = async () => {
  const createLettersTableQuery = `
    CREATE TABLE IF NOT EXISTS letters (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text LONGTEXT NOT NULL,
      sender VARCHAR(255) NOT NULL,
      target VARCHAR(255) NOT NULL
    );
  `;

  const createShortUrlsTableQuery = `
    CREATE TABLE IF NOT EXISTS short_urls (
      id INT AUTO_INCREMENT PRIMARY KEY,
      letter_id INT NOT NULL,
      short_code VARCHAR(10) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (letter_id) REFERENCES letters(id)
    );
  `;

  try {
    // Exécuter les requêtes une par une
    await db.execute(createLettersTableQuery);
    await db.execute(createShortUrlsTableQuery);
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export default initializeDatabase;
