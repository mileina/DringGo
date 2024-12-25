import axios from 'axios';

// Utiliser la variable d'environnement définie dans vite.config.ts
const axiosClient = axios.create({
  baseURL: process.env.BASE_URL || '/api', // Utilise '/api' en local grâce au proxy
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteurs pour gérer les erreurs globales
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
