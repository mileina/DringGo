import { Request, Response } from 'express';
import ShortUrlModel from '../models/shortUrl.model';
import LetterModel from '../models/letter.model';

export const generateShortUrl = async (req: Request, res: Response) => {
  const { letterId } = req.params;

  try {
    // Générer un code unique
    const shortCode = Math.random().toString(36).substring(2, 8); // Génération aléatoire (6 caractères)

    // Vérifier que le shortCode n'existe pas déjà
    const existingShortCode = await ShortUrlModel.findByShortCode(shortCode);
    if (existingShortCode) {
      return res.status(409).json({ message: 'Short code already exists. Retry generation.' });
    }

    // Sauvegarder le shortCode dans la base de données
    await ShortUrlModel.create(Number(letterId), shortCode);

    res.status(201).json({ shortCode });
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
    res.status(500).json({ message: 'Failed to generate short URL', error: errorMessage });
  }
};

export const resolveShortUrl = async (req: Request, res: Response) => {
  const { shortCode } = req.params;

  try {
    // Récupérer l'ID de la lettre associée au shortCode
    const shortUrl = await ShortUrlModel.findByShortCode(shortCode);

    if (!shortUrl) {
      return res.status(404).json({ message: 'Short URL not found' });
    }

    // Récupérer les détails de la lettre
    const letter = await LetterModel.getOne(shortUrl.letter_id);

    res.status(200).json(letter);
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
    res.status(500).json({ message: 'Failed to resolve short URL', error: errorMessage });
  }
};