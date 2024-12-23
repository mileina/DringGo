import React from 'react';
import '../styles/door.css';

interface DoorProps {
  isOpen: boolean;
}

const Door: React.FC<DoorProps> = ({ isOpen }) => {
  return (
    <div className={`door ${isOpen ? 'open' : ''}`}>
      <div className="door-left"></div>
      <div className="door-right"></div>
    </div>
  );
};

export default Door;
