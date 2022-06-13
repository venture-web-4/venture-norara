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
        <Announce>{'🕹 다양한 게임에 참여해 랭커가 되어보세요.💎'}</Announce>
      </AnnuonceWrapper>

      <ButtonWrapper>
        <LandingButton text={'GET STARTED'} />
      </ButtonWrapper>
    </Wrapper>
  );
}
