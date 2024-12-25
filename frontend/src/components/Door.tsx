import React from 'react';
import '../styles/door.css';

interface DoorProps {
  isVisible: boolean;
  onClick?: () => void;
}

const Door: React.FC<DoorProps> = ({ isVisible, onClick }) => {
  return (
    <div
      className={`door ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
    >
      <div className="door-window"></div>
      <div className="door-handle"></div>
    </div>
  );
};

export default Door;
