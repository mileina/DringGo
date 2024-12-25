import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api' // URL du backend en local
    : 'https://dringgo-backend.onrender.com/api', // URL du backend déployé
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteurs pour gérer les erreurs globales (optionnel)
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
