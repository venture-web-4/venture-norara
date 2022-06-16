import styled from 'styled-components';

import '../../../styles/font.scss';

export const Button = styled.button`
  background-image: url('../../../img/ground.png');
  width: 138px;
  height: 44px;
  box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(3px);
    box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../../../img/grass.png');
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  }
`;
