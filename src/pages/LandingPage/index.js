import {
  Wrapper,
  UpperClouds,
  LowerClouds,
  SunOuterWrapper,
  SunInnerWrapper,
  GroundWrapper,
  GroundBlock,
  GrassBlock,
  DrainBlockHigh,
  DrainBlockLow,
  ObjOuterWrapper,
  ObjLeftWrapper,
  ObjRightWrapper,
  KupaBlock,
  GreenPlantBlock,
  RedPlantBlock,
  MarioBlock,
  SunCoreColor,
} from './LandingPage.styled';
import LandingHeader from '../../components/LandingHeader';

export default function LandingPage() {
  return (
    <Wrapper>
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

      <GroundWrapper>
        <ObjOuterWrapper>
          <ObjLeftWrapper>
            <DrainBlockHigh />
            <DrainBlockLow />
            <MarioBlock />
          </ObjLeftWrapper>

          <ObjRightWrapper>
            <KupaBlock />
            <RedPlantBlock />
            <GreenPlantBlock />
          </ObjRightWrapper>
        </ObjOuterWrapper>

        <GrassBlock />
        <GroundBlock />
        <GroundBlock />
        <GroundBlock />
      </GroundWrapper>
    </Wrapper>
  );
}
