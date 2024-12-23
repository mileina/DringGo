import React from 'react';
import truckImage from '../assets/truck.png';

interface TruckProps {
  isStopped: boolean;
}

const Truck: React.FC<TruckProps> = ({ isStopped }) => {
  return (
    <img
      src={truckImage}
      alt="Truck"
      style={{
        position: 'absolute',
        bottom: '30%',
        left: isStopped ? '50%' : '100vw',
        transform: 'translateX(-50%)',
        transition: 'left 2s ease, opacity 1s ease',
        opacity: isStopped ? 1 : 0,
        width: '30vw',
        maxWidth: '250px', 
        height: 'auto',
      }}
    />
  );
};

export default Truck;
