import styled from 'styled-components';

import '../../styles/font.scss';

export const Wrapper = styled.div`
  z-index: 999999999;
  top: 0;
  color: #000;
  min-width: 500px;
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px 0 40px;
  background-color: #2f3640;
  box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.15);
`;

export const NavigatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingWrapper = styled.div`
  font-family: 'TTTogether';
  font-style: italic;
  color: #fff;
  font-weight: 600;
  font-size: 22px;
  margin-right: 30px;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

export const CategoryWrapper = styled.div`
  font-family: 'Y_Spotlight';
  color: #e5e5e5;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SigninWrapper = styled.div`
  margin-left: 30px;
  font-family: 'Y_Spotlight';
  color: #e5e5e5;
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
`;

export const SignupWrapper = styled.div`
  font-family: 'Y_Spotlight';
  color: #e5e5e5;
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
`;
