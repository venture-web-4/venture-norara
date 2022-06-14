import AnimationFooter from '../../components/AnimationFooter';
import Gnb from '../../components/Gnb';

import { Wrapper } from '../Landing/Landing.styled';

export default function LandingCategory() {
  return (
    <Wrapper paddingTop={0}>
      <Gnb />
      <AnimationFooter />
    </Wrapper>
  );
}
