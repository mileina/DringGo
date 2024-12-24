import { Request, Response } from 'express';
import LetterModel from '../models/letter.model';

// Récupérer une lettre par ID
export const getOneLetter = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // Récupérer l'ID depuis les paramètres
    const letter = await LetterModel.getOne(id);
    if (!letter) {
      return res.status(404).json({ message: 'Letter not found' });
    }
    res.status(200).json(letter);
  } catch (error: Error | any) {
    res.status(500).json({ message: 'Failed to fetch letter', error: error.message });
  }
};

// Créer une nouvelle lettre
export const createLetter = async (req: Request, res: Response) => {
  try {
    const { text, sender, target } = req.body;

    // Vérifiez que les données nécessaires sont fournies
    if (!text || !sender || !target) {
      return res.status(400).json({ message: 'Invalid data provided' });
    }

    // Appeler le modèle pour créer l'enregistrement
    const newLetter = await LetterModel.create({ text, sender, target });

    // Retourner la réponse
    res.status(201).json(newLetter);
  } catch (error: Error | any) {
    console.error('Error creating letter:', error.message);
    res.status(500).json({ message: 'Failed to create letter', error: error.message });
  }
};
