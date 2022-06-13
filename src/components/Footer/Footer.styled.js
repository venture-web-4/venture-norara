import styled from 'styled-components';

export const OuterWrapper = styled.div`
  height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 32px;
  background-image: url('../../../img/grass.png');
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  padding-top: 16px;
  position: fixed;
  bottom: 0;
`;
