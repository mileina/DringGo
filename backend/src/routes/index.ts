import { Router } from 'express';
import userRoutes from './letter.routes';
import shortUrlRoutes from './shortUrl.routes';

const router = Router();

// Ajouter des sous-routes
router.use('/letter', userRoutes);
router.use('/short-url', shortUrlRoutes); // Routes pour les short URLs

export default router;
