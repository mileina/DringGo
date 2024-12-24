import { Router } from 'express';
import { createLetter, getOneLetter } from '../controllers/letter.controller';

const router = Router();

// Récupération d'une lettre par ID
router.get('/:id', getOneLetter); // L'ID est un paramètre dynamique

// Création d'une lettre
router.post('/', createLetter); // La création n'a pas besoin d'un ID dans l'URL

// Recupérer toutes les lettres
router.get('/', createLetter);

export default router;
