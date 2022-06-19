import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import LandingCategory from './pages/LandingCategory';
import NotFound from './pages/NotFound';
import UFOGame from './pages/UFOGame';
import GeoGuesser from './pages/GeoGuesser';
import Asteroids from "./pages/Asteroids";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/category' element={<LandingCategory />} />
        <Route path='/ufogame' element={<UFOGame />} />
        <Route path='/geoguesser' element={<GeoGuesser />} />
        <Route path='/asteroids' element={<Asteroids />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}
