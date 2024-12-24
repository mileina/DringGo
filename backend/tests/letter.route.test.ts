import request from 'supertest';
import app from '../src/app'; // Importez votre application Express
import LetterModel from '../src/models/letter.model';

// Mock de la base de données
jest.mock('../src/models/letter.model');

describe('Letter API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /letter', () => {
    it('should return one letter with status 200', async () => {
      // Mock de la méthode `getOne` pour retourner une lettre fictive
      const mockLetter = [{ id: 1, text: 'Hello World', from: 'Alice', target: 'Bob' }];
      jest.spyOn(LetterModel, 'getOne').mockResolvedValue(mockLetter);

      const response = await request(app).get('/api/letter').send({ id: 1 });
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockLetter);
      expect(LetterModel.getOne).toHaveBeenCalledWith(1);
    });

    it('should handle errors gracefully', async () => {
      jest.spyOn(LetterModel, 'getOne').mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/api/letter').send({ id: 1 });
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('error', 'Database error');
    });
  });

  describe('POST /letter', () => {
    it('should create a new letter and return it with status 201', async () => {
      // Mock de la méthode `create` pour retourner une lettre créée
      const newLetter = { id: 1, text: 'New Letter', from: 'Alice', target: 'Bob' };
      jest.spyOn(LetterModel, 'create').mockResolvedValue(newLetter);

      const response = await request(app).post('/api/letter').send({
        text: 'New Letter',
        from: 'Alice',
        target: 'Bob',
      });

      expect(response.status).toBe(201);
      expect(response.body).toEqual(newLetter);
      expect(LetterModel.create).toHaveBeenCalledWith({
        text: 'New Letter',
        from: 'Alice',
        target: 'Bob',
      });
    });

    it('should handle errors gracefully', async () => {
      jest.spyOn(LetterModel, 'create').mockRejectedValue(new Error('Database error'));

      const response = await request(app).post('/api/letter').send({
        text: 'New Letter',
        from: 'Alice',
        target: 'Bob',
      });

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('error', 'Database error');
    });
  });
});
