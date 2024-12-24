import { Router } from 'express';
import { generateShortUrl, resolveShortUrl } from '../controllers/shortUrl.controller';

const router = Router();

// Endpoint pour générer un short URL
router.post('/:letterId/short-url', generateShortUrl);

// Endpoint pour résoudre un short URL
router.get('/:shortCode', resolveShortUrl);

export default router;
