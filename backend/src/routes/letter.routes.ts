import { Router } from 'express';
import { createLetter, getOneLetter } from '../controllers/letter.controller';

const router = Router();

router.get('/', getOneLetter); // Récupération d'une lettres
router.post('/', createLetter); // Création d'une lettre

export default router;
