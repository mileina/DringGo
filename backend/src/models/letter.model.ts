import { db } from '../config/database';

interface Letter {
  id: number;
  text: string;
  from: string;
  target: string;
}

class LetterModel {
  static async getOne(id: number): Promise<Letter[]> {
    //Use prepared statement to prevent SQL injection
    const query = 'SELECT * FROM users where target = ?';
    const [rows]: any = await db.execute(query, [id]);
    return rows as Letter[];
  }

  static async create(letter: Letter): Promise<Letter> {
    //Use prepared statement to prevent SQL injection
    const query = 'INSERT INTO users (text, from, target) VALUES (?, ?, ?)';
    const [result]: any = await db.execute(query, [letter.text, letter.from, letter.target]);
    letter.id = result.insertId;
    return letter;
  }
}

export default LetterModel;
