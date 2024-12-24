import React from 'react';
import '../styles/KnockText.css';

interface KnockTextProps {
  isVisible: boolean;
  message: string;
  className?: string;
}

const KnockText: React.FC<KnockTextProps> = ({ isVisible, message, className }) => {
  return (
    isVisible && (
      <div className={`knock-text ${className || ''}`}>
        {message}
      </div>
    )
  );
};

export default KnockText;
