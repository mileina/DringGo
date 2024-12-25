import React from 'react';
import deliveryPersonImage from '../assets/delivery-person.png';
import '../styles/delivery-person.css';

interface DeliveryPersonProps {
  isVisible: boolean;
  onClick?: () => void;
}

const DeliveryPerson: React.FC<DeliveryPersonProps> = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <img
      src={deliveryPersonImage}
      alt="Delivery Person"
      className={`delivery-person ${isVisible ? 'visible' : 'hidden'}`}
      onClick={onClick}
    />
  );
};

export default DeliveryPerson;
