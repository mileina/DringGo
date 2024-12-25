import React, { useState, useEffect } from 'react';
import letterService from '../api/letterService';
import '../styles/letter.css';

interface LetterMessageProps {
  isVisible: boolean;
  letterId: number;
}

const LetterMessage: React.FC<LetterMessageProps> = ({ isVisible, letterId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageData, setMessageData] = useState<{
    sender?: string;
    target?: string;
    text?: string;
  } | null>(null);

  useEffect(() => {
    if (isVisible && letterId) {
      const fetchLetterData = async () => {
        try {
          const data = await letterService.getLetterById(letterId);
          if (data) {
            setMessageData(data);
          } else {
            setMessageData({ sender: 'Ape', target: 'Mil', text: 'Pas d\'argent mais joyeux Noël ! 🎄🎁' });
          }
        } catch (error) {
          console.error('Failed to fetch letter data:', error);
          setMessageData({ sender: 'Ape', target: 'Mil', text: 'Pas d\'argent mais joyeux Noël ! 🎄🎁' });
        }
      };

      fetchLetterData();
    }
  }, [isVisible, letterId]);

  if (!isVisible) return null;

  const handleLetterClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="letter-message" onClick={handleLetterClick}>
      <div className={`letter-content ${isOpen ? 'open' : ''}`}>
        {messageData ? (
          <>
            <h1>{messageData.target}</h1>
            <p className="text">{messageData.text}</p>
            <p className="sender">{messageData.sender}</p>
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
      <div className="envelopeHome"></div>
    </div>
  );
};

export default LetterMessage;