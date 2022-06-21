import styled from 'styled-components';

import '../../../styles/font.scss';

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
