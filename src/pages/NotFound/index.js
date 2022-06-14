import AnimationFooter from '../../components/AnimationFooter';
import LandingButton from '../../components/LandingButton';

import { Wrapper } from '../Landing/Landing.styled';
import {
  NotFoundWrapper,
  TitleOuterWrapper,
  TitleWrapper,
  SubTitleWrapper,
} from './NotFound.styled';

export default function NotFound() {
  return (
    <Wrapper>
      <NotFoundWrapper>
        <TitleOuterWrapper>
          <TitleWrapper>{'404 :('}</TitleWrapper>
          <SubTitleWrapper>
            {'요청하신 페이지를 찾을 수 없습니다.'}
          </SubTitleWrapper>
        </TitleOuterWrapper>
        <LandingButton text={'GO BACK'} />
      </NotFoundWrapper>
      <AnimationFooter />
    </Wrapper>
  );
}
