import React, { useState } from 'react';
import letterService from '../api/letterService';

const CreateLetterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    text: '',
    sender: '',
    target: '',
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    letterService
      .createLetter(formData)
      .then(() => setMessage('Letter created successfully!'))
      .catch((err) => setMessage(`Error: ${err.message}`));
  };

  return (
    <div>
      <h2>Create Letter</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          From:
          <input type="text" name="sender" value={formData.sender} onChange={handleChange} />
        </label>
        <label>
          To:
          <input type="text" name="target" value={formData.target} onChange={handleChange} />
        </label>
        <label>
          Text:
          <input type="text" name="text" value={formData.text} onChange={handleChange} />
        </label>
        <button type="submit">Create Letter</button>
      </form>
    </div>
  );
};

export default CreateLetterForm;
