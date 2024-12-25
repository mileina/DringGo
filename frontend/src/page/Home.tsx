import React, { useEffect, useState, useRef } from 'react';
import Truck from '../components/Truck';

const Home: React.FC = () => {
  const [isStopped, setIsStopped] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleTruckStop = () => {
    setIsStopped(true);
  };
  /*
  useEffect(() => {
    // Simuler un clic sur le bouton après 2 secondes
    const timer = setTimeout(() => {
      buttonRef.current?.click();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);*/

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      <Truck isStopped={isStopped} />
      <button
        ref={buttonRef}
        onClick={handleTruckStop}
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          padding: '10px 20px',
          fontSize: 'clamp(12px, 2vw, 16px)',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Démarrer Animation
      </button>
    </div>
  );
};

export default Home;
