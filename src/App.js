import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LandingCategoryPage from './pages/LandingCategoryPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/category' element={<LandingCategoryPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
