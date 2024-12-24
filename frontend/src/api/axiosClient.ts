import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api', // URL de base de votre backend
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
