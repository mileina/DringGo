import React from 'react';
import truckImage from '../assets/truck.png';
import '../styles/Truck.css';

interface TruckProps {
  isStopped: boolean;
}

const Truck: React.FC<TruckProps> = ({ isStopped }) => {
  return (
    <div
      className="truck-container"
      style={{
        left: isStopped ? '50%' : '100vw',
        opacity: isStopped ? 1 : 0,
      }}
    >
      <img src={truckImage} alt="Truck" className="truck" />
      <div className={`wheel wheel-front ${!isStopped ? 'rolling' : ''}`}></div>
      <div className={`wheel wheel-back ${!isStopped ? 'rolling' : ''}`}></div>
    </div>
  );
};

export default Truck;
