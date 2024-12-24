import { Request, Response } from 'express';
import LetterModel from '../models/letter.model';

// Récupérer une lettre
export const getOneLetter = async (req: Request, res: Response) => {
  try {
    const letter = await LetterModel.getOne(Number(req.body.id));
    res.status(200).json(letter);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch letter'});
  }
};

// Créer une lettre
export const createLetter = async (req: Request, res: Response) => {
  try {
    const newLetter = await LetterModel.create(req.body);
    res.status(201).json(newLetter);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to create letter'});
  }
};