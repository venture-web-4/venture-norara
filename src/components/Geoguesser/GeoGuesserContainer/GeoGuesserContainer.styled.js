import styled from 'styled-components';

import '../../../styles/font.scss';

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

export const FlexBoxWrapper = styled.div`
  width: auto;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: end;
  background-color: #fff;
  box-shadow: 0px 3px 30px 7px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  padding: 30px;
  margin-top: 30px;
`;

export const FlexItemWrapper = styled.div`
  height: auto;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
  // border: 1px solid #000;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 640px;
  height: 480px;
  background-image: url('../../../img/mapsnap.png');
  background-size: 640px 480px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 15px;
  margin: 0 40px;
`;

export const TextWrapper = styled.div`
  width: 640px;
  height: 480px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;
