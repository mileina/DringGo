import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import letterService from '../api/letterService';
import shortUrlService from '../api/shortUrlService';
import Snowfall from 'react-snowfall';
import '../styles/letterForm.css';

const CreateLetterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    text: '',
    sender: '',
    target: '',
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [envelopeAnimating, setEnvelopeAnimating] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate();

  const handleHome = () => {
    setShowMessage(false);
    setFormData({ text: '', sender: '', target: '' });
    setShortUrl(null);
    setMessage(null);
    setIsAnimating(false);
    setEnvelopeAnimating(false);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Commence l'animation de la lettre
      setIsAnimating(true);
  
      // Attendez que l'animation de la lettre soit terminée
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      // Commence l'animation de l'enveloppe
      setEnvelopeAnimating(true);
  
      // Attendez que l'animation de l'enveloppe soit terminée
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      // Créez la lettre
      const response = await letterService.createLetter(formData);
      if (!response?.id) throw new Error("Failed to create letter");
  
      console.log(`Letter created with ID: ${response.id}`);
  
      // Générez le short URL
      const shortCode = await shortUrlService.generateShortUrl(response.id);
      if (!shortCode) throw new Error("Failed to generate short URL");
  
      const generatedShortUrl = `${window.location.origin}/short-url/${shortCode}`;
      setShortUrl(generatedShortUrl);
      console.log(`Short URL: ${generatedShortUrl}`);
  
      // Affichez le message final
      setShowMessage(true);
      setEnvelopeAnimating(false);
      setIsAnimating(false);
    } catch (err: any) {
      setMessage(err.message || "An unexpected error occurred.");
      setIsAnimating(false);
    }
  };

  return (
    <div className="background">
      <Snowfall />
      {!showMessage && (
        <div className={`letter-container ${isAnimating ? 'animating' : ''}`}>
          <h2>Envoyez votre lettre</h2>
          {message && <p className="message">{message}</p>}
          <form onSubmit={handleSubmit} className="letter-form">
            <div className="letter">
              <div className="letter-header">
                <label>
                  Par :
                  <input
                    type="text"
                    name="sender"
                    value={formData.sender}
                    onChange={handleChange}
                    placeholder="Entrez le nom de l'expéditeur"
                    required
                  />
                </label>
              </div>
              <div className="letter-body">
                <label>
                  Pour :
                  <input
                    type="text"
                    name="target"
                    value={formData.target}
                    onChange={handleChange}
                    placeholder="Entrez le nom du destinataire"
                    required
                  />
                </label>
                <label>
                  Message:
                  <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Entrez votre message"
                    required
                  />
                </label>
              </div>
              <div className="letter-footer">
                <button type="submit" className="submit-button" disabled={isAnimating}>
                  Envoyez sa lettre
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {isAnimating && (
        <div className={`envelope ${envelopeAnimating ? 'fly-away' : ''}`}></div>
      )}
      {showMessage && (
        <>
          <div className="message-container">
            <div className="message-box">
              <h2>Votre lettre a été créée !</h2>
              {shortUrl && (
                <>
                  <p>Voici votre lien court :</p>
                  <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                    {shortUrl}
                  </a>
                  <br />
                </>
              )}
              <button onClick={() => handleHome()} className="submit-button">
                Retour à l'accueil
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateLetterForm;