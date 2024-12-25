import { db } from '../config/database';

interface Letter {
  id?: number;
  text: string;
  sender: string;
  target: string;
}

class LetterModel {
  static async getOne(id: number): Promise<Letter | null> {
    const query = 'SELECT * FROM letters WHERE id = $1'; // Utilisation de $1 pour les placeholders dans PostgreSQL
    const { rows } = await db.query(query, [id]); // Utilisation de `query` au lieu de `execute`
  
    if (rows.length > 0) {
      return rows[0] as Letter;
    }
    return null;
  }

  static async create(letter: Letter): Promise<Letter> {
    const query = `
      INSERT INTO letters (text, sender, target) 
      VALUES ($1, $2, $3) RETURNING id
    `;
    const { rows } = await db.query(query, [letter.text, letter.sender, letter.target]);
    letter.id = rows[0].id; // PostgreSQL retourne l'id via RETURNING
    return letter;
  }

  static async getAll(): Promise<Letter[]> {
    const query = 'SELECT * FROM letters';
    const { rows } = await db.query(query); // PostgreSQL retourne un tableau via `rows`
    return rows;
  }
}

export default LetterModel;
