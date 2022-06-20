import {
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
} from './AnimationFooter.styled';

export default function AnimationFooter() {
  return (
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
  );
}
