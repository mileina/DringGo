import React, { useState } from 'react';
import '../styles/letter.css';

interface LetterMessageProps {
  isVisible: boolean;
  message: string;
}

const LetterMessage: React.FC<LetterMessageProps> = ({ isVisible, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isVisible) return null;

  const handleLetterClick = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="letter-message" onClick={handleLetterClick}>
      <div className={`letter-content ${isOpen ? 'open' : ''}`}>
        <h1>Mil</h1>
        <p>{message}</p>
      </div>
      <div className="envelope"></div>
    </div>
  );
};

export default LetterMessage;
