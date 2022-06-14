import styled from 'styled-components';

import '../../../styles/font.scss';

export const Button = styled.button`
  font-family: 'DungGeunMo';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 38px;
  border-radius: 8px;
  background-color: #fff;
  padding-bottom: 5px;
  color: #000;
  font-weight: 500;
  font-size: 35px;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);

  &:hover {
    @keyframes keydown {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, -10px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
    animation: keydown 1s linear infinite;
  }
`;
