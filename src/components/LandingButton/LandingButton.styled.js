import styled from 'styled-components';
import '../../styles/font.scss';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 100px;
  box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease 0s;
  background-image: url('../../../img/ground.png');
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  font-family: 'TTTogether';
  padding: 15px 40px;
  font-weight: 600;
  font-size: 20px;
  margin-top: 50px;
  cursor: pointer;
  outline: none;
  width: auto;
  height: auto;
  color: #fff;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../../../img/grass.png');
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  }
`;
