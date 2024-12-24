import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateLetterForm from '../page/CreateLetterForm';
import HomePage from '../page/Home';
import ResolveShortUrl from '../page/ResolveShortUrl';
import NotFoundPage from '../page/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateLetterForm />} />
        <Route path="/letter/:id" element={<HomePage />} />
        {/*<Route path="/letter/add" element={<CreateLetterForm />} />*/}
        <Route path="/short-url/:shortCode" element={<ResolveShortUrl />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
