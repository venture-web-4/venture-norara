import styled from 'styled-components';

import '../../../styles/font.scss';

export const OuterWrapper = styled.div`
  font-family: 'DungGeunMo';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 1000px;
  min-width: 1000px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 3px 30px 7px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  padding: 30px;
`;

export const HowToButton = styled.button`
  margin: 10px 0 20px 0;
  background-color: #90a099;
  padding: 0 10px;
  border-radius: 20px;
  color: #fff;
  box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(3.5px);
  }
`;

export const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
