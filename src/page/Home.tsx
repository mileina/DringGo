import React, { useState } from 'react';
import Truck from '../components/Truck';

const Home: React.FC = () => {
  const [isStopped, setIsStopped] = useState(false);

  const handleTruckStop = () => {
    setIsStopped(true);
  };

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
