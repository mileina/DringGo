import React from 'react';
import '../styles/delivery-person.css';

interface DeliveryPersonProps {
  isWalking: boolean;
}

const DeliveryPerson: React.FC<DeliveryPersonProps> = ({ isWalking }) => {
  return (
    <div className={`delivery-person ${isWalking ? 'walking' : ''}`}></div>
  );
};

export default DeliveryPerson;
