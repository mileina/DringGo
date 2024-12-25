import React, { useEffect, useState } from 'react';
import truckImage from '../assets/truck.png';
import backgroundImage from '../assets/background.jpg';
import tocSound from '../assets/toc.mp3';
import Door from './Door';
import DeliveryPerson from './DeliveryPerson';
import KnockText from './KnockText';
import LetterMessage from './LetterMessage';
import Snowfall from 'react-snowfall';
import logo from '../assets/logo.png';
import '../styles/Truck.css';
import { useParams } from 'react-router-dom';

interface TruckProps {
  isStopped: boolean;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Truck: React.FC<TruckProps> = ({ isStopped }) => {
  const [showDoor, setShowDoor] = useState(false);
  const [showDeliveryPerson, setShowDeliveryPerson] = useState(false);
  const [showClickMessage, setShowClickMessage] = useState(false);
  const [showTocMessage, setShowTocMessage] = useState(false);
  const [showLetterMessage, setShowLetterMessage] = useState(false);
  const [truckReturn, setTruckReturn] = useState(false);
  const [finishRoute, setFinishRoute] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [letterId, setLetterId] = useState<number | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      setLetterId(parseInt(id, 10));
    }
  }, [id]);

  const handleDoorClick = () => {
    if (!isAnimationComplete) return;
    setShowClickMessage(false);
    setShowTocMessage(false);
    setShowLetterMessage(true);
    setShowDoor(false);
    setShowDeliveryPerson(false);
    setTruckReturn(true);
  };

  useEffect(() => {
    if (truckReturn) {
      const timer = setTimeout(() => setFinishRoute(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [truckReturn]);

  useEffect(() => {
    let isCancelled = false;
    if (isStopped) {
      setIsAnimationComplete(false);
      (async () => {
        await delay(2500);
        if (isCancelled) return;
        setShowDoor(true);
        await delay(500);
        if (isCancelled) return;
        setShowDeliveryPerson(true);
        if (isCancelled) return;

        const audio = new Audio(tocSound);
        audio.addEventListener('ended', () => {
          if (!isCancelled) {
            setIsAnimationComplete(true);
          }
        });
        audio.play();
        await delay(1000);
        setShowTocMessage(true);
        await delay(3000);
        setShowClickMessage(true);
      })();
    } else {
      setShowDoor(false);
      setShowDeliveryPerson(false);
      setShowClickMessage(false);
      setShowTocMessage(false);
      setShowLetterMessage(false);
      setTruckReturn(false);
      setFinishRoute(false);
      setIsAnimationComplete(false);
    }
    return () => {
      isCancelled = true;
    };
  }, [isStopped]);

  return (
    <div
      className="truck-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!showDoor && (
        <div
          className="truck-container"
          style={{
            left: finishRoute
              ? '-300px'
              : truckReturn
              ? '50%'
              : isStopped
              ? '50%'
              : '100vw',
            opacity: isStopped || truckReturn ? 1 : 0,
            transition: 'left 2s linear, opacity 1s linear',
            position: 'absolute',
          }}
        >
          <img src={truckImage} alt="Truck" className="truck" />
          <div
            className={`wheel wheel-front ${
              !isStopped && !finishRoute && !truckReturn ? 'rolling' : ''
            }`}
          />
          <div
            className={`wheel wheel-back ${
              !isStopped && !finishRoute && !truckReturn ? 'rolling' : ''
            }`}
          />
        </div>
      )}

      {showDoor && <Door isVisible={showDoor} onClick={handleDoorClick} />}
      {showDeliveryPerson && <DeliveryPerson isVisible={showDeliveryPerson} />}
      {showClickMessage && <KnockText isVisible message="Cliquez sur la porte" />}
      {showTocMessage && <KnockText isVisible message="Toc Toc !" className="toc" />}

      {showLetterMessage && (
        <>
          <LetterMessage
            isVisible
            letterId={letterId ?? 0}
          />
          <Snowfall
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            snowflakeCount={200}
          />
        </>
      )}

      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Logo" className="footer-logo" />
          <span>
            by{' '}
            <a
              href="https://www.linkedin.com/in/pinya-meas-a3b70a133/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mil
            </a>{' '}
            &{' '}
            <a
              href="https://www.linkedin.com/in/favareille/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ape
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Truck;
