import AnimationFooter from '../../components/AnimationFooter';
import Gnb from '../../components/Gnb';

import { Wrapper } from '../LandingPage/LandingPage.styled';

export default function LandingCategoryPage() {
  return (
    <Wrapper paddingTop={0}>
      <Gnb />
      <AnimationFooter />
    </Wrapper>
  );
}
