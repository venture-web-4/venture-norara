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

export const FlexBoxWrapper = styled.div`
  width: auto;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: end;
  background-color: #fff;
  box-shadow: 0px 3px 30px 7px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  padding: 30px;
`;

export const FlexItemWrapper = styled.div`
  height: auto;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
  // border: 1px solid #000;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 800px;
  height: 540px;
  background-image: url('../../../img/mapsnap.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextWrapper = styled.div`
  width: 800px;
  height: 540px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
