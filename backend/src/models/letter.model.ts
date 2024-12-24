import { db } from '../config/database';

interface Letter {
  id?: number;
  text: string;
  sender: string;
  target: string;
}

class LetterModel {
  static async getOne(id: number): Promise<Letter | null> {
    const query = 'SELECT * FROM letters WHERE id = ?';
    const [rows]: any = await db.execute(query, [id]);
  
    if (rows.length > 0) {
      return rows[0] as Letter;
    }
    return null;
  }
  

  static async create(letter: Letter): Promise<Letter> {
    const query = 'INSERT INTO letters (text, sender, target) VALUES (?, ?, ?)';
    const [result]: any = await db.execute(query, [letter.text, letter.sender, letter.target]);
    letter.id = result.insertId;
    return letter;
  }

  static async getAll(): Promise<Letter[]> {
    const query = 'SELECT * FROM letters';
    const [rows]: any = await db.execute(query);
    return rows;
  }
}

export default LetterModel;
