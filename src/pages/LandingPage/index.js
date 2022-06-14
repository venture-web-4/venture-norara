import LandingHeader from '../../components/LandingHeader';
import AnimationFooter from '../../components/AnimationFooter';

import {
  Wrapper,
  UpperClouds,
  LowerClouds,
  SunOuterWrapper,
  SunInnerWrapper,
  SunCoreColor,
  OuterWrapper,
} from './LandingPage.styled';

export default function LandingPage() {
  return (
    <OuterWrapper>
      <Wrapper paddingTop={70}>
        <LandingHeader />

        <SunOuterWrapper>
          <SunInnerWrapper>
            <SunCoreColor
              width={60}
              height={60}
              bgColor={'rgb(255, 223, 63)'}
              zIndex={5}
            />
            <SunCoreColor
              width={90}
              height={90}
              bgColor={'rgb(247, 224, 111, 0.4)'}
              zIndex={4}
            />
            <SunCoreColor
              width={120}
              height={120}
              bgColor={'rgb(252, 239, 174, 0.2)'}
              zIndex={3}
            />
          </SunInnerWrapper>
        </SunOuterWrapper>

        <UpperClouds />
        <LowerClouds />

        <AnimationFooter />
      </Wrapper>
    </OuterWrapper>
  );
}
