import { Router } from 'express';
import userRoutes from './letter.routes';

const router = Router();

// Ajouter des sous-routes
router.use('/letter', userRoutes);

export default router;
