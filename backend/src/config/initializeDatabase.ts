import { db } from './database';

const initializeDatabase = async () => {
  const createLettersTableQuery = `
    CREATE TABLE IF NOT EXISTS letters (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      sender VARCHAR(255) NOT NULL,
      target VARCHAR(255) NOT NULL
    );
  `;

  const createShortUrlsTableQuery = `
    CREATE TABLE IF NOT EXISTS short_urls (
      id SERIAL PRIMARY KEY,
      letter_id INT NOT NULL,
      short_code VARCHAR(10) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (letter_id) REFERENCES letters(id) ON DELETE CASCADE
    );
  `;

  try {
    // Tester la connexion
    console.log('Testing database connection...');
    const [connectionTest] = await db.execute('SELECT NOW()');
    console.log('Database connected successfully:', connectionTest);

    // Créer les tables
    console.log('Creating `letters` table...');
    await db.execute(createLettersTableQuery);
    console.log('`letters` table created successfully.');

    console.log('Creating `short_urls` table...');
    await db.execute(createShortUrlsTableQuery);
    console.log('`short_urls` table created successfully.');

    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1); // Arrête le processus si une erreur survient
  }
};

export default initializeDatabase;
