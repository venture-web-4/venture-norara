import LandingButton from '../LandingButton';
import {
  Announce,
  AnnuonceWrapper,
  ButtonWrapper,
  SubTitleWrapper,
  TitleOuterWrapper,
  TitleWrapper,
  Wrapper,
} from './LandingHeader.styled';

export default function LandingHeader() {
  return (
    <Wrapper>
      <TitleOuterWrapper>
        <SubTitleWrapper>{'심심할 때'}</SubTitleWrapper>
        <TitleWrapper>{'NORARA'}</TitleWrapper>
      </TitleOuterWrapper>

      <AnnuonceWrapper>
        <Announce>{'🕹 시간 순삭되는 다양한 게임에 참여해보세요.💎'}</Announce>
      </AnnuonceWrapper>

      <ButtonWrapper>
        <LandingButton text={'GET STARTED'} />
      </ButtonWrapper>
    </Wrapper>
  );
}
