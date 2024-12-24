import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import letterService, { Letter } from '../api/letterService';

const LetterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<Letter | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      letterService
        .getLetterById(Number(id))
        .then((data) => {
          if (data) {
            setLetter(data);
          } else {
            setError('Letter not found');
          }
        })
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!letter) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Letter Details</h1>
      <p><strong>From:</strong> {letter.sender}</p>
      <p><strong>To:</strong> {letter.target}</p>
      <p><strong>Text:</strong> {letter.text}</p>
    </div>
  );
};

export default LetterPage;
