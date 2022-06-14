import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import LandingCategory from './pages/LandingCategory';
import NotFound from './pages/NotFound';
import UFOGame from './pages/UFOGame';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/category' element={<LandingCategory />} />
        <Route path='/ufogame' element={<UFOGame />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}
