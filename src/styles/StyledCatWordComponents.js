import styled, { keyframes } from 'styled-components';

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
`;

export const StyledGameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 70%;
  background-color: white;
  padding: 30px;
  border-radius: 30px;
  justify-content: space-around;
`;

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(100, 190, 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledStatusBar = styled.div`
  padding: 10px;
  width: auto;
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
  border-radius: 30px;
  overflow: auto;
  padding: 20px;
  margin-bottom: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
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
