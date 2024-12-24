import axiosClient from './axiosClient';

export interface Letter {
    id?: number;
    text: string;
    sender: string;
    target: string;
}

const letterService = {
    // Obtenir une lettre par ID
    getLetterById: async (id: number): Promise<Letter | undefined> => {
        try {
            const res = await axiosClient.get(`/letter/${id}`);
            return res.data;
        } catch (error) {
            handleError(error);
            return undefined;
        }
    },

    // Créer une lettre
    createLetter: async (letter: Letter): Promise<Letter | undefined> => {
        try {
            const res = await axiosClient.post('/letter', letter);
            return res.data;
        } catch (error) {
            handleError(error);
            return undefined;
        }
    },

    // Obtenir toutes les lettres (si nécessaire)
    getAllLetters: async (): Promise<Letter[] | undefined> => {
        try {
            const res = await axiosClient.get('/api/letter');
            return res.data;
        } catch (error) {
            handleError(error);
        }
    },
};

const handleError = (error: Error | any) => {
    switch (error.response.status) {
        case 400:
            console.error('Invalid data');
            break;
        case 404:
            console.error('Letter not found');
            break;
        default:
            console.error('Failed to fetch letter', error.message);
    }
}


export default letterService;
