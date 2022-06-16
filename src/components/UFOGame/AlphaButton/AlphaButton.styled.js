import styled from 'styled-components';

import '../../../styles/font.scss';

export const Button = styled.button(
  ({ clicked }) => `
  font-family: 'DungGeunMo';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 38px;
  border-radius: 8px;
  background-color: ${clicked ? 'gray' : '#fff'};
  padding-bottom: 5px;
  color: #000;
  font-weight: 500;
  font-size: 35px;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: ${clicked ? 'translateY(0px)' : 'translateY(5px)'};
  }
`
);
