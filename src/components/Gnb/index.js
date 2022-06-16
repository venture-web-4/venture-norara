import { Link } from 'react-router-dom';
import {
  Wrapper,
  NavigatorWrapper,
  AuthWrapper,
  LandingWrapper,
  CategoryWrapper,
  SigninWrapper,
  SignupWrapper,
} from './Gnb.styled';

export default function Gnb() {
  return (
    <Wrapper>
      <NavigatorWrapper>
        <Link to='/'>
          <LandingWrapper>NORARA</LandingWrapper>
        </Link>
        <Link to='/category'>
          <CategoryWrapper>게임 선택하기</CategoryWrapper>
        </Link>
      </NavigatorWrapper>

      <AuthWrapper>
        {/* 회원가입, 로그인, 로그아웃 구현 */}
        <SignupWrapper>회원가입</SignupWrapper>
        <SigninWrapper>로그인</SigninWrapper>
      </AuthWrapper>
    </Wrapper>
  );
}
