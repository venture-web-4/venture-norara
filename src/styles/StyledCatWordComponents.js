import styled, { keyframes } from 'styled-components';

const dancingCat = keyframes`
  0% {
    padding-bottom: 0px;
  }
  50% {
    padding-bottom: 10px;
  }
  100% {
    padding-bottom:0px;
  }
`;

export const StyledCat = styled.img`
  width: 300px;
  height: 300px;
  animation: ${dancingCat} 1s 1s infinite linear alternate;
  background-color: white;
`;

export const StyledBalloon = styled.div`
  width: 300px;
  height: auto;
  background-color: #fff222;
  color: black;
  border-radius: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledGameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 700px;
  height: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 30px;
`;

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledStatusBar = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 100px;
  text-align: center;
  border-radius: 10px;
`;

export const StyledBarWrapper = styled.div`
  display:flex;
  flex-direction:row;
`

export const StyledGameBoard = styled.div`
  background:#ff24f3;
  height: 300px;
  border-radius: 30px;
`