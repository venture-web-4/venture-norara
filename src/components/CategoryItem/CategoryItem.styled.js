import styled from 'styled-components';

import '../../styles/font.scss';

export const Wrapper = styled.div(
  ({ bgImg, bgSize }) => `
  font-weight: 600;
  font-family: 'DungGeunMo';
  margin-right: 20px;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: #fff;
  padding: 20px;
  box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.15);
  background-image: url('../../../img/ground.png');
  background-size: 35px 35px;
  border:8px solid #fff;

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    @keyframes upDown {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, -13px);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    cursor: pointer;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), ${
      bgImg ? `url(${bgImg})` : `url('../../../img/ground.png')`
    };
    background-size: ${bgSize ?? '35px 35px'};
    animation: upDown 1s linear infinite;
  }
`
);

export const Title = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 27px;
`;

export const Desc = styled.div`
  text-align: center;
  font-size: 15px;
`;
