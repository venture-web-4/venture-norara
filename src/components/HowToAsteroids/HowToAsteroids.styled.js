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

export const Wrapper = styled.div`
  width: 950px;
  min-width: 950px;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 3px 30px 7px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  padding: 40px;
`;

export const Title = styled.div`
  font-size: 35px;
`;

export const SubTitle = styled.div`
  font-size: 27px;
`;

export const MuskGameWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const MuskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  height: auto;
`;

export const MuskImg = styled.div`
  width: 180px;
  height: 160px;
  background-image: url('../../../img/musk.png');
  background-size: 180px 160px;
  border-radius: 50%;
`;

export const MuskDescriptionWrapper = styled.div`
  margin-top: 20px;
  background-color: #e2e2e2;
  padding: 20px;
  border-radius: 20px;
  color: #333333;
`;

export const MuskDescription = styled.div`
  font-size: 17px;
  line-height: 30px;
`;

export const GameHowtoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const GameDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GameDescriptionTitle = styled.div`
  line-height: 50px;
  font-size: 30px;
`;

export const GameDescriptionSubTitle = styled.div`
  line-height: 50px;
  font-size: 23px;
  margin-bottom: 10px;
`;

export const GameDescription = styled.div`
  line-height: 30px;
  font-size: 17px;
  color: #a5a5a5;
`;

export const GameKeyDescriptionWrapper = styled.div`
  margin-top: 20px;
`;

export const GameKeyDescription = styled.div`
  font-size: 20px;
  margin-left: 15px;
`;

export const MouseWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MouseImg = styled.div`
  width: 45px;
  height: 43px;
  background-image: url('../../../img/mouse.png');
  background-size: 45px 43px;
`;

export const KeyboardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const KeyboardImg = styled.div`
  width: 45px;
  height: 50px;
  background-image: url('../../../img/keyboard.png');
  background-size: 45px 50px;
`;

export const MinorDescription = styled.div`
  margin-top: 10px;
`;

export const Button = styled.div`
  background-image: url('../../../img/ground.png');
  width: auto;
  height: 44px;
  box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  &:hover {
    transform: translateY(3px);
    box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.15);
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../../../img/grass.png');
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;