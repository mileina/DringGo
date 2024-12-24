const BITLY_API_URL = 'https://api-ssl.bitly.com/v4/shorten';
const BITLY_ACCESS_TOKEN = 'VOTRE_TOKEN_BITLY_ICI'; // Remplacez par votre token API Bitly

/**
 * Raccourcit une URL à l'aide de l'API Bitly.
 * @param longUrl - L'URL complète à raccourcir.
 * @returns L'URL raccourcie sous forme de chaîne de caractères.
 * @throws Une erreur si la création de l'URL échoue.
 */
export const shortenUrl = async (longUrl: string): Promise<string> => {
  try {
    const response = await fetch(BITLY_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        long_url: longUrl,
        domain: 'bit.ly',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Erreur Bitly: ${errorData.message || 'Impossible de raccourcir l\'URL'}`
      );
    }

    const data = await response.json();
    return data.link; // Retourne l'URL raccourcie
  } catch (error) {
    console.error('Erreur lors de la génération du short URL :', error);
    throw error;
  }
};
