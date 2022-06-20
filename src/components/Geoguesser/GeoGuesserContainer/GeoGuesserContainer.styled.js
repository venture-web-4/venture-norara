import styled from 'styled-components';

import '../../../styles/font.scss';

export const OuterWrapper = styled.div`
  font-family: 'DungGeunMo';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const FlexBoxWrapper = styled.div`
  width: auto;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
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
  width: 400px;
  height: 300px;
  background-image: url('../../../img/ufo6.png');
  background-size: 400px 300px;
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
