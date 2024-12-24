import axiosClient from './axiosClient';

export interface ShortUrlResponse {
  shortCode: string;
}

const shortUrlService = {
  // Générer un short URL pour une lettre
  generateShortUrl: async (letterId: number): Promise<string | undefined> => {
    try {
      const res = await axiosClient.post<ShortUrlResponse>(`/short-url/${letterId}/short-url`);
      return res.data.shortCode;
    } catch (error) {
      handleError(error);
      return undefined;
    }
  },

  // Résoudre un short URL pour obtenir les données de la lettre
  resolveShortUrl: async (shortCode: string): Promise<any | undefined> => {
    try {
      const res = await axiosClient.get(`/short-url/${shortCode}`);
      return res.data;
    } catch (error) {
      handleError(error);
      return undefined;
    }
  },
};

const handleError = (error: Error | any) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.error('Invalid request');
        break;
      case 404:
        console.error('Short URL not found');
        break;
      default:
        console.error('An unexpected error occurred:', error.message);
    }
  } else {
    console.error('Network error:', error.message);
  }
};

export default shortUrlService;