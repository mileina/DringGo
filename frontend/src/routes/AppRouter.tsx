import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateLetterForm from '../page/CreateLetterForm';
import HomePage from '../page/Home';
import LetterPage from '../page/LetterPage';
import NotFoundPage from '../page/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/letter/:id" element={<LetterPage />} />
        <Route path="/letter/add" element={<CreateLetterForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
