import styled from 'styled-components';

import '../../../styles/font.scss';

export const Button = styled.button`
  margin: 10px 0 10px 0;
  background-color: #90a099;
  padding: 5px 20px;
  border-radius: 20px;
  color: #fff;
  box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(3.5px);
  }
`;
