import AnimationFooter from '../../components/AnimationFooter';
import Category from '../../components/Category';
import Gnb from '../../components/Gnb';

import { Wrapper } from '../Landing/Landing.styled';

export default function LandingCategory() {
  return (
    <Wrapper paddingTop={0}>
      <Gnb />
      <Category />
      <AnimationFooter />
    </Wrapper>
  );
}
