import styled from 'styled-components';

import '../../styles/font.scss';

export const Wrapper = styled.div`
  font-family: 'DungGeunMo';
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  width: 300px;
  height: auto;
  padding: 0 10px;
  margin-bottom: 20px;
  font-size: 30px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 340px;
  height: 30px;
  padding: 0 10px;
  margin-bottom: 70px;
  font-size: 15px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ContentWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  width: auto;
  height: auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
`;
