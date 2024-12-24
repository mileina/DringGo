import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import shortUrlService from '../api/shortUrlService';

const ResolveShortUrl: React.FC = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolveUrl = async () => {
      try {
        if (!shortCode) throw new Error('Short code is missing');
        const letter = await shortUrlService.resolveShortUrl(shortCode);

        if (letter) {
          navigate(`/letter/${letter.id}`); // Redirige vers la lettre correspondante
        } else {
          setError('Short URL not found');
        }
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      }
    };

    resolveUrl();
  }, [shortCode, navigate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Resolving your short URL...</div>;
};

export default ResolveShortUrl;