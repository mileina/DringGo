import { db } from './database';

const initializeDatabase = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS letters (
      id INT AUTO_INCREMENT PRIMARY KEY,
      text VARCHAR(255) NOT NULL,
      sender VARCHAR(255) NOT NULL,
      target VARCHAR(255) NOT NULL
    );
  `;

  try {
    await db.execute(createTableQuery);
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

export default initializeDatabase;
