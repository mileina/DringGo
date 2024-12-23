interface LetterMessageProps {
  isVisible: boolean;
}

const LetterMessage: React.FC<LetterMessageProps> = ({ isVisible }) => {
  return (
    <div className={`letter ${isVisible ? 'visible' : ''}`}>
      <p>📄 Votre message est ici !</p>
    </div>
  );
};

export default LetterMessage;
