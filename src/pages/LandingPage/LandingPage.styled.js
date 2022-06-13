// 이미지 소스: https://www.mariomayhem.com/downloads/images/super_mario_3.php
// 이미지 소스: https://greghub.github.io/coloron/public/svg/clouds.svg
// 이미지 소스: https://codepen.io/josfabre/pen/OJOWdVE

import styled from 'styled-components';

export const Wrapper = styled.div`
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

  width: 100vw;
  height: 100vh;
  position: relative;
  padding-top: 70px;
  overflow: hidden;
  background: linear-gradient(137deg, #c6e4e4, #84a6d5, #fecbb2, #f0f0f0);
  background-size: 800% 800%;
  background-attachment: fixed;

  -webkit-animation: wave 8s ease-in infinite;
  -moz-animation: wave 8s ease-in infinite;
  -o-animation: wave 8s ease-in infinite;
  animation: wave 8s ease-in infinite;
`;

export const UpperClouds = styled.div`
  @keyframes floating {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(8px, 8px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  width: 100vw;
  height: 70px;
  background: url(https://greghub.github.io/coloron/public/svg/clouds.svg);
  background-position-x: 0px;
  animation: floating 4s ease infinite alternate;
  z-index: 10;
`;

export const LowerClouds = styled.div`
  @keyframes floating {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(8px, -8px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  width: 100vw;
  height: 150px;
  margin-top: 10px;
  background: url(https://greghub.github.io/coloron/public/svg/clouds.svg);
  background-position-x: 270px;
  animation: floating 4s ease infinite alternate-reverse;
  z-index: 10;
`;

export const SunOuterWrapper = styled.div`
  position: absolute;
  left: 8%;
  top: 50px;
  width: 100px;
  height: 100px;
`;

export const SunInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SunCoreColor = styled.div(
  ({ width, height, bgColor, zIndex }) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: ${width}px;
  height: ${height}px;
  background-color: ${bgColor};
  z-index: ${zIndex};
`
);

export const GroundWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: auto;
`;

export const ObjOuterWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const ObjLeftWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: baseline;
`;

export const ObjRightWrapper = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: baseline;
`;

export const DrainBlockHigh = styled.div`
  width: 50px;
  height: 48px;
  margin-right: 10px;
  background-image: url('../../../img/drain.png');
`;

export const DrainBlockLow = styled.div`
  width: 50px;
  height: 40px;
  margin-right: 10px;
  background-image: url('../../../img/drain.png');
`;

export const KupaBlock = styled.div`
  width: 90px;
  height: 100px;
  margin: 0 10px;
  background-image: url('../../../img/kupa.gif');
  background-size: 90px 100px;
`;

export const GreenPlantBlock = styled.div`
  width: 50px;
  height: 70px;
  background-image: url('../../../img/greenplant.gif');
  background-size: 50px 70px;
`;

export const MarioBlock = styled.div`
  width: 40px;
  height: 60px;
  margin: 0 10px;
  background-image: url('../../../img/mario.gif');
  background-size: 40px 60px;
`;

export const RedPlantBlock = styled.div`
  width: 40px;
  height: 60px;
  margin-right: 10px;
  background-image: url('../../../img/redplant.gif');
  background-size: 40px 60px;
`;

export const GrassBlock = styled.div`
  width: 100%;
  height: 32px;
  background-image: url('../../../img/grass.png');
`;

export const GroundBlock = styled.div`
  width: 100%;
  height: 32px;
  background-image: url('../../../img/ground.png');
`;
