import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import LandingCategory from './pages/LandingCategory';
import NotFound from './pages/NotFound';
import UFOGame from './pages/UFOGame';
import GeoGuesser from './pages/GeoGuesser';
import Asteroids from './pages/Asteroids';
import CatWord from './pages/CatWord';
import PreAsteroids from './pages/PreAsteroids';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/category' element={<LandingCategory />} />
        <Route path='/ufogame' element={<UFOGame />} />
        <Route path='/geoguesser' element={<GeoGuesser />} />
        <Route path='/asteroids' element={<Asteroids />} />
        <Route path='/catword' element={<CatWord />} />
        <Route path='/preasteroids' element={<PreAsteroids />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}
