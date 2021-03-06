// img source: https://www.mariomayhem.com/downloads/images/super_mario_3.php
// img source: https://greghub.github.io/coloron/public/svg/clouds.svg
// img source: https://codepen.io/josfabre/pen/OJOWdVE

import styled from 'styled-components';

export const OuterWrapper = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 2s;
`;

export const Wrapper = styled.div(
  ({ paddingTop }) => `
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
  padding-top: ${paddingTop || 0}px;
  overflow: hidden;
  background: linear-gradient(137deg, #c6e4e4, #84a6d5, #fc8d9c);
  background-size: 800% 800%;
  background-attachment: fixed;

  -webkit-animation: wave 8s ease infinite;
  -moz-animation: wave 8s ease infinite;
  -o-animation: wave 8s ease infinite;
  animation: wave 8s ease infinite;
`
);

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
  background-image: url(https://greghub.github.io/coloron/public/svg/clouds.svg);
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
