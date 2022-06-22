import styled, { keyframes } from 'styled-components';
import '../../styles/font.scss';

const dancingCat = keyframes`
  0% {
    padding-bottom: 0px;
    padding-right: 5px;
  }
  50% {
    padding-bottom: 10px;
    padding-left: 5px;
  }
  100% {
    padding-bottom:0px;
  }
`;

export const StyledCat = styled.img`
  width: 300px;
  height: 300px;
  animation: ${dancingCat} 0.2s 1s infinite linear alternate;
  background-color: white;
  cursor: grab;
  user-select: none;
`;

export const StyledMeow = styled.div`
  width: 80%;
  border: 2px solid black;
  color: black;
  border-radius: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  font-size: 13px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledGameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  min-width: 600px;
  height: 70%;
  padding: 30px;
  border-radius: 30px;
  /* background-color: rgba(10, 170, 150, 0.3); */
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 3px 30px 7px rgba(0, 0, 0, 0.08);
`;

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: DungGeunMo;

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

export const Title = styled.div`
  font-size: 35px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0 10px;
  border-radius: 10px;
`;

export const StyledStatusBar = styled.div`
  padding: 10px;
  width: auto;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  color: ${props => props['color']};
`;

export const StyledBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledGameBoard = styled.div`
  border: 2px solid black;
  height: 300px;
  width: 100%;
  border-radius: 30px;
  overflow-y: scroll;
  padding: 20px;
  margin-bottom: 10px;
`;

export const StyledWordInput = styled.input`
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 5px;
  padding-left: 10px;
  width: 80%;
`;

export const StyledInputButton = styled.button`
  margin-left: 5px;
  padding: 0 5px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: green;
  color: white;
  width: fit-content;
  &:hover {
    background-color: orange;
  }
`;
export const StyledGameWrapperPart = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const StyledGameLine = styled.div`
  color: ${props => props.color || 'black'};
  margin: 10px 0;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
