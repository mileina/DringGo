import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173', // Autorise uniquement le frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Autorise les cookies
};

export default cors(corsOptions);