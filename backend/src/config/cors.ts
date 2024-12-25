import cors from 'cors';

const corsOptions = {
  origin: 'https://dringgo-frontend.onrender.com', // Remplace par l'URL de ton frontend déployé
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Autorise les cookies
};

export default cors(corsOptions);
