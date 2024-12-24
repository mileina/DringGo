import React from 'react';
import '../styles/Door.css';

interface DoorProps {
  isVisible: boolean;
}

const Door: React.FC<DoorProps> = ({ isVisible }) => {
  return (
    <div className={`door ${isVisible ? 'visible' : 'hidden'}`}></div>
  );
};

export default Door;
