import styled from 'styled-components';

import '../../../styles/font.scss';

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px 40px 20px 20px;
  border-radius: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
`;

export const ImgWrapper = styled.div`
  width: 240px;
  height: 400px;
  background-image: url('../../../img/mapsnap.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const RuleWrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 30px;
`;

export const Rule = styled.div`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 600;
  text-align: left;
`;
