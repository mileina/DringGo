import { db } from '../config/database';

class ShortUrlModel {
  static async create(letterId: number, shortCode: string): Promise<void> {
    const query = 'INSERT INTO short_urls (letter_id, short_code) VALUES (?, ?)';
    await db.execute(query, [letterId, shortCode]);
  }

  static async findByShortCode(shortCode: string): Promise<{ letter_id: number } | null> {
    const query = 'SELECT letter_id FROM short_urls WHERE short_code = ?';
    const [rows]: any = await db.execute(query, [shortCode]);

    if (rows.length > 0) {
      return rows[0];
    }
    return null;
  }

  static async findByLetterId(letterId: number): Promise<{ short_code: string } | null> {
    const query = 'SELECT short_code FROM short_urls WHERE letter_id = ?';
    const [rows]: any = await db.execute(query, [letterId]);

    if (rows.length > 0) {
      return rows[0];
    }
    return null;
  }
}

export default ShortUrlModel;