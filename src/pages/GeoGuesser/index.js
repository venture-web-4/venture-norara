import Footer from '../../components/Footer';
import Gnb from '../../components/Gnb';
import GeoGuesserContainer from '../../components/Geoguesser/GeoGuesserContainer'
import {} from './GeoGuesser.styled';

export default function GeoGuesser() {
  return (
    <>
      <Gnb />
      <GeoGuesserContainer />
      <Footer />
    </>
  );
}
