import { Routes, Route } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import Index from './pages/CatWord';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
