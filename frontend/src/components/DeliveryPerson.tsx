import React from 'react';
import deliveryPersonImage from '../assets/delivery-person.png';
import '../styles/delivery-person.css';

interface DeliveryPersonProps {
  isVisible: boolean;
}

const DeliveryPerson: React.FC<DeliveryPersonProps> = ({ isVisible }) => {
  return (
    <img
      src={deliveryPersonImage}
      alt="Delivery Person"
      className={`delivery-person ${isVisible ? 'visible' : 'hidden'}`}
    />
  );
};

export default DeliveryPerson;
