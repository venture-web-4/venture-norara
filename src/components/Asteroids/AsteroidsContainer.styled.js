import styled from 'styled-components';

import '../../styles/font.scss';

export const OuterWrapper = styled.div`
  font-family: 'DungGeunMo';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @-webkit-keyframes wave {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes wave {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-o-keyframes wave {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes wave {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background: linear-gradient(137deg, #c6e4e4, #84a6d5, #fc8d9c);
  background-size: 800% 800%;

  -webkit-animation: wave 8s ease infinite;
  -moz-animation: wave 8s ease infinite;
  -o-animation: wave 8s ease infinite;
  animation: wave 8s ease infinite;
`;

export const KeyWrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  width: 500px;
`;

export const GameKeyDescription = styled.div`
  font-size: 20px;
  margin-left: 15px;
`;

export const MouseWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const MouseImg = styled.div`
  width: 30px;
  height: 25px;
  background-image: url('../../../img/mouse.png');
  background-size: 30px 25px;
`;

export const KeyboardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const KeyboardImg = styled.div`
  width: 30px;
  height: 35px;
  background-image: url('../../../img/keyboard.png');
  background-size: 30px 35px;
`;

export const MinorDescription = styled.div``;
