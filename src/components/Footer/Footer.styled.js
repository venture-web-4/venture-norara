import styled from 'styled-components';

import '../../styles/font.scss';

export const OuterWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 32px;
  font-family: 'DungGeunMo';
  background-image: url('../../../img/grass.png');
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  padding-top: 16px;
  position: fixed;
  bottom: 0;
`;
