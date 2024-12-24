import React, { useEffect, useState } from 'react';
import truckImage from '../assets/truck.png';
import Door from './Door';
import DeliveryPerson from './DeliveryPerson';
import '../styles/Truck.css';

interface TruckProps {
  isStopped: boolean;
}

const Truck: React.FC<TruckProps> = ({ isStopped }) => {
  const [showDoor, setShowDoor] = useState(false);
  const [showDeliveryPerson, setShowDeliveryPerson] = useState(false);

  useEffect(() => {
    if (isStopped) {
      const doorTimer = setTimeout(() => setShowDoor(true), 2000); // Affiche la porte après 2 secondes
      const personTimer = setTimeout(() => setShowDeliveryPerson(true), 3000); // Affiche le livreur après 3 secondes

      return () => {
        clearTimeout(doorTimer);
        clearTimeout(personTimer);
      };
    } else {
      setShowDoor(false);
      setShowDeliveryPerson(false);
    }
  }, [isStopped]);

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
      {showDoor && <Door isVisible={showDoor} />}
      {showDeliveryPerson && <DeliveryPerson isVisible={showDeliveryPerson} />}
    </div>
  );
};

export default Truck;
