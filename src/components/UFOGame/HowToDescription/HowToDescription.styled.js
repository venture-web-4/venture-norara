import styled from 'styled-components';

import '../../../styles/font.scss';

export const Wrapper = styled.div`
  padding: 20px 50px 15px;
  width: 100%;
  height: calc(100% - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  width: 400px;
  height: 300px;
  background-image: url('../../../img/ufo6.png');
  background-size: 400px 300px;
`

export const RuleWrapper = styled.div`
  width: calc(100% - 400px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Rule = styled.div`
  font-size: 20px;
  margin: 15px 0;
  font-weight: 600;
`;
